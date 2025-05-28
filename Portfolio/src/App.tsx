import "./styles.css";

function App() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>Diego Ramos dos Santos</h1>
        <p>Desenvolvedor Full Stack | React | Golang | Typescript</p>
      </header>

      <section className="portfolio-section">
        <h2>Sobre mim</h2>
        <p>
          Sou um desenvolvedor apaixonado por tecnologia, com experiência em
          desenvolvimento web e interfaces modernas. Busco aprimorar meu
          conhecimento em Back-end e Mobile para criar softwares mais robustos e
          satisfazer as necessidades do cliente.
        </p>
      </section>

      <section className="portfolio-section">
        <h2>Habilidades</h2>
        <ul className="skills-list">
          <li>HTML & CSS</li>
          <li>Typescript</li>
          <li>Node.js</li>
          <li>React</li>
          <li>Golang</li>
          <li>React Native</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section className="portfolio-section">
        <h2>Projetos</h2>
        <div className="projects-list">
          <div className="project-card">
            <h3>App Mobile para Barbearia</h3>
            <p>
              App para dispositivos Android/IOS criado para agilizar o negócio,
              facilitando o trabalho da equipe e melhorando a experiência do
              usuário.
            </p>
            <a href="https://github.com/DiegoRamos1012/AppBarbearia" target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </div>
          <div className="project-card">
            <h3>Gerenciamento de Oficina Mecânica</h3>
            <p>Um site ágil e intuitivo ao usuário destinado ao uso da equipe do negócio, onde
              é possível gerenciar estoque, clientes, novos pedidos e mais.
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="portfolio-footer">
        <p>
          © {new Date().getFullYear()} Diego Ramos dos Santos - Github: Diego1012 - Email: diego.rms1012@gmail.com
        </p>
      </footer>
    </div>
  );
}

export default App;
