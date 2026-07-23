/* =========================================================
   1) TES LIENS GLOBAUX (LinkedIn, CV, etc.)
   Remplace "#" par tes vraies URLs.
   ========================================================= */
const globalLinks = {
  linkedin: "#",          // ex: "https://www.linkedin.com/in/ton-profil"
  resume:   "#",          // ex: lien vers ton CV PDF (GitHub, Drive...)
};

/* =========================================================
   2) TES PROJETS
   - track : "backend" | "ia" | "data"
   - status : "done" (terminé) | "progress" (en cours)
   - links : laisse "" (vide) tant que tu n'as pas le lien —
     le bouton s'affichera automatiquement en pointillés "à ajouter".
     Types de liens disponibles : github, demo, swagger, video,
     powerbi, n8n, files
   ========================================================= */
const projects = [
  {
    track: "backend",
    status: "done",
    title: "Bus Reservation System",
    description: "Gestion des réservations, des bus et des trajets. CRUD complet, API REST documentée, connectée à un frontend React.",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "React"],
    links: { github: "https://github.com/koffi-bi/reservation_bus", demo: "https://venerable-crisp-a49c05.netlify.app/", swagger: "", video: "" }
  },
  {
    track: "ia",
    status: "done",
    title: "Agent IA (automatisation n8n)",
    description: "Agent d'automatisation basé sur n8n, intégrant des APIs externes pour automatiser des tâches répétitives.",
    tech: ["n8n", "APIs", "Automatisation"],
    links: { n8n: "https://drive.google.com/file/d/1vP5rll6PHooBzmgIBimXZfizGJ8gRiEq/view?usp=sharing", video: "https://www.linkedin.com/posts/bi-nene-r%C3%A9gis-yoh-694639317_et-si-un-agent-ia-r%C3%A9pondait-%C3%A0-vos-touristes-ugcPost-7470989705493467136-pBMp/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFBcq5ABTtzL_j-Ic845F-KTsze6mmq5DhM", files: "https://drive.google.com/file/d/1B7zDTRYSk38KBr6vHdmMhsLY24-D5LfK/view?usp=sharing" }
  },
  {
    track: "backend",
    status: "progress",
    title: "Chat&Go",
    description: "Backend Spring Boot terminé (base PostgreSQL, API testée), frontend React en cours de développement.",
    tech: ["Spring Boot", "PostgreSQL", "Swagger", "React"],
    links: { github: "", demo: "", swagger: "", video: "" }
  },
  {
    track: "data",
    status: "done",
    title: "Dashboard Power BI",
    description: "Tableau de bord de visualisation de données — à compléter : source des données, indicateurs suivis.",
    tech: ["Power BI", "SQL"],
    links: { powerbi: "https://drive.google.com/file/d/1uPF_5CcQ4I6PJmck24s_KY-QWbSGBqv1/view?usp=sharing", video: "https://www.linkedin.com/posts/bi-nene-r%C3%A9gis-yoh-694639317_et-si-on-utilisait-les-donn%C3%A9es-pour-sauver-ugcPost-7477721691486388224--rTy/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFBcq5ABTtzL_j-Ic845F-KTsze6mmq5DhM" }
  },
  
  {
    track: "ia",
    status: "progress",
    title: "CivilSat AI",
    description: "Projet d'intelligence artificielle — à compléter : problème résolu, architecture, résultats.",
    tech: ["Python", "IA"],
    links: { github: "", demo: "", video: "" }
  },
  
  {
    track: "ia",
    status: "done",
    title: "Cv Match ",
    description: "Projet lié à l'IA appliquée au recrutement — à compléter : rôle, technos utilisées, résultats.",
    tech: ["Python", "FastAPI", "IA"],
    links: { github: "https://github.com/koffi-bi/CvMatch_projetB", demo: "https://nene.cvmatch.space/", video: "" }
  },
  
  {
    track: "data",
    status: "progress",
    title: "Modèles de Machine Learning",
    description: "Modèles ML réalisés dans le cadre du stage chez Simplon — à compléter : jeu de données, algorithmes, résultats.",
    tech: ["Python", "Machine Learning"],
    links: { github: "", files: "" }
  },
  {
    track: "backend",
    status: "done",
    title: "FlyFret — Application interne",
    description: "Back-end Laravel/MySQL : gestion des colis, authentification, tableau de bord.",
    tech: ["Laravel", "PHP", "MySQL"],
    links: { github: "", files: "https://drive.google.com/file/d/17W64-8fnwo4tQP2wvh1eLLMXch4gk6mh/view?usp=sharing", demo: "https://flyfret.net/"}
  }
];

/* =========================================================
   Icônes et libellés par type de lien
   ========================================================= */
const linkMeta = {
  github:  { icon: "💻", label: "GitHub" },
  demo:    { icon: "🌐", label: "En ligne" },
  swagger: { icon: "📘", label: "Swagger" },
  video:   { icon: "🎥", label: "Vidéo" },
  powerbi: { icon: "📊", label: "Power BI" },
  n8n:     { icon: "🔧", label: "n8n" },
  files:   { icon: "📁", label: "Document" }
};

const statusMeta = {
  done:     { label: "Terminé",    class: "status-done" },
  progress: { label: "En cours",   class: "status-progress" }
};

/* =========================================================
   Rendu des cartes projets
   ========================================================= */
function renderProjects(){
  const grid = document.getElementById("project-grid");
  grid.innerHTML = "";

  projects.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.dataset.track = p.track;

    const st = statusMeta[p.status] || statusMeta.progress;

    const linksHtml = Object.entries(p.links || {}).map(([type, url]) => {
      const meta = linkMeta[type];
      if (!meta) return "";
      const empty = !url;
      const href = empty ? "#" : url;
      return `<a class="project-link ${empty ? "is-empty" : ""}" href="${href}" target="_blank" rel="noopener">
                <span class="ico">${meta.icon}</span>${meta.label}${empty ? ' <span class="link-flag">à ajouter</span>' : ""}
              </a>`;
    }).join("");

    card.innerHTML = `
      <div class="project-card-head">
        <h3>${p.title}</h3>
        <span class="status-pill ${st.class}">${st.label}</span>
      </div>
      <p class="project-desc">${p.description}</p>
      <div class="tech-tags">${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}</div>
      <div class="project-links">${linksHtml}</div>
    `;
    grid.appendChild(card);
  });
}

/* =========================================================
   Filtres par piste (Backend / IA / Data)
   ========================================================= */
function setupFilters(){
  const tabs = document.querySelectorAll(".track-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => { t.classList.remove("is-active"); t.setAttribute("aria-selected", "false"); });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      const track = tab.dataset.track;
      document.querySelectorAll(".project-card").forEach(card => {
        card.hidden = track !== "all" && card.dataset.track !== track;
      });
    });
  });
}

/* =========================================================
   Applique les liens globaux (LinkedIn, CV) partout où
   data-link="..." est présent
   ========================================================= */
function applyGlobalLinks(){
  document.querySelectorAll("[data-link]").forEach(el => {
    const key = el.dataset.link;
    const url = globalLinks[key];
    if (url && url !== "#") {
      el.href = url;
      el.removeAttribute("data-empty-parent");
      const flag = el.querySelector(".link-flag");
      if (flag) flag.remove();
    } else {
      el.href = "#";
      el.setAttribute("data-empty-parent", "");
    }
  });
}

document.getElementById("updated-year") &&
  (document.getElementById("updated-year").textContent = new Date().getFullYear());

renderProjects();
setupFilters();
applyGlobalLinks();
