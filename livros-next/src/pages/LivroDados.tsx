import type { NextPage } from "next";
import styles from "@/styles/Home.module.css";
import ControleEditora from "@/classes/controles/ControleEditora";
import Livro from "@/classes/modelos/Livro";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const baseURL = "http://localhost:3000/api/livros";
const controleEditora = new ControleEditora();

const LivroDados: NextPage = () => {
  const [opcoes, setOpcoes] = useState<{ value: number; text: string }[]>([]);
  const [titulo, setTiulo] = useState<string>("");
  const [resumo, setResumo] = useState<string>("");
  const [autores, setAutores] = useState<string>("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);
  const [livroIncluido, setLivroIncluido] = useState<Livro | null>(null);

  const navigate = useRouter().push;

  useEffect(() => {
    const editoras = controleEditora.getEditoras();
    const opcoesMapeadas = editoras.map((editora) => ({
      value: editora.codEditora,
      text: editora.nome,
    }));
    setOpcoes(opcoesMapeadas);
  }, []);

  const tratarCombo = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const codEditora = Number(event.target.value);
    setCodEditora(codEditora);
  };

  const incluirLivro = async (livro: Livro) => {
    try {
      const res = await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-type": "aplication/json",
        },
        body: JSON.stringify(livro),
      });

      if (res.ok) {
      }
    } catch (error) {
      console.error(error);
    }
  };

  const incluir = async (evento: React.ChangeEvent<HTMLSelectElement>) => {
    evento.preventDefault();
    const livro = new Livro(0, codEditora, titulo, resumo, autores.split("\n"));
    const incluido = await incluirLivro(livro);
    if (incluido) {
      navigate("/LivroLista");
    }
  };

  return (
    <main>
      <h1>Olá mundo</h1>
    </main>
  );
};

export default LivroDados;
