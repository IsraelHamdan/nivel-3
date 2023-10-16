import type { NextPage } from "next";
import styles from "@/styles/Home.module.css";
import ControleEditora from "@/classes/controles/ControleEditora";
import Livro from "@/classes/modelos/Livro";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const baseURL = "http://localhost:3000/api/livros";
const controleEditora = new ControleEditora();

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

const LivroDados: NextPage = () => {
  const [opcoes, setOpcoes] = useState<{ value: number; text: string }[]>([]);
  const [titulo, setTiulo] = useState<string>("");
  const [resumo, setResumo] = useState<string>("");
  const [autores, setAutores] = useState<string>("");
  const [codEditora, setCodEditora] = useState<number>(opcoes[0].value);

  const navigate = useNavigate();

  useEffect(() => {
    const editoras = controleEditora.getEditoras();
    const opcoesMapeadas = editoras.map((editora) => ({
      value: editora.codEditora,
      text: editora.nome,
    }));
    setOpcoes(opcoesMapeadas);
  }, []);

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCode = Number(event.target.value);
  };
  return (
    <main>
      <h1>Olá mundo</h1>
    </main>
  );
};

export default LivroDados;
