/**
 * LEXICON LAB - Student Dashboard Module
 * Visualizes real student progress, metrics, course outcomes (CO1, CO4, CO5),
 * and chronological activity history.
 */

class StudentDashboard {
  constructor() {}

  init() {
    this.renderDashboard();
    this.attachEvents();
  }

  attachEvents() {
    // Reset Data Button
    const resetBtn = document.getElementById("dash-reset-progress-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to reset all your progress? This will clear quiz scores, saved drafts, and speech records.")) {
          if (window.lexiconStorage) {
            window.lexiconStorage.resetAllData();
            this.renderDashboard();
            if (window.showToast) window.showToast("Progress has been reset for a clean start.", "info");
          }
        }
      });
    }

    // Edit Name
    const editNameBtn = document.getElementById("dash-edit-name-btn");
    if (editNameBtn) {
      editNameBtn.addEventListener("click", () => {
        const currentData = window.lexiconStorage.getData();
        const newName = prompt("Enter your student name:", currentData.studentName || "Student Scholar");
        if (newName && newName.trim()) {
          currentData.studentName = newName.trim();
          window.lexiconStorage.saveData(currentData);
          this.renderDashboard();
          if (window.showToast) window.showToast(`Updated student profile name to ${newName.trim()}`, "success");
        }
      });
    }

    // Listen for data update events
    window.addEventListener("lexicon-data-updated", () => {
      this.renderDashboard();
    });
  }

  renderDashboard() {
    if (!window.lexiconStorage) return;

    const data = window.lexiconStorage.getData();
    const progress = window.lexiconStorage.getCalculatedProgress();

    // Welcome Header
    const nameEl = document.getElementById("dash-student-name");
    const dateEl = document.getElementById("dash-current-date");
    const overallProgressPercent = document.getElementById("dash-overall-percent");
    const overallProgressBar = document.getElementById("dash-overall-bar");

    if (nameEl) nameEl.innerText = data.studentName || "Student Scholar";
    if (dateEl) dateEl.innerText = new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    if (overallProgressPercent) overallProgressPercent.innerText = `${progress.overallProgress}%`;
    if (overallProgressBar) overallProgressBar.style.width = `${progress.overallProgress}%`;

    // Metric Summary Cards
    const grammarLessonsEl = document.getElementById("metric-grammar-lessons");
    const grammarAccuracyEl = document.getElementById("metric-grammar-accuracy");
    const correctionsEl = document.getElementById("metric-corrections");
    const vocabCountEl = document.getElementById("metric-vocab-mastered");
    const readingPassagesEl = document.getElementById("metric-reading-passages");
    const summariesEl = document.getElementById("metric-summaries-submitted");
    const writingWordsEl = document.getElementById("metric-writing-words");
    const speechesEl = document.getElementById("metric-speeches-prepared");

    if (grammarLessonsEl) grammarLessonsEl.innerText = `${progress.co1.metrics.lessonsCompleted}/7`;
    if (grammarAccuracyEl) grammarAccuracyEl.innerText = `${progress.co1.metrics.accuracyAverage}%`;
    if (correctionsEl) correctionsEl.innerText = `${progress.co1.metrics.correctionsSolved}/15`;
    if (vocabCountEl) vocabCountEl.innerText = `${progress.co1.metrics.wordsMastered}`;
    if (readingPassagesEl) readingPassagesEl.innerText = `${progress.co4.metrics.passagesRead}/5`;
    if (summariesEl) summariesEl.innerText = `${progress.co4.metrics.summariesSubmitted}`;
    if (writingWordsEl) writingWordsEl.innerText = `${progress.rawCounts.totalWords}`;
    if (speechesEl) speechesEl.innerText = `${progress.co5.metrics.speechesPrepared}`;

    // Course Outcomes Progress Bars
    this.renderCourseOutcomes(progress);

    // Activity Log
    this.renderActivityLog(data.activityLog || []);
  }

  renderCourseOutcomes(progress) {
    const co1Bar = document.getElementById("co1-progress-bar");
    const co1Percent = document.getElementById("co1-progress-percent");
    const co4Bar = document.getElementById("co4-progress-bar");
    const co4Percent = document.getElementById("co4-progress-percent");
    const co5Bar = document.getElementById("co5-progress-bar");
    const co5Percent = document.getElementById("co5-progress-percent");

    if (co1Bar) co1Bar.style.width = `${progress.co1.percentage}%`;
    if (co1Percent) co1Percent.innerText = `${progress.co1.percentage}%`;

    if (co4Bar) co4Bar.style.width = `${progress.co4.percentage}%`;
    if (co4Percent) co4Percent.innerText = `${progress.co4.percentage}%`;

    if (co5Bar) co5Bar.style.width = `${progress.co5.percentage}%`;
    if (co5Percent) co5Percent.innerText = `${progress.co5.percentage}%`;
  }

  renderActivityLog(logs) {
    const container = document.getElementById("dash-activity-log-list");
    if (!container) return;

    if (logs.length === 0) {
      container.innerHTML = `<p class="text-muted text-sm">No activity recorded yet.</p>`;
      return;
    }

    container.innerHTML = logs.slice(0, 8).map(log => {
      let iconColor = "text-primary";
      if (log.type === "grammar") iconColor = "text-accent";
      else if (log.type === "reading") iconColor = "text-success";
      else if (log.type === "speech") iconColor = "text-navy";

      return `
        <div class="activity-timeline-item">
          <div class="timeline-dot ${log.type}"></div>
          <div class="timeline-content">
            <div class="timeline-title-row">
              <span class="timeline-title">${log.title}</span>
              <span class="timeline-time">${new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <p class="timeline-desc">${log.description}</p>
          </div>
        </div>
      `;
    }).join("");
  }
}

// Global exposure
if (typeof window !== "undefined") {
  window.StudentDashboard = StudentDashboard;
}

