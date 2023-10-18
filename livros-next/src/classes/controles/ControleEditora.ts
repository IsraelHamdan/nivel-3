import Editora from "@/classes/modelos/Editora";

const editoras: Array<Editora> = [
  {
    codEditora: 1,
    nome: "Alta Books",
  },
  {
    codEditora: 2,
    nome: "Pearson",
  },
  {
    codEditora: 3,
    nome: "Addisson Wesley",
  },
  {
    codEditora: 4,
    nome: "No Starch Press",
  },
  {
    codEditora: 5,
    nome: "O'Reilly Media",
  },
  {
    codEditora: 6,
    nome: "self-published",
  },
  {
    codEditora: 7,
    nome: "O'Reilly Media",
  },
  {
    codEditora: 8,
    nome: "O'Reilly Media",
  },
  {
    codEditora: 9,
    nome: "O'Reilly Media",
  },
  {
    codEditora: 10,
    nome: "Manning Publications",
  },
  {
    codEditora: 11,
    nome: "Leanpub",
  },
  {
    codEditora: 12,
    nome: "Packt",
  },
  {
    codEditora: 14,
    nome: "O'Reilly Media",
  },
  {
    codEditora: 15,
    nome: "O'Reilly Media",
  },
  {
    codEditora: 16,
    nome: "O'Reilly Media",
  },
  {
    codEditora: 17,
    nome: "O'Reilly Media",
  },
  {
    codEditora: 18,
    nome: "O'Reilly Media",
  },
  {
    codEditora: 19,
    nome: "O'Reilly Media",
  },
  {
    codEditora: 20,
    nome: "O'Reilly Media",
  },
  {
    codEditora: 21,
    nome: "O'Reilly Media",
  },
  {
    codEditora: 22,
    nome: "O'Reilly Media",
  },
  {
    codEditora: 23,
    nome: "O'Reilly Media",
  },
  {
    codEditora: 24,
    nome: "O'Reilly Media",
  },
  {
    codEditora: 31,
    nome: "Leanpub",
  },
  {
    codEditora: 32,
    nome: "Packt",
  },
  {
    codEditora: 33,
    nome: "O'Reilly Media",
  },
  {
    codEditora: 34,
    nome: "No Starch Press",
  },
  {
    codEditora: 35,
    nome: "O'Reilly Media",
  },
  {
    codEditora: 36,
    nome: "self-published",
  },
  {
    codEditora: 37,
    nome: "O'Reilly Media",
  },
  {
    codEditora: 38,
    nome: "Manning Publications",
  },
  {
    codEditora: 39,
    nome: "self-published",
  },
  {
    codEditora: 40,
    nome: "O'Reilly Media",
  },
  {
    codEditora: 41,
    nome: "Manning Publications",
  },
  {
    codEditora: 42,
    nome: "self-published",
  },
];

export default class ControleEditora {
  public getEditoras(): Array<Editora> {
    return editoras;
  }

  public getNomeEditora(codEditora: number): string | undefined {
    console.log("Chamada getNomeEditora com código:", codEditora);
    const editoraEncontrada = editoras.find(
      (editora) => editora.codEditora === codEditora
    );
    return editoraEncontrada ? editoraEncontrada.nome : undefined;
  }
}
