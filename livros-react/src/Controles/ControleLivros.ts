import Livro from "../modelo/Livro";
const livros: Array<Livro> = [
  {
    codigo: 1,
    codEditora: 10,
    titulo: "Use a cabeça: Java",
    resumo:
      "Use a cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (POO) e Java",
    autores: ["Bert Bates", "Kathy Sierra"],
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: "Java, como Programar",
    resumo:
      "Milhoes de alunos e profissionais aprendem programação e desenvolvimento de software com os livros Deitel",
    autores: ["Paul Deitel", "Harvey Deitel"],
  },
  {
    codigo: 3,
    codEditora: 159,
    titulo: "Core Java for the Impatient",
    resumo:
      "Eaders familiar with Horstmann's original two-volume 'Core Java' books who are looking for a comprehensive, but, condensend, guide to al of the new features and functions of Java SE 9 will learn how these new features impac the leanguage and core libraries",
    autores: ["Cay Horstmann"],
  },
];

export default class ControleLivro {
  private livros: Array<Livro>;

  constructor(livros: Array<Livro>) {
    this.livros = livros;
  }

  incluir(newBook: Livro): void {
    const codigos = this.livros.map((livro) => livro.codigo);
    const newCode = Math.max(...codigos) + 1;

    newBook.codigo = newCode;

    this.livros.push(newBook);
  }

  excluir(codigoLivro: number): void {
    const index = this.livros.findIndex(
      (livro) => livro.codigo === codigoLivro
    );

    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }

  obterLivros(): Array<Livro> {
    return this.livros;
  }
}
