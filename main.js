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
// 2. SCROLL-EXPANSION HERO ANIMATION (Full React Component Parity)
// ==========================================================================
function initScrollExpansionHero() {
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
    
    // Width & Height expansion (from compact centered card to cinematic full width)
    const baseWidth = isMobile ? 280 : 340;
    const expandWidth = isMobile ? (window.innerWidth * 0.92 - baseWidth) : (Math.min(window.innerWidth * 0.88, 1150) - baseWidth);
    const baseHeight = isMobile ? 320 : 380;
    const expandHeight = isMobile ? 180 : 240;

    const currentWidth = Math.min(baseWidth + progress * expandWidth, window.innerWidth * 0.95);
    const currentHeight = Math.min(baseHeight + progress * expandHeight, window.innerHeight * 0.85);

    card.style.width = `${currentWidth}px`;
    card.style.height = `${currentHeight}px`;
    card.style.transform = `scale(${1 + progress * 0.03})`;

    // Image zoom inside the card
    if (expandImg) {
      expandImg.style.transform = `scale(${1 + progress * 0.08})`;
    }

    // Overlay brightness/dimming
    if (expandOverlay) {
      expandOverlay.style.background = `linear-gradient(180deg, rgba(4, 13, 26, ${0.1 + (1 - progress) * 0.2}) 0%, rgba(4, 13, 26, ${0.85 - progress * 0.35}) 100%)`;
    }

    // Sideways Horizontal Text Split Animation (from original component)
    const textTranslateX = progress * (isMobile ? 120 : 85); // in vw
    const textOpacity = Math.max(1 - progress * 1.5, 0);

    if (line1) {
      line1.style.transform = `translateX(-${textTranslateX}vw)`;
      line1.style.opacity = textOpacity;
    }

    if (line2) {
      line2.style.transform = `translateX(${textTranslateX}vw)`;
      line2.style.opacity = textOpacity;
    }

    // Badge, Subtitle & Buttons Fade
    const uiOpacity = Math.max(1 - progress * 1.8, 0);
    const uiTranslateY = -progress * 25; // px upward

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

    // Ambient background fade
    if (bgLayer) {
      bgLayer.style.opacity = `${0.36 * (1 - progress * 0.65)}`;
    }

    // Metrics Strip smooth reveal
    if (metricsStrip) {
      metricsStrip.style.opacity = progress > 0.3 ? `${(progress - 0.3) / 0.7}` : "0.1";
      metricsStrip.style.transform = `translateY(${(1 - progress) * 16}px)`;
    }
  }

  // Smooth animation frame loop
  function updateProgressSmoothly() {
    const diff = targetProgress - scrollProgress;
    if (Math.abs(diff) > 0.001) {
      scrollProgress += diff * 0.2; // smooth interpolation
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

  // Sync with window scroll
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = Math.max(window.innerHeight * 0.6, 420);
    const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    setTarget(progress);
  }, { passive: true });

  // Initial render
  renderProgress(0);
}

// ==========================================================================
// 3. NAVBAR, MOBILE DRAWER & EXPANDABLE NAV HUB
// ==========================================================================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Click outside to close Nav Hub dropdown
  document.addEventListener("click", (e) => {
    const hubWrapper = document.getElementById("nav-hub-wrapper");
    const dropdown = document.getElementById("nav-hub-dropdown");
    const trigger = document.getElementById("nav-hub-trigger");
    if (hubWrapper && !hubWrapper.contains(e.target)) {
      if (dropdown) dropdown.classList.remove("active");
      if (trigger) {
        trigger.classList.remove("active");
        trigger.setAttribute("aria-expanded", "false");
      }
    }
  });
}

function toggleNavHub() {
  const trigger = document.getElementById("nav-hub-trigger");
  const dropdown = document.getElementById("nav-hub-dropdown");
  if (trigger && dropdown) {
    const isActive = dropdown.classList.toggle("active");
    trigger.classList.toggle("active", isActive);
    trigger.setAttribute("aria-expanded", isActive ? "true" : "false");
  }
}

function closeNavHub() {
  const trigger = document.getElementById("nav-hub-trigger");
  const dropdown = document.getElementById("nav-hub-dropdown");
  if (trigger && dropdown) {
    dropdown.classList.remove("active");
    trigger.classList.remove("active");
    trigger.setAttribute("aria-expanded", "false");
  }
}

function toggleMobileNav() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const drawer = document.getElementById("mobile-nav-drawer");
  if (toggleBtn && drawer) {
    toggleBtn.classList.toggle("active");
    drawer.classList.toggle("active");
  }
}

function closeMobileNav() {
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
function filterModules(category) {
  const cards = document.querySelectorAll(".module-card");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => {
    btn.classList.toggle("active", btn.textContent.toLowerCase().includes(category) || (category === 'all' && btn.textContent.includes('All')));
  });

  cards.forEach(card => {
    if (category === "all" || card.getAttribute("data-category") === category) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

function openModuleModal(id) {
  const data = MODULE_DATA[id];
  if (!data) return;

  document.getElementById("modal-num").textContent = data.num;
  document.getElementById("modal-title").textContent = data.title;
  document.getElementById("modal-desc").textContent = data.desc;

  const deliverablesList = document.getElementById("modal-deliverables");
  deliverablesList.innerHTML = "";
  data.deliverables.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    deliverablesList.appendChild(li);
  });

  const waLink = document.getElementById("modal-whatsapp-link");
  const message = `Hello PQRS, I would like to inquire about: ${data.title}.`;
  waLink.href = `https://wa.me/${PQRS_PHONE}?text=${encodeURIComponent(message)}`;

  document.getElementById("module-modal-backdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModuleModal() {
  document.getElementById("module-modal-backdrop").classList.remove("active");
  document.body.style.overflow = "auto";
}

function closeModalOnBackdrop(e) {
  if (e.target.id === "module-modal-backdrop") {
    closeModuleModal();
  }
}

// ==========================================================================
// 5. ROADMAP BUILDER (Wizard)
// ==========================================================================
let wizardState = {
  discipline: "",
  bottleneck: "",
  timeline: ""
};

function selectWizardOption(step, value) {
  const pane = document.getElementById(`step-${step}`);
  const buttons = pane.querySelectorAll(".wizard-opt-btn");

  buttons.forEach(btn => {
    if (btn.innerText.includes(value.split(" ")[0])) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });

  if (step === 1) {
    wizardState.discipline = value;
    document.getElementById("btn-step-1").disabled = false;
  } else if (step === 2) {
    wizardState.bottleneck = value;
    document.getElementById("btn-step-2").disabled = false;
  } else if (step === 3) {
    wizardState.timeline = value;
    document.getElementById("btn-step-3").disabled = false;
  }
}

function goToWizardStep(step) {
  for (let i = 1; i <= 4; i++) {
    const pane = document.getElementById(`step-${i}`);
    if (pane) pane.classList.toggle("active", i === step);
  }

  const progressMap = { 1: "25%", 2: "50%", 3: "75%", 4: "100%" };
  const progressBar = document.getElementById("wizard-progress-bar");
  if (progressBar) progressBar.style.width = progressMap[step];

  for (let i = 1; i <= 4; i++) {
    const node = document.getElementById(`node-${i}`);
    if (!node) continue;
    node.classList.remove("active", "completed");
    if (i < step) {
      node.classList.add("completed");
    } else if (i === step) {
      node.classList.add("active");
    }
  }
}

function generateFinalRoadmap() {
  document.getElementById("summary-discipline").textContent = wizardState.discipline || "General Research";
  document.getElementById("summary-bottleneck").textContent = wizardState.bottleneck || "PhD Assistance";
  document.getElementById("summary-timeline").textContent = wizardState.timeline || "Priority Target";

  const waMessage = 
`*PQRS RESEARCH CONSULTATION*
----------------------------------------
🎓 *Academic Field:* ${wizardState.discipline}
🎯 *Requirement:* ${wizardState.bottleneck}
⏳ *Timeline:* ${wizardState.timeline}
----------------------------------------
_Hi PQRS team, please review my research requirement and connect me with a mentor._`;

  const waUrl = `https://wa.me/${PQRS_PHONE}?text=${encodeURIComponent(waMessage)}`;
  document.getElementById("whatsapp-wizard-link").href = waUrl;

  goToWizardStep(4);
}

function resetWizard() {
  wizardState = { discipline: "", bottleneck: "", timeline: "" };
  document.querySelectorAll(".wizard-opt-btn").forEach(btn => btn.classList.remove("selected"));
  document.getElementById("btn-step-1").disabled = true;
  document.getElementById("btn-step-2").disabled = true;
  document.getElementById("btn-step-3").disabled = true;
  goToWizardStep(1);
}

// ==========================================================================
// 6. ACCORDION FAQ
// ==========================================================================
function toggleFAQ(button) {
  const item = button.parentElement;
  const isActive = item.classList.contains("active");

  document.querySelectorAll(".faq-item").forEach(el => el.classList.remove("active"));

  if (!isActive) {
    item.classList.add("active");
  }
}

function filterFAQ() {
  const query = document.getElementById("faq-search").value.toLowerCase();
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(query) ? "block" : "none";
  });
}

// ==========================================================================
// 7. INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initScrollExpansionHero();
});
