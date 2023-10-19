import Link from "next/link";
import { useState, useEffect } from "react";

const baseURL: string = "http://localhost:3000/api/livros";

interface Livro {
  codigo: number;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
  editora: string;
}

const LivroItem = ({ livro }: { livro: Livro }) => (
  <div className="card" key={livro.codigo}>
    <div className="card-body">
      <h6 className="card-title">{livro.titulo}</h6>
      <p className="card-text">{livro.resumo}</p>
      <p className="card-text">
        <strong>Autores:</strong> {livro.autores.join(", ")}
      </p>
    </div>
  </div>
);

const LivroCard = () => {
  const [livros, setLivros] = useState<Array<Livro>>([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await fetch(baseURL);
        if (res.ok) {
          const data = await res.json();
          setLivros(data.slice(0, 3));
        } else {
          console.error("Deu erro");
        }
      } catch (error) {
        console.error("🚀 ~ file: LivroCard.tsx:33 ~ getBooks ~ error:", error);
      }
    };
    getBooks();
  }, []);

  return (
    <>
      <div className="card-deck d-flex flex-row">
        {livros.map((livro) => (
          <LivroItem key={livro.codigo} livro={livro} />
        ))}
      </div>
      <button className="btn">
        <Link href="/LinhaLivro">Lista de livros</Link>
      </button>
    </>
  );
};

export default LivroCard;
