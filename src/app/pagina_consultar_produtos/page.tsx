"use client";
import Image from "next/image";

import { useState, useEffect } from "react";

interface Produto {
  nome: string;
  descricao: string;
  imagem: string;
  valor: number;
  quantidade: number;
}

export default function Consultar_Produtos() {
  const [produtos, set_produtos] = useState<Produto[]>([]);

  useEffect(() => {
    const fetch_data = async () => {
      const resposta = await fetch("http://localhost:3001/consultar_produtos");
      const data: Produto[] = await resposta.json();
      set_produtos(data);
    };

    fetch_data();
  }, []);

  return (
    <main className="mt-10 px-10 flex gap-28 w-[1080px] mx-auto flex-wrap ">
      {produtos.map((produto, index) => (
        <section key={index} className="w-[200px] flex-grow">
          <section className="card_image">
            <Image
              className="w-[100%] h-[100%]"
              src={produto.imagem}
              alt={produto.nome}
              width={300}
              height={300}
            />
          </section>
          <section className="card">
            <h2>{produto.nome}</h2>
            <p>Descrição: {produto.descricao}</p>
            <p>QTD: {produto.quantidade}</p>
            <p>R$ {produto.valor}</p>
          </section>
        </section>
      ))}
    </main>
  );
}
