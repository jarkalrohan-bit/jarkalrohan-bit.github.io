/* ============================================================
   DEVOPS PORTFOLIO — DATA & LOGIC
   ============================================================ */

/* ---------- 1. SKILLS ---------- */
const SKILLS = [
  { category: "Cloud (AWS)",   items: ["EKS", "ECS", "ECR", "EC2", "S3", "IAM", "VPC", "CloudWatch"] },
  { category: "DevOps & CI/CD", items: ["Jenkins", "GitHub Actions", "Docker", "Kubernetes", "CI/CD"] },
  { category: "Infrastructure as Code", items: ["Terraform"] },
  { category: "Scripting",     items: ["Bash", "Python"] },
  { category: "Operating Systems", items: ["Linux", "Ubuntu"] },
  { category: "Monitoring",    items: ["Prometheus", "Grafana"] },
  { category: "Version Control", items: ["Git", "GitHub"] },
];

/* ---------- 2. PROJECTS ---------- */
const PROJECTS = [
  {
    title: "End-to-End CI/CD Pipeline with Jenkins & Kubernetes",
    description: "Implemented separate Jenkins CI and CD pipelines to automate application build and deployment. Built and pushed Docker images to Docker Hub, and configured Git-based triggers and ArgoCD for automated notifications and continuous delivery.",
    tags: ["Jenkins", "ArgoCD", "Docker", "Kubernetes", "Git"],
    appLink: "https://github.com/jarkalrohan-bit/TaskFlow.git",
    deployLink: "https://github.com/jarkalrohan-bit/manifest.git",
    demo: "",
    featured: true
  },
  {
    title: "3-Tier Application Deployment on AWS EKS",
    description: "Deployed a containerized 3-tier application (Frontend, Backend, Database) on AWS EKS. Built Docker images and stored them in Amazon ECR. Configured Kubernetes Deployments, Services, and networking to enable communication between tiers.",
    tags: ["AWS EKS", "ECR", "Docker", "Kubernetes"],
    appLink: "https://github.com/jarkalrohan-bit/wanderlust.git",
    deployLink: "https://github.com/jarkalrohan-bit/wanderlust-infra.git",
    demo: "",
    featured: true
  },
  {
    title: "AWS Infrastructure Automation with Terraform",
    description: "Provisioned a complete AWS environment using Terraform (Infrastructure as Code). Automated the creation of VPC, Subnets, Security Groups, EC2 instances, and S3 buckets, ensuring reproducible and version-controlled infrastructure deployments.",
    tags: ["Terraform", "AWS", "IaC", "VPC"],
    github: "https://github.com/yourusername/terraform-aws-infra",
    demo: "",
    featured: true
  }
];

/* ============================================================
   RENDERING & INTERACTIONS
   ============================================================ */

/* ----- Render Skills ----- */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if(!grid) return;
  grid.innerHTML = SKILLS.map(cat => `
    <div class="skill-cat">
      <h3>${cat.category}</h3>
      <div class="skill-tags">
        ${cat.items.map(i => `<span class="skill-tag">${i}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* ----- Render a project card ----- */
function projectCard(p) {
  let linksHTML = "";
  
  if (p.appLink) {
    linksHTML += `<a href="${p.appLink}" target="_blank" rel="noopener" style="font-size:0.7rem; font-family:var(--font-mono); color:var(--accent); background:rgba(0,212,255,0.1); padding:0.2rem 0.5rem; border-radius:4px; margin-right:0.4rem; margin-bottom:0.4rem; display:inline-block; text-decoration:none;">App ↗</a>`;
  }
  
  if (p.deployLink) {
    linksHTML += `<a href="${p.deployLink}" target="_blank" rel="noopener" style="font-size:0.7rem; font-family:var(--font-mono); color:var(--accent); background:rgba(0,212,255,0.1); padding:0.2rem 0.5rem; border-radius:4px; margin-right:0.4rem; margin-bottom:0.4rem; display:inline-block; text-decoration:none;">Deploy ↗</a>`;
  }
  
  if (p.github) {
     linksHTML += `<a href="${p.github}" target="_blank" rel="noopener" aria-label="GitHub repo" style="color:var(--text-muted); display:inline-block; vertical-align:middle;"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/></svg></a>`;
  }

  const demo = p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" aria-label="Live demo">↗</a>` : "";

  return `
    <div class="project-card">
      <div class="project-head">
        <h3 class="project-title">${p.title}</h3>
        <div class="project-links">${linksHTML}${demo}</div>
      </div>
      <p class="project-desc">${p.description}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
      </div>
    </div>
  `;
}

/* ----- Render Featured Projects ----- */
function renderFeatured() {
  const grid = document.getElementById("featuredProjects");
  if(!grid) return;
  grid.innerHTML = PROJECTS.filter(p => p.featured).map(projectCard).join("");
}

/* ----- Render All Projects (modal) ----- */
function renderAll() {
  const grid = document.getElementById("allProjects");
  if(!grid) return;
  grid.innerHTML = PROJECTS.map(projectCard).join("");
}

/* ----- Modal open/close ----- */
function setupModal() {
  const modal = document.getElementById("projectsModal");
  const openBtn = document.getElementById("viewAllBtn");
  const closeBtn = document.getElementById("modalClose");
  const overlay = document.getElementById("modalOverlay");
  if(!modal || !openBtn) return;

  function openModal() {
    renderAll();
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  openBtn.addEventListener("click", openModal);
  if(closeBtn) closeBtn.addEventListener("click", closeModal);
  if(overlay) overlay.addEventListener("click", closeModal);
}

/* ----- Scroll Reveal ----- */
function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}

/* ----- Navbar ----- */
function setupNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if(!navbar) return;

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  });

  if(toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }
}

/* ----- Contact Form ----- */
function setupContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if(!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "Sending...";
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      });
      if (res.ok) {
        status.textContent = "✅ Message sent! I'll get back to you soon.";
        status.style.color = "var(--accent)";
        form.reset();
      } else {
        status.textContent = "❌ Something went wrong. Please email me directly.";
        status.style.color = "#ff6b6b";
      }
    } catch (err) {
      status.textContent = "❌ Network error.";
      status.style.color = "#ff6b6b";
    }
  });
}

/* ----- Footer Year ----- */
function setupYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderFeatured();
  setupModal();
  setupReveal();
  setupNavbar();
  setupContactForm();
  setupYear();
});