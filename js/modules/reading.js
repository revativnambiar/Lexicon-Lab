/**
 * LEXICON LAB - Reading Hub Module
 * Aligned with Course Outcome CO4: Summarizing information
 */

class ReadingHub {
  constructor() {
    this.currentCategory = "All";
    this.activePassageId = "tech-ai-frontier";
    this.readingFontSize = "medium"; // small, medium, large
    this.compQuizAnswers = {};
    this.compQuizScore = 0;
  }

  init() {
    this.renderCategoryTabs();
    this.renderPassagesList();
    this.renderActivePassage();
    this.attachEvents();
  }

  attachEvents() {
    // Font resizing
    document.querySelectorAll(".reading-font-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const size = btn.getAttribute("data-font-size");
        this.setFontSize(size);
      });
    });

    // Summary Textarea live word counter
    const summaryInput = document.getElementById("summary-textarea");
    if (summaryInput) {
      summaryInput.addEventListener("input", () => {
        this.updateSummaryWordCount();
      });
    }

    // Submit Summary Button
    const submitSummaryBtn = document.getElementById("submit-summary-btn");
    if (submitSummaryBtn) {
      submitSummaryBtn.addEventListener("click", () => {
        this.evaluateAndSubmitSummary();
      });
    }

    // Clear Summary Button
    const clearSummaryBtn = document.getElementById("clear-summary-btn");
    if (clearSummaryBtn) {
      clearSummaryBtn.addEventListener("click", () => {
        if (summaryInput) {
          summaryInput.value = "";
          this.updateSummaryWordCount();
        }
      });
    }
  }

  setFontSize(size) {
    this.readingFontSize = size;
    const contentBox = document.getElementById("active-passage-content");
    if (contentBox) {
      contentBox.className = `passage-reader-body font-${size}`;
    }
    document.querySelectorAll(".reading-font-btn").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-font-size") === size);
    });
  }

  renderCategoryTabs() {
    const container = document.getElementById("reading-category-filters");
    if (!container || !window.READING_DATA) return;

    container.innerHTML = window.READING_DATA.categories.map(cat => `
      <button class="filter-tab-btn ${cat === this.currentCategory ? 'active' : ''}" data-cat="${cat}">
        ${cat}
      </button>
    `).join("");

    container.querySelectorAll(".filter-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.currentCategory = btn.getAttribute("data-cat");
        this.renderCategoryTabs();
        this.renderPassagesList();
      });
    });
  }

  renderPassagesList() {
    const listEl = document.getElementById("reading-passages-list");
    if (!listEl || !window.READING_DATA) return;

    let passages = window.READING_DATA.passages;
    if (this.currentCategory !== "All") {
      passages = passages.filter(p => p.category === this.currentCategory);
    }

    const savedData = window.lexiconStorage ? window.lexiconStorage.getData() : null;
    const completedList = savedData?.reading?.completedPassages || [];

    listEl.innerHTML = passages.map(p => {
      const isSelected = p.id === this.activePassageId;
      const isCompleted = completedList.includes(p.id);

      return `
        <div class="reading-card ${isSelected ? 'active' : ''} ${isCompleted ? 'completed' : ''}" onclick="window.readingHub.openPassage('${p.id}')">
          <div class="reading-card-top">
            <span class="badge badge-accent">${p.category}</span>
            <div class="reading-card-meta">
              <span>${p.readTime} read</span> • <span>${p.wordCount} words</span>
            </div>
          </div>
          <h4 class="reading-card-title">${p.title}</h4>
          <p class="reading-card-excerpt">${p.excerpt}</p>
          <div class="reading-card-bottom">
            <span class="reading-card-status ${isCompleted ? 'text-success' : 'text-muted'}">
              ${isCompleted ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Completed' : 'Ready to Read'}
            </span>
            <button class="btn btn-primary-sm">Read & Summarize →</button>
          </div>
        </div>
      `;
    }).join("");
  }

  openPassage(passageId) {
    this.activePassageId = passageId;
    this.compQuizAnswers = {};
    this.renderPassagesList();
    this.renderActivePassage();

    // Reset summary textarea
    const summaryInput = document.getElementById("summary-textarea");
    if (summaryInput) {
      summaryInput.value = "";
      this.updateSummaryWordCount();
    }
    const feedbackBox = document.getElementById("summary-evaluation-result");
    if (feedbackBox) {
      feedbackBox.className = "summary-feedback-panel hidden";
      feedbackBox.innerHTML = "";
    }

    // Scroll reader into view
    const readerSection = document.getElementById("active-passage-reader-section");
    if (readerSection) {
      readerSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  renderActivePassage() {
    const p = window.READING_DATA?.passages.find(item => item.id === this.activePassageId);
    if (!p) return;

    // Set headings
    const titleEl = document.getElementById("active-passage-title");
    const metaEl = document.getElementById("active-passage-meta");
    const contentEl = document.getElementById("active-passage-content");

    if (titleEl) titleEl.innerText = p.title;
    if (metaEl) {
      metaEl.innerHTML = `
        <span class="badge badge-primary">${p.category}</span>
        <span class="badge badge-outline"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${p.readTime} read</span>
        <span class="badge badge-outline">${p.wordCount} words</span>
        <span class="badge badge-outline">${p.author}</span>
      `;
    }

    if (contentEl) {
      contentEl.className = `passage-reader-body font-${this.readingFontSize}`;
      contentEl.innerHTML = p.content.map(para => `<p>${para}</p>`).join("");
    }

    // Render comprehension questions
    this.renderComprehensionQuiz(p);

    // Render summary prompt info
    const promptRange = document.getElementById("summary-target-range");
    if (promptRange) {
      promptRange.innerText = `Target: ${p.summaryPromptRange.min} - ${p.summaryPromptRange.max} words`;
    }
  }

  renderComprehensionQuiz(passage) {
    const container = document.getElementById("comprehension-quiz-container");
    if (!container || !passage.comprehensionQuestions) return;

    container.innerHTML = passage.comprehensionQuestions.map((q, qIdx) => {
      const selected = this.compQuizAnswers[q.id];
      const isAnswered = selected !== undefined;

      return `
        <div class="comp-question-block" data-qid="${q.id}">
          <div class="comp-q-header">
            <span class="comp-q-number">Question ${qIdx + 1}</span>
            <p class="comp-q-text">${q.question}</p>
          </div>
          <div class="comp-options-list">
            ${q.options.map((opt, optIdx) => {
              let optClass = "";
              if (isAnswered) {
                if (optIdx === q.correct) optClass = "correct";
                else if (optIdx === selected) optClass = "incorrect";
                else optClass = "disabled";
              }
              return `
                <button class="comp-opt-btn ${optClass}" onclick="window.readingHub.handleCompAnswer('${passage.id}', '${q.id}', ${optIdx})" ${isAnswered ? 'disabled' : ''}>
                  <span class="opt-bullet">${String.fromCharCode(65 + optIdx)}</span>
                  <span class="opt-text">${opt}</span>
                </button>
              `;
            }).join("")}
          </div>
          ${isAnswered ? `
            <div class="comp-explanation-card ${selected === q.correct ? 'correct' : 'incorrect'}">
              <strong>${selected === q.correct ? 'Correct!' : 'Incorrect.'}</strong> ${q.explanation}
            </div>
          ` : ''}
        </div>
      `;
    }).join("");
  }

  handleCompAnswer(passageId, questionId, chosenOpt) {
    const passage = window.READING_DATA?.passages.find(p => p.id === passageId);
    if (!passage) return;

    this.compQuizAnswers[questionId] = chosenOpt;
    this.renderComprehensionQuiz(passage);

    // Check if all questions are answered
    const totalQ = passage.comprehensionQuestions.length;
    const answeredCount = Object.keys(this.compQuizAnswers).length;

    if (answeredCount === totalQ) {
      let score = 0;
      passage.comprehensionQuestions.forEach(q => {
        if (this.compQuizAnswers[q.id] === q.correct) score++;
      });
      if (window.lexiconStorage) {
        window.lexiconStorage.saveComprehensionScore(passage.id, passage.title, score, totalQ);
      }
      if (window.showToast) {
        window.showToast(`Comprehension completed! You got ${score}/${totalQ} correct. +CO4 progress`, "success");
      }
      this.renderPassagesList();
    }
  }

  updateSummaryWordCount() {
    const summaryInput = document.getElementById("summary-textarea");
    const countDisplay = document.getElementById("summary-word-count-badge");
    if (!summaryInput || !countDisplay) return;

    const words = summaryInput.value.trim().split(/\s+/).filter(Boolean);
    const count = words.length;

    const passage = window.READING_DATA?.passages.find(p => p.id === this.activePassageId);
    const min = passage?.summaryPromptRange?.min || 50;
    const max = passage?.summaryPromptRange?.max || 85;

    let statusClass = "text-muted";
    if (count > 0 && count < min) statusClass = "text-warning";
    else if (count >= min && count <= max) statusClass = "text-success font-bold";
    else if (count > max) statusClass = "text-error";

    countDisplay.className = `word-count-badge ${statusClass}`;
    countDisplay.innerText = `${count} words (Target: ${min}-${max})`;
  }

  evaluateAndSubmitSummary() {
    const summaryInput = document.getElementById("summary-textarea");
    const resultBox = document.getElementById("summary-evaluation-result");
    const passage = window.READING_DATA?.passages.find(p => p.id === this.activePassageId);

    if (!summaryInput || !resultBox || !passage) return;

    const text = summaryInput.value.trim();
    const words = text.split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    if (wordCount < 25) {
      if (window.showToast) window.showToast("Your summary is too brief. Please write at least 35-50 words to capture key ideas.", "warning");
      return;
    }

    // --- Automated Summary Rubric Analysis ---
    const lowerSummary = text.toLowerCase();
    const keyData = passage.summaryData;

    // 1. Keyword & Thematic Point Matching
    const matchedKeywords = keyData.keywords.filter(kw => lowerSummary.includes(kw.toLowerCase()));
    const matchedPoints = [];
    keyData.keyThemes.forEach(theme => {
      // Check if any significant word of the theme appears
      const themeWords = theme.toLowerCase().split(/\s+/).filter(w => w.length > 4);
      const matches = themeWords.filter(w => lowerSummary.includes(w));
      if (matches.length >= 2 || (themeWords.length < 3 && matches.length >= 1)) {
        matchedPoints.push(theme);
      }
    });

    // 2. Length Score (Out of 30)
    let lengthScore = 30;
    if (wordCount < 40) lengthScore = 15;
    else if (wordCount > 100) lengthScore = 20;

    // 3. Theme Coverage Score (Out of 45)
    const themeScore = Math.min(45, Math.round((matchedPoints.length / keyData.keyThemes.length) * 45));

    // 4. Originality & Synthesis Score (Out of 25)
    // Check if user copied exact sentences from passage
    let copiedCount = 0;
    passage.content.forEach(p => {
      const sentences = p.split(/[.?!]+/).map(s => s.trim().toLowerCase()).filter(s => s.length > 25);
      sentences.forEach(s => {
        if (lowerSummary.includes(s)) copiedCount++;
      });
    });
    let originalityScore = copiedCount > 0 ? 10 : 25;

    const totalScore = lengthScore + themeScore + originalityScore;
    const percentage = Math.min(100, totalScore);

    // Generate constructive feedback text
    let feedback = "";
    if (percentage >= 85) {
      feedback = "Exemplary summary! You captured the central arguments with concise, original phrasing within the recommended word limit.";
    } else if (percentage >= 70) {
      feedback = "Good synthesis. You captured the main themes effectively, though you could refine conciseness and include more specific supporting insights.";
    } else {
      feedback = "Fair attempt. Try to avoid minor narrative details and focus strictly on the author's primary thesis and decisive conclusions.";
    }

    if (copiedCount > 0) {
      feedback += " Tip: Try rephrasing with your own vocabulary rather than copying verbatim clauses from the passage.";
    }

    // Save summary in storage
    const scoreData = {
      score: totalScore,
      maxScore: 100,
      percentage,
      feedback,
      matchedPoints
    };

    if (window.lexiconStorage) {
      window.lexiconStorage.saveSummary(passage.id, passage.title, text, wordCount, scoreData);
    }

    // Display side-by-side comparison & rubric breakdown
    resultBox.className = "summary-feedback-panel";
    resultBox.innerHTML = `
      <div class="summary-results-card">
        <div class="summary-results-header">
          <div>
            <span class="badge badge-success">Summary Evaluation Verified</span>
            <h3 class="summary-score-title">Score: ${percentage}/100</h3>
          </div>
          <div class="score-radial-tag">${percentage >= 80 ? 'Grade: A' : percentage >= 70 ? 'Grade: B' : 'Grade: C'}</div>
        </div>

        <p class="summary-eval-feedback"><strong>Rubric Feedback:</strong> ${feedback}</p>

        <div class="rubric-breakdown-row">
          <div class="rubric-col">
            <span class="rubric-label">Length & Conciseness</span>
            <span class="rubric-val">${lengthScore}/30 (${wordCount} words)</span>
          </div>
          <div class="rubric-col">
            <span class="rubric-label">Core Themes Captured</span>
            <span class="rubric-val">${themeScore}/45 (${matchedPoints.length}/${keyData.keyThemes.length} points)</span>
          </div>
          <div class="rubric-col">
            <span class="rubric-label">Synthesis & Originality</span>
            <span class="rubric-val">${originalityScore}/25</span>
          </div>
        </div>

        <div class="themes-checklist-box">
          <h5 class="checklist-title">Core Thematic Points Alignment:</h5>
          <ul class="checklist-items">
            ${keyData.keyThemes.map(th => {
              const captured = matchedPoints.includes(th);
              return `
                <li class="check-item ${captured ? 'captured' : 'missed'}">
                  <span class="check-icon">${captured ? '✓' : '○'}</span>
                  <span>${th}</span>
                </li>
              `;
            }).join("")}
          </ul>
        </div>

        <div class="summary-comparison-box">
          <h4 class="comparison-heading">Side-by-Side Model Comparison</h4>
          <div class="comparison-cols-grid">
            <div class="comparison-col">
              <span class="comparison-label">Your Submitted Summary:</span>
              <div class="comparison-text-box user-summary-box">${text}</div>
            </div>
            <div class="comparison-col">
              <span class="comparison-label">Accredited Reference Summary:</span>
              <div class="comparison-text-box model-summary-box">${keyData.modelSummary}</div>
            </div>
          </div>
        </div>

        <div class="takeaways-box">
          <h5>Key Takeaways for Future Summaries:</h5>
          <ul>
            ${keyData.keyTakeaways.map(t => `<li>${t}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;

    resultBox.scrollIntoView({ behavior: "smooth", block: "start" });
    if (window.showToast) {
      window.showToast("Summary submitted and evaluated! Course Outcome CO4 updated.", "success");
    }
  }
}

// Global exposure
if (typeof window !== "undefined") {
  window.ReadingHub = ReadingHub;
}

