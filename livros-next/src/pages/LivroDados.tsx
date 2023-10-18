import type { NextPage } from "next";
import styles from "@/styles/Home.module.css";
import ControleEditora from "@/classes/controles/ControleEditora";
import Livro from "@/classes/modelos/Livro";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";

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
  const [livroIncluido, setLivroIncluido] = useState<Livro | null>(null);

  const navigate = useNavigate();
  const router = useRouter;

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

  const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const autoresInput = autores.split("\n").map((autor) => autor.trim());

    const novoLivro = {
      codigo: 0,
      codEditora: codEditora,
      titulo: "",
      resumo: "",
      autores: [],
      editora: opcoes.find((opcao) => opcao.value === codEditora)?.text || "",
    };
    // const sucesso = await incluirLivro();
  };

  return (
    <main>
      <h1>Olá mundo</h1>
    </main>
  );
};

export default LivroDados;
