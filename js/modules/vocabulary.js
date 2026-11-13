/**
 * LEXICON LAB - Word Explorer Module
 * Aligned with Course Outcome CO1: English grammar and sentence formation
 */

class WordExplorer {
  constructor() {
    this.searchQuery = "";
    this.selectedLevel = "All";
    this.selectedCategory = "All";
    this.activeWord = null;
    this.quizIndex = 0;
    this.quizScore = 0;
    this.quizAnswers = [];
  }

  init() {
    this.initWordOfTheDay();
    this.renderWordList();
    this.renderIdioms();
    this.renderVocabQuiz();
    this.attachEvents();
  }

  attachEvents() {
    // Search input
    const searchInput = document.getElementById("vocab-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderWordList();
      });
    }

    // Level filter
    const levelSelect = document.getElementById("vocab-level-filter");
    if (levelSelect) {
      levelSelect.addEventListener("change", (e) => {
        this.selectedLevel = e.target.value;
        this.renderWordList();
      });
    }

    // Audio pronunciation for Word of the Day
    const audioBtn = document.getElementById("wod-audio-btn");
    if (audioBtn) {
      audioBtn.addEventListener("click", () => {
        if (this.wodWord) {
          this.speakWord(this.wodWord.word);
        }
      });
    }

    // Bookmark / Master Word of the Day
    const masterBtn = document.getElementById("wod-master-btn");
    if (masterBtn) {
      masterBtn.addEventListener("click", () => {
        if (this.wodWord && window.lexiconStorage) {
          const added = window.lexiconStorage.toggleMasteredWord(this.wodWord.id);
          this.updateMasterButton(masterBtn, added);
          if (window.showToast) {
            window.showToast(added ? `Added '${this.wodWord.word}' to mastered vocabulary!` : `Removed '${this.wodWord.word}' from mastered bank.`, "info");
          }
        }
      });
    }

    // Shuffle Word of the Day
    const shuffleBtn = document.getElementById("wod-shuffle-btn");
    if (shuffleBtn) {
      shuffleBtn.addEventListener("click", () => {
        this.shuffleWordOfTheDay();
      });
    }
  }

  initWordOfTheDay() {
    const words = window.VOCABULARY_DATA?.words || [];
    if (words.length === 0) return;

    // Use current day of the year for stable daily word, or pick first
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    const index = dayOfYear % words.length;
    this.wodWord = words[index] || words[0];
    this.renderWordOfTheDay();
  }

  shuffleWordOfTheDay() {
    const words = window.VOCABULARY_DATA?.words || [];
    if (words.length <= 1) return;
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * words.length);
    } while (words[randomIndex] === this.wodWord);
    this.wodWord = words[randomIndex];
    this.renderWordOfTheDay();
    if (window.showToast) window.showToast(`Showing Word of the Day: ${this.wodWord.word}`, "info");
  }

  renderWordOfTheDay() {
    const w = this.wodWord;
    if (!w) return;

    const wordEl = document.getElementById("wod-word-heading");
    const phoneticEl = document.getElementById("wod-phonetic");
    const posEl = document.getElementById("wod-pos-badge");
    const levelEl = document.getElementById("wod-level-badge");
    const defEl = document.getElementById("wod-definition");
    const synEl = document.getElementById("wod-synonyms-container");
    const antEl = document.getElementById("wod-antonyms-container");
    const exampleEl = document.getElementById("wod-example-text");
    const etymEl = document.getElementById("wod-etymology-text");
    const tipEl = document.getElementById("wod-usage-tip");
    const masterBtn = document.getElementById("wod-master-btn");

    if (wordEl) wordEl.innerText = w.word;
    if (phoneticEl) phoneticEl.innerText = w.phonetic;
    if (posEl) posEl.innerText = w.pos;
    if (levelEl) levelEl.innerText = w.level;
    if (defEl) defEl.innerText = w.definition;
    if (exampleEl) exampleEl.innerText = `"${w.examples[0]}"`;
    if (etymEl) etymEl.innerText = w.etymology;
    if (tipEl) tipEl.innerText = w.tip;

    if (synEl) {
      synEl.innerHTML = w.synonyms.map(s => `<span class="tag tag-synonym" onclick="window.wordExplorer.searchWord('${s}')">${s}</span>`).join("");
    }
    if (antEl) {
      antEl.innerHTML = w.antonyms.map(a => `<span class="tag tag-antonym" onclick="window.wordExplorer.searchWord('${a}')">${a}</span>`).join("");
    }

    if (masterBtn && window.lexiconStorage) {
      const isMastered = window.lexiconStorage.getData().vocabulary.masteredWords.includes(w.id);
      this.updateMasterButton(masterBtn, isMastered);
    }
  }

  updateMasterButton(btn, isMastered) {
    if (isMastered) {
      btn.className = "btn btn-success-sm";
      btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Mastered`;
    } else {
      btn.className = "btn btn-outline-sm";
      btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg> Mark Mastered`;
    }
  }

  searchWord(term) {
    const input = document.getElementById("vocab-search-input");
    if (input) {
      input.value = term;
      this.searchQuery = term.toLowerCase().trim();
      this.renderWordList();
      input.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  renderWordList() {
    const container = document.getElementById("vocab-words-grid");
    if (!container || !window.VOCABULARY_DATA) return;

    let words = window.VOCABULARY_DATA.words;

    // Apply level filter
    if (this.selectedLevel !== "All") {
      words = words.filter(w => w.level.toLowerCase() === this.selectedLevel.toLowerCase());
    }

    // Apply search filter
    if (this.searchQuery) {
      words = words.filter(w => 
        w.word.toLowerCase().includes(this.searchQuery) ||
        w.definition.toLowerCase().includes(this.searchQuery) ||
        w.synonyms.some(s => s.toLowerCase().includes(this.searchQuery)) ||
        w.category.toLowerCase().includes(this.searchQuery)
      );
    }

    const savedData = window.lexiconStorage ? window.lexiconStorage.getData() : null;
    const masteredList = savedData?.vocabulary?.masteredWords || [];

    const countIndicator = document.getElementById("vocab-result-count");
    if (countIndicator) {
      countIndicator.innerText = `Showing ${words.length} vocabulary words`;
    }

    if (words.length === 0) {
      container.innerHTML = `
        <div class="vocab-empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#A0AEC0" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <p>No words found matching "<strong>${this.searchQuery}</strong>". Try a different search or clear your filter.</p>
          <button class="btn btn-outline-sm" onclick="document.getElementById('vocab-search-input').value=''; window.wordExplorer.searchQuery=''; window.wordExplorer.renderWordList();">Clear Filter</button>
        </div>
      `;
      return;
    }

    container.innerHTML = words.map(w => {
      const isMastered = masteredList.includes(w.id);
      return `
        <div class="vocab-card ${isMastered ? 'card-mastered' : ''}">
          <div class="vocab-card-header">
            <div>
              <div class="vocab-card-word-row">
                <h4 class="vocab-card-word">${w.word}</h4>
                <button class="vocab-card-speak-btn" onclick="window.wordExplorer.speakWord('${w.word}')" title="Listen to pronunciation">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                </button>
              </div>
              <span class="vocab-card-phonetic">${w.phonetic}</span>
            </div>
            <span class="badge badge-${w.level === 'Advanced' ? 'navy' : w.level === 'Intermediate' ? 'accent' : 'outline'}">${w.level}</span>
          </div>

          <p class="vocab-card-def">${w.definition}</p>

          <div class="vocab-card-synonyms">
            <span class="vocab-card-label">Synonyms:</span>
            <div class="tags-row">
              ${w.synonyms.slice(0, 3).map(s => `<span class="tag tag-sm">${s}</span>`).join("")}
            </div>
          </div>

          <div class="vocab-card-example">
            <p>"${w.examples[0]}"</p>
          </div>

          <div class="vocab-card-footer">
            <span class="vocab-card-category-tag">${w.category}</span>
            <button class="btn btn-icon-tag ${isMastered ? 'active' : ''}" onclick="window.wordExplorer.toggleMasterWord('${w.id}')" title="${isMastered ? 'Mastered' : 'Mark as Mastered'}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="${isMastered ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              <span>${isMastered ? 'Mastered' : 'Bookmark'}</span>
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  toggleMasterWord(wordId) {
    if (window.lexiconStorage) {
      const added = window.lexiconStorage.toggleMasteredWord(wordId);
      this.renderWordList();
      if (this.wodWord && this.wodWord.id === wordId) {
        const masterBtn = document.getElementById("wod-master-btn");
        if (masterBtn) this.updateMasterButton(masterBtn, added);
      }
      if (window.showToast) {
        window.showToast(added ? "Word saved to your mastery bank! +CO1 progress" : "Word unbookmarked", "info");
      }
    }
  }

  speakWord(text) {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      utterance.lang = "en-US";
      window.speechSynthesis.speak(utterance);
    } else {
      if (window.showToast) window.showToast("Audio pronunciation not supported on this browser.", "warning");
    }
  }

  renderIdioms() {
    const container = document.getElementById("vocab-idioms-grid");
    if (!container || !window.VOCABULARY_DATA) return;

    const idioms = window.VOCABULARY_DATA.idioms || [];
    container.innerHTML = idioms.map(idm => `
      <div class="idiom-card">
        <div class="idiom-card-header">
          <span class="badge badge-accent">${idm.category}</span>
          <h4 class="idiom-phrase">"${idm.phrase}"</h4>
        </div>
        <p class="idiom-meaning"><strong>Meaning:</strong> ${idm.meaning}</p>
        <p class="idiom-origin"><strong>Origin Insight:</strong> ${idm.origin}</p>
        <div class="idiom-example">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          <p><strong>Example:</strong> "${idm.example}"</p>
        </div>
      </div>
    `).join("");
  }

  renderVocabQuiz() {
    const container = document.getElementById("vocab-quiz-container");
    if (!container || !window.VOCABULARY_DATA) return;

    const quizzes = window.VOCABULARY_DATA.quizzes || [];
    const total = quizzes.length;

    if (this.quizIndex >= total) {
      const percentage = Math.round((this.quizScore / total) * 100);
      if (window.lexiconStorage) {
        window.lexiconStorage.saveVocabQuizScore(this.quizScore, total);
      }

      container.innerHTML = `
        <div class="quiz-results-card quiz-passed">
          <div class="quiz-results-icon-wrap">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#2B6CB0" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
          <h3 class="quiz-results-title">Vocabulary Quiz Complete!</h3>
          <p class="quiz-results-subtitle">You got <strong>${this.quizScore}</strong> out of <strong>${total}</strong> correct (<strong>${percentage}%</strong>).</p>
          <div class="quiz-results-actions">
            <button class="btn btn-outline" id="vocab-retake-btn">Retake Vocabulary Quiz</button>
          </div>
        </div>
      `;

      document.getElementById("vocab-retake-btn")?.addEventListener("click", () => {
        this.quizIndex = 0;
        this.quizScore = 0;
        this.quizAnswers = [];
        this.renderVocabQuiz();
      });
      return;
    }

    const q = quizzes[this.quizIndex];
    const isAnswered = this.quizAnswers[this.quizIndex] !== undefined;
    const selectedAnswer = this.quizAnswers[this.quizIndex];

    container.innerHTML = `
      <div class="quiz-card">
        <div class="quiz-card-header">
          <div class="quiz-progress-info">
            <span class="badge badge-navy">${q.type.toUpperCase()} CHALLENGE</span>
            <span class="quiz-step-count">Question ${this.quizIndex + 1} of ${total}</span>
          </div>
          <div class="quiz-progress-bar-container">
            <div class="quiz-progress-bar-fill" style="width: ${((this.quizIndex) / total) * 100}%"></div>
          </div>
        </div>

        <div class="quiz-question-box">
          <h3 class="quiz-question-text">${q.question}</h3>
        </div>

        <div class="quiz-options-grid">
          ${q.options.map((opt, idx) => {
            let optionClass = "";
            if (isAnswered) {
              if (idx === q.correct) optionClass = "correct-opt";
              else if (idx === selectedAnswer) optionClass = "incorrect-opt";
              else optionClass = "disabled-opt";
            }
            return `
              <button class="quiz-opt-btn ${optionClass}" data-opt-idx="${idx}" ${isAnswered ? 'disabled' : ''}>
                <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
                <span class="opt-text">${opt}</span>
              </button>
            `;
          }).join("")}
        </div>

        ${isAnswered ? `
          <div class="quiz-feedback-box ${selectedAnswer === q.correct ? 'feedback-correct' : 'feedback-incorrect'}">
            <div class="feedback-text">
              <strong>${selectedAnswer === q.correct ? 'Correct!' : 'Incorrect.'}</strong>
              <p>${q.explanation}</p>
            </div>
          </div>
          <div class="quiz-action-footer">
            <button class="btn btn-primary" id="vocab-next-q-btn">
              ${this.quizIndex + 1 === total ? 'View Quiz Results' : 'Next Question'}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        ` : ''}
      </div>
    `;

    container.querySelectorAll(".quiz-opt-btn:not([disabled])").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-opt-idx"), 10);
        this.quizAnswers[this.quizIndex] = idx;
        if (idx === q.correct) this.quizScore++;
        this.renderVocabQuiz();
      });
    });

    document.getElementById("vocab-next-q-btn")?.addEventListener("click", () => {
      this.quizIndex++;
      this.renderVocabQuiz();
    });
  }
}

// Global exposure
if (typeof window !== "undefined") {
  window.WordExplorer = WordExplorer;
}

