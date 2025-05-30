// Tipos para traduções
export type LanguageKey = "pt" | "en";

// Tipo para as traduções
export interface Translations {
  [key: string]: {
    nav: {
      home: string;
      about: string;
      skills: string;
      projects: string;
      contact: string;
    };
    aboutTitle: string;
    aboutText: string;
    skillsTitle: string;
    projectsTitle: string;
    project1Desc: string;
    project2Desc: string;
    seeOnGithub: string;
    previousProject: string;
    nextProject: string;
    contactTitle: string;
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    submitButton: string;
    successMessage: string;
    errorMessage: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    footer: string;
    downloadCV: string;
    contactInfo: string;
    contactText: string;
    // Replace the overly permissive indexer with a more specific one
    [key: string]: string | Record<string, string> | { [key: string]: string };
  };
}

// Tipo para tema
export type Theme = "light" | "dark";

// Tipo para projetos
export interface Project {
  title: string;
  image?: string;
  description: string;
  link: string;
}

// Tipo para dados do formulário de contato
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
