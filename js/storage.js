/**
 * LEXICON LAB - Storage & Progress State Management
 * Handles persistent student state, real-time metrics calculation,
 * course outcome alignment (CO1, CO4, CO5), and activity logging.
 */

class LexiconStorage {
  constructor() {
    this.STORAGE_KEY = "lexicon_lab_student_data_v1";
    this.init();
  }

  getDefaultData() {
    return {
      studentName: "Student Scholar",
      lastActive: new Date().toISOString(),
      
      // CO1: English grammar and sentence formation
      grammar: {
        completedLessons: [],       // Array of topic IDs completed
        quizScores: {},             // { "tenses": { score: 4, total: 4, date: "..." } }
        solvedCorrections: [],      // Array of sentence correction IDs solved
        accuracyAverage: 0
      },
      vocabulary: {
        masteredWords: [],          // Array of word IDs bookmarked or reviewed
        quizScores: [],             // Array of { date, score, total }
        searchHistory: []
      },
      
      // CO4: Summarizing information
      reading: {
        completedPassages: [],      // Array of passage IDs read
        comprehensionScores: {},    // { "tech-ai-frontier": { score: 3, total: 3 } }
        summaries: []               // Array of { passageId, passageTitle, summaryText, wordCount, score, feedback, date }
      },
      
      // CO1: Writing skills and sentence formation
      writing: {
        drafts: [],                 // Array of { id, category, title, content, wordCount, date, readability }
        totalWordsWritten: 0
      },
      
      // CO5: Speech delivery
      speech: {
        preparedSpeeches: [],       // Array of { id, topic, duration, level, style, wordCount, date }
        deliveryMinutesPracticed: 0
      },
      
      // Global Activity Log
      activityLog: [
        {
          id: "act-init",
          type: "system",
          title: "Enrolled in Lexicon Lab",
          description: "Welcome to your interactive English learning journey.",
          timestamp: new Date().toISOString()
        }
      ]
    };
  }

  init() {
    try {
      const existing = localStorage.getItem(this.STORAGE_KEY);
      if (!existing) {
        this.saveData(this.getDefaultData());
      }
    } catch (e) {
      console.warn("localStorage not accessible, fallback to memory:", e);
      this._memoryData = this.getDefaultData();
    }
  }

  getData() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.warn("Error reading from localStorage:", e);
    }
    return this._memoryData || this.getDefaultData();
  }

  saveData(data) {
    data.lastActive = new Date().toISOString();
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn("Error saving to localStorage:", e);
      this._memoryData = data;
    }
    // Dispatch custom event for real-time UI updates
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("lexicon-data-updated", { detail: data }));
    }
  }

  logActivity(type, title, description) {
    const data = this.getData();
    if (!data.activityLog) data.activityLog = [];
    
    data.activityLog.unshift({
      id: "act-" + Date.now() + "-" + Math.random().toString(36).substr(2, 4),
      type,
      title,
      description,
      timestamp: new Date().toISOString()
    });

    // Keep log to max 30 items
    if (data.activityLog.length > 30) {
      data.activityLog = data.activityLog.slice(0, 30);
    }

    this.saveData(data);
  }

  // --- Grammar Actions (CO1) ---
  saveQuizScore(topicId, score, total) {
    const data = this.getData();
    if (!data.grammar.quizScores) data.grammar.quizScores = {};
    data.grammar.quizScores[topicId] = {
      score,
      total,
      percentage: Math.round((score / total) * 100),
      date: new Date().toISOString()
    };
    if (!data.grammar.completedLessons.includes(topicId)) {
      data.grammar.completedLessons.push(topicId);
    }

    // Recalculate average grammar accuracy
    const scores = Object.values(data.grammar.quizScores);
    const avg = scores.reduce((acc, curr) => acc + (curr.score / curr.total), 0) / (scores.length || 1);
    data.grammar.accuracyAverage = Math.round(avg * 100);

    this.saveData(data);
    this.logActivity("grammar", `Completed Grammar Quiz: ${topicId.toUpperCase()}`, `Scored ${score}/${total} (${Math.round((score / total) * 100)}%)`);
  }

  saveSentenceCorrection(correctionId) {
    const data = this.getData();
    if (!data.grammar.solvedCorrections) data.grammar.solvedCorrections = [];
    if (!data.grammar.solvedCorrections.includes(correctionId)) {
      data.grammar.solvedCorrections.push(correctionId);
      this.saveData(data);
      this.logActivity("grammar", "Solved Sentence Correction", `Mastered sentence challenge #${correctionId}`);
    }
  }

  // --- Vocabulary Actions (CO1) ---
  toggleMasteredWord(wordId) {
    const data = this.getData();
    if (!data.vocabulary.masteredWords) data.vocabulary.masteredWords = [];
    const idx = data.vocabulary.masteredWords.indexOf(wordId);
    let added = false;
    if (idx > -1) {
      data.vocabulary.masteredWords.splice(idx, 1);
    } else {
      data.vocabulary.masteredWords.push(wordId);
      added = true;
    }
    this.saveData(data);
    if (added) {
      this.logActivity("vocabulary", "Mastered Vocabulary Word", `Added '${wordId}' to your active vocabulary bank`);
    }
    return added;
  }

  saveVocabQuizScore(score, total) {
    const data = this.getData();
    if (!data.vocabulary.quizScores) data.vocabulary.quizScores = [];
    data.vocabulary.quizScores.push({
      score,
      total,
      percentage: Math.round((score / total) * 100),
      date: new Date().toISOString()
    });
    this.saveData(data);
    this.logActivity("vocabulary", "Completed Vocabulary Quiz", `Achieved ${score}/${total} correct`);
  }

  // --- Reading & Summary Actions (CO4) ---
  saveComprehensionScore(passageId, passageTitle, score, total) {
    const data = this.getData();
    if (!data.reading.comprehensionScores) data.reading.comprehensionScores = {};
    data.reading.comprehensionScores[passageId] = {
      score,
      total,
      date: new Date().toISOString()
    };
    if (!data.reading.completedPassages.includes(passageId)) {
      data.reading.completedPassages.push(passageId);
    }
    this.saveData(data);
    this.logActivity("reading", `Completed Reading Passage: ${passageTitle}`, `Answered ${score}/${total} comprehension questions correctly`);
  }

  saveSummary(passageId, passageTitle, summaryText, wordCount, scoreData) {
    const data = this.getData();
    if (!data.reading.summaries) data.reading.summaries = [];
    
    const summaryEntry = {
      id: "sum-" + Date.now(),
      passageId,
      passageTitle,
      summaryText,
      wordCount,
      score: scoreData.score,
      maxScore: scoreData.maxScore,
      percentage: scoreData.percentage,
      feedback: scoreData.feedback,
      keyPointsMatched: scoreData.matchedPoints,
      date: new Date().toISOString()
    };

    data.reading.summaries.unshift(summaryEntry);
    if (!data.reading.completedPassages.includes(passageId)) {
      data.reading.completedPassages.push(passageId);
    }

    this.saveData(data);
    this.logActivity("reading", `Submitted Summary: ${passageTitle}`, `Summary evaluated with score of ${scoreData.percentage}% (${wordCount} words)`);
    return summaryEntry;
  }

  // --- Writing Actions (CO1) ---
  saveWritingDraft(category, title, content, wordCount, readabilityScore) {
    const data = this.getData();
    if (!data.writing.drafts) data.writing.drafts = [];
    
    // Check if updating existing draft by title and category
    const existingIndex = data.writing.drafts.findIndex(d => d.title.trim().toLowerCase() === title.trim().toLowerCase() && d.category === category);
    
    const draft = {
      id: existingIndex > -1 ? data.writing.drafts[existingIndex].id : "draft-" + Date.now(),
      category,
      title: title || "Untitled Draft",
      content,
      wordCount,
      readabilityScore,
      updatedAt: new Date().toISOString()
    };

    if (existingIndex > -1) {
      data.writing.drafts[existingIndex] = draft;
    } else {
      data.writing.drafts.unshift(draft);
    }

    // Update total words written counter
    data.writing.totalWordsWritten = data.writing.drafts.reduce((acc, d) => acc + (d.wordCount || 0), 0);

    this.saveData(data);
    this.logActivity("writing", `Saved Writing Draft: ${draft.title}`, `Categorized under ${category} (${wordCount} words)`);
    return draft;
  }

  deleteWritingDraft(draftId) {
    const data = this.getData();
    if (!data.writing.drafts) return;
    data.writing.drafts = data.writing.drafts.filter(d => d.id !== draftId);
    data.writing.totalWordsWritten = data.writing.drafts.reduce((acc, d) => acc + (d.wordCount || 0), 0);
    this.saveData(data);
  }

  // --- Speech Actions (CO5) ---
  savePreparedSpeech(speechObject) {
    const data = this.getData();
    if (!data.speech.preparedSpeeches) data.speech.preparedSpeeches = [];

    const speechRecord = {
      id: "sp-" + Date.now(),
      topic: speechObject.topic,
      duration: speechObject.durationMinutes,
      level: speechObject.level,
      style: speechObject.style,
      wordCount: speechObject.wordCount,
      estimatedDeliveryTime: speechObject.estimatedDeliveryTime,
      sections: speechObject.sections,
      fullSpeech: speechObject.fullSpeech,
      date: new Date().toISOString()
    };

    data.speech.preparedSpeeches.unshift(speechRecord);
    data.speech.deliveryMinutesPracticed += parseInt(speechObject.durationMinutes, 10) || 2;

    this.saveData(data);
    this.logActivity("speech", `Prepared ${speechObject.durationMinutes}-Min Speech: ${speechObject.topic}`, `Styled as ${speechObject.style} (${speechObject.level} level)`);
    return speechRecord;
  }

  // --- Progress & Analytics Calculator ---
  getCalculatedProgress() {
    const data = this.getData();

    // 1. CO1 - Grammar & Vocabulary (Target: 7 grammar topics, 15 sentence corrections, 10 mastered words, 2 writing drafts)
    const grammarLessonsCount = (data.grammar?.completedLessons || []).length;
    const sentenceCorrectionsCount = (data.grammar?.solvedCorrections || []).length;
    const masteredWordsCount = (data.vocabulary?.masteredWords || []).length;
    const writingDraftsCount = (data.writing?.drafts || []).length;
    
    const co1GrammarWeight = Math.min(100, Math.round((grammarLessonsCount / 7) * 40));
    const co1CorrectionWeight = Math.min(100, Math.round((sentenceCorrectionsCount / 10) * 30));
    const co1VocabWeight = Math.min(100, Math.round((masteredWordsCount / 8) * 15));
    const co1WritingWeight = Math.min(100, Math.round((writingDraftsCount / 2) * 15));
    const co1Total = Math.min(100, co1GrammarWeight + co1CorrectionWeight + co1VocabWeight + co1WritingWeight);

    // 2. CO4 - Summarizing Information (Target: 5 reading passages, 5 summaries submitted)
    const passagesReadCount = (data.reading?.completedPassages || []).length;
    const summariesSubmittedCount = (data.reading?.summaries || []).length;
    
    const co4PassageWeight = Math.min(100, Math.round((passagesReadCount / 5) * 40));
    const co4SummaryWeight = Math.min(100, Math.round((summariesSubmittedCount / 3) * 60));
    const co4Total = Math.min(100, co4PassageWeight + co4SummaryWeight);

    // 3. CO5 - Speech Delivery (Target: 3 speeches prepared across styles)
    const speechesPreparedCount = (data.speech?.preparedSpeeches || []).length;
    const co5Total = Math.min(100, Math.round((speechesPreparedCount / 3) * 100));

    // Overall Platform Completion Score (Weighted across CO1, CO4, CO5)
    const overallProgress = Math.min(100, Math.round((co1Total * 0.4) + (co4Total * 0.3) + (co5Total * 0.3)));

    return {
      overallProgress,
      co1: {
        title: "CO1: English Grammar & Sentence Formation",
        description: "Grammar Studio quizzes, Sentence Corrections, Vocabulary mastery, and Writing composition.",
        percentage: co1Total,
        metrics: {
          lessonsCompleted: grammarLessonsCount,
          totalLessons: 7,
          correctionsSolved: sentenceCorrectionsCount,
          totalCorrections: 15,
          accuracyAverage: data.grammar?.accuracyAverage || 0,
          wordsMastered: masteredWordsCount,
          draftsSaved: writingDraftsCount
        }
      },
      co4: {
        title: "CO4: Summarizing Information",
        description: "Reading comprehension passages and dedicated summary writing activities with rubric feedback.",
        percentage: co4Total,
        metrics: {
          passagesRead: passagesReadCount,
          totalPages: 5,
          summariesSubmitted: summariesSubmittedCount,
          averageSummaryScore: this.getAverageSummaryScore(data.reading?.summaries || [])
        }
      },
      co5: {
        title: "CO5: Speech Delivery",
        description: "Custom speech synthesis across durations and styles, rhetorical structuring, and delivery guidance.",
        percentage: co5Total,
        metrics: {
          speechesPrepared: speechesPreparedCount,
          deliveryMinutesPracticed: data.speech?.deliveryMinutesPracticed || 0
        }
      },
      rawCounts: {
        grammarQuizzes: Object.keys(data.grammar?.quizScores || {}).length,
        sentenceCorrections: sentenceCorrectionsCount,
        wordsMastered: masteredWordsCount,
        readingPassages: passagesReadCount,
        summaries: summariesSubmittedCount,
        writingDrafts: writingDraftsCount,
        totalWords: data.writing?.totalWordsWritten || 0,
        speeches: speechesPreparedCount
      }
    };
  }

  getAverageSummaryScore(summaries) {
    if (!summaries || summaries.length === 0) return 0;
    const sum = summaries.reduce((acc, curr) => acc + (curr.percentage || 0), 0);
    return Math.round(sum / summaries.length);
  }

  resetAllData() {
    const cleanData = this.getDefaultData();
    this.saveData(cleanData);
    this.logActivity("system", "Progress Reset", "Student learning records and activity state have been cleared.");
    return cleanData;
  }
}

// Global instance
if (typeof window !== "undefined") {
  window.LexiconStorage = LexiconStorage;
  window.lexiconStorage = new LexiconStorage();
}

