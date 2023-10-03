import React, { useEffect, useState } from "react";
import ControleLivros from "../controle/ControleLivros";
import ControleEditora from "../controle/ControleEditora";

const controleLivros = new ControleLivros();
const controleEditora = new ControleEditora();

// componente auxiliar
const LinhaLivro = (props) => {
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
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

const LivrosLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setLivros(controleLivros.obterLivros());
    setCarregado(true);
  }, [carregado]);

  const excluir = (codigo) => {
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
          {livros.map((livro) => {
            console.log("Código do livro:", livro.codigo);
            console.log("Código da editora:", livro.codEditora);
            return (
              <LinhaLivro
                key={livro.codigo}
                livro={livro}
                excluir={excluir}
                getNomeEditora={controleEditora.getNomeEditora}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LivrosLista;
