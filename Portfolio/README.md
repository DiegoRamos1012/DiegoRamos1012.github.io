
# Como Modificar o Portfólio

Este guia explica como personalizar e atualizar o portfólio disponível neste repositório.

## Estrutura dos Arquivos

- **src/App.tsx**: Arquivo principal do React, onde estão as seções, textos e arrays de dados.
- **src/styles.css**: Arquivo de estilos globais e das seções.
- **src/assets/**: Imagens e documentos usados no portfólio.
- **src/components/**: Componentes reutilizáveis como ThemeToggle, LanguageToggle, ContactForm.

---

## Como alterar as informações principais

### 1. Dados Pessoais

No início do arquivo `src/App.tsx`, altere o nome, título, e textos de apresentação conforme desejar:

```tsx
// ...existing code...
<h1>Diego Ramos dos Santos</h1>
<p>
  {lang === "pt"
    ? "Desenvolvedor Full Stack | React | Golang | Typescript"
    : "Full Stack Developer | React | Golang | Typescript"}
</p>
// ...existing code...
```

### 2. Linguagens, Frameworks e Ferramentas

Os arrays `programLanguages`, `frameworksAndLibraries` e `toolsAndTechnologies` definem os ícones e nomes exibidos nas seções de stacks:

```tsx
const programLanguages = [
  { name: "TypeScript", icon: <SiTypescript /> },
  // ...adicione ou remova conforme necessário
];
```

Para adicionar/remover itens, basta editar esses arrays.

### 3. Projetos

Adicione, edite ou remova projetos no array `projects`:

```tsx
const projects: Project[] = [
  {
    title: "Nome do Projeto",
    image: caminho_da_imagem,
    description: "Descrição do projeto.",
    link: "URL do projeto ou repositório",
  },
  // ...outros projetos
];
```

### 4. Textos e Traduções

Todos os textos (inclusive títulos de seções) estão no objeto `translations` em `src/App.tsx`. Edite os valores em `pt` e `en` para alterar o conteúdo em português e inglês.

```tsx
const translations = {
  pt: {
    aboutTitle: "Sobre mim",
    // ...outros textos
  },
  en: {
    aboutTitle: "About me",
    // ...outros textos
  }
}
```

### 5. Currículo

Substitua o arquivo PDF em `src/assets/documents/` e atualize o import em `App.tsx` se necessário.

---

## Como alterar estilos

Edite o arquivo `src/styles.css` para personalizar cores, fontes, espaçamentos e aparência das seções.

---

## Como adicionar novas seções

1. Crie um novo array de dados (se necessário) em `App.tsx`.
2. Crie uma função/componente para renderizar a nova seção.
3. Adicione o componente na ordem desejada dentro do componente `App`.
4. Adicione o título da seção no objeto `translations`.

---

## Como rodar o projeto localmente

1. Instale as dependências:
   ```
   npm install (ou npm i)
   ```
2. Rode o projeto:
   ```
   npm run dev
   ```
3. Acesse `http://localhost:5173` (ou porta configurada).

---

## Dúvidas

Abra uma issue ou entre em contato pelo email informado no rodapé do portfólio.
