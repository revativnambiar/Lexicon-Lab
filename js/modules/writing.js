/**
 * LEXICON LAB - Writing Studio Module
 * Aligned with Course Outcome CO1: English grammar and sentence formation
 */

class WritingStudio {
  constructor() {
    this.currentCategory = "essay";
    this.currentPrompt = null;
    this.analysisTimeout = null;
    this.activeDraftId = null;
  }

  init() {
    this.renderCategorySelector();
    this.loadCategoryPrompts();
    this.renderSavedDraftsList();
    this.attachEvents();
  }

  attachEvents() {
    // Editor input listener for live word count and analysis
    const editor = document.getElementById("writing-editor-textarea");
    if (editor) {
      editor.addEventListener("input", () => {
        this.updateEditorCounters();
        this.scheduleAnalysis();
      });
    }

    // Save Draft Button
    const saveBtn = document.getElementById("writing-save-btn");
    if (saveBtn) {
      saveBtn.addEventListener("click", () => this.saveCurrentDraft());
    }

    // Download TXT Button
    const downloadBtn = document.getElementById("writing-download-btn");
    if (downloadBtn) {
      downloadBtn.addEventListener("click", () => this.downloadAsTxt());
    }

    // Copy to Clipboard
    const copyBtn = document.getElementById("writing-copy-btn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => this.copyToClipboard());
    }

    // Insert Template Button
    const insertTemplateBtn = document.getElementById("writing-insert-template-btn");
    if (insertTemplateBtn) {
      insertTemplateBtn.addEventListener("click", () => this.insertCategoryTemplate());
    }

    // Clear Editor Button
    const clearBtn = document.getElementById("writing-clear-btn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => this.clearEditor());
    }

    // Category Selector Buttons
    document.querySelectorAll(".writing-cat-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        const catId = tab.getAttribute("data-cat-id");
        this.selectCategory(catId);
      });
    });

    // Custom prompt input
    const customPromptInput = document.getElementById("writing-custom-prompt-input");
    if (customPromptInput) {
      customPromptInput.addEventListener("change", (e) => {
        if (e.target.value.trim()) {
          this.currentPrompt = {
            id: "custom",
            title: e.target.value.trim(),
            prompt: e.target.value.trim(),
            suggestedWords: "Student-defined"
          };
          this.updatePromptDisplay();
        }
      });
    }
  }

  selectCategory(catId) {
    this.currentCategory = catId;
    document.querySelectorAll(".writing-cat-tab").forEach(tab => {
      tab.classList.toggle("active", tab.getAttribute("data-cat-id") === catId);
    });
    this.loadCategoryPrompts();
    this.renderCategoryTipsAndFormat();
  }

  renderCategorySelector() {
    this.renderCategoryTipsAndFormat();
  }

  loadCategoryPrompts() {
    const promptSelect = document.getElementById("writing-prompt-select");
    if (!promptSelect || !window.WRITING_DATA) return;

    const catData = window.WRITING_DATA.categories.find(c => c.id === this.currentCategory);
    if (!catData) return;

    promptSelect.innerHTML = catData.prompts.map(p => `
      <option value="${p.id}">${p.title} (${p.suggestedWords})</option>
    `).join("") + `<option value="custom">+ Type Custom Topic...</option>`;

    promptSelect.onchange = (e) => {
      const val = e.target.value;
      const customInputWrap = document.getElementById("custom-prompt-wrap");
      if (val === "custom") {
        if (customInputWrap) customInputWrap.classList.remove("hidden");
        const customInput = document.getElementById("writing-custom-prompt-input");
        if (customInput && customInput.value.trim()) {
          this.currentPrompt = {
            id: "custom",
            title: customInput.value.trim(),
            prompt: customInput.value.trim(),
            suggestedWords: "Student-defined"
          };
        }
      } else {
        if (customInputWrap) customInputWrap.classList.add("hidden");
        this.currentPrompt = catData.prompts.find(p => p.id === val);
      }
      this.updatePromptDisplay();
    };

    this.currentPrompt = catData.prompts[0];
    this.updatePromptDisplay();
  }

  updatePromptDisplay() {
    const descEl = document.getElementById("writing-prompt-desc");
    const titleInput = document.getElementById("writing-title-input");
    if (this.currentPrompt) {
      if (descEl) descEl.innerHTML = `<strong>Prompt:</strong> ${this.currentPrompt.prompt} <span class="badge badge-accent-sm">${this.currentPrompt.suggestedWords}</span>`;
      if (titleInput && (!titleInput.value || titleInput.value.startsWith("Title:"))) {
        titleInput.value = this.currentPrompt.title;
      }
    }
  }

  renderCategoryTipsAndFormat() {
    const catData = window.WRITING_DATA?.categories.find(c => c.id === this.currentCategory);
    if (!catData) return;

    const tipsContainer = document.getElementById("writing-tips-list");
    if (tipsContainer) {
      tipsContainer.innerHTML = catData.tips.map(tip => `
        <li class="writing-tip-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${tip}</span>
        </li>
      `).join("");
    }
  }

  insertCategoryTemplate() {
    const catData = window.WRITING_DATA?.categories.find(c => c.id === this.currentCategory);
    const editor = document.getElementById("writing-editor-textarea");
    if (!catData || !editor) return;

    if (editor.value.trim() && !confirm("Insert format template? This will replace your current editor content.")) {
      return;
    }

    editor.value = catData.template;
    this.updateEditorCounters();
    this.scheduleAnalysis();
    if (window.showToast) window.showToast(`Inserted ${catData.name} template skeleton!`, "info");
  }

  clearEditor() {
    const editor = document.getElementById("writing-editor-textarea");
    const titleInput = document.getElementById("writing-title-input");
    if (editor && confirm("Are you sure you want to clear your current draft?")) {
      editor.value = "";
      if (titleInput) titleInput.value = "";
      this.activeDraftId = null;
      this.updateEditorCounters();
      this.runAnalysisNow();
      if (window.showToast) window.showToast("Editor cleared", "info");
    }
  }

  updateEditorCounters() {
    const editor = document.getElementById("writing-editor-textarea");
    if (!editor) return;

    const text = editor.value;
    const words = text.trim() ? text.trim().split(/\s+/).filter(Boolean) : [];
    const wordCount = words.length;
    const charCount = text.length;
    const charNoSpaces = text.replace(/\s+/g, "").length;
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
    const readingTime = Math.ceil(wordCount / 200);

    const wordEl = document.getElementById("wc-words");
    const charEl = document.getElementById("wc-chars");
    const paraEl = document.getElementById("wc-paras");
    const readEl = document.getElementById("wc-readtime");

    if (wordEl) wordEl.innerText = wordCount;
    if (charEl) charEl.innerText = charCount;
    if (paraEl) paraEl.innerText = paragraphs;
    if (readEl) readEl.innerText = `${readingTime} min`;
  }

  scheduleAnalysis() {
    clearTimeout(this.analysisTimeout);
    this.analysisTimeout = setTimeout(() => {
      this.runAnalysisNow();
    }, 600);
  }

  runAnalysisNow() {
    const editor = document.getElementById("writing-editor-textarea");
    if (!editor) return;

    const text = editor.value;
    const feedbackContainer = document.getElementById("writing-feedback-container");
    if (!feedbackContainer) return;

    if (!text.trim()) {
      feedbackContainer.innerHTML = `
        <div class="feedback-empty-state">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A0AEC0" stroke-width="1.5"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
          <p>Start writing or insert a template to see real-time grammar, spelling, punctuation, and readability suggestions.</p>
        </div>
      `;
      return;
    }

    // --- Genuine Rule-Based Writing Analyzer ---
    const spellingSuggestions = [];
    const grammarAlerts = [];
    const punctuationAlerts = [];
    const styleAlerts = [];

    // 1. Spelling Checks
    const wordsRaw = text.split(/[^a-zA-Z']+/).filter(Boolean);
    const dict = window.WRITING_DATA?.spellingDictionary || {};

    wordsRaw.forEach(word => {
      const lower = word.toLowerCase();
      if (dict[lower]) {
        spellingSuggestions.push({
          original: word,
          suggested: dict[lower],
          message: `Possible misspelling: '${word}' -> '${dict[lower]}'`
        });
      }
    });

    // 2. Grammar Pattern Rules
    const grammarRules = window.WRITING_DATA?.grammarRules || [];
    grammarRules.forEach(rule => {
      const match = text.match(rule.pattern);
      if (match) {
        grammarAlerts.push({
          match: match[0],
          message: rule.message,
          replacement: match[0].replace(rule.pattern, rule.replacement)
        });
      }
    });

    // 3. Punctuation & Capitalization Checks
    // Check for sentences starting with lowercase
    const sentenceSplitRegex = /([.?!]\s+)([a-z])/g;
    let sMatch;
    while ((sMatch = sentenceSplitRegex.exec(text)) !== null) {
      punctuationAlerts.push({
        message: `Sentence starts with lowercase letter: '${sMatch[2]}'. Capitalize after terminal punctuation.`
      });
    }

    // Check terminal punctuation for paragraphs
    const paragraphs = text.split("\n").filter(p => p.trim().length > 15);
    paragraphs.forEach(p => {
      const trimmed = p.trim();
      if (!trimmed.endsWith(".") && !trimmed.endsWith("?") && !trimmed.endsWith("!") && !trimmed.endsWith(":") && !trimmed.endsWith('"')) {
        punctuationAlerts.push({
          message: `Paragraph or sentence may be missing closing punctuation: "...${trimmed.slice(-20)}"`
        });
      }
    });

    // 4. Style & Sentence Formation (Run-on sentences > 35 words)
    const sentences = text.split(/[.?!]+/).filter(s => s.trim().length > 0);
    sentences.forEach(s => {
      const sWords = s.trim().split(/\s+/).filter(Boolean);
      if (sWords.length > 35) {
        styleAlerts.push({
          type: "run-on",
          message: `Long sentence detected (${sWords.length} words). Consider breaking it into two distinct thoughts for improved clarity.`
        });
      }
    });

    // Passive voice indicator
    const passiveMatch = text.match(/\b(is|am|are|was|were|been|being)\s+([a-z]+ed|[a-z]+en)\b/gi);
    const passiveCount = passiveMatch ? passiveMatch.length : 0;

    // Readability: Flesch Reading Ease Score
    const totalWords = wordsRaw.length || 1;
    const totalSentences = sentences.length || 1;
    // Count syllables roughly
    let syllableCount = 0;
    wordsRaw.forEach(w => {
      syllableCount += this.countSyllables(w);
    });

    // Flesch Reading Ease = 206.835 - 1.015 * (words/sentences) - 84.6 * (syllables/words)
    let fleschScore = 206.835 - (1.015 * (totalWords / totalSentences)) - (84.6 * (syllableCount / totalWords));
    fleschScore = Math.max(0, Math.min(100, Math.round(fleschScore)));

    let readabilityBand = "Standard (High School)";
    if (fleschScore >= 80) readabilityBand = "Very Easy to Read (Conversational)";
    else if (fleschScore >= 60) readabilityBand = "Standard (Optimal for Web & Essays)";
    else if (fleschScore >= 40) readabilityBand = "Advanced / Academic Prose";
    else readabilityBand = "Dense / Highly Academic";

    // Deduplicate suggestions
    const uniqueSpelling = Array.from(new Set(spellingSuggestions.map(s => s.original)))
      .map(orig => spellingSuggestions.find(s => s.original === orig));

    const totalIssues = uniqueSpelling.length + grammarAlerts.length + punctuationAlerts.length + styleAlerts.length;

    feedbackContainer.innerHTML = `
      <div class="feedback-summary-bar">
        <div class="feedback-badge-group">
          <span class="badge ${totalIssues === 0 ? 'badge-success' : 'badge-navy'}">
            ${totalIssues === 0 ? '✓ No Grammar/Spelling Errors Found' : `${totalIssues} Writing Suggestions`}
          </span>
          <span class="badge badge-accent">Readability: ${fleschScore}/100</span>
        </div>
        <span class="readability-label">${readabilityBand}</span>
      </div>

      <!-- Live metrics chips -->
      <div class="style-metrics-row">
        <span class="chip-metric">Passive Voice: ${passiveCount} phrases</span>
        <span class="chip-metric">Avg. Sentence: ${(totalWords / totalSentences).toFixed(1)} words</span>
        <span class="chip-metric">Vocabulary Diversity: ${Math.round((new Set(wordsRaw.map(w => w.toLowerCase())).size / totalWords) * 100)}%</span>
      </div>

      <!-- Specific alerts list -->
      <div class="alerts-feed-list">
        ${uniqueSpelling.map(s => `
          <div class="alert-item alert-spelling">
            <span class="alert-badge-type">Spelling</span>
            <div class="alert-content">
              <p>Change "<strong>${s.original}</strong>" to "<strong>${s.suggested}</strong>"</p>
              <button class="btn btn-apply-fix" onclick="window.writingStudio.applySpellingFix('${s.original}', '${s.suggested}')">Apply Correction</button>
            </div>
          </div>
        `).join("")}

        ${grammarAlerts.map(g => `
          <div class="alert-item alert-grammar">
            <span class="alert-badge-type">Grammar</span>
            <div class="alert-content">
              <p>${g.message}</p>
              ${g.replacement ? `<span>Suggested revision: <code>${g.replacement}</code></span>` : ''}
            </div>
          </div>
        `).join("")}

        ${punctuationAlerts.map(p => `
          <div class="alert-item alert-punctuation">
            <span class="alert-badge-type">Punctuation</span>
            <div class="alert-content">
              <p>${p.message}</p>
            </div>
          </div>
        `).join("")}

        ${styleAlerts.map(st => `
          <div class="alert-item alert-style">
            <span class="alert-badge-type">Sentence Flow</span>
            <div class="alert-content">
              <p>${st.message}</p>
            </div>
          </div>
        `).join("")}

        ${totalIssues === 0 ? `
          <div class="clean-writing-card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2B6CB0" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <div>
              <strong>Polished Writing Structure!</strong>
              <p>Your text exhibits clean syntax, appropriate punctuation, and solid paragraph flow.</p>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  countSyllables(word) {
    word = word.toLowerCase();
    if (word.length <= 3) return 1;
    word = word.replace(/(?:[^laeiouy]|ed|es|e)$/, '');
    word = word.replace(/^y/, '');
    const syllables = word.match(/[aeiouy]{1,2}/g);
    return syllables ? syllables.length : 1;
  }

  applySpellingFix(original, suggested) {
    const editor = document.getElementById("writing-editor-textarea");
    if (!editor) return;

    const regex = new RegExp(`\\b${original}\\b`, "gi");
    editor.value = editor.value.replace(regex, suggested);
    this.updateEditorCounters();
    this.runAnalysisNow();
    if (window.showToast) window.showToast(`Corrected "${original}" to "${suggested}"`, "success");
  }

  saveCurrentDraft() {
    const editor = document.getElementById("writing-editor-textarea");
    const titleInput = document.getElementById("writing-title-input");
    if (!editor) return;

    const content = editor.value.trim();
    if (!content) {
      if (window.showToast) window.showToast("Cannot save empty draft. Please write some content first.", "warning");
      return;
    }

    const title = titleInput?.value.trim() || this.currentPrompt?.title || "Untitled Draft";
    const words = content.split(/\s+/).filter(Boolean).length;

    if (window.lexiconStorage) {
      const saved = window.lexiconStorage.saveWritingDraft(this.currentCategory, title, content, words, 75);
      this.activeDraftId = saved.id;
      this.renderSavedDraftsList();
      if (window.showToast) window.showToast(`Draft "${title}" saved successfully! +CO1 progress`, "success");
    }
  }

  renderSavedDraftsList() {
    const container = document.getElementById("writing-saved-drafts-list");
    if (!container || !window.lexiconStorage) return;

    const drafts = window.lexiconStorage.getData().writing.drafts || [];
    if (drafts.length === 0) {
      container.innerHTML = `<p class="text-muted text-sm">No saved drafts yet. Write your composition and click "Save Draft".</p>`;
      return;
    }

    container.innerHTML = drafts.map(d => `
      <div class="saved-draft-card ${d.id === this.activeDraftId ? 'active' : ''}">
        <div class="draft-card-header">
          <span class="badge badge-accent-sm">${d.category}</span>
          <span class="draft-card-date">${new Date(d.updatedAt).toLocaleDateString()}</span>
        </div>
        <h5 class="draft-card-title">${d.title}</h5>
        <div class="draft-card-meta">
          <span>${d.wordCount} words</span>
          <div class="draft-actions-row">
            <button class="btn btn-outline-xs" onclick="window.writingStudio.loadDraft('${d.id}')">Open</button>
            <button class="btn btn-text-xs text-error" onclick="window.writingStudio.deleteDraft('${d.id}')">Delete</button>
          </div>
        </div>
      </div>
    `).join("");
  }

  loadDraft(draftId) {
    if (!window.lexiconStorage) return;
    const drafts = window.lexiconStorage.getData().writing.drafts || [];
    const draft = drafts.find(d => d.id === draftId);
    if (!draft) return;

    const editor = document.getElementById("writing-editor-textarea");
    const titleInput = document.getElementById("writing-title-input");

    if (editor && titleInput) {
      editor.value = draft.content;
      titleInput.value = draft.title;
      this.activeDraftId = draft.id;
      this.selectCategory(draft.category);
      this.updateEditorCounters();
      this.runAnalysisNow();
      if (window.showToast) window.showToast(`Loaded draft: "${draft.title}"`, "info");
      editor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  deleteDraft(draftId) {
    if (confirm("Delete this saved draft?") && window.lexiconStorage) {
      window.lexiconStorage.deleteWritingDraft(draftId);
      this.renderSavedDraftsList();
      if (this.activeDraftId === draftId) this.activeDraftId = null;
      if (window.showToast) window.showToast("Draft deleted.", "info");
    }
  }

  downloadAsTxt() {
    const editor = document.getElementById("writing-editor-textarea");
    const titleInput = document.getElementById("writing-title-input");
    if (!editor || !editor.value.trim()) {
      if (window.showToast) window.showToast("No content to download.", "warning");
      return;
    }

    const title = titleInput?.value.trim() || "Lexicon_Lab_Composition";
    const filename = `${title.replace(/[^a-zA-Z0-9_-]/g, "_")}.txt`;
    const fullText = `LEXICON LAB WRITING STUDIO\nCategory: ${this.currentCategory.toUpperCase()}\nTitle: ${title}\nDate: ${new Date().toLocaleString()}\n\n---\n\n${editor.value}`;

    const blob = new Blob([fullText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    if (window.showToast) window.showToast(`Downloaded as ${filename}`, "success");
  }

  copyToClipboard() {
    const editor = document.getElementById("writing-editor-textarea");
    if (!editor || !editor.value.trim()) {
      if (window.showToast) window.showToast("No text to copy.", "warning");
      return;
    }

    navigator.clipboard.writeText(editor.value).then(() => {
      if (window.showToast) window.showToast("Draft copied to clipboard!", "success");
    }).catch(() => {
      if (window.showToast) window.showToast("Failed to copy automatically.", "error");
    });
  }
}

// Global exposure
if (typeof window !== "undefined") {
  window.WritingStudio = WritingStudio;
}

