import { useEffect, useState } from "react";
import ControleLivro from "../Controles/ControleLivros";

export const LivrosLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const controlerBook = new ControleLivro(livros);

    const obterLivros = async () => {
      controlerBook.obterLivros();
      setCarregado(true);
    };
    obterLivros();
    console.log(livros);
  }, [livros]);

  const excluir = (codigoLivro: number) => {
    const controleLivro = new ControleLivro(livros);
    controleLivro.excluir(codigoLivro);
  };

  return (
    <div className="table table-sm">
      <h1>Lista de Livros</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Titulo</th>
            <th>Editora</th>
            <th>Resumo</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => {
            <tr key={livro.codigoLivro}></tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};
