import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";

const baseURL = "http://localhost:3000/api/livros";

interface Livro {
  codigo: number;
  titulo: string;
}

async function obterLivros() {
  try {
    const res = await fetch(baseURL);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      console.error("Falha ao requisitar dados da API");
      return [];
    }
  } catch (error) {
    console.error(error, "Erro ao fazer solicitação");
    return [];
  }
}

const LivroLista: React.FC<Livro> = () => {
  const [livros, setLivros] = useState<Livro>([]);

  useEffect(() => {
    obterLivros().then((data) => {
      setLivros(data);
    }),
      [];
  });

  return (
    <div className={styles.main}>
      <h1 className={styles.maintitle}> Lista de livros</h1>
      <ul>
        {livros.map((livro) => (
          <li key={livro.codigo}>{livro.titulo}</li>
        ))}
      </ul>
    </div>
  );
};

export default LivroLista;
