"use client";

import { useState, useEffect } from "react";

interface Saida {
  nome: string;
  quantidade: number;
  mes: number;
  ano: string;
  dia: string;
}

export default function Consultar_Saidas() {
  const [saidas, set_saidas] = useState<Saida[]>([]);

  useEffect(() => {
    const fetch_data = async () => {
      const resposta = await fetch("http://localhost:3001/consultar_saidas");
      const data: Saida[] = await resposta.json();
      set_saidas(data);
    };

    fetch_data();
  }, []);

  return (
    <table className="mt-4  m-auto">
      <thead className="thead">
        <tr>
          <th>Nome</th>
          <th>Quantidade</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {saidas.map((saida, index) => (
          <tr key={index}>
            <td>{saida.nome}</td>
            <td>{saida.quantidade}</td>
            <td>{`${saida.dia}/${saida.mes}/${saida.ano}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
