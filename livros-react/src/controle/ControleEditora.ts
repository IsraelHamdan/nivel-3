import Editora from "../modelo/Editora";

export default class ControleEditora {
  private editoras: Array<Editora> = [
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
  ];

  public getEditoras(): Array<Editora> {
    return this.editoras;
  }

  // public getNomeEditora(codEditora: number): string | undefined {
  //   const editoraEncontrada = this.editoras.filter(
  //     (editora) => editora.codEditora === codEditora
  //   );
  //   return editoraEncontrada[0].nome;
  // }
  public getNomeEditora(codEditora: number): string | undefined {
    console.log("Chamada getNomeEditora com código:", codEditora);
    const editoraEncontrada = this.editoras.find(
      (editora) => editora.codEditora === codEditora
    );
    return editoraEncontrada ? editoraEncontrada.nome : undefined;
  }
}
