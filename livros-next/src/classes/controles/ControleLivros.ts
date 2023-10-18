import Livro from "@/classes/modelos/Livro";
const livros: Array<Livro> = [
  {
    codigo: 1,
    codEditora: 1,
    titulo: "Use a Cabeça: Java",
    resumo:
      "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (POO) e Java.",
    autores: ["Bert Bates", "Kathy Sierra"],
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: "Java, Como Programar",
    resumo:
      "Milhões de alunos e profissionais aprendem programação e desenvolvimento de software com os livros Deitel.",
    autores: ["Paul Deitel", "Harvey Deitel"],
  },
  {
    codigo: 3,
    codEditora: 3,
    titulo: "Core Java para os Impacientes",
    resumo:
      "Leitores familiarizados com os livros originais de dois volumes de Horstmann 'Core Java' que procuram um guia abrangente, mas condensado, para todas as novas funcionalidades e funções do Java SE 9 aprenderão como essas novas funcionalidades impactam a linguagem e as bibliotecas centrais.",
    autores: ["Cay Horstmann"],
  },
  {
    codigo: 4,
    codEditora: 4,
    titulo: "JavaScript Eloquente",
    resumo:
      "Uma introdução abrangente ao JavaScript, incluindo tanto a linguagem quanto como usá-la efetivamente.",
    autores: ["Marijn Haverbeke"],
  },
  {
    codigo: 5,
    codEditora: 5,
    titulo: "Você Não Conhece JS (Escopo e Closures)",
    resumo:
      "Explore o escopo e as closures no JavaScript com este livro da série 'Você Não Conhece JS'.",
    autores: ["Kyle Simpson"],
  },
  {
    codigo: 6,
    codEditora: 6,
    titulo: "Mergulho Profundo no TypeScript",
    resumo:
      "Um guia abrangente para o TypeScript, cobrindo tudo, desde tópicos básicos até avançados.",
    autores: ["Basarat Ali Syed"],
  },
  {
    codigo: 7,
    codEditora: 7,
    titulo: "JavaScript: As Partes Boas",
    resumo:
      "Um livro clássico de Douglas Crockford que se concentra nas partes boas do JavaScript.",
    autores: ["Douglas Crockford"],
  },
  {
    codigo: 8,
    codEditora: 8,
    titulo: "TypeScript Eficaz",
    resumo:
      "Um guia prático para escrever código TypeScript mais confiável e de fácil manutenção.",
    autores: ["Dan Vanderkam"],
  },
  {
    codigo: 9,
    codEditora: 9,
    titulo: "JavaScript: O Guia Definitivo",
    resumo:
      "Uma referência abrangente para o JavaScript, adequada tanto para iniciantes quanto para desenvolvedores experientes.",
    autores: ["David Flanagan"],
  },
  {
    codigo: 10,
    codEditora: 10,
    titulo: "TypeScript na Prática",
    resumo:
      "Um guia prático para o TypeScript na construção de aplicativos web escaláveis e de fácil manutenção.",
    autores: ["Eirik Vullum"],
  },
  {
    codigo: 11,
    codEditora: 11,
    titulo: "JavaScript Allongé",
    resumo:
      "Um livro que aprofunda o JavaScript com técnicas de programação funcional.",
    autores: ["Reginald Braithwaite"],
  },
  {
    codigo: 12,
    codEditora: 12,
    titulo: "Padrões de Design em TypeScript",
    resumo:
      "Aprenda a implementar padrões de design em TypeScript para construir aplicativos de fácil manutenção.",
    autores: ["Vladimir Khorikov"],
  },
  {
    codigo: 14,
    codEditora: 14,
    titulo: "Aprendendo Padrões de Design em JavaScript",
    resumo:
      "Um guia para aprender e aplicar padrões de design em aplicativos JavaScript.",
    autores: ["Addy Osmani"],
  },
  {
    codigo: 15,
    codEditora: 15,
    titulo: "Aprendendo React",
    resumo:
      "Um guia abrangente para aprender React na construção de aplicativos web modernos.",
    autores: ["Alex Banks", "Eve Porcello"],
  },
  {
    codigo: 16,
    codEditora: 16,
    titulo: "Pro Angular",
    resumo:
      "Um guia prático para dominar o Angular na construção de aplicativos robustos e de fácil manutenção.",
    autores: ["Adam Freeman"],
  },
  {
    codigo: 17,
    codEditora: 17,
    titulo: "Spring em Ação",
    resumo:
      "Um guia detalhado para a construção de aplicativos corporativos com Java Spring.",
    autores: ["Craig Walls"],
  },
  {
    codigo: 18,
    codEditora: 18,
    titulo: "Padrões e Melhores Práticas de Design no React",
    resumo:
      "Aprenda padrões de design e melhores práticas para construir aplicativos React eficientes.",
    autores: ["Carlos Santana Roldán"],
  },
  {
    codigo: 19,
    codEditora: 19,
    titulo: "Angular em Ação",
    resumo:
      "Um guia prático para o desenvolvimento Angular na criação de aplicativos web modernos.",
    autores: ["Jeremy Wilken"],
  },
  {
    codigo: 20,
    codEditora: 20,
    titulo: "Spring Boot em Ação",
    resumo:
      "Uma introdução abrangente à construção de aplicativos Spring Boot prontos para produção.",
    autores: ["Craig Walls"],
  },
  {
    codigo: 21,
    codEditora: 21,
    titulo: "React: Guia Inicial",
    resumo: "Comece a usar o React e construa aplicativos web interativos.",
    autores: ["Stoyan Stefanov"],
  },
  {
    codigo: 22,
    codEditora: 22,
    titulo: "Essenciais do Angular",
    resumo:
      "Conceitos e técnicas essenciais para o desenvolvimento de aplicativos com Angular.",
    autores: ["Felipe Coury", "Nelson Glauber"],
  },
  {
    codigo: 23,
    codEditora: 23,
    titulo: "Spring Microservices em Ação",
    resumo:
      "Um guia para a construção de aplicativos baseados em microservices com Spring Boot e Spring Cloud.",
    autores: ["John Carnell"],
  },
  {
    codigo: 24,
    codEditora: 24,
    titulo: "Fullstack React",
    resumo:
      "Um guia abrangente para a construção de aplicativos fullstack com React e Node.js.",
    autores: ["Anthony Accomazzo", "Nate Murray", "Ari Lerner"],
  },
];

export default class ControleLivros {
  incluir(newBook: Livro): void {
    const codigos = livros.map((livro) => livro.codigo);
    const newCode = Math.max(...codigos) + 1;

    newBook.codigo = newCode;

    livros.push(newBook);
  }

  excluir(codigoLivro: number): void {
    const index = livros.findIndex((livro) => livro.codigo === codigoLivro);

    if (index !== -1) {
      livros.splice(index, 1);
    }
  }

  obterLivros() {
    return livros;
  }
}
