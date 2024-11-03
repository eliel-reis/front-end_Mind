"use client";
import { useState, FormEvent } from "react";

export default function Login() {
  const [usuario, set_usuario] = useState("");
  const [senha, set_senha] = useState("");
  const [mensagem, set_mensagem] = useState("");

  const handle_submit = async (e: FormEvent) => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("usuario", usuario);
    form_data.append("senha", senha);

    const resposta = await fetch("http://localhost:3001/confirmar_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usuario, senha }),
    });

    const resultado = await resposta.json();

    if (resultado) {
      set_mensagem("true");
    } else {
      set_mensagem("false");
    }
  };

  return (
    <main
      className=" top-0 bg-blue-500 h-screen w-screen  absolute flex flex-col justify-center items-center "
      style={{
        display: mensagem == "true" ? "none" : "flex",
      }}
    >
      <h1 className="text-3xl font-bold text-white  ">MIND</h1>
      <form
        onSubmit={handle_submit}
        className="border-2 border-white rounded-[8px] px-4 w-[30%] h-[40%] flex flex-col justify-center items-center gap-8"
      >
        <section className="input_login">
          <label>Usuário:</label>
          <input
            type="text"
            name="usuario"
            placeholder="Nome de usuário..."
            value={usuario}
            onChange={(e) => set_usuario(e.target.value)}
          />
        </section>
        <section className="input_login ">
          <label>Senha:</label>
          <input
            type="text"
            name="senha"
            placeholder="Senha de usuário..."
            value={senha}
            onChange={(e) => set_senha(e.target.value)}
          />
        </section>

        <button
          className="bg-white px-4 py-2  text-[18px] font-semibold rounded-md hover:bg-black hover:text-blue-500 duration-1000"
          type="submit"
        >
          Login
        </button>
      </form>
    </main>
  );
}
