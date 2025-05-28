import emailjs, { type EmailJSResponseStatus } from "emailjs-com";

// Constantes para configuração do EmailJS usando variáveis de ambiente
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

// Interface para o formulário de contato
export interface ContactForm {
  name: string;
  email: string;
  subject: string; // Novo campo para assunto
  message: string;
}

// Classe para gerenciar operações de email
export class EmailService {
  /**
   * Envia um email usando o serviço EmailJS
   * @param formData Dados do formulário de contato
   * @returns Promise com o resultado do envio
   */
  static sendEmail(formData: ContactForm): Promise<EmailJSResponseStatus> {
    // Adaptando os nomes dos parâmetros para corresponder ao template HTML
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      service_type: formData.subject, // Mapeando o assunto para service_type
      message: formData.message,
    };

    // Inicializa o EmailJS com seu USER_ID
    emailjs.init(USER_ID);

    // Envia o email usando o serviço e template configurados
    return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
  }
}
