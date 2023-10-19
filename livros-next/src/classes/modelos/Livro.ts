export default interface Livro {
  codigo: number;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: Array<string>;

  constructor(
    codigo: number,
    codEditora: number,
    titulo: string,
    resumo: string,
    autores: string[]

  ) {
    this.codigo = codigo; 
    this.codEditora = codEditora;
    this.titulo = titulo; 
    this.resumo = resumo;
    this.autores = autores 
  }
}

// testa aqui tbm
// export default interface Livro {
//   codigo: number;
//   codEditora: number;
//   titulo: string;
//   resumo: string;
//   autores: Array<string>;

//   constructor(
//     codigo: number,
//     codEditora: number,
//     titulo: string,
//     resumo: string,
//     autores: string[]

//   ) {
//     this.codigo = codigo; 
//     this.codEditora = codEditora;
//     this.titulo = titulo; 
//     this.resumo = resumo;
//     this.autores = autores 
//   }
// }