/**
 * LEXICON LAB - Core Application Orchestrator & Router
 * Tagline: Learn. Explore. Express.
 */

class LexiconApp {
  constructor() {
    this.currentRoute = "home";
    this.routes = ["home", "grammar", "vocabulary", "reading", "writing", "speech", "dashboard"];
  }

  init() {
    this.setupToastSystem();
    this.setupRouter();
    this.setupMobileMenu();
    this.setupCourseOutcomeModal();
    this.initModules();
    this.updateNavbarBadges();

    // Listen for storage updates
    window.addEventListener("lexicon-data-updated", () => {
      this.updateNavbarBadges();
    });
  }

  initModules() {
    // 1. Grammar Studio
    if (window.GrammarStudio) {
      window.grammarStudio = new window.GrammarStudio();
      window.grammarStudio.init();
    }

    // 2. Word Explorer
    if (window.WordExplorer) {
      window.wordExplorer = new window.WordExplorer();
      window.wordExplorer.init();
    }

    // 3. Reading Hub
    if (window.ReadingHub) {
      window.readingHub = new window.ReadingHub();
      window.readingHub.init();
    }

    // 4. Writing Studio
    if (window.WritingStudio) {
      window.writingStudio = new window.WritingStudio();
      window.writingStudio.init();
    }

    // 5. Speech Corner
    if (window.SpeechCorner) {
      window.speechCorner = new window.SpeechCorner();
      window.speechCorner.init();
    }

    // 6. Student Dashboard
    if (window.StudentDashboard) {
      window.studentDashboard = new window.StudentDashboard();
      window.studentDashboard.init();
    }
  }

  setupRouter() {
    // Handle initial hash
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (this.routes.includes(hash)) {
        this.navigateTo(hash, false);
      } else {
        this.navigateTo("home", false);
      }
    };

    window.addEventListener("hashchange", handleHash);
    handleHash();

    // Intercept clicks on internal data-nav links
    document.addEventListener("click", (e) => {
      const navLink = e.target.closest("[data-nav]");
      if (navLink) {
        e.preventDefault();
        const targetRoute = navLink.getAttribute("data-nav");
        this.navigateTo(targetRoute);
      }
    });
  }

  navigateTo(routeName, updateHash = true) {
    if (!this.routes.includes(routeName)) routeName = "home";
    this.currentRoute = routeName;

    if (updateHash) {
      window.location.hash = routeName;
    }

    // Toggle view sections
    this.routes.forEach(route => {
      const viewEl = document.getElementById(`view-${route}`);
      if (viewEl) {
        if (route === routeName) {
          viewEl.classList.remove("hidden-view");
          viewEl.classList.add("active-view");
        } else {
          viewEl.classList.remove("active-view");
          viewEl.classList.add("hidden-view");
        }
      }
    });

    // Update nav links active class
    document.querySelectorAll(".nav-link").forEach(link => {
      const target = link.getAttribute("data-nav");
      link.classList.toggle("active", target === routeName);
    });

    // Close mobile menu if open
    this.closeMobileMenu();

    // Scroll window smoothly to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Refresh dashboard if navigating to dashboard
    if (routeName === "dashboard" && window.studentDashboard) {
      window.studentDashboard.renderDashboard();
    }
  }

  setupMobileMenu() {
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const menuEl = document.getElementById("mobile-nav-drawer");
    const closeBtn = document.getElementById("mobile-nav-close");

    if (toggleBtn && menuEl) {
      toggleBtn.addEventListener("click", () => {
        menuEl.classList.toggle("open");
      });
    }

    if (closeBtn && menuEl) {
      closeBtn.addEventListener("click", () => {
        this.closeMobileMenu();
      });
    }
  }

  closeMobileMenu() {
    const menuEl = document.getElementById("mobile-nav-drawer");
    if (menuEl) {
      menuEl.classList.remove("open");
    }
  }

  setupCourseOutcomeModal() {
    const openBtns = document.querySelectorAll(".open-co-modal-btn");
    const modalEl = document.getElementById("co-modal");
    const closeBtn = document.getElementById("co-modal-close");

    openBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (modalEl) modalEl.classList.add("open");
      });
    });

    if (closeBtn && modalEl) {
      closeBtn.addEventListener("click", () => {
        modalEl.classList.remove("open");
      });
    }

    // Close on overlay click
    if (modalEl) {
      modalEl.addEventListener("click", (e) => {
        if (e.target === modalEl) {
          modalEl.classList.remove("open");
        }
      });
    }
  }

  setupToastSystem() {
    const toastContainer = document.getElementById("toast-container");
    window.showToast = (message, type = "info") => {
      if (!toastContainer) return;

      const toast = document.createElement("div");
      toast.className = `toast toast-${type}`;
      
      let iconSvg = "";
      if (type === "success") {
        iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>';
      } else if (type === "warning") {
        iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
      } else if (type === "error") {
        iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';
      } else {
        iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
      }

      toast.innerHTML = `
        <span class="toast-icon">${iconSvg}</span>
        <span class="toast-msg">${message}</span>
      `;

      toastContainer.appendChild(toast);

      setTimeout(() => {
        toast.classList.add("toast-fade-out");
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    };
  }

  updateNavbarBadges() {
    if (!window.lexiconStorage) return;
    const progress = window.lexiconStorage.getCalculatedProgress();
    const navScoreBadge = document.getElementById("nav-progress-badge");
    if (navScoreBadge) {
      navScoreBadge.innerText = `${progress.overallProgress}% Complete`;
    }
  }
}

// Instantiate on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.lexiconApp = new LexiconApp();
  window.lexiconApp.init();
});

