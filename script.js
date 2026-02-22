const toggle = document.getElementById("themeToggle");
const body = document.body;
const languageToggle = document.getElementById("languageToggle");

let currentLanguage = localStorage.getItem("language") || "es";

/* =======================
   🌙 DARK MODE
======================= */

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
    toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
        toggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "dark");
        toggle.textContent = "🌙";
    }
});

/* =======================
   🌎 TRADUCCIONES
======================= */

const translations = {
    es: {
        navAbout: "Sobre mí",
        navProjects: "Proyectos",
        navContact: "Contacto",
        heroTitle: "Desarrollador Frontend & Diseñador UX/UI",
        heroText: "Venezolano viviendo en Brasil. Combino diseño visual, experiencia de usuario y desarrollo frontend para crear interfaces modernas, accesibles y enfocadas en resultados reales.",
        heroHighlight: "Enfocado en productos digitales claros, rápidos y centrados en el usuario.",
        btnProjects: "Ver proyectos",
        btnContact: "Trabajemos juntos",
        techTitle: "Tecnologías",
        projectsTitle: "Proyectos Destacados",
        behanceDesc: "Explora mis proyectos de diseño gráfico, branding y experiencias UX.",
        behanceBtn: "Ver en Behance",
        contactTitle: "Contacto",
        contactText: "Disponible para oportunidades frontend junior en Brasil o remoto."
    },
    pt: {
        navAbout: "Sobre mim",
        navProjects: "Projetos",
        navContact: "Contato",
        heroTitle: "Desenvolvedor Frontend & Designer UX/UI",
        heroText: "Venezuelano vivendo no Brasil. Combino design visual, experiência do usuário e desenvolvimento frontend para criar interfaces modernas, acessíveis e orientadas a resultados reais.",
        heroHighlight: "Focado em produtos digitais claros, rápidos e centrados no usuário.",
        btnProjects: "Ver projetos",
        btnContact: "Vamos trabalhar juntos",
        techTitle: "Tecnologias",
        projectsTitle: "Projetos em Destaque",
        behanceDesc: "Explore meus projetos de design gráfico, branding e experiências UX.",
        behanceBtn: "Ver no Behance",
        contactTitle: "Contato",
        contactText: "Disponível para oportunidades frontend júnior no Brasil ou remoto."
    }
};

function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.getElementById("hero-title").textContent =
        translations[lang].heroTitle;

    document.getElementById("hero-text").textContent =
        translations[lang].heroText;

    document.getElementById("hero-highlight").textContent =
        translations[lang].heroHighlight;

    localStorage.setItem("language", lang);
}

languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "es" ? "pt" : "es";
    applyTranslations(currentLanguage);
    languageToggle.textContent = currentLanguage.toUpperCase();
});

applyTranslations(currentLanguage);
languageToggle.textContent = currentLanguage.toUpperCase();