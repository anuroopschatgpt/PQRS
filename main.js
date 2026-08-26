/**
 * PQRS - Prajna Quest Research Solutions
 * High-Converting Interactive Engine with Pinned Scroll-Expansion Hero & Full Mobile Responsiveness
 */

var PQRS_PHONE = '917799956799';

var MODULE_DATA = {
  1: {
    num: '01',
    title: 'Topic Selection & Research Gap',
    desc: 'We help you discover a clear, original, and approved research topic that fits your university guidelines and timeline.',
    deliverables: [
      'Comparative Research Gap Matrix',
      'Topic Novelty & Feasibility Assessment',
      'Draft Problem Statement for Committee Review',
      'Initial 10-15 landmark foundational citations'
    ]
  },
  2: {
    num: '02',
    title: 'Literature Review',
    desc: 'A comprehensive and organized review of all relevant academic papers to establish a rock-solid foundation for your research.',
    deliverables: [
      'Organized Literature Synthesis Table',
      'Critical review of 50-100+ peer-reviewed papers',
      'Clear summary of theoretical voids in current literature',
      'Complete bibliography formatted in Mendeley or Zotero'
    ]
  },
  3: {
    num: '03',
    title: 'Research Proposal',
    desc: 'A well-structured research proposal with clear objectives, testable hypotheses, and an actionable methodology.',
    deliverables: [
      'Clear Problem Statement & Research Objectives',
      'Hypotheses Framework & Conceptual Model',
      'Step-by-step Methodology Blueprint',
      'Chapter Work Plan & Timeline'
    ]
  },
  4: {
    num: '04',
    title: 'Synopsis Writing',
    desc: 'A concise, university-compliant synopsis summarizing your entire study for quick institutional approval.',
    deliverables: [
      'Synopsis formatted to your university layout',
      'Executive summary of research design and data methods',
      'Summary of expected contributions and outcomes',
      'Pre-defense slide deck preparation support'
    ]
  },
  5: {
    num: '05',
    title: 'Research Methodology',
    desc: 'Practical study design covering quantitative, qualitative, or mixed methods with accurate sample size planning.',
    deliverables: [
      'Clear research paradigm & epistemological framework',
      'Sample size calculation and statistical power justification',
      'Reliability & validity measurement protocol',
      'Ethical clearance and compliance guidance'
    ]
  },
  6: {
    num: '06',
    title: 'Data Collection Support',
    desc: 'Assistance with survey questionnaire design, Likert scale formulation, and primary/secondary data gathering.',
    deliverables: [
      'Custom questionnaire and survey scale design',
      'Pilot study guidance & Cronbach Alpha check',
      'Secondary data curation guidelines',
      'Data cleaning, coding, and preparation manual'
    ]
  },
  7: {
    num: '07',
    title: 'Data & Statistical Analysis',
    desc: 'Accurate statistical computations in SPSS, AMOS, Excel, R, or Python explained in simple, easy-to-defend terms.',
    deliverables: [
      'Descriptive, correlation, and regression analysis',
      'Structural Equation Modeling (SEM) & Factor Analysis',
      'High-resolution formatted statistical charts and tables',
      'Plain-language explanation of all statistical findings'
    ]
  },
  8: {
    num: '08',
    title: 'Results & Discussion',
    desc: 'Clear interpretation connecting your statistical numbers back to your research questions and literature.',
    deliverables: [
      'Hypothesis acceptance/rejection summary table',
      'Triangulation of findings with existing research',
      'Theoretical and practical implications write-up',
      'Study limitations and recommendations for future research'
    ]
  },
  9: {
    num: '09',
    title: 'Thesis Writing',
    desc: 'Complete chapter-by-chapter drafting with logical flow, clear academic voice, and smooth transitions.',
    deliverables: [
      'Complete 5 or 6 chapter thesis drafts',
      'Clear, professional academic writing with zero jargon clutter',
      'Integration of tables, figures, and accurate citations',
      'Revisions based on your supervisor review feedback'
    ]
  },
  10: {
    num: '10',
    title: 'Referencing & Formatting',
    desc: 'Flawless formatting in APA, Harvard, Chicago, or your university margin handbook with zero layout errors.',
    deliverables: [
      '100% In-text citation to bibliography cross-matching',
      'Pagination, font hierarchy, and margin alignment',
      'Automated Table of Contents, Figures, and Tables',
      'EndNote / Mendeley library export'
    ]
  },
  11: {
    num: '11',
    title: 'Plagiarism Check',
    desc: 'Official Turnitin similarity verification ensuring 100% original, verified academic writing.',
    deliverables: [
      'Official Turnitin Similarity Index report',
      'Sentence-by-sentence originality check',
      'Contextual paraphrasing to reduce accidental matches',
      'Final verified originality report'
    ]
  },
  12: {
    num: '12',
    title: 'Publication Support',
    desc: 'Complete guidance to publish your research papers in recognized peer-reviewed journals.',
    deliverables: [
      'Journal shortlist matched to your study scope',
      'Manuscript conversion to target journal author guidelines',
      'Cover letter and submission support',
      'Rebuttal letter formulation for reviewer comments'
    ]
  }
};

window.MODULE_DATA = MODULE_DATA;

function initScrollExpansionHero() {
  try {
    var hero = document.getElementById('hero');
    var stage = document.getElementById('hero-interactive-stage');
    var card = document.getElementById('scroll-expand-card');
    var line1 = document.getElementById('hero-title-line-1');
    var line2 = document.getElementById('hero-title-line-2');
    var badge = document.getElementById('hero-badge');
    var leadText = document.getElementById('hero-lead-text');
    var ctaCluster = document.getElementById('hero-cta-cluster');
    var expandImg = document.getElementById('hero-expand-img');
    var expandOverlay = document.getElementById('hero-expand-overlay');
    var metricsStrip = document.getElementById('hero-metrics-strip');
    var bgLayer = document.getElementById('hero-bg-layer');

    if (!hero || !card || !stage) return;

    var animFrame = null;
    var currentProgress = 0;
    var targetProgress = 0;

    function calculateProgress() {
      var rect = hero.getBoundingClientRect();
      var scrollDist = hero.offsetHeight - window.innerHeight;
      if (scrollDist <= 0) return 0;
      var p = -rect.top / scrollDist;
      return p;
    }

    function renderProgress(p) {
      var clamped = Math.min(Math.max(p, 0), 1);
      var isMobile = window.innerWidth < 768;

      // 1. Bulletproof Viewport Pinning (Works even inside overflow:hidden containers)
      var rect = hero.getBoundingClientRect();
      var scrollDist = hero.offsetHeight - window.innerHeight;

      if (rect.top <= 0 && rect.top >= -scrollDist) {
        stage.style.position = 'fixed';
        stage.style.top = '0px';
        stage.style.bottom = 'auto';
        stage.style.left = '0px';
        stage.style.width = '100%';
        stage.style.zIndex = '10';
      } else if (rect.top < -scrollDist) {
        stage.style.position = 'absolute';
        stage.style.top = 'auto';
        stage.style.bottom = '0px';
        stage.style.left = '0px';
        stage.style.width = '100%';
        stage.style.zIndex = '1';
      } else {
        stage.style.position = 'absolute';
        stage.style.top = '0px';
        stage.style.bottom = 'auto';
        stage.style.left = '0px';
        stage.style.width = '100%';
        stage.style.zIndex = '10';
      }
      
      // 2. Card Expansion Dimensions
      var baseW = isMobile ? 260 : 380;
      var maxW = Math.min(window.innerWidth * (isMobile ? 0.92 : 0.90), 1100);
      var targetW = baseW + (maxW - baseW) * clamped;

      var baseH = isMobile ? 140 : 210;
      var maxH = Math.min(window.innerHeight * (isMobile ? 0.32 : 0.48), isMobile ? 220 : 440);
      var targetH = baseH + (maxH - baseH) * clamped;

      card.style.width = targetW + 'px';
      card.style.height = targetH + 'px';
      card.style.borderRadius = Math.max((isMobile ? 16 : 22) - clamped * 6, 12) + 'px';

      if (expandImg) {
        expandImg.style.transform = 'scale(' + (1 + clamped * 0.08) + ')';
      }

      if (expandOverlay) {
        expandOverlay.style.background = 'linear-gradient(180deg, rgba(4, 13, 26, ' + (0.1 + (1 - clamped) * 0.2) + ') 0%, rgba(4, 13, 26, ' + (0.85 - clamped * 0.3) + ') 100%)';
      }

      // 3. Headline Split & Fly-Out
      var splitDist = isMobile ? 65 : 48;
      var textOpacity = Math.max(1 - clamped * 1.6, 0);

      if (line1) {
        line1.style.transform = 'translateX(-' + (clamped * splitDist) + 'vw)';
        line1.style.opacity = textOpacity;
      }
      if (line2) {
        line2.style.transform = 'translateX(' + (clamped * splitDist) + 'vw)';
        line2.style.opacity = textOpacity;
      }

      // 4. UI Header Controls Fade Out
      var uiOpacity = Math.max(1 - clamped * 2.0, 0);
      var uiY = -clamped * 25;

      if (badge) {
        badge.style.opacity = uiOpacity;
        badge.style.transform = 'translateY(' + uiY + 'px)';
      }
      if (leadText) {
        leadText.style.opacity = uiOpacity;
        leadText.style.transform = 'translateY(' + uiY + 'px)';
      }
      if (ctaCluster) {
        ctaCluster.style.opacity = uiOpacity;
        ctaCluster.style.transform = 'translateY(' + uiY + 'px)';
      }

      if (bgLayer) {
        bgLayer.style.opacity = '' + (0.32 * (1 - clamped * 0.5));
      }

      // 5. Metrics Strip Fade In & Reveal
      if (metricsStrip) {
        var mOpacity = clamped > 0.3 ? (clamped - 0.3) / 0.7 : 0;
        metricsStrip.style.opacity = '' + mOpacity;
        metricsStrip.style.transform = 'translateY(' + ((1 - clamped) * 20) + 'px)';
        metricsStrip.style.pointerEvents = clamped > 0.5 ? 'auto' : 'none';
      }
    }

    function smoothUpdate() {
      var diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.001) {
        currentProgress += diff * 0.35;
        renderProgress(currentProgress);
        animFrame = requestAnimationFrame(smoothUpdate);
      } else {
        currentProgress = targetProgress;
        renderProgress(currentProgress);
        animFrame = null;
      }
    }

    function onScrollUpdate() {
      targetProgress = calculateProgress();
      if (!animFrame) {
        animFrame = requestAnimationFrame(smoothUpdate);
      }
    }

    window.addEventListener('scroll', onScrollUpdate, { passive: true });
    document.addEventListener('scroll', onScrollUpdate, { passive: true });
    window.addEventListener('resize', onScrollUpdate, { passive: true });
    window.addEventListener('touchmove', onScrollUpdate, { passive: true });
    window.addEventListener('wheel', onScrollUpdate, { passive: true });

    targetProgress = calculateProgress();
    currentProgress = targetProgress;
    renderProgress(currentProgress);
  } catch (err) {
    console.warn('Scroll expansion init:', err);
  }
}

function initNavbar() {
  var navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      var scrollY = window.scrollY || window.pageYOffset || 0;
      if (scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }
}

function toggleNavHub(e) {
  if (e && typeof e.preventDefault === 'function') e.preventDefault();
  var dropdown = document.getElementById('nav-hub-dropdown');
  var trigger = document.getElementById('nav-hub-trigger');
  if (!dropdown) return;
  var isActive = dropdown.classList.contains('active');
  if (isActive) {
    dropdown.classList.remove('active');
    if (trigger) trigger.classList.remove('active');
  } else {
    dropdown.classList.add('active');
    if (trigger) trigger.classList.add('active');
  }
}

function closeNavHub() {
  var dropdown = document.getElementById('nav-hub-dropdown');
  var trigger = document.getElementById('nav-hub-trigger');
  if (dropdown) dropdown.classList.remove('active');
  if (trigger) trigger.classList.remove('active');
}

function toggleMobileNav(e) {
  if (e && typeof e.preventDefault === 'function') e.preventDefault();
  var drawer = document.getElementById('mobile-nav-drawer');
  var toggle = document.getElementById('mobile-toggle');
  if (!drawer) return;
  var isActive = drawer.classList.contains('active');
  if (isActive) {
    drawer.classList.remove('active');
    if (toggle) toggle.classList.remove('active');
    document.body.style.overflow = 'auto';
  } else {
    drawer.classList.add('active');
    if (toggle) toggle.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileNav() {
  var drawer = document.getElementById('mobile-nav-drawer');
  var toggle = document.getElementById('mobile-toggle');
  if (drawer) drawer.classList.remove('active');
  if (toggle) toggle.classList.remove('active');
  document.body.style.overflow = 'auto';
}

document.addEventListener('click', function(e) {
  var hubWrapper = document.getElementById('nav-hub-wrapper');
  if (hubWrapper && !hubWrapper.contains(e.target)) {
    closeNavHub();
  }
});

function filterModules(category, e) {
  if (e && typeof e.preventDefault === 'function') e.preventDefault();
  var cards = document.querySelectorAll('.module-card');
  var buttons = document.querySelectorAll('.filter-btn');

  for (var i = 0; i < buttons.length; i++) {
    var btn = buttons[i];
    var btnCat = btn.getAttribute('data-filter');
    btn.classList.toggle('active', btnCat === category);
  }

  for (var j = 0; j < cards.length; j++) {
    var card = cards[j];
    var cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  }
}

function openModuleModal(id, e) {
  if (e && typeof e.preventDefault === 'function') e.preventDefault();
  var data = (window.MODULE_DATA && window.MODULE_DATA[id]) ? window.MODULE_DATA[id] : MODULE_DATA[id];
  if (!data) return;

  var numEl = document.getElementById('modal-num');
  var titleEl = document.getElementById('modal-title');
  var descEl = document.getElementById('modal-desc');
  var deliverablesList = document.getElementById('modal-deliverables');
  var waLink = document.getElementById('modal-whatsapp-link');
  var backdrop = document.getElementById('module-modal-backdrop');

  if (numEl) numEl.textContent = data.num;
  if (titleEl) titleEl.textContent = data.title;
  if (descEl) descEl.textContent = data.desc;

  if (deliverablesList) {
    deliverablesList.innerHTML = '';
    for (var i = 0; i < data.deliverables.length; i++) {
      var li = document.createElement('li');
      li.textContent = data.deliverables[i];
      deliverablesList.appendChild(li);
    }
  }

  if (waLink) {
    var msg = 'Hello PQRS, I would like to inquire about: ' + data.title + '.';
    waLink.href = 'https://wa.me/' + PQRS_PHONE + '?text=' + encodeURIComponent(msg);
  }

  if (backdrop) {
    backdrop.classList.add('active');
    backdrop.style.display = 'flex';
  }
  document.body.style.overflow = 'hidden';
}

function closeModuleModal(e) {
  if (e && typeof e.preventDefault === 'function') e.preventDefault();
  var backdrop = document.getElementById('module-modal-backdrop');
  if (backdrop) {
    backdrop.classList.remove('active');
    backdrop.style.display = 'none';
  }
  document.body.style.overflow = 'auto';
}

function closeModalOnBackdrop(e) {
  if (e && e.target && e.target.id === 'module-modal-backdrop') {
    closeModuleModal(e);
  }
}

window.pqrsWizardState = window.pqrsWizardState || {
  discipline: '',
  bottleneck: '',
  timeline: ''
};

function selectWizardOption(step, value, btnElement, e) {
  if (e && typeof e.preventDefault === 'function') e.preventDefault();
  var currentStepPane = document.getElementById('step-' + step);
  if (currentStepPane) {
    var btns = currentStepPane.querySelectorAll('.wizard-opt-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.remove('selected');
    }
  }
  if (btnElement) {
    btnElement.classList.add('selected');
  }

  var state = window.pqrsWizardState;

  if (step === 1) {
    state.discipline = value;
    var nextBtn1 = document.getElementById('btn-step-1');
    if (nextBtn1) nextBtn1.classList.add('btn-ready');
    setTimeout(function() { goToWizardStep(2); }, 160);
  } else if (step === 2) {
    state.bottleneck = value;
    var nextBtn2 = document.getElementById('btn-step-2');
    if (nextBtn2) nextBtn2.classList.add('btn-ready');
    setTimeout(function() { goToWizardStep(3); }, 160);
  } else if (step === 3) {
    state.timeline = value;
    var nextBtn3 = document.getElementById('btn-step-3');
    if (nextBtn3) nextBtn3.classList.add('btn-ready');
    setTimeout(function() { generateFinalRoadmap(); }, 160);
  }
}

function goToWizardStep(step, e) {
  if (e && typeof e.preventDefault === 'function') e.preventDefault();
  var targetStep = parseInt(step, 10) || 1;

  for (var i = 1; i <= 4; i++) {
    var pane = document.getElementById('step-' + i);
    if (pane) {
      if (i === targetStep) {
        pane.classList.add('active');
        pane.style.display = 'block';
      } else {
        pane.classList.remove('active');
        pane.style.display = 'none';
      }
    }
  }

  var progressMap = { 1: '25%', 2: '50%', 3: '75%', 4: '100%' };
  var progressBar = document.getElementById('wizard-progress-bar');
  if (progressBar) progressBar.style.width = progressMap[targetStep] || '25%';

  for (var k = 1; k <= 4; k++) {
    var node = document.getElementById('node-' + k);
    if (!node) continue;
    node.classList.remove('active', 'completed');
    if (k < targetStep) {
      node.classList.add('completed');
    } else if (k === targetStep) {
      node.classList.add('active');
    }
  }

  if (targetStep === 4) {
    var state = window.pqrsWizardState || {
      discipline: 'Management & Commerce',
      bottleneck: 'Full Thesis Writing',
      timeline: 'Standard: 3-4 Months'
    };

    var disciplineEl = document.getElementById('summary-discipline');
    var bottleneckEl = document.getElementById('summary-bottleneck');
    var timelineEl = document.getElementById('summary-timeline');

    var disc = state.discipline || 'Management & Commerce';
    var bneck = state.bottleneck || 'Full Thesis Writing';
    var tline = state.timeline || 'Standard: 3-4 Months';

    if (disciplineEl) disciplineEl.textContent = disc;
    if (bottleneckEl) bottleneckEl.textContent = bneck;
    if (timelineEl) timelineEl.textContent = tline;

    var waMessage = ['*PQRS RESEARCH CONSULTATION*', '----------------------------------------', 'Academic Field: ' + disc, 'Requirement: ' + bneck, 'Timeline: ' + tline, '----------------------------------------', 'Hi PQRS team, please review my research requirement and connect me with a mentor.'].join(String.fromCharCode(10));

    var waUrl = 'https://wa.me/' + PQRS_PHONE + '?text=' + encodeURIComponent(waMessage);
    var waLink = document.getElementById('whatsapp-wizard-link');
    if (waLink) waLink.href = waUrl;
  }
}

function generateFinalRoadmap(e) {
  goToWizardStep(4, e);
}

function resetWizard(e) {
  if (e && typeof e.preventDefault === 'function') e.preventDefault();
  window.pqrsWizardState = {
    discipline: '',
    bottleneck: '',
    timeline: ''
  };

  var allBtns = document.querySelectorAll('.wizard-opt-btn');
  for (var i = 0; i < allBtns.length; i++) {
    allBtns[i].classList.remove('selected');
  }

  goToWizardStep(1);
}

function toggleFAQ(button, e) {
  if (e && typeof e.preventDefault === 'function') e.preventDefault();
  if (!button) return;
  var item = button.closest('.faq-item') || button.parentElement;
  if (!item) return;
  var isAlreadyActive = item.classList.contains('active');

  var items = document.querySelectorAll('.faq-item');
  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove('active');
  }

  if (!isAlreadyActive) {
    item.classList.add('active');
  }
}

function filterFAQ() {
  var input = document.getElementById('faq-search');
  var query = (input ? input.value : '').toLowerCase();
  var faqItems = document.querySelectorAll('.faq-item');

  for (var i = 0; i < faqItems.length; i++) {
    var item = faqItems[i];
    var text = (item.innerText || item.textContent || '').toLowerCase();
    item.style.display = text.indexOf(query) !== -1 ? 'block' : 'none';
  }
}

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

function initAll() {
  initNavbar();
  initScrollExpansionHero();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}
window.addEventListener('load', initAll);
