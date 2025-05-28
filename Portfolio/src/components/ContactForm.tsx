import { useState, type FormEvent } from "react";
import {
  EmailService,
  type ContactForm as ContactFormData,
} from "../services/EmailService";

interface ContactFormProps {
  lang: "pt" | "en";
  translations: {
    pt: {
      contactTitle: string;
      nameLabel: string;
      emailLabel: string;
      subjectLabel: string; // Nova label para o assunto
      messageLabel: string;
      submitButton: string;
      successMessage: string;
      errorMessage: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string; // Novo placeholder para o assunto
      messagePlaceholder: string;
    };
    en: {
      contactTitle: string;
      nameLabel: string;
      emailLabel: string;
      subjectLabel: string; // Nova label para o assunto
      messageLabel: string;
      submitButton: string;
      successMessage: string;
      errorMessage: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string; // Novo placeholder para o assunto
      messagePlaceholder: string;
    };
  };
}

const ContactForm: React.FC<ContactFormProps> = ({ lang, translations }) => {
  const t = translations[lang];

  // Estado para o formulário - incluindo o novo campo de assunto
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "", // Email do usuário que está preenchendo o formulário
    subject: "", // Novo campo para assunto
    message: "",
  });

  // Estados para gerenciar o envio e feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Gerenciador de alterações nos campos do formulário
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Gerenciador de envio do formulário
  // Todas as mensagens serão enviadas para seu email profissional configurado no EmailService
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validação básica incluindo o novo campo de assunto
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setSubmitStatus("error");
      setErrorMessage(
        lang === "pt"
          ? "Por favor, preencha todos os campos."
          : "Please fill in all fields."
      );
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      setErrorMessage(
        lang === "pt"
          ? "Por favor, insira um email válido."
          : "Please enter a valid email."
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Enviando email usando o template do EmailJS
      await EmailService.sendEmail({
        name: formData.name,
        email: formData.email,
        subject: formData.subject, // Enviando o assunto
        message: formData.message,
      });
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email error:", error);
      setSubmitStatus("error");
      setErrorMessage(t.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="portfolio-section contact-section">
      <h2>{t.contactTitle}</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{t.nameLabel}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t.namePlaceholder}
            disabled={isSubmitting}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">{t.emailLabel}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.emailPlaceholder}
            disabled={isSubmitting}
            className="form-control"
          />
        </div>

        {/* Novo campo para assunto */}
        <div className="form-group">
          <label htmlFor="subject">{t.subjectLabel}</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t.subjectPlaceholder}
            disabled={isSubmitting}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">{t.messageLabel}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t.messagePlaceholder}
            disabled={isSubmitting}
            className="form-control message-area"
            rows={5}
          />
        </div>

        {submitStatus === "success" && (
          <div className="form-feedback success">
            <p>{t.successMessage}</p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="form-feedback error">
            <p>{errorMessage}</p>
          </div>
        )}

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting
            ? lang === "pt"
              ? "Enviando..."
              : "Sending..."
            : t.submitButton}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
