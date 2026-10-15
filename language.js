
const translations = {
  "pt-BR": {
    "profile-alt": "Foto de perfil de Letícia Marcolino",
    "home-title": "Início",
    "more-title": "Mais informações",

    "role": "Desenvolvimento / Análise de Dados",
    "about-title": "Sobre Mim",
    "skills-title": "Minhas Habilidades",

    "bio-1": `Sou uma profissional em transição de carreira para a área de tecnologia, com <strong>6 anos de experiência operacional na indústria farmacêutica</strong> e, nos últimos 2 anos, dedicada à construção de conhecimentos em <strong>Desenvolvimento de Software e Análise de Dados</strong>.`,

    "bio-2": `Atualmente, curso <strong>Análise e Desenvolvimento de Sistemas</strong> e aprimoro minhas habilidades em desenvolvimento Front-End, com HTML5 e CSS3, além de JavaScript e Python. Na área de dados, venho desenvolvendo conhecimentos em <strong>Python, SQL, Power BI e Business Intelligence</strong>, com foco em análise, tratamento e visualização de dados para transformar informações em insights relevantes.`,

    "bio-3": `Minha trajetória profissional fortaleceu competências essenciais, como <strong>resolução de problemas, pensamento analítico e aprendizado contínuo</strong>, que aplico tanto na minha experiência operacional quanto nos desafios técnicos que venho explorando.`,

    "bio-4": `Busco uma oportunidade para integrar minha experiência profissional aos conhecimentos em tecnologia, contribuindo para o desenvolvimento de soluções eficientes, a melhoria de processos e a <strong>tomada de decisões orientada por dados</strong>.`,

    "development-title": "Desenvolvimento de Software",
    "development-description": `Criação de sites e aplicações, utilizando <strong>HTML5, CSS3, JavaScript e Python</strong>.`,

    "english-title": "Inglês Avançado",
    "english-description": "Inglês avançado, com boa fluência na comunicação oral e escrita.",

    "database-title": "Análise de Dados e Banco de Dados",
    "database-description": `Organização, modelagem e análise de dados utilizando <strong>Python, SQL e ferramentas de Business Intelligence</strong>.`,

    "security-title": "Boas Práticas e Segurança",
    "security-description": "Atenção aos processos, organização e aplicação de boas práticas no desenvolvimento de soluções.",

    "footer-text": "© 2026 • Desenvolvido por"
  },

  "en": {
    "profile-alt": "Profile photo of Letícia Marcolino",
    "home-title": "Home",
    "more-title": "More information",

    "role": "Software Development / Data Analytics",
    "about-title": "About Me",
    "skills-title": "My Skills",

    "bio-1": `I am a professional transitioning into the technology field, with <strong>6 years of operational experience in the pharmaceutical industry</strong> and the past 2 years dedicated to developing my knowledge of <strong>Software Development and Data Analytics</strong>.`,

    "bio-2": `I am currently pursuing a degree in <strong>Systems Analysis and Development</strong> while strengthening my Front-End Development skills in HTML5 and CSS3, as well as JavaScript and Python. In data analytics, I have been developing my knowledge of <strong>Python, SQL, Power BI, and Business Intelligence</strong>, focusing on data analysis, processing, and visualization to transform information into meaningful insights.`,

    "bio-3": `My professional journey has helped me develop essential skills such as <strong>problem-solving, analytical thinking, and continuous learning</strong>, which I apply both in my operational experience and in the technical challenges I explore.`,

    "bio-4": `I am seeking an opportunity to combine my professional experience with my technical knowledge, contributing to efficient solutions, process improvement, and <strong>data-driven decision-making</strong>.`,

    "development-title": "Software Development",
    "development-description": `Building websites and applications using <strong>HTML5, CSS3, JavaScript, and Python</strong>.`,

    "english-title": "Advanced English",
    "english-description": "Advanced English proficiency, with strong oral and written communication skills.",

    "database-title": "Data Analytics and Databases",
    "database-description": `Data organization, modeling, and analysis using <strong>Python, SQL, and Business Intelligence tools</strong>.`,

    "security-title": "Best Practices and Security",
    "security-description": "Attention to processes, organization, and the application of best practices when developing solutions.",

    "footer-text": "© 2026 • Developed by"
  }
};

const languageToggle = document.getElementById("language-toggle");

let currentLanguage = "pt-BR";

function setLanguage(language) {
  const dictionary = translations[language];

  if (!dictionary) return;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;

    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.alt = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const key = element.dataset.i18nTitle;

    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.title = dictionary[key];
    }
  });

  document.documentElement.lang = language;
  currentLanguage = language;

  languageToggle.textContent =
    language === "pt-BR" ? "English ↗" : "Português ↗";

  languageToggle.setAttribute(
    "aria-label",
    language === "pt-BR"
      ? "Translate the entire page to English"
      : "Traduzir a página inteira para português"
  );

  languageToggle.lang = language === "pt-BR" ? "en" : "pt-BR";
}

languageToggle.addEventListener("click", (event) => {
  event.preventDefault();

  const nextLanguage =
    currentLanguage === "pt-BR" ? "en" : "pt-BR";

  setLanguage(nextLanguage);
});
