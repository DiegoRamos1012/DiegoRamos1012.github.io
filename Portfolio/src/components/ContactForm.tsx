import { useState, type FormEvent } from "react";
import { EmailService } from "../services/EmailService";
import type { LanguageKey, Translations, ContactFormData } from "../types";

interface ContactFormProps {
  lang: LanguageKey;
  translations: Translations;
}

/**
 * Componente de formulário de contato
 */
const ContactForm: React.FC<ContactFormProps> = ({ lang, translations }) => {
  const t = translations[lang];

  // Estado para o formulário
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Estados para gerenciar o envio e feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Gerenciador de alterações nos campos do formulário
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Gerenciador de envio do formulário
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validação básica
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
      await EmailService.sendEmail(formData);
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
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      aria-label="Formulário de contato"
    >
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
          aria-required="true"
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
          aria-required="true"
        />
      </div>

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
          aria-required="true"
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
          aria-required="true"
        />
      </div>

      {submitStatus === "success" && (
        <div className="form-feedback success" role="alert">
          <p>{t.successMessage}</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="form-feedback error" role="alert">
          <p>{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        className="submit-button"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting
          ? lang === "pt"
            ? "Enviando..."
            : "Sending..."
          : t.submitButton}
      </button>
    </form>
  );
};

export default ContactForm;
