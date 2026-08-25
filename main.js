/**
 * PQRS — Prajna Quest Research Solutions
 * Interactive Engine with Scroll-Expansion Hero Animation & Expandable Nav Hub
 */

const PQRS_PHONE = "917799956799";

// ==========================================================================
// 1. 12 SERVICES DATA (Simple, Plain-Language Copywriting)
// ==========================================================================
const MODULE_DATA = {
  1: {
    num: "01",
    title: "Topic Selection & Research Gap",
    desc: "We help you discover a clear, original, and approved research topic that fits your university guidelines and timeline.",
    deliverables: [
      "Comparative Research Gap Matrix",
      "Topic Novelty & Feasibility Assessment",
      "Draft Problem Statement for Committee Review",
      "Initial 10–15 landmark foundational citations"
    ]
  },
  2: {
    num: "02",
    title: "Literature Review",
    desc: "A comprehensive and organized review of all relevant academic papers to establish a rock-solid foundation for your research.",
    deliverables: [
      "Organized Literature Synthesis Table",
      "Critical review of 50–100+ peer-reviewed papers",
      "Clear summary of theoretical voids in current literature",
      "Complete bibliography formatted in Mendeley or Zotero"
    ]
  },
  3: {
    num: "03",
    title: "Research Proposal",
    desc: "A well-structured research proposal with clear objectives, testable hypotheses, and an actionable methodology.",
    deliverables: [
      "Clear Problem Statement & Research Objectives",
      "Hypotheses Framework & Conceptual Model",
      "Step-by-step Methodology Blueprint",
      "Chapter Work Plan & Timeline"
    ]
  },
  4: {
    num: "04",
    title: "Synopsis Writing",
    desc: "A concise, university-compliant synopsis summarizing your entire study for quick institutional approval.",
    deliverables: [
      "Synopsis formatted to your university's exact layout",
      "Executive summary of research design and data methods",
      "Summary of expected contributions and outcomes",
      "Pre-defense slide deck preparation support"
    ]
  },
  5: {
    num: "05",
    title: "Research Methodology",
    desc: "Practical study design covering quantitative, qualitative, or mixed methods with accurate sample size planning.",
    deliverables: [
      "Clear research paradigm & epistemological framework",
      "Sample size calculation and statistical power justification",
      "Reliability & validity measurement protocol",
      "Ethical clearance and compliance guidance"
    ]
  },
  6: {
    num: "06",
    title: "Data Collection Support",
    desc: "Assistance with survey questionnaire design, Likert scale formulation, and primary/secondary data gathering.",
    deliverables: [
      "Custom questionnaire and survey scale design",
      "Pilot study guidance & Cronbach's Alpha check",
      "Secondary data curation guidelines",
      "Data cleaning, coding, and preparation manual"
    ]
  },
  7: {
    num: "07",
    title: "Data & Statistical Analysis",
    desc: "Accurate statistical computations in SPSS, AMOS, Excel, R, or Python explained in simple, easy-to-defend terms.",
    deliverables: [
      "Descriptive, correlation, and regression analysis",
      "Structural Equation Modeling (SEM) & Factor Analysis",
      "High-resolution formatted statistical charts and tables",
      "Plain-language explanation of all statistical findings"
    ]
  },
  8: {
    num: "08",
    title: "Results & Discussion",
    desc: "Clear interpretation connecting your statistical numbers back to your research questions and literature.",
    deliverables: [
      "Hypothesis acceptance/rejection summary table",
      "Triangulation of findings with existing research",
      "Theoretical and practical implications write-up",
      "Study limitations and recommendations for future research"
    ]
  },
  9: {
    num: "09",
    title: "Thesis Writing",
    desc: "Complete chapter-by-chapter drafting with logical flow, clear academic voice, and smooth transitions.",
    deliverables: [
      "Complete 5 or 6 chapter thesis drafts",
      "Clear, professional academic writing with zero jargon clutter",
      "Integration of tables, figures, and accurate citations",
      "Revisions based on your supervisor's review feedback"
    ]
  },
  10: {
    num: "10",
    title: "Referencing & Formatting",
    desc: "Flawless formatting in APA, Harvard, Chicago, or your university's margin handbook with zero layout errors.",
    deliverables: [
      "100% In-text citation to bibliography cross-matching",
      "Pagination, font hierarchy, and margin alignment",
      "Automated Table of Contents, Figures, and Tables",
      "EndNote / Mendeley library export"
    ]
  },
  11: {
    num: "11",
    title: "Plagiarism Check",
    desc: "Official Turnitin similarity verification ensuring 100% original, verified academic writing.",
    deliverables: [
      "Official Turnitin Similarity Index report",
      "Sentence-by-sentence originality check",
      "Contextual paraphrasing to reduce accidental matches",
      "Final verified originality report"
    ]
  },
  12: {
    num: "12",
    title: "Publication Support",
    desc: "Complete guidance to publish your research papers in recognized peer-reviewed journals.",
    deliverables: [
      "Journal shortlist matched to your study's scope",
      "Manuscript conversion to target journal author guidelines",
      "Cover letter and submission support",
      "Rebuttal letter formulation for reviewer comments"
    ]
  }
};

// ==========================================================================
// 2. SCROLL-EXPANSION HERO ANIMATION (Full Parity & Safe Fallback)
// ==========================================================================
function initScrollExpansionHero() {
  try {
    const card = document.getElementById("scroll-expand-card");
    const bgLayer = document.getElementById("hero-bg-layer");
    const line1 = document.getElementById("hero-title-line-1");
    const line2 = document.getElementById("hero-title-line-2");
    const badge = document.getElementById("hero-badge");
    const leadText = document.getElementById("hero-lead-text");
    const ctaCluster = document.getElementById("hero-cta-cluster");
    const expandImg = document.getElementById("hero-expand-img");
    const expandOverlay = document.getElementById("hero-expand-overlay");
    const metricsStrip = document.getElementById("hero-metrics-strip");

    if (!card) return;

    let scrollProgress = 0;
    let targetProgress = 0;
    let animationFrameId = null;

    function renderProgress(progress) {
      const isMobile = window.innerWidth < 768;
      
      const baseWidth = isMobile ? 280 : 340;
      const targetMaxWidth = Math.min(window.innerWidth * 0.92, 1150);
      const expandWidth = Math.max(targetMaxWidth - baseWidth, 100);
      const baseHeight = isMobile ? 320 : 380;
      const expandHeight = isMobile ? 180 : 240;

      const currentWidth = Math.min(baseWidth + progress * expandWidth, window.innerWidth * 0.95);
      const currentHeight = Math.min(baseHeight + progress * expandHeight, window.innerHeight * 0.85);

      card.style.width = `${currentWidth}px`;
      card.style.height = `${currentHeight}px`;
      card.style.transform = `scale(${1 + progress * 0.03})`;

      if (expandImg) {
        expandImg.style.transform = `scale(${1 + progress * 0.08})`;
      }

      if (expandOverlay) {
        expandOverlay.style.background = `linear-gradient(180deg, rgba(4, 13, 26, ${0.1 + (1 - progress) * 0.2}) 0%, rgba(4, 13, 26, ${0.85 - progress * 0.35}) 100%)`;
      }

      const textTranslateX = progress * (isMobile ? 120 : 85);
      const textOpacity = Math.max(1 - progress * 1.5, 0);

      if (line1) {
        line1.style.transform = `translateX(-${textTranslateX}vw)`;
        line1.style.opacity = textOpacity;
      }

      if (line2) {
        line2.style.transform = `translateX(${textTranslateX}vw)`;
        line2.style.opacity = textOpacity;
      }

      const uiOpacity = Math.max(1 - progress * 1.8, 0);
      const uiTranslateY = -progress * 25;

      if (badge) {
        badge.style.opacity = uiOpacity;
        badge.style.transform = `translateY(${uiTranslateY}px)`;
      }
      if (leadText) {
        leadText.style.opacity = uiOpacity;
        leadText.style.transform = `translateY(${uiTranslateY}px)`;
      }
      if (ctaCluster) {
        ctaCluster.style.opacity = uiOpacity;
        ctaCluster.style.transform = `translateY(${uiTranslateY}px)`;
      }

      if (bgLayer) {
        bgLayer.style.opacity = `${0.36 * (1 - progress * 0.65)}`;
      }

      if (metricsStrip) {
        metricsStrip.style.opacity = progress > 0.3 ? `${(progress - 0.3) / 0.7}` : "0.1";
        metricsStrip.style.transform = `translateY(${(1 - progress) * 16}px)`;
      }
    }

    function updateProgressSmoothly() {
      const diff = targetProgress - scrollProgress;
      if (Math.abs(diff) > 0.001) {
        scrollProgress += diff * 0.2;
        renderProgress(scrollProgress);
        animationFrameId = requestAnimationFrame(updateProgressSmoothly);
      } else {
        scrollProgress = targetProgress;
        renderProgress(scrollProgress);
        animationFrameId = null;
      }
    }

    function setTarget(val) {
      targetProgress = Math.min(Math.max(val, 0), 1);
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updateProgressSmoothly);
      }
    }

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const maxScroll = Math.max(window.innerHeight * 0.6, 420);
      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      setTarget(progress);
    }, { passive: true });

    renderProgress(0);
  } catch (err) {
    console.warn("Scroll animation init fallback:", err);
  }
}

// ==========================================================================
// 3. NAVBAR, MOBILE DRAWER & EXPANDABLE NAV HUB
// ==========================================================================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      if (scrollY > 30) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }, { passive: true });
  }

  // Close dropdown on outside click
  document.addEventListener("click", (e) => {
    const hubWrapper = document.getElementById("nav-hub-wrapper");
    if (hubWrapper && !hubWrapper.contains(e.target)) {
      closeNavHub();
    }
  });
}

function toggleNavHub(e) {
  if (e) {
    if (e.__navHandled) return;
    e.__navHandled = true;
    if (e.stopPropagation) e.stopPropagation();
  }
  const trigger = document.getElementById("nav-hub-trigger");
  const dropdown = document.getElementById("nav-hub-dropdown");
  if (trigger && dropdown) {
    const isActive = dropdown.classList.toggle("active");
    trigger.classList.toggle("active", isActive);
    trigger.setAttribute("aria-expanded", isActive ? "true" : "false");
    
    if (isActive) {
      dropdown.style.opacity = "1";
      dropdown.style.pointerEvents = "auto";
      dropdown.style.transform = "translateX(-50%) translateY(0)";
      dropdown.style.display = "flex";
      dropdown.style.visibility = "visible";
    } else {
      dropdown.style.opacity = "";
      dropdown.style.pointerEvents = "";
      dropdown.style.transform = "";
      dropdown.style.visibility = "";
    }
  }
}

function closeNavHub(e) {
  if (e && e.__closeNavHandled) return;
  if (e) e.__closeNavHandled = true;

  const trigger = document.getElementById("nav-hub-trigger");
  const dropdown = document.getElementById("nav-hub-dropdown");
  if (trigger && dropdown) {
    dropdown.classList.remove("active");
    trigger.classList.remove("active");
    trigger.setAttribute("aria-expanded", "false");
    dropdown.style.opacity = "";
    dropdown.style.pointerEvents = "";
    dropdown.style.transform = "";
    dropdown.style.visibility = "";
  }
}

function toggleMobileNav(e) {
  if (e) {
    if (e.__mobileNavHandled) return;
    e.__mobileNavHandled = true;
    if (e.stopPropagation) e.stopPropagation();
  }
  const toggleBtn = document.getElementById("mobile-toggle");
  const drawer = document.getElementById("mobile-nav-drawer");
  if (toggleBtn && drawer) {
    const isActive = drawer.classList.toggle("active");
    toggleBtn.classList.toggle("active", isActive);
  }
}

function closeMobileNav(e) {
  if (e && e.__closeMobileHandled) return;
  if (e) e.__closeMobileHandled = true;

  const toggleBtn = document.getElementById("mobile-toggle");
  const drawer = document.getElementById("mobile-nav-drawer");
  if (toggleBtn && drawer) {
    toggleBtn.classList.remove("active");
    drawer.classList.remove("active");
  }
}

// ==========================================================================
// 4. MODULES FILTER & MODAL
// ==========================================================================
function filterModules(category, e) {
  if (e) {
    if (e.__filterHandled) return;
    e.__filterHandled = true;
  }
  const cards = document.querySelectorAll(".module-card");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => {
    const text = (btn.textContent || "").toLowerCase();
    const btnCat = btn.getAttribute("data-filter") || "";
    const isMatch = (category === "all" && (text.includes("all") || btnCat === "all")) ||
                    btnCat === category ||
                    text.includes(category);
    btn.classList.toggle("active", isMatch);
  });

  cards.forEach(card => {
    const cardCat = card.getAttribute("data-category");
    if (category === "all" || cardCat === category) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

function openModuleModal(id, e) {
  if (e) {
    if (e.__modalHandled) return;
    e.__modalHandled = true;
  }
  const data = MODULE_DATA[id];
  if (!data) return;

  const numEl = document.getElementById("modal-num");
  const titleEl = document.getElementById("modal-title");
  const descEl = document.getElementById("modal-desc");
  const deliverablesList = document.getElementById("modal-deliverables");
  const waLink = document.getElementById("modal-whatsapp-link");
  const backdrop = document.getElementById("module-modal-backdrop");

  if (numEl) numEl.textContent = data.num;
  if (titleEl) titleEl.textContent = data.title;
  if (descEl) descEl.textContent = data.desc;

  if (deliverablesList) {
    deliverablesList.innerHTML = "";
    data.deliverables.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      deliverablesList.appendChild(li);
    });
  }

  if (waLink) {
    const message = `Hello PQRS, I would like to inquire about: ${data.title}.`;
    waLink.href = `https://wa.me/${PQRS_PHONE}?text=${encodeURIComponent(message)}`;
  }

  if (backdrop) {
    backdrop.classList.add("active");
    backdrop.style.display = "flex";
  }
  document.body.style.overflow = "hidden";
}

function closeModuleModal(e) {
  if (e) {
    if (e.__modalCloseHandled) return;
    e.__modalCloseHandled = true;
  }
  const backdrop = document.getElementById("module-modal-backdrop");
  if (backdrop) {
    backdrop.classList.remove("active");
    backdrop.style.display = "none";
  }
  document.body.style.overflow = "auto";
}

function closeModalOnBackdrop(e) {
  if (e && e.target && e.target.id === "module-modal-backdrop") {
    closeModuleModal(e);
  }
}

// ==========================================================================
// 5. ROADMAP BUILDER (Wizard)
// ==========================================================================
window.pqrsWizardState = window.pqrsWizardState || {
  discipline: "Management & Commerce",
  bottleneck: "Full Thesis Writing",
  timeline: "Standard: 3-4 Months"
};

function selectWizardOption(step, value, btnEl, e) {
  if (e) {
    if (e.__wizardOptHandled) return;
    e.__wizardOptHandled = true;
  }

  const state = window.pqrsWizardState || {
    discipline: "Management & Commerce",
    bottleneck: "Full Thesis Writing",
    timeline: "Standard: 3-4 Months"
  };
  window.pqrsWizardState = state;

  const pane = document.getElementById(`step-${step}`);
  if (pane) {
    const buttons = pane.querySelectorAll(".wizard-opt-btn");
    buttons.forEach(btn => btn.classList.remove("selected"));

    if (btnEl) {
      btnEl.classList.add("selected");
    } else {
      buttons.forEach(btn => {
        const btnVal = btn.getAttribute("data-value") || "";
        if (btnVal === value || btn.innerText.includes(value.split(" ")[0])) {
          btn.classList.add("selected");
        }
      });
    }
  }

  if (step === 1) {
    state.discipline = value;
    const nextBtn = document.getElementById("btn-step-1");
    if (nextBtn) {
      nextBtn.disabled = false;
      nextBtn.removeAttribute("disabled");
      nextBtn.classList.add("btn-ready");
      nextBtn.style.opacity = "1";
      nextBtn.style.cursor = "pointer";
      nextBtn.style.pointerEvents = "auto";
    }
    setTimeout(() => {
      goToWizardStep(2);
    }, 160);
  } else if (step === 2) {
    state.bottleneck = value;
    const nextBtn = document.getElementById("btn-step-2");
    if (nextBtn) {
      nextBtn.disabled = false;
      nextBtn.removeAttribute("disabled");
      nextBtn.classList.add("btn-ready");
      nextBtn.style.opacity = "1";
      nextBtn.style.cursor = "pointer";
      nextBtn.style.pointerEvents = "auto";
    }
    setTimeout(() => {
      goToWizardStep(3);
    }, 160);
  } else if (step === 3) {
    state.timeline = value;
    const nextBtn = document.getElementById("btn-step-3");
    if (nextBtn) {
      nextBtn.disabled = false;
      nextBtn.removeAttribute("disabled");
      nextBtn.classList.add("btn-ready");
      nextBtn.style.opacity = "1";
      nextBtn.style.cursor = "pointer";
      nextBtn.style.pointerEvents = "auto";
    }
    setTimeout(() => {
      generateFinalRoadmap();
    }, 160);
  }
}

function goToWizardStep(step, e) {
  if (e) {
    if (e.__wizardStepHandled) return;
    e.__wizardStepHandled = true;
  }

  const targetStep = parseInt(step, 10) || 1;

  for (let i = 1; i <= 4; i++) {
    const pane = document.getElementById(`step-${i}`);
    if (pane) {
      if (i === targetStep) {
        pane.classList.add("active");
        pane.style.display = "block";
        pane.style.visibility = "visible";
        pane.style.opacity = "1";
      } else {
        pane.classList.remove("active");
        pane.style.display = "none";
        pane.style.visibility = "hidden";
        pane.style.opacity = "0";
      }
    }
  }

  const progressMap = { 1: "25%", 2: "50%", 3: "75%", 4: "100%" };
  const progressBar = document.getElementById("wizard-progress-bar");
  if (progressBar) progressBar.style.width = progressMap[targetStep] || "25%";

  for (let i = 1; i <= 4; i++) {
    const node = document.getElementById(`node-${i}`);
    if (!node) continue;
    node.classList.remove("active", "completed");
    if (i < targetStep) {
      node.classList.add("completed");
    } else if (i === targetStep) {
      node.classList.add("active");
    }
  }

  // If navigating to step 4, update summary fields and WhatsApp link
  if (targetStep === 4) {
    const state = window.pqrsWizardState || {
      discipline: "Management & Commerce",
      bottleneck: "Full Thesis Writing",
      timeline: "Standard: 3-4 Months"
    };

    const disciplineEl = document.getElementById("summary-discipline");
    const bottleneckEl = document.getElementById("summary-bottleneck");
    const timelineEl = document.getElementById("summary-timeline");

    const disc = state.discipline || "Management & Commerce";
    const bneck = state.bottleneck || "Full Thesis Writing";
    const tline = state.timeline || "Standard: 3-4 Months";

    if (disciplineEl) disciplineEl.textContent = disc;
    if (bottleneckEl) bottleneckEl.textContent = bneck;
    if (timelineEl) timelineEl.textContent = tline;

    const waMessage = 
`*PQRS RESEARCH CONSULTATION*
----------------------------------------
🎓 *Academic Field:* ${disc}
🎯 *Requirement:* ${bneck}
⏳ *Timeline:* ${tline}
----------------------------------------
_Hi PQRS team, please review my research requirement and connect me with a mentor._`;

    const waUrl = `https://wa.me/${PQRS_PHONE}?text=${encodeURIComponent(waMessage)}`;
    const waLink = document.getElementById("whatsapp-wizard-link");
    if (waLink) waLink.href = waUrl;
  }

  // Smooth scroll to wizard if on mobile
  const configurator = document.getElementById("configurator");
  if (configurator && window.innerWidth < 768) {
    configurator.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function generateFinalRoadmap(e) {
  if (e) {
    if (e.__roadmapHandled) return;
    e.__roadmapHandled = true;
  }

  const state = window.pqrsWizardState || {
    discipline: "Management & Commerce",
    bottleneck: "Full Thesis Writing",
    timeline: "Standard: 3-4 Months"
  };

  const disciplineEl = document.getElementById("summary-discipline");
  const bottleneckEl = document.getElementById("summary-bottleneck");
  const timelineEl = document.getElementById("summary-timeline");

  const disc = state.discipline || "Management & Commerce";
  const bneck = state.bottleneck || "Full Thesis Writing";
  const tline = state.timeline || "Standard: 3-4 Months";

  if (disciplineEl) disciplineEl.textContent = disc;
  if (bottleneckEl) bottleneckEl.textContent = bneck;
  if (timelineEl) timelineEl.textContent = tline;

  const waMessage = 
`*PQRS RESEARCH CONSULTATION*
----------------------------------------
🎓 *Academic Field:* ${disc}
🎯 *Requirement:* ${bneck}
⏳ *Timeline:* ${tline}
----------------------------------------
_Hi PQRS team, please review my research requirement and connect me with a mentor._`;

  const waUrl = `https://wa.me/${PQRS_PHONE}?text=${encodeURIComponent(waMessage)}`;
  const waLink = document.getElementById("whatsapp-wizard-link");
  if (waLink) waLink.href = waUrl;

  goToWizardStep(4);
}

function resetWizard(e) {
  if (e) {
    if (e.__resetHandled) return;
    e.__resetHandled = true;
  }

  window.pqrsWizardState = {
    discipline: "Management & Commerce",
    bottleneck: "Full Thesis Writing",
    timeline: "Standard: 3-4 Months"
  };

  // Re-select defaults
  const step1Btns = document.querySelectorAll("#step-1 .wizard-opt-btn");
  step1Btns.forEach((btn, idx) => btn.classList.toggle("selected", idx === 0));

  const step2Btns = document.querySelectorAll("#step-2 .wizard-opt-btn");
  step2Btns.forEach((btn, idx) => btn.classList.toggle("selected", idx === 3));

  const step3Btns = document.querySelectorAll("#step-3 .wizard-opt-btn");
  step3Btns.forEach((btn, idx) => btn.classList.toggle("selected", idx === 1));

  goToWizardStep(1);
}

// ==========================================================================
// 6. ACCORDION FAQ
// ==========================================================================
function toggleFAQ(button, e) {
  if (e) {
    if (e.__faqHandled) return;
    e.__faqHandled = true;
  }
  if (!button) return;
  const item = button.closest(".faq-item") || button.parentElement;
  if (!item) return;
  const isAlreadyActive = item.classList.contains("active");

  document.querySelectorAll(".faq-item").forEach(el => el.classList.remove("active"));

  if (!isAlreadyActive) {
    item.classList.add("active");
  }
}

function filterFAQ() {
  const input = document.getElementById("faq-search");
  const query = (input ? input.value : "").toLowerCase();
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const text = (item.innerText || item.textContent || "").toLowerCase();
    item.style.display = text.includes(query) ? "block" : "none";
  });
}

// ==========================================================================
// 7. GLOBAL WINDOW ATTACHMENT & CENTRALIZED DELEGATION
// ==========================================================================
window.toggleNavHub = toggleNavHub;
window.closeNavHub = closeNavHub;
window.toggleMobileNav = toggleMobileNav;
window.closeMobileNav = closeMobileNav;
window.filterModules = filterModules;
window.openModuleModal = openModuleModal;
window.closeModuleModal = closeModuleModal;
window.closeModalOnBackdrop = closeModalOnBackdrop;
window.selectWizardOption = selectWizardOption;
window.goToWizardStep = goToWizardStep;
window.generateFinalRoadmap = generateFinalRoadmap;
window.resetWizard = resetWizard;
window.toggleFAQ = toggleFAQ;
window.filterFAQ = filterFAQ;
window.initNavbar = initNavbar;
window.initScrollExpansionHero = initScrollExpansionHero;
window.initAll = initAll;

// Centralized Event Delegation with execution guards
document.addEventListener("click", function(e) {
  if (!e || !e.target || typeof e.target.closest !== "function") return;

  // Nav Hub Trigger
  const navTrigger = e.target.closest("#nav-hub-trigger, [data-action='toggle-nav-hub']");
  if (navTrigger) {
    if (!e.__navHandled) {
      if (typeof e.preventDefault === "function") e.preventDefault();
      toggleNavHub(e);
    }
    return;
  }

  // Wizard Option Select
  const wizardOpt = e.target.closest(".wizard-opt-btn, [data-action='wizard-opt']");
  if (wizardOpt) {
    if (!e.__wizardOptHandled) {
      if (typeof e.preventDefault === "function") e.preventDefault();
      const step = parseInt(wizardOpt.getAttribute("data-step") || "1", 10);
      const val = wizardOpt.getAttribute("data-value") || wizardOpt.innerText.trim();
      selectWizardOption(step, val, wizardOpt, e);
    }
    return;
  }

  // Wizard Step Navigation
  const stepBtn = e.target.closest("[data-action='wizard-step']");
  if (stepBtn) {
    if (!e.__wizardStepHandled) {
      if (typeof e.preventDefault === "function") e.preventDefault();
      const targetStep = parseInt(stepBtn.getAttribute("data-target-step"), 10);
      if (targetStep === 4) {
        generateFinalRoadmap(e);
      } else {
        goToWizardStep(targetStep, e);
      }
    }
    return;
  }

  // Wizard Reset
  const resetBtn = e.target.closest("[data-action='wizard-reset']");
  if (resetBtn) {
    if (!e.__resetHandled) {
      if (typeof e.preventDefault === "function") e.preventDefault();
      resetWizard(e);
    }
    return;
  }

  // Module Modal Open
  const moduleCard = e.target.closest(".module-card, [data-action='open-module']");
  if (moduleCard) {
    if (!e.__modalHandled) {
      if (typeof e.preventDefault === "function") e.preventDefault();
      const moduleId = moduleCard.getAttribute("data-module-id");
      if (moduleId) {
        openModuleModal(parseInt(moduleId, 10), e);
      }
    }
    return;
  }

  // Modal Close
  const closeBtn = e.target.closest(".modal-close-btn, [data-action='close-modal']");
  if (closeBtn) {
    if (!e.__modalCloseHandled) {
      if (typeof e.preventDefault === "function") e.preventDefault();
      closeModuleModal(e);
    }
    return;
  }

  // FAQ Accordion
  const faqBtn = e.target.closest(".faq-question-btn, [data-action='toggle-faq']");
  if (faqBtn) {
    if (!e.__faqHandled) {
      if (typeof e.preventDefault === "function") e.preventDefault();
      toggleFAQ(faqBtn, e);
    }
    return;
  }

  // Filter Buttons
  const filterBtn = e.target.closest(".filter-btn, [data-action='filter-modules']");
  if (filterBtn) {
    if (!e.__filterHandled) {
      if (typeof e.preventDefault === "function") e.preventDefault();
      const cat = filterBtn.getAttribute("data-filter") || "all";
      filterModules(cat, e);
    }
    return;
  }
});

// Self-executing initialization on any lifecycle phase
function initAll() {
  initNavbar();
  initScrollExpansionHero();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAll);
} else {
  initAll();
}
window.addEventListener("load", initAll);
