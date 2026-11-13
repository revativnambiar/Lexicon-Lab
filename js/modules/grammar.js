/**
 * LEXICON LAB - Grammar Studio Module
 * Aligned with Course Outcome CO1: English grammar and sentence formation
 */

class GrammarStudio {
  constructor() {
    this.currentTopicId = "tenses";
    this.currentQuizIndex = 0;
    this.currentQuizScore = 0;
    this.quizAnswers = [];
    this.currentCorrectionIndex = 0;
  }

  init() {
    this.renderTopicList();
    this.renderCurrentLesson();
    this.renderSentenceCorrection();
    this.attachEvents();
  }

  attachEvents() {
    // Topic tab switching
    const topicContainer = document.getElementById("grammar-topics-list");
    if (topicContainer) {
      topicContainer.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-topic-id]");
        if (btn) {
          const topicId = btn.getAttribute("data-topic-id");
          this.switchTopic(topicId);
        }
      });
    }

    // Sentence Correction input submission
    const checkBtn = document.getElementById("sc-check-btn");
    const inputField = document.getElementById("sc-student-input");
    if (checkBtn && inputField) {
      checkBtn.addEventListener("click", () => this.checkSentenceCorrection());
      inputField.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.checkSentenceCorrection();
        }
      });
    }

    // Next / Prev sentence buttons
    const prevBtn = document.getElementById("sc-prev-btn");
    const nextBtn = document.getElementById("sc-next-btn");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => this.navigateSentence(-1));
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => this.navigateSentence(1));
    }

    // Reveal answer button
    const revealBtn = document.getElementById("sc-reveal-btn");
    if (revealBtn) {
      revealBtn.addEventListener("click", () => this.revealCorrectionAnswer());
    }
  }

  renderTopicList() {
    const listEl = document.getElementById("grammar-topics-list");
    if (!listEl || !window.GRAMMAR_DATA) return;

    const savedData = window.lexiconStorage ? window.lexiconStorage.getData() : null;
    const completedList = savedData?.grammar?.completedLessons || [];

    listEl.innerHTML = window.GRAMMAR_DATA.topics.map(topic => {
      const isActive = topic.id === this.currentTopicId;
      const isCompleted = completedList.includes(topic.id);
      const quizScore = savedData?.grammar?.quizScores?.[topic.id];

      return `
        <button class="grammar-topic-btn ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" data-topic-id="${topic.id}">
          <div class="topic-btn-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              ${this.getTopicSvgPath(topic.icon)}
            </svg>
          </div>
          <div class="topic-btn-info">
            <div class="topic-btn-title-row">
              <span class="topic-btn-title">${topic.title}</span>
              ${isCompleted ? '<span class="badge badge-success-sm"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Complete</span>' : ''}
            </div>
            <div class="topic-btn-meta">
              <span>${topic.difficulty}</span> • <span>${topic.estimatedTime}</span>
              ${quizScore ? ` • <span class="score-tag">${quizScore.score}/${quizScore.total} (${quizScore.percentage}%)</span>` : ''}
            </div>
          </div>
        </button>
      `;
    }).join("");
  }

  getTopicSvgPath(iconName) {
    switch (iconName) {
      case "clock":
        return '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>';
      case "layers":
        return '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>';
      case "file-text":
        return '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>';
      case "compass":
        return '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>';
      case "check-circle":
        return '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>';
      case "edit-3":
        return '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>';
      case "shuffle":
        return '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>';
      default:
        return '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>';
    }
  }

  switchTopic(topicId) {
    this.currentTopicId = topicId;
    this.currentQuizIndex = 0;
    this.currentQuizScore = 0;
    this.quizAnswers = [];
    this.renderTopicList();
    this.renderCurrentLesson();
  }

  renderCurrentLesson() {
    const lessonContainer = document.getElementById("grammar-lesson-view");
    if (!lessonContainer || !window.GRAMMAR_DATA) return;

    const topic = window.GRAMMAR_DATA.topics.find(t => t.id === this.currentTopicId);
    if (!topic) return;

    const sectionsHtml = topic.content.sections.map(section => `
      <div class="lesson-section-card">
        <h4 class="lesson-section-title">${section.title}</h4>
        <p class="lesson-section-desc">${section.description}</p>
        <div class="rules-grid">
          ${section.rules.map(rule => `
            <div class="rule-box">
              <div class="rule-header">
                <span class="rule-name">${rule.name}</span>
              </div>
              <div class="rule-formula-box">
                <code>${rule.formula}</code>
              </div>
              <p class="rule-usage"><strong>Usage:</strong> ${rule.usage}</p>
              <div class="rule-example">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <span><strong>Example:</strong> "${rule.example}"</span>
              </div>
              ${rule.tip ? `<div class="rule-tip"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg><span>${rule.tip}</span></div>` : ''}
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");

    lessonContainer.innerHTML = `
      <div class="lesson-header">
        <div class="lesson-header-badge-row">
          <span class="badge badge-primary">${topic.category}</span>
          <span class="badge badge-accent">${topic.difficulty}</span>
          <span class="badge badge-outline"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${topic.estimatedTime}</span>
        </div>
        <h2 class="lesson-main-title">${topic.title}</h2>
        <p class="lesson-lead-summary">${topic.content.introduction}</p>
      </div>

      <div class="lesson-body-content">
        ${sectionsHtml}
      </div>

      <div class="lesson-quiz-banner" id="lesson-quiz-container">
        <!-- Rendered by renderQuiz -->
      </div>
    `;

    this.renderQuiz();
  }

  renderQuiz() {
    const quizContainer = document.getElementById("lesson-quiz-container");
    if (!quizContainer || !window.GRAMMAR_DATA) return;

    const topic = window.GRAMMAR_DATA.topics.find(t => t.id === this.currentTopicId);
    if (!topic || !topic.quiz || topic.quiz.length === 0) return;

    const totalQuestions = topic.quiz.length;

    // Check if user has completed this quiz
    if (this.currentQuizIndex >= totalQuestions) {
      this.renderQuizResults(quizContainer, topic, totalQuestions);
      return;
    }

    const q = topic.quiz[this.currentQuizIndex];
    const isAnswered = this.quizAnswers[this.currentQuizIndex] !== undefined;
    const selectedAnswer = this.quizAnswers[this.currentQuizIndex];

    quizContainer.innerHTML = `
      <div class="quiz-card">
        <div class="quiz-card-header">
          <div class="quiz-progress-info">
            <span class="badge badge-navy">Interactive Quiz</span>
            <span class="quiz-step-count">Question ${this.currentQuizIndex + 1} of ${totalQuestions}</span>
          </div>
          <div class="quiz-progress-bar-container">
            <div class="quiz-progress-bar-fill" style="width: ${((this.currentQuizIndex) / totalQuestions) * 100}%"></div>
          </div>
        </div>

        <div class="quiz-question-box">
          <h3 class="quiz-question-text">${q.question}</h3>
        </div>

        <div class="quiz-options-grid">
          ${q.options.map((opt, idx) => {
            let optionClass = "";
            if (isAnswered) {
              if (idx === q.correct) {
                optionClass = "correct-opt";
              } else if (idx === selectedAnswer) {
                optionClass = "incorrect-opt";
              } else {
                optionClass = "disabled-opt";
              }
            }
            return `
              <button class="quiz-opt-btn ${optionClass}" data-opt-index="${idx}" ${isAnswered ? 'disabled' : ''}>
                <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
                <span class="opt-text">${opt}</span>
                ${isAnswered && idx === q.correct ? '<span class="opt-status-icon success-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></span>' : ''}
                ${isAnswered && idx === selectedAnswer && idx !== q.correct ? '<span class="opt-status-icon error-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>' : ''}
              </button>
            `;
          }).join("")}
        </div>

        ${isAnswered ? `
          <div class="quiz-feedback-box ${selectedAnswer === q.correct ? 'feedback-correct' : 'feedback-incorrect'}">
            <div class="feedback-icon">
              ${selectedAnswer === q.correct 
                ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
                : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>'
              }
            </div>
            <div class="feedback-text">
              <strong>${selectedAnswer === q.correct ? 'Brilliant! That is correct.' : 'Not quite. Here is the rule:'}</strong>
              <p>${q.explanation}</p>
            </div>
          </div>
          <div class="quiz-action-footer">
            <button class="btn btn-primary" id="quiz-next-question-btn">
              ${this.currentQuizIndex + 1 === totalQuestions ? 'View Quiz Results' : 'Next Question'}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        ` : ''}
      </div>
    `;

    // Attach option listeners
    const optBtns = quizContainer.querySelectorAll(".quiz-opt-btn:not([disabled])");
    optBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedIdx = parseInt(btn.getAttribute("data-opt-index"), 10);
        this.handleQuizAnswer(selectedIdx);
      });
    });

    const nextBtn = document.getElementById("quiz-next-question-btn");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        this.currentQuizIndex++;
        this.renderQuiz();
      });
    }
  }

  handleQuizAnswer(selectedIdx) {
    const topic = window.GRAMMAR_DATA.topics.find(t => t.id === this.currentTopicId);
    if (!topic) return;

    const q = topic.quiz[this.currentQuizIndex];
    this.quizAnswers[this.currentQuizIndex] = selectedIdx;

    if (selectedIdx === q.correct) {
      this.currentQuizScore++;
    }

    this.renderQuiz();
  }

  renderQuizResults(container, topic, total) {
    const percentage = Math.round((this.currentQuizScore / total) * 100);
    const passed = percentage >= 70;

    // Save to storage
    if (window.lexiconStorage) {
      window.lexiconStorage.saveQuizScore(topic.id, this.currentQuizScore, total);
    }

    container.innerHTML = `
      <div class="quiz-results-card ${passed ? 'quiz-passed' : 'quiz-retry'}">
        <div class="quiz-results-icon-wrap">
          ${passed 
            ? '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2B6CB0" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
            : '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C53030" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>'
          }
        </div>
        <h3 class="quiz-results-title">${passed ? 'Outstanding Work!' : 'Good Effort! Keep Practicing'}</h3>
        <p class="quiz-results-subtitle">You scored <strong>${this.currentQuizScore}</strong> out of <strong>${total}</strong> questions correctly (<strong>${percentage}%</strong>).</p>

        <div class="quiz-results-metrics">
          <div class="metric-mini-box">
            <span class="metric-mini-label">Status</span>
            <span class="metric-mini-val ${passed ? 'text-success' : 'text-warning'}">${passed ? 'Mastered' : 'Needs Review'}</span>
          </div>
          <div class="metric-mini-box">
            <span class="metric-mini-label">Score</span>
            <span class="metric-mini-val">${percentage}%</span>
          </div>
          <div class="metric-mini-box">
            <span class="metric-mini-label">Outcome Impact</span>
            <span class="metric-mini-val text-primary">+CO1 Milestone</span>
          </div>
        </div>

        <div class="quiz-results-actions">
          <button class="btn btn-outline" id="quiz-retake-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
            Retake Quiz
          </button>
          <button class="btn btn-primary" id="quiz-next-topic-btn">
            Next Lesson
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </div>
    `;

    document.getElementById("quiz-retake-btn")?.addEventListener("click", () => {
      this.currentQuizIndex = 0;
      this.currentQuizScore = 0;
      this.quizAnswers = [];
      this.renderQuiz();
    });

    document.getElementById("quiz-next-topic-btn")?.addEventListener("click", () => {
      const topics = window.GRAMMAR_DATA.topics;
      const curIdx = topics.findIndex(t => t.id === this.currentTopicId);
      const nextTopic = topics[(curIdx + 1) % topics.length];
      this.switchTopic(nextTopic.id);
      window.scrollTo({ top: document.getElementById("grammar-studio-section")?.offsetTop - 80, behavior: 'smooth' });
    });
  }

  // --- Sentence Correction Interactive Engine ---
  renderSentenceCorrection() {
    const list = window.GRAMMAR_DATA?.sentenceCorrections || [];
    if (list.length === 0) return;

    const currentItem = list[this.currentCorrectionIndex];
    const total = list.length;

    // Elements
    const badgeIndex = document.getElementById("sc-index-badge");
    const categoryBadge = document.getElementById("sc-category-badge");
    const sentenceText = document.getElementById("sc-sentence-text");
    const inputField = document.getElementById("sc-student-input");
    const feedbackBox = document.getElementById("sc-feedback-box");
    const progressFill = document.getElementById("sc-progress-fill");

    if (badgeIndex) badgeIndex.innerText = `Challenge ${this.currentCorrectionIndex + 1} of ${total}`;
    if (categoryBadge) categoryBadge.innerText = currentItem.category;
    if (sentenceText) sentenceText.innerText = `"${currentItem.incorrect}"`;
    if (inputField) {
      inputField.value = "";
      inputField.focus();
    }
    if (feedbackBox) {
      feedbackBox.className = "sc-feedback-container hidden";
      feedbackBox.innerHTML = "";
    }
    if (progressFill) {
      const solvedList = window.lexiconStorage ? window.lexiconStorage.getData().grammar.solvedCorrections : [];
      const solvedCount = solvedList.length;
      progressFill.style.width = `${(solvedCount / total) * 100}%`;
      const counterText = document.getElementById("sc-solved-count");
      if (counterText) counterText.innerText = `${solvedCount}/${total} Solved`;
    }
  }

  normalizeSentence(text) {
    return text
      .trim()
      .replace(/\s+/g, " ")
      .replace(/[.?!]+$/, "")
      .toLowerCase();
  }

  checkSentenceCorrection() {
    const list = window.GRAMMAR_DATA?.sentenceCorrections || [];
    const item = list[this.currentCorrectionIndex];
    const inputField = document.getElementById("sc-student-input");
    const feedbackBox = document.getElementById("sc-feedback-box");
    if (!inputField || !feedbackBox || !item) return;

    const userText = inputField.value.trim();
    if (!userText) {
      if (window.showToast) window.showToast("Please type your correction before checking.", "warning");
      return;
    }

    const normalizedUser = this.normalizeSentence(userText);
    const isCorrect = item.acceptedAnswers.some(ans => this.normalizeSentence(ans) === normalizedUser);

    feedbackBox.className = `sc-feedback-container ${isCorrect ? 'sc-correct' : 'sc-incorrect'}`;

    if (isCorrect) {
      if (window.lexiconStorage) {
        window.lexiconStorage.saveSentenceCorrection(item.id);
      }
      feedbackBox.innerHTML = `
        <div class="sc-feedback-header">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <h4>Perfect! Your sentence is grammatically correct.</h4>
        </div>
        <div class="sc-comparison-grid">
          <div class="sc-compare-col">
            <span class="sc-col-label text-error">Original (Faulty):</span>
            <p class="sc-compare-sentence">${item.incorrect}</p>
          </div>
          <div class="sc-compare-col">
            <span class="sc-col-label text-success">Your Mastered Correction:</span>
            <p class="sc-compare-sentence">${userText}</p>
          </div>
        </div>
        <div class="sc-explanation-card">
          <p><strong>Rule Explained (${item.errorType}):</strong> ${item.explanation}</p>
        </div>
      `;
      if (window.showToast) window.showToast("Sentence corrected successfully! +CO1 progress updated.", "success");
    } else {
      feedbackBox.innerHTML = `
        <div class="sc-feedback-header">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
          <h4>Not quite right yet. Keep refining!</h4>
        </div>
        <p class="sc-hint-text"><strong>Grammar Hint:</strong> Focus on <em>${item.category}</em> and <em>${item.errorType}</em>.</p>
        <div class="sc-retry-actions">
          <button class="btn btn-outline-sm" onclick="document.getElementById('sc-student-input').focus()">Try Another Correction</button>
          <button class="btn btn-text-sm" id="sc-show-solution-btn">Show Correct Solution</button>
        </div>
      `;

      document.getElementById("sc-show-solution-btn")?.addEventListener("click", () => {
        this.revealCorrectionAnswer();
      });
    }

    // Refresh progress fill
    const progressFill = document.getElementById("sc-progress-fill");
    if (progressFill && window.lexiconStorage) {
      const solvedCount = window.lexiconStorage.getData().grammar.solvedCorrections.length;
      progressFill.style.width = `${(solvedCount / list.length) * 100}%`;
      const counterText = document.getElementById("sc-solved-count");
      if (counterText) counterText.innerText = `${solvedCount}/${list.length} Solved`;
    }
  }

  revealCorrectionAnswer() {
    const list = window.GRAMMAR_DATA?.sentenceCorrections || [];
    const item = list[this.currentCorrectionIndex];
    const feedbackBox = document.getElementById("sc-feedback-box");
    if (!feedbackBox || !item) return;

    feedbackBox.className = "sc-feedback-container sc-solution-revealed";
    feedbackBox.innerHTML = `
      <div class="sc-feedback-header">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        <h4>Grammar Model Solution</h4>
      </div>
      <div class="sc-comparison-grid">
        <div class="sc-compare-col">
          <span class="sc-col-label text-error">Original (Incorrect):</span>
          <p class="sc-compare-sentence">${item.incorrect}</p>
        </div>
        <div class="sc-compare-col">
          <span class="sc-col-label text-success">Accredited Correction:</span>
          <p class="sc-compare-sentence">${item.correctSentence}</p>
        </div>
      </div>
      <div class="sc-explanation-card">
        <p><strong>Rule Explained (${item.errorType}):</strong> ${item.explanation}</p>
      </div>
    `;
  }

  navigateSentence(direction) {
    const list = window.GRAMMAR_DATA?.sentenceCorrections || [];
    if (list.length === 0) return;
    this.currentCorrectionIndex = (this.currentCorrectionIndex + direction + list.length) % list.length;
    this.renderSentenceCorrection();
  }
}

// Instantiate globally
if (typeof window !== "undefined") {
  window.GrammarStudio = GrammarStudio;
}

