import "./styles.css";
import { useEffect, useState } from "react";
import fundo_barbearia from "./assets/images/fundo_barbearia.jpg";
import fundo_oficina from "./assets/images/fundo_oficina.jpg";
import ThemeToggle from "./components/ThemeToggle";
import LanguageToggle from "./components/LanguageToggle";
import ContactForm from "./components/ContactForm";
import type { Theme, LanguageKey, Project, Translations } from "./types";
import curriculumBR from "./assets/docs/Currículo Dev Full Stack - Diego Ramos.pdf";
import curriculum from "./assets/docs/Curriculum Dev Full Stack - Diego Ramos.pdf";
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaWhatsapp,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import { SiTypescript, SiVite } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

// Arrays de dados
const programLanguages = [
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Golang", icon: <FaGolang /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "JavaScript (Node.js)", icon: <FaNodeJs /> },
];

const frameworksAndLibraries = [
  { name: "React", icon: <FaReact /> },
  { name: "React Native", icon: <TbBrandReactNative /> },
  { name: "Laravel", icon: <FaLaravel /> },
  { name: "Vite", icon: <SiVite /> },
];

const toolsAndTechnologies = [
  { name: "HTML & CSS", icon: <FaHtml5 /> },
  { name: "Git & GitHub", icon: <FaGithub /> },
];

const projects: Project[] = [
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
    link: "https://github.com/DiegoRamos1012/OficinaMecanica",
  },
  // Adicione mais projetos conforme necessário
];

const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      stacks: "Linguagens",
      projects: "Projetos",
      contact: "Contato",
    },
    aboutTitle: "Sobre mim",
    aboutText:
      "Sou um desenvolvedor apaixonado por tecnologia, com experiência em desenvolvimento web e interfaces modernas. Busco aprimorar meu conhecimento em Back-end e Mobile para criar softwares mais robustos e satisfazer as necessidades do cliente.",
    stacksTitle: "Linguagens de Programação",
    skillsTitle: "Linguagens",
    technologiesTitle: "Frameworks e Bibliotecas",
    toolsTitle: "Ferramentas e Outras Tecnologias",

    projectsTitle: "Projetos",
    project1Title: "App Mobile para Barbearia",
    project2Title: "Gerenciamento de Oficina Mecânica",
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
    downloadInternationalCV: "Baixar Currículo em Inglês",
    contactInfo: "Informações de Contato",
    contactText:
      "Estou disponível para projetos freelance e oportunidades de trabalho. Entre em contato comigo pelo formulário ou diretamente pelos contatos abaixo.",
    theme: {
      dark: "Escuro",
      light: "Claro",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      stacks: "Programming Languages",
      projects: "Projects",
      contact: "Contact",
    },
    aboutTitle: "About me",
    aboutText:
      "I'm a passionate developer with experience in web development and modern interfaces. I'm looking to improve my knowledge in Backend and Mobile to create more robust software and meet client needs.",
    stacksTitle: "Programming Languages",
    skillsTitle: "Programming Languages",
    technologiesTitle: "Frameworks and Libraries",
    toolsTitle: "Tools and Other Technologies",
    projectsTitle: "Projects",
    project1Title: "Barbershop Mobile App",
    project2Title: "Auto Repair Shop Management",
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
    downloadInternationalCV: "Download International CV",
    contactInfo: "Contact Information",
    contactText:
      "I'm available for freelance projects and job opportunities. Contact me through the form or directly via email.",
    theme: {
      dark: "Dark",
      light: "Light",
    },
  },
};

/**
 * Componente de Navbar
 */
function Navbar({
  theme,
  setTheme,
  lang,
  setLang,
}: {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  lang: LanguageKey;
  setLang: React.Dispatch<React.SetStateAction<LanguageKey>>;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`navbar ${
        theme === "dark" ? "theme-dark-navbar" : "theme-light-navbar"
      }`}
    >
      <div className="navbar-left">
        <LanguageToggle lang={lang} setLang={setLang} />
      </div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" className="navbar-link">
          {translations[lang].nav.home}
        </a>
        <a href="#about" className="navbar-link">
          {translations[lang].nav.about}
        </a>
        <a href="#stacks" className="navbar-link">
          {translations[lang].nav.stacks}
        </a>
        <a href="#projects" className="navbar-link">
          {translations[lang].nav.projects}
        </a>
        <a href="#contact" className="navbar-link">
          {translations[lang].nav.contact}
        </a>
      </div>

      <div className="navbar-actions">
        <ThemeToggle
          theme={theme}
          setTheme={setTheme}
          lang={lang}
          translations={translations}
        />
        <button
          className="menu-button"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Menu de navegação"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}

/**
 * Hero section com cabeçalho do portfólio
 */
function HeroSection({ lang }: { lang: LanguageKey }) {
  return (
    <section id="home" className="hero-section">
      <div className="portfolio-header">
        <h1>Diego Ramos dos Santos</h1>
        <p>
          {lang === "pt"
            ? "Desenvolvedor Full Stack | React | Golang | Typescript"
            : "Full Stack Developer | React | Golang | Typescript"}
        </p>
      </div>
      <DownloadCV lang={lang} />
    </section>
  );
}

/**
 * Componente para o botão de download do currículo
 */
function DownloadCV({ lang }: { lang: LanguageKey }) {
  const t = translations[lang];

  return (
    <>
      <div className="download-cv-container">
        <a
          href={curriculumBR}
          download="Currículo Dev Full Stack - Diego Ramos.pdf"
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
      <div className="download-cv-container">
        <a
          href={curriculum}
          download="Curriculum Dev Full Stack - Diego Ramos.pdf"
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
          {t.downloadInternationalCV}
        </a>
      </div>
    </>
  );
}

/**
 * Seção "Sobre mim", texto adaptado ao idioma
 */
function About({ lang }: { lang: LanguageKey }) {
  const t = translations[lang];
  return (
    <section id="about" className="portfolio-section">
      <h2>{t.aboutTitle}</h2>
      <div className="about-content">
        <p>{t.aboutText}</p>
      </div>
    </section>
  );
}

/**
 * Seção de stacks, lista adaptada ao idioma
 */
function Stacks({
  stacks,
  lang,
}: {
  stacks: Array<{ name: string; icon: React.ReactNode }>;
  lang: LanguageKey;
}) {
  const t = translations[lang];
  return (
    <section id="stacks" className="stacks-section">
      <h2>{t.stacksTitle}</h2>
      <ul className="stacks-list">
        {stacks.map((stack) => (
          <li key={stack.name} className="stack-item">
            <span className="stack-icon">{stack.icon}</span>
            <span className="stack-name">{stack.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Nova seção de tecnologias
function TechnologiesSection({
  technologies,
  lang,
}: {
  technologies: Array<{ name: string; icon: React.ReactNode }>;
  lang: LanguageKey;
}) {
  const t = translations[lang];
  return (
    <section id="technologies" className="stacks-section">
      <h2>{t.technologiesTitle}</h2>
      <ul className="stacks-list">
        {technologies.map((tech) => (
          <li key={tech.name} className="stack-item">
            <span className="stack-icon">{tech.icon}</span>
            <span className="stack-name">{tech.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Nova seção para toolsAndTechnologies
function ToolsSection({
  tools,
  lang,
}: {
  tools: Array<{ name: string; icon: React.ReactNode }>;
  lang: LanguageKey;
}) {
  const t = translations[lang];
  return (
    <section id="tools" className="stacks-section">
      <h2>{t.toolsTitle}</h2>
      <ul className="stacks-list">
        {tools.map((tool) => (
          <li key={tool.name} className="stack-item">
            <span className="stack-icon">{tool.icon}</span>
            <span className="stack-name">{tool.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * Seção de projetos, com grid de projetos
 */
function Projects({
  projects,
  lang,
}: {
  projects: Project[];
  lang: LanguageKey;
}) {
  const t = translations[lang];

  // Troca as descrições e títulos dos projetos conforme idioma
  const localizedProjects = projects.map((p, idx) => {
    if (idx === 0) {
      return {
        ...p,
        title: t.project1Title,
        description: t.project1Desc,
      };
    }
    if (idx === 1) {
      return {
        ...p,
        title: t.project2Title,
        description: t.project2Desc,
      };
    }
    return p;
  });

  return (
    <section id="projects" className="portfolio-section projects-section">
      <h2>{t.projectsTitle}</h2>
      <div className="projects-grid">
        {localizedProjects.map((project, index) => (
          <div
            className="improved-card"
            key={project.title}
            style={{
              animation: `fadeInUp 0.6s ease-out forwards ${index * 0.2}s`,
              opacity: 0,
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
                  height={
                    project.title.includes("Barbearia") ? "160px" : "160px"
                  }
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              )}
            </div>
            <div className="project-info">
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`${t.seeOnGithub}: ${project.title}`}
              >
                <span>{t.seeOnGithub}</span>
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  style={{ marginLeft: 6, verticalAlign: "middle" }}
                  aria-hidden="true"
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
    </section>
  );
}

/**
 * Seção de contato com formulário e informações
 */
function Contact({
  lang,
  translations,
}: {
  lang: LanguageKey;
  translations: Translations;
}) {
  const t = translations[lang];

  return (
    <section id="contact" className="contact-section">
      <h2>{t.contactTitle}</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>{t.contactInfo}</h3>
          <p>{t.contactText}</p>
          <p className="contact-item">
            <MdEmail
              className="contact-icon"
              style={{ marginRight: 10, position: "relative", top: 3 }}
            />
            Email: diego.rms1012@gmail.com
          </p>
          <p className="contact-item">
            <FaGithub
              className="contact-icon"
              style={{ marginRight: 10, position: "relative", top: 3 }}
            />
            Github:{" "}
            <a
              href="https://github.com/DiegoRamos1012"
              target="_blank"
              rel="noopener noreferrer"
            >
              DiegoRamos1012
            </a>
          </p>
          <p className="contact-item">
            <FaWhatsapp
              className="contact-icon"
              style={{ marginRight: 10, position: "relative", top: 3 }}
            />
            Whatsapp: (12) 97405-2268
          </p>
        </div>
        <ContactForm lang={lang} translations={translations} />
      </div>
    </section>
  );
}

/**
 * Rodapé do portfólio, texto adaptado ao idioma
 */
function Footer({ lang }: { lang: LanguageKey }) {
  const t = translations[lang];

  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <p>{t.footer.replace("{year}", new Date().getFullYear().toString())}</p>
      </div>
    </footer>
  );
}

/**
 * Componente principal do app, controla tema e idioma
 */
function App() {
  // Dark theme como padrão
  const [theme, setTheme] = useState<Theme>("dark");
  const [lang, setLang] = useState<LanguageKey>("pt");

  useEffect(() => {
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
    document.body.style.transition = "background 0.4s, color 0.4s";
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
      <div className="portfolio-container">
        <HeroSection lang={lang} />
        <About lang={lang} />
        <Stacks stacks={programLanguages} lang={lang} />
        <TechnologiesSection
          technologies={frameworksAndLibraries}
          lang={lang}
        />
        <ToolsSection tools={toolsAndTechnologies} lang={lang} />
        <Projects projects={projects} lang={lang} />
        <Contact lang={lang} translations={translations} />
        <Footer lang={lang} />
      </div>
    </>
  );
}

export default App;
