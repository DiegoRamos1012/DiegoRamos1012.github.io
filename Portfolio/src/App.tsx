import "./styles.css";
import { useEffect, useState } from "react";
import fundo_barbearia from "./assets/images/fundo_barbearia.jpg";
import fundo_oficina from "./assets/images/fundo_oficina.jpg";
import ThemeToggle from "./components/ThemeToggle";
import LanguageToggle from "./components/LanguageToggle";
import ContactForm from "./components/ContactForm";
// Importe o arquivo do currículo
import curriculum from "./assets/documents/Currículo Dev - Diego Ramos (2).pdf";

// 1. Arrays de dados
const skills = [
  "HTML & CSS",
  "Typescript",
  "Node.js",
  "React",
  "Golang",
  "React Native",
  "Git & GitHub",
];

const projects = [
  {
    title: "App Mobile para Barbearia",
    image: fundo_barbearia,
    description:
      "App para dispositivos Android/IOS criado para agilizar o negócio, facilitando o trabalho da equipe e melhorando a experiência do usuário.",
    link: "https://github.com/DiegoRamos1012/AppBarbearia",
  },
  {
    title: "Gerenciamento de Oficina Mecânica",
    image: fundo_oficina,
    description:
      "Um site ágil e intuitivo ao usuário destinado ao uso da equipe do negócio, onde é possível gerenciar estoque, clientes, novos pedidos e mais.",
    link: "#",
  },
  // Adicione mais projetos conforme necessário
];

const translations = {
  pt: {
    aboutTitle: "Sobre mim",
    aboutText:
      "Sou um desenvolvedor apaixonado por tecnologia, com experiência em desenvolvimento web e interfaces modernas. Busco aprimorar meu conhecimento em Back-end e Mobile para criar softwares mais robustos e satisfazer as necessidades do cliente.",
    skillsTitle: "Habilidades",
    projectsTitle: "Projetos",
    project1Desc:
      "App para dispositivos Android/IOS criado para agilizar o negócio, facilitando o trabalho da equipe e melhorando a experiência do usuário.",
    project2Desc:
      "Um site ágil e intuitivo ao usuário destinado ao uso da equipe do negócio, onde é possível gerenciar estoque, clientes, novos pedidos e mais.",
    seeOnGithub: "Ver no GitHub",
    previousProject: "Projeto anterior",
    nextProject: "Próximo projeto",
    contactTitle: "Contato",
    nameLabel: "Nome",
    emailLabel: "Email",
    subjectLabel: "Assunto",
    messageLabel: "Mensagem",
    submitButton: "Enviar Mensagem",
    successMessage: "Mensagem enviada com sucesso! Retornarei em breve.",
    errorMessage: "Erro ao enviar mensagem. Por favor, tente novamente.",
    namePlaceholder: "Seu nome",
    emailPlaceholder: "Seu email",
    subjectPlaceholder: "Assunto da mensagem",
    messagePlaceholder: "Escreva sua mensagem aqui...",
    footer:
      "© {year} Diego Ramos dos Santos - Github: Diego1012 - Email: diego.rms1012@gmail.com",
    downloadCV: "Baixar Currículo",
  },
  en: {
    aboutTitle: "About me",
    aboutText:
      "I'm a developer passionate about technology, experienced in web development and modern interfaces. I seek to improve my Backend and Mobile skills to create robust software and meet client needs.",
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    project1Desc:
      "App for Android/iOS devices created to streamline business, making the team's work easier and improving user experience.",
    project2Desc:
      "An agile and intuitive website for business teams, enabling management of inventory, clients, new orders, and more.",
    seeOnGithub: "View on GitHub",
    previousProject: "Previous project",
    nextProject: "Next project",
    contactTitle: "Contact",
    nameLabel: "Name",
    emailLabel: "Email",
    subjectLabel: "Subject",
    messageLabel: "Message",
    submitButton: "Send Message",
    successMessage: "Message sent successfully! I'll get back to you soon.",
    errorMessage: "Error sending message. Please try again.",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    subjectPlaceholder: "Message subject",
    messagePlaceholder: "Write your message here...",
    footer:
      "© {year} Diego Ramos dos Santos - Github: Diego1012 - Email: diego.rms1012@gmail.com",
    downloadCV: "Download CV",
  },
};

// Cabeçalho do portfólio, exibe nome e título
function HeaderIntl({ lang }: { lang: "pt" | "en" }) {
  return (
    <header className="portfolio-header">
      <h1>Diego Ramos dos Santos</h1>
      <p>
        {lang === "pt"
          ? "Desenvolvedor Full Stack | React | Golang | Typescript"
          : "Full Stack Developer | React | Golang | Typescript"}
      </p>
    </header>
  );
}

// Componente para o botão de download do currículo
function DownloadCV({ lang }: { lang: "pt" | "en" }) {
  const t = translations[lang];

  return (
    <div className="download-cv-container">
      <a
        href={curriculum}
        download="Diego_Ramos_CV.pdf"
        className="download-cv-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: "8px" }}
        >
          <path
            d="M8 12L3 7L4.4 5.55L7 8.15V1H9V8.15L11.6 5.55L13 7L8 12ZM2 14V11H4V13H12V11H14V14H2Z"
            fill="currentColor"
          />
        </svg>
        {t.downloadCV}
      </a>
    </div>
  );
}

// Seção "Sobre mim", texto adaptado ao idioma
function About({ lang }: { lang: "pt" | "en" }) {
  const t = translations[lang];
  return (
    <section className="portfolio-section">
      <h2>{t.aboutTitle}</h2>
      <p>{t.aboutText}</p>
      <DownloadCV lang={lang} />
    </section>
  );
}

// Seção de habilidades, lista adaptada ao idioma
function Skills({ skills, lang }: { skills: string[]; lang: "pt" | "en" }) {
  const t = translations[lang];
  return (
    <section className="portfolio-section">
      <h2>{t.skillsTitle}</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

// Seção de projetos, com carrossel e textos adaptados ao idioma
function Projects({
  projects,
  lang,
}: {
  projects: {
    title: string;
    image?: string;
    description: string;
    link: string;
  }[];
  lang: "pt" | "en";
}) {
  const t = translations[lang];
  const [index, setIndex] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(2);
  const [expandedProjects, setExpandedProjects] = useState<{
    [key: string]: boolean;
  }>({});

  const maxIndex = Math.max(0, projects.length - projectsPerPage);

  // Função para alternar o estado expandido de um projeto
  const toggleExpanded = (projectTitle: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectTitle]: !prev[projectTitle],
    }));
  };

  useEffect(() => {
    // Ajusta número de projetos exibidos com base no tamanho da tela
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setProjectsPerPage(1);
      } else {
        setProjectsPerPage(2);
      }
    };

    // Chama a função no carregamento e adiciona evento de resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpa o evento quando componente desmonta
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showPrev = () => setIndex((i) => (i > 0 ? i - 1 : i));
  const showNext = () => setIndex((i) => (i < maxIndex ? i + 1 : i));

  // Troca as descrições dos projetos conforme idioma
  const visibleProjects = projects
    .slice(index, index + projectsPerPage)
    .map((p, idx) => {
      if (idx === 0 && index === 0) {
        return { ...p, description: t.project1Desc };
      }
      if (idx === 1 || (idx === 0 && index > 0)) {
        return { ...p, description: t.project2Desc };
      }
      return p;
    });

  return (
    <section className="portfolio-section">
      <h2>{t.projectsTitle}</h2>
      <div className="projects-carousel improved-carousel">
        <button
          className="carousel-arrow left"
          onClick={showPrev}
          disabled={index === 0}
          aria-label={t.previousProject}
        >
          &#8592;
        </button>
        <div className="carousel-track">
          {visibleProjects.map((project) => (
            <div
              className="project-card carousel-card improved-card"
              key={project.title}
              style={{
                animation: "fadeInCard 0.5s",
              }}
            >
              <div className="project-image-wrapper">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                    width="100%"
                    height="auto"
                  />
                )}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>

                {/* Versão desktop da descrição (oculta em mobile) */}
                <p
                  className="project-description desktop-only"
                  aria-hidden="false"
                >
                  {project.description}
                </p>

                {/* Versão mobile da descrição com botão expandir/recolher */}
                <div className="mobile-description-container">
                  <p
                    className={`project-description mobile-only ${
                      expandedProjects[project.title] ? "expanded" : ""
                    }`}
                    aria-hidden="true"
                  >
                    {project.description}
                  </p>

                  <button
                    className={`toggle-description-btn mobile-only ${
                      expandedProjects[project.title] ? "expanded" : ""
                    }`}
                    onClick={() => toggleExpanded(project.title)}
                    aria-expanded={expandedProjects[project.title]}
                  >
                    {expandedProjects[project.title]
                      ? lang === "pt"
                        ? "Ler menos"
                        : "Read less"
                      : lang === "pt"
                      ? "Ler mais"
                      : "Read more"}
                  </button>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <span>{t.seeOnGithub}</span>
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    style={{ marginLeft: 6, verticalAlign: "middle" }}
                  >
                    <path
                      d="M14 3h7v7m0-7L10 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 5v14h14v-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-arrow right"
          onClick={showNext}
          disabled={index >= maxIndex}
          aria-label={t.nextProject}
        >
          &#8594;
        </button>
      </div>
      <div className="carousel-indicator">
        {Array.from({
          length: Math.ceil(projects.length / (projectsPerPage || 1)),
        }).map((_, i) => (
          <span
            key={i}
            className={`carousel-dot${
              i === Math.floor(index / (projectsPerPage || 1)) ? " active" : ""
            }`}
            onClick={() => setIndex(i * (projectsPerPage || 1))}
          />
        ))}
      </div>
    </section>
  );
}

// Rodapé do portfólio, texto adaptado ao idioma
function Footer({ lang }: { lang: "pt" | "en" }) {
  const t = translations[lang];
  return (
    <footer className="portfolio-footer">
      <p>{t.footer.replace("{year}", new Date().getFullYear().toString())}</p>
    </footer>
  );
}

// Componente principal do app, controla tema e idioma
function App() {
  // Dark theme como padrão
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [lang, setLang] = useState<"pt" | "en">("pt");

  useEffect(() => {
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
    document.body.style.transition = "background 0.4s, color 0.4s";
  }, [theme]);

  return (
    <div className="portfolio-container">
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <LanguageToggle lang={lang} setLang={setLang} />
      <HeaderIntl lang={lang} />
      <About lang={lang} />
      <Skills skills={skills} lang={lang} />
      <Projects projects={projects} lang={lang} />
      <ContactForm lang={lang} translations={translations} />
      <Footer lang={lang} />
    </div>
  );
}

export default App;
