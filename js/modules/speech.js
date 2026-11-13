/**
 * LEXICON LAB - Speech Corner Module
 * Aligned with Course Outcome CO5: Speech delivery
 */

class SpeechCorner {
  constructor() {
    this.currentSpeech = null;
    this.speechSynthesisUtterance = null;
    this.isAudioPlaying = false;
    this.speechPace = 1.0;
    this.showDeliveryCues = true;
    this.activeSectionTab = "full"; // full, intro, body, conclusion
  }

  init() {
    this.renderDeliveryTips();
    this.renderSpeechGuide();
    this.renderSpeechHistory();
    this.attachEvents();
  }

  attachEvents() {
    // Prepare My Speech button
    const generateBtn = document.getElementById("prepare-speech-btn");
    if (generateBtn) {
      generateBtn.addEventListener("click", () => this.prepareSpeech());
    }

    // Quick topic suggestions
    document.querySelectorAll(".topic-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const topicInput = document.getElementById("speech-topic-input");
        if (topicInput) {
          topicInput.value = chip.getAttribute("data-topic");
          topicInput.focus();
        }
      });
    });

    // Audio Play / Pause
    const audioPlayBtn = document.getElementById("speech-audio-play-btn");
    const audioStopBtn = document.getElementById("speech-audio-stop-btn");
    if (audioPlayBtn) {
      audioPlayBtn.addEventListener("click", () => this.toggleAudioSpeech());
    }
    if (audioStopBtn) {
      audioStopBtn.addEventListener("click", () => this.stopAudioSpeech());
    }

    // Speed selector
    const speedSelect = document.getElementById("speech-speed-select");
    if (speedSelect) {
      speedSelect.addEventListener("change", (e) => {
        this.speechPace = parseFloat(e.target.value) || 1.0;
        if (this.isAudioPlaying) {
          this.stopAudioSpeech();
          this.playAudioSpeech();
        }
      });
    }

    // Copy Speech Button
    const copyBtn = document.getElementById("speech-copy-btn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => this.copySpeech());
    }

    // Download TXT Button
    const downloadBtn = document.getElementById("speech-download-btn");
    if (downloadBtn) {
      downloadBtn.addEventListener("click", () => this.downloadSpeechTxt());
    }

    // Regenerate Speech Button
    const regenBtn = document.getElementById("speech-regen-btn");
    if (regenBtn) {
      regenBtn.addEventListener("click", () => this.prepareSpeech(true));
    }

    // Toggle Delivery Cues
    const cuesToggle = document.getElementById("speech-cues-toggle");
    if (cuesToggle) {
      cuesToggle.addEventListener("change", (e) => {
        this.showDeliveryCues = e.target.checked;
        this.renderGeneratedSpeech();
      });
    }

    // Section view tabs
    document.querySelectorAll(".speech-section-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        const sec = tab.getAttribute("data-section");
        this.activeSectionTab = sec;
        document.querySelectorAll(".speech-section-tab").forEach(t => t.classList.toggle("active", t === tab));
        this.renderGeneratedSpeech();
      });
    });
  }

  prepareSpeech(isRegen = false) {
    const topicInput = document.getElementById("speech-topic-input");
    const durationInput = document.getElementById("speech-duration-select");
    const levelInput = document.getElementById("speech-level-select");
    const styleInput = document.getElementById("speech-style-select");

    const topic = topicInput?.value.trim();
    if (!topic) {
      if (window.showToast) window.showToast("Please enter a speech topic to begin.", "warning");
      topicInput?.focus();
      return;
    }

    const duration = durationInput?.value || "2";
    const level = levelInput?.value || "intermediate";
    const style = styleInput?.value || "informative";

    // Call Rhetorical Synthesis Engine
    if (window.speechEngine) {
      const speechObj = window.speechEngine.generateSpeech({
        topic,
        duration,
        level,
        style
      });

      this.currentSpeech = speechObj;

      // Save to localStorage history
      if (window.lexiconStorage) {
        window.lexiconStorage.savePreparedSpeech(speechObj);
        this.renderSpeechHistory();
      }

      // Render into UI
      const resultContainer = document.getElementById("generated-speech-container");
      if (resultContainer) {
        resultContainer.classList.remove("hidden");
        this.renderGeneratedSpeech();
        resultContainer.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (window.showToast) {
        window.showToast(isRegen ? "Speech regenerated with new rhetorical phrasing!" : "Structured speech generated! Course Outcome CO5 updated.", "success");
      }
    }
  }

  renderGeneratedSpeech() {
    const speech = this.currentSpeech;
    if (!speech) return;

    // Update metadata badges
    const titleEl = document.getElementById("speech-result-title");
    const metaEl = document.getElementById("speech-result-meta");
    const contentEl = document.getElementById("speech-result-content");

    if (titleEl) titleEl.innerText = `Speech: ${speech.topic}`;
    if (metaEl) {
      metaEl.innerHTML = `
        <span class="badge badge-primary">${speech.durationMinutes} Min Duration</span>
        <span class="badge badge-accent">${speech.style.toUpperCase()} Style</span>
        <span class="badge badge-outline">${speech.level.toUpperCase()} Level</span>
        <span class="badge badge-outline">${speech.wordCount} Words</span>
        <span class="badge badge-outline">~${speech.estimatedDeliveryTime}</span>
      `;
    }

    if (!contentEl) return;

    // Helper to format delivery cues
    const formatCues = (text) => {
      if (this.showDeliveryCues) {
        return text.replace(/\[([^\]]+)\]/g, '<span class="delivery-cue-tag">[$1]</span>');
      } else {
        return text.replace(/\[([^\]]+)\]/g, '');
      }
    };

    let displayHtml = "";

    if (this.activeSectionTab === "full") {
      displayHtml = `
        <div class="speech-full-article">
          <div class="speech-block-card intro-block">
            <div class="speech-block-header">
              <span class="badge badge-accent-sm">SECTION 1: INTRODUCTION</span>
              <span class="speech-block-hint">Hook • Context • Thesis Statement</span>
            </div>
            <div class="speech-paragraph-text">${formatCues(speech.sections.introduction).replace(/\n\n/g, '</p><p class="speech-paragraph-text">')}</div>
          </div>

          <div class="speech-block-card body-block">
            <div class="speech-block-header">
              <span class="badge badge-navy-sm">SECTION 2: MAIN BODY</span>
              <span class="speech-block-hint">Pillars • Real-World Context • Rhetorical Transition</span>
            </div>
            ${speech.sections.body.map((para, i) => `
              <div class="speech-body-subpara">
                <span class="para-subindex">Point ${i + 1}:</span>
                <p class="speech-paragraph-text">${formatCues(para)}</p>
              </div>
            `).join("")}
          </div>

          <div class="speech-block-card conclusion-block">
            <div class="speech-block-header">
              <span class="badge badge-primary-sm">SECTION 3: CONCLUSION</span>
              <span class="speech-block-hint">Synthesis • Lasting Punchline • Call to Action</span>
            </div>
            <div class="speech-paragraph-text">${formatCues(speech.sections.conclusion).replace(/\n\n/g, '</p><p class="speech-paragraph-text">')}</div>
          </div>
        </div>
      `;
    } else if (this.activeSectionTab === "intro") {
      displayHtml = `
        <div class="speech-section-focused">
          <h4>Introduction (Hook & Thesis)</h4>
          <p class="speech-paragraph-text">${formatCues(speech.sections.introduction).replace(/\n\n/g, '</p><p class="speech-paragraph-text">')}</p>
        </div>
      `;
    } else if (this.activeSectionTab === "body") {
      displayHtml = `
        <div class="speech-section-focused">
          <h4>Main Body Paragraphs</h4>
          ${speech.sections.body.map(para => `<p class="speech-paragraph-text">${formatCues(para)}</p>`).join("")}
        </div>
      `;
    } else if (this.activeSectionTab === "conclusion") {
      displayHtml = `
        <div class="speech-section-focused">
          <h4>Conclusion & Call to Action</h4>
          <p class="speech-paragraph-text">${formatCues(speech.sections.conclusion).replace(/\n\n/g, '</p><p class="speech-paragraph-text">')}</p>
        </div>
      `;
    }

    contentEl.innerHTML = displayHtml;
  }

  // --- Audio Speech Delivery ---
  toggleAudioSpeech() {
    if (this.isAudioPlaying) {
      this.pauseAudioSpeech();
    } else {
      this.playAudioSpeech();
    }
  }

  playAudioSpeech() {
    if (!("speechSynthesis" in window) || !this.currentSpeech) {
      if (window.showToast) window.showToast("Speech audio playback not available on this device.", "warning");
      return;
    }

    window.speechSynthesis.cancel();

    // Strip cues for audio reading
    const cleanText = this.currentSpeech.fullSpeech.replace(/\[([^\]]+)\]/g, "");
    this.speechSynthesisUtterance = new SpeechSynthesisUtterance(cleanText);
    this.speechSynthesisUtterance.rate = this.speechPace;
    this.speechSynthesisUtterance.pitch = 1.0;
    this.speechSynthesisUtterance.lang = "en-US";

    const playBtn = document.getElementById("speech-audio-play-btn");

    this.speechSynthesisUtterance.onstart = () => {
      this.isAudioPlaying = true;
      if (playBtn) playBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg> Pause Audio`;
    };

    this.speechSynthesisUtterance.onend = () => {
      this.isAudioPlaying = false;
      if (playBtn) playBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Listen to Speech`;
    };

    this.speechSynthesisUtterance.onerror = () => {
      this.isAudioPlaying = false;
      if (playBtn) playBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Listen to Speech`;
    };

    window.speechSynthesis.speak(this.speechSynthesisUtterance);
  }

  pauseAudioSpeech() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.pause();
      this.isAudioPlaying = false;
      const playBtn = document.getElementById("speech-audio-play-btn");
      if (playBtn) playBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Resume Audio`;
    }
  }

  stopAudioSpeech() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      this.isAudioPlaying = false;
      const playBtn = document.getElementById("speech-audio-play-btn");
      if (playBtn) playBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Listen to Speech`;
    }
  }

  copySpeech() {
    if (!this.currentSpeech) return;
    const textToCopy = this.currentSpeech.fullSpeech.replace(/\[([^\]]+)\]/g, "");
    navigator.clipboard.writeText(textToCopy).then(() => {
      if (window.showToast) window.showToast("Speech text copied to clipboard!", "success");
    }).catch(() => {
      if (window.showToast) window.showToast("Could not copy speech text.", "error");
    });
  }

  downloadSpeechTxt() {
    if (!this.currentSpeech) return;
    const speech = this.currentSpeech;
    const filename = `Speech_${speech.topic.replace(/[^a-zA-Z0-9_-]/g, "_")}.txt`;
    const header = `LEXICON LAB - SPEECH CORNER
Topic: ${speech.topic}
Duration: ${speech.durationMinutes} Minutes (~${speech.wordCount} words)
Level: ${speech.level.toUpperCase()} | Style: ${speech.style.toUpperCase()}
Generated on: ${new Date(speech.timestamp).toLocaleString()}

========================================
SECTION 1: INTRODUCTION
========================================
${speech.sections.introduction}

========================================
SECTION 2: MAIN BODY
========================================
${speech.sections.bodyText}

========================================
SECTION 3: CONCLUSION
========================================
${speech.sections.conclusion}
`;

    const blob = new Blob([header], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    if (window.showToast) window.showToast(`Downloaded speech as ${filename}`, "success");
  }

  renderDeliveryTips() {
    const container = document.getElementById("speech-delivery-tips-grid");
    if (!container || !window.speechEngine) return;

    const tips = window.speechEngine.getDeliveryTips();
    container.innerHTML = tips.map(tip => `
      <div class="delivery-tip-card">
        <div class="delivery-tip-header">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <h5>${tip.title}</h5>
        </div>
        <p>${tip.description}</p>
      </div>
    `).join("");
  }

  renderSpeechGuide() {
    const container = document.getElementById("speech-guide-content");
    if (!container || !window.speechEngine) return;

    const guide = window.speechEngine.getSpeechGuide();
    container.innerHTML = `
      <div class="speech-guide-panel">
        <h4 class="guide-main-heading">${guide.title}</h4>
        <div class="guide-sections-grid">
          ${guide.sections.map(sec => `
            <div class="guide-sec-card">
              <h5 class="guide-sec-title">${sec.heading}</h5>
              <ul class="guide-points-list">
                ${sec.points.map(pt => `<li>${pt}</li>`).join("")}
              </ul>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  renderSpeechHistory() {
    const container = document.getElementById("speech-history-list");
    if (!container || !window.lexiconStorage) return;

    const history = window.lexiconStorage.getData().speech.preparedSpeeches || [];
    if (history.length === 0) {
      container.innerHTML = `<p class="text-muted text-sm">No speeches prepared yet. Type any topic above and click "Prepare My Speech".</p>`;
      return;
    }

    container.innerHTML = history.slice(0, 6).map(sp => `
      <div class="history-speech-item" onclick="window.speechCorner.loadHistoricalSpeech('${sp.id}')">
        <div class="history-item-top">
          <span class="badge badge-accent-sm">${sp.duration} Min</span>
          <span class="badge badge-outline-sm">${sp.style}</span>
          <span class="history-date">${new Date(sp.date).toLocaleDateString()}</span>
        </div>
        <h5 class="history-item-topic">${sp.topic}</h5>
        <span class="history-word-count">${sp.wordCount} words</span>
      </div>
    `).join("");
  }

  loadHistoricalSpeech(speechId) {
    if (!window.lexiconStorage) return;
    const history = window.lexiconStorage.getData().speech.preparedSpeeches || [];
    const found = history.find(s => s.id === speechId);
    if (!found) return;

    this.currentSpeech = {
      topic: found.topic,
      durationMinutes: found.duration,
      level: found.level,
      style: found.style,
      wordCount: found.wordCount,
      estimatedDeliveryTime: found.estimatedDeliveryTime,
      sections: found.sections,
      fullSpeech: found.fullSpeech,
      timestamp: found.date
    };

    const resultContainer = document.getElementById("generated-speech-container");
    if (resultContainer) {
      resultContainer.classList.remove("hidden");
      this.renderGeneratedSpeech();
      resultContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

// Global exposure
if (typeof window !== "undefined") {
  window.SpeechCorner = SpeechCorner;
}

