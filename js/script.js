// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
if (toggle) {
  const moon = toggle.querySelector('.fa-moon');
  const sun = toggle.querySelector('.fa-sun');
  const updateIcons = (isDark) => {
    if (isDark) {
      moon.style.display = 'none';
      sun.style.display = 'inline-block';
    } else {
      moon.style.display = 'inline-block';
      sun.style.display = 'none';
    }
  };
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.add('dark');
    updateIcons(true);
  }
  toggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcons(isDark);
  });
}

// Scroll to top
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) scrollBtn.style.display = 'flex';
  else scrollBtn.style.display = 'none';
});
if (scrollBtn) scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Toast function
function showToast(message, duration = 4000) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// ================= PROJECT DATA (6 projects) =================
const projectsData = [
  {
    id: 0,
    tag: "INDUSTRIAL CONSTRUCTION",
    title: "PepsiCo Beverage Manufacturing Facility Expansion",
    preview: "Leading project planning and execution support for a major PepsiCo facility, achieving 98% milestone compliance through advanced 3-tier scheduling and cross-functional coordination.",
    context: "Delivering industrial works within a live production environment for PepsiCo India Holdings, focusing on utility integration and sustainability-driven infrastructure.",
    actions: "Developed L1-L3 schedules for 30+ work packages and coordinated daily lookaheads with 20+ subcontractor teams to reduce workfront conflicts by 30%. Implemented a progress measurement system for 200+ activities and managed document control for 300+ drawings.",
    results: "Reduced reporting turnaround time by 40% using standardized dashboards, saved approximately 3 weeks of potential slippage through proactive float risk identification, and maintained schedule variance within ±5%.",
    skills: ["Primavera P6", "3-Tier Scheduling (L1-L3)", "Progress Monitoring", "Standardized Dashboards", "Document Control", "Site Coordination"],
    metrics: ["98% milestone compliance", "±5% variance", "40% faster reporting"]
  },
  {
    id: 1,
    tag: "CAPEX DELIVERY",
    title: "UK-Wide Sterilization Plant Rollout (Revolution-ZERO)",
    preview: "Directed the end-to-end CAPEX delivery of £3M+ sterilization plant projects across the UK, managing technical design and regulatory compliance.",
    context: "Managing large-scale technical infrastructure projects in a high-compliance environment.",
    actions: "Led scope management, budgeting, and resource planning. Used AutoCAD for 2D layout coordination and fabrication plans while establishing KPIs and risk registers to improve project visibility.",
    results: "Successfully delivered multiple plant projects by aligning site execution with technical deliverables and ensuring adherence to quality and regulatory standards.",
    skills: ["AutoCAD (2D Coordination)", "CAPEX Project Delivery", "KPI Tracking", "Risk Registers", "Resource Planning", "Technical Documentation"],
    metrics: ["£3M+ CAPEX delivered", "2 plants commissioned", "100% traceability"]
  },
  {
    id: 2,
    tag: "DIGITAL TRANSFORMATION",
    title: "ERP Implementation & Digital Transformation",
    preview: "Orchestrated an ERP implementation roadmap that improved operational efficiency by 10% and identified $100,000 in annual savings.",
    context: "Analyzing business processes for Gray Fox Consulting to identify digital improvement opportunities through structured ERP integration.",
    actions: "Conducted deep-dive risk analysis, developed mitigation strategies, and managed stakeholder communications to align project delivery with business goals.",
    results: "Shortened projected project timelines by 15%, reduced identified project risks by 30%, and significantly improved resource utilization.",
    skills: ["ERP Systems", "Business Process Analysis", "Risk Mitigation Planning", "Stakeholder Management", "Implementation Roadmapping"],
    metrics: ["$100k annual savings", "30% risk reduction", "15% faster timeline"]
  },
  {
    id: 3,
    tag: "IT SERVICE MANAGEMENT",
    title: "NHS Large-Scale Email Migration Support",
    preview: "Provided critical technical support during a high-pressure enterprise email migration for the NHS, maintaining a 95% issue resolution rate.",
    context: "Supporting a major digital transformation activity for the NHS Business Services Authority involving enterprise-level systems.",
    actions: "Managed service desk tickets, performed complex troubleshooting, and handled user setup within a high-pressure operational environment.",
    results: "Contributed to seamless service continuity and reliability during a critical transition period for the organization.",
    skills: ["Azure", "Exchange", "Microsoft 365", "SCCM", "Troubleshooting", "IT Service Desk Management"],
    metrics: ["95% issue resolution", "Enterprise migration", "0 downtime"]
  },
  {
    id: 4,
    tag: "DIVERSITY & INCLUSION",
    title: "Institutional Diversity & Inclusion Initiatives",
    preview: "Developed and implemented strategic D&I initiatives at Northumbria University, leading to a 20% increase in student satisfaction.",
    context: "Collaborating with university stakeholders to improve communication, engagement, and inclusion practices across diverse groups.",
    actions: "Planned and delivered strategic student-focused events, including co-organizing a TED Talk event and presenting findings at national conferences like RAISE.",
    results: "Directly contributed to institutional improvements in student engagement and the success of university-wide inclusion programmes.",
    skills: ["Stakeholder Management", "Strategic Event Planning", "Cross-Functional Coordination", "Public Speaking/Presenting"],
    metrics: ["20% student satisfaction", "TED Talk co-organizer", "RAISE 2022 speaker"]
  },
  {
    id: 5,
    tag: "APPLIED RESEARCH",
    title: "Research: AI in Project Risk Management (MSc Dissertation)",
    preview: "A quantitative research study investigating how Artificial Intelligence can be leveraged to identify and mitigate risks in complex project environments.",
    context: "Completed as part of an MSc in Project Management at Northumbria University to explore AI in modern project controls.",
    actions: "Conducted a quantitative study focused on AI applications for risk identification, analysis, and mitigation strategies within high-value industrial sectors.",
    results: "Graduated with a 2:1 Commendation and a dissertation score of 65, providing actionable insights into future-proofing project risk management.",
    skills: ["Quantitative Research", "AI Risk Identification", "Project Risk Management", "Data Analysis"],
    metrics: ["Score 65", "2:1 Commendation", "Mixed-methods study"]
  }
];

// Render projects on projects.html
function renderProjects() {
  const container = document.getElementById('projectsFullGrid');
  if (!container) {
    console.warn('projectsFullGrid container not found');
    return;
  }
  container.innerHTML = '';
  projectsData.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-full-card fade-up';
    card.innerHTML = `
      <div class="project-tag">${proj.tag}</div>
      <h3>${proj.title}</h3>
      <p>${proj.preview}</p>
      <div class="project-metrics">
        ${proj.metrics.map(m => `<span>${m}</span>`).join('')}
      </div>
      <div class="project-skills">
        ${proj.skills.map(s => `<span>${s}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="#" class="project-link preview-link" data-id="${proj.id}">Preview project →</a>
        <a href="#" class="project-link case-link" data-id="${proj.id}">View case study →</a>
      </div>
    `;
    container.appendChild(card);
  });
  attachProjectLinkListeners();
}

function attachProjectLinkListeners() {
  document.querySelectorAll('.preview-link, .case-link').forEach(link => {
    link.removeEventListener('click', handleProjectLink);
    link.addEventListener('click', handleProjectLink);
  });
}

function handleProjectLink(e) {
  e.preventDefault();
  const id = parseInt(e.currentTarget.getAttribute('data-id'));
  const project = projectsData.find(p => p.id === id);
  if (!project) return;
  const isPreview = e.currentTarget.classList.contains('preview-link');
  showProjectModal(project, isPreview ? 'preview' : 'case');
}

function showProjectModal(project, type) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;
  if (type === 'preview') {
    modalBody.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.preview}</p>
      <h4>Key Metrics</h4>
      <ul>${project.metrics.map(m => `<li>${m}</li>`).join('')}</ul>
      <h4>Technical Skills</h4>
      <div class="skills-list">${project.skills.map(s => `<span>${s}</span>`).join('')}</div>
    `;
  } else {
    modalBody.innerHTML = `
      <h3>${project.title} – Case Study</h3>
      <h4>Context</h4>
      <p>${project.context}</p>
      <h4>Actions</h4>
      <p>${project.actions}</p>
      <h4>Results</h4>
      <p>${project.results}</p>
      <h4>Technical Skills</h4>
      <div class="skills-list">${project.skills.map(s => `<span>${s}</span>`).join('')}</div>
    `;
  }
  modal.style.display = 'block';
  const closeSpan = modal.querySelector('.modal-close');
  if (closeSpan) closeSpan.onclick = () => modal.style.display = 'none';
  window.onclick = (event) => {
    if (event.target === modal) modal.style.display = 'none';
  };
}

// For index page preview links
function initIndexPreviews() {
  const previewCards = document.querySelectorAll('.preview-card');
  previewCards.forEach((card, idx) => {
    if (idx < projectsData.length) {
      const proj = projectsData[idx];
      const previewLink = card.querySelector('.preview-link');
      const caseLink = card.querySelector('.case-link');
      if (previewLink) previewLink.setAttribute('data-id', proj.id);
      if (caseLink) caseLink.setAttribute('data-id', proj.id);
    }
  });
  attachProjectLinkListeners();
}

// ================= MAILTO CONTACT FORM (FIXED) =================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    if (!nameInput || !emailInput || !messageInput) return;
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    if (!name || !email || !message) {
      showToast('Please fill in all fields.', 3000);
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      showToast('Please enter a valid email address.', 3000);
      return;
    }
    // Build mailto: link
    const to = 'Aditya.abhyankar22@gmail.com';
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    showToast('Opening your email client... Please send the email.', 4000);
  });
}

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initIndexPreviews();
});