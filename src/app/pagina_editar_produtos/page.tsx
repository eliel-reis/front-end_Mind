"use client";
import { useState, FormEvent } from "react";

export default function Editar_Produtos() {
  const [nome, set_nome] = useState("");
  const [descricao, set_descricao] = useState("");
  const [imagem, set_imagem] = useState("");
  const [valor, set_valor] = useState("");

  const handle_submit = async (e: FormEvent) => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("nome", nome);
    form_data.append("descricao", descricao);
    form_data.append("imagem", imagem);
    form_data.append("valor", valor);

    const response = await fetch("http://localhost:3001/editar_produtos", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, descricao, imagem, valor }),
    });

    if (response.ok) {
      alert("Produto editado com sucesso!");
    } else {
      alert("Erro ao editar o produto.");
    }
  };

  return (
    <form
      className="border-2 border-[#3b82f5] rounded-md mx-auto w-[1080px] mt-10 p-7"
      onSubmit={handle_submit}
    >
      <section className="secao_inputs">
        <label>Nome:</label>
        <input
          className="inputs"
          type="text"
          name="nome"
          placeholder="Nome do produto..."
          value={nome}
          onChange={(e) => set_nome(e.target.value)}
          required
        />
      </section>

      <section className="secao_inputs">
        <label>Descrição:</label>
        <input
          className="inputs"
          type="text"
          name="descricao"
          placeholder="Descrição do produto..."
          value={descricao}
          onChange={(e) => set_descricao(e.target.value)}
          required
        />
      </section>

      <section className="secao_inputs">
        <label>Imagem:</label>
        <input
          className="inputs"
          type="text"
          name="imagem"
          placeholder="URL completa da imagem..."
          value={imagem}
          onChange={(e) => set_imagem(e.target.value)}
          required
        />
      </section>

      <section className="secao_inputs">
        <label>Valor:</label>
        <input
          className="inputs"
          type="text"
          placeholder="Valor do produto..."
          onChange={(e) => set_valor(e.target.value)}
          required
        />
      </section>

      <button className="button" type="submit">
        Editar Produto
      </button>
    </form>
  );
}
