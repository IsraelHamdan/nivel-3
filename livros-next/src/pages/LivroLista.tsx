import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import Head from "@/components/Head/Head";
import LinhaLivro from "@/components/LinhaLivro/LinhaLivro";

const baseURL: string = "http://localhost:3000/api/livros";

interface Livro {
  codigo: number;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

const obter = async () => {
  const res = await fetch(baseURL);
  return res.json();
};

const excluirLivro = async (codigo: number) => {
  const res = await fetch(`${baseURL}/${codigo}`, {
    method: "DELETE",
  });
  return res.ok;
};

const LivroLista = () => {
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

  useEffect(() => {
    obter().then((data: Array<Livro>) => {
      setLivros(data);
      setCarregado(true);
    });
  }, [carregado]);

  const excluir = async (codigo: number) => {
    const sucesso = await excluirLivro(codigo);
    sucesso ? setCarregado(false) : setCarregado(true);
  };

  return (
    <div className={styles.container}>
      <Head />
      <main>
        <h1 className={styles.maintitle}>Livros disponiveis</h1>
        <table>
          {livros.map((livro: Livro) => (
            <LinhaLivro
              key={livro.codigo}
              livro={livro}
              excluir={() => excluir(livro.codigo)}
            />
          ))}
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
