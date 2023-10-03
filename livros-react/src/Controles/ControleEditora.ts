import Editora from "../modelo/Editora";

class ControleEditora {
  private editoras: Array<Editora>;

  constructor(editoras: Array<Editora>) {
    this.editoras = editoras;
  }

  getEditoras(codEditora: number): string | undefined {
    const editoraEncontrada = this.editoras
      .filter((editora) => editora.codEditora === codEditora)
      .shift();
    return editoraEncontrada?.nome;
  }

  getNomeEditoras(): Array<Editora> {
    return this.editoras;
  }
}
