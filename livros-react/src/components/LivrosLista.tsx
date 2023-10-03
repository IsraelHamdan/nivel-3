import React, { useEffect, useState } from "react";
import ControleLivros from "../controle/ControleLivros";
import ControleEditora from "../controle/ControleEditora";
import Livro from "../modelo/Livro";

const controleLivros = new ControleLivros();
const controleEditora = new ControleEditora();

// componente auxiliar
const LinhaLivro = (props: {
  livro: Livro;
  excluir: Function;
  getNomeEditora?: (codEditora: number) => string;
}) => {
  const { livro, excluir } = props;
  const nomeEditora = controleEditora.getNomeEditora;

  return (
    <tr>
      <td>
        <p>{livro.titulo}</p>
        <button type="button" onClick={() => excluir(livro.codigo)}>
          Excluir
        </button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora(livro.codEditora)}</td>
      <td>
        <ul>
          {livro.autores.map((autor: string, index: number) => {
            <li key={index}>{autor}</li>;
          })}
        </ul>
      </td>
    </tr>
  );
};

export const LivrosLista = () => {
  const [livro, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setLivros(controleLivros.obterLivros());
    setCarregado(true);
  }, [carregado]);

  const excluir = (codigo: number) => {
    controleLivros.excluir(codigo);
    setCarregado(false);
  };

  return (
    <div className="table table-sm">
      <h1>Lista de Livros</h1>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro
              key={livro.codigo}
              livro={livro}
              getNomeEditora={controleEditora.getNomeEditora}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
