"use client";
import { useState, FormEvent } from "react";

export default function Remover_Estoque() {
  const [nome, set_nome] = useState("");
  const [quantidade, set_quantidade] = useState("");

  const handle_submit = async (e: FormEvent) => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("nome", nome);
    form_data.append("quantidade", quantidade);

    const response = await fetch("http://localhost:3001/saida_produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, quantidade }),
    });

    if (response.ok) {
      alert("Estoque removido com sucesso!");
    } else {
      alert("Erro ao remover o estoque.");
    }
  };

  return (
    <form
      className="border-2 border-[#3b82f5] rounded-md  mx-auto w-[1080px] mt-10 p-7"
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
        <label>Quantidade:</label>
        <input
          className="inputs"
          type="text"
          placeholder="Quantidade do produto..."
          value={quantidade}
          onChange={(e) => set_quantidade(e.target.value)}
          required
        />
      </section>

      <button className="button" type="submit">
        Remover Estoque
      </button>
    </form>
  );
}
