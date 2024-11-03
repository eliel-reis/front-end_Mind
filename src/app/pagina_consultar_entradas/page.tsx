"use client";

import { useState, useEffect } from "react";

interface Entrada {
  nome: string;
  quantidade: number;
  mes: number;
  ano: string;
  dia: string;
}

export default function Consultar_Entradas() {
  const [entradas, set_entradas] = useState<Entrada[]>([]);

  useEffect(() => {
    const fetch_data = async () => {
      const resposta = await fetch("http://localhost:3001/consultar_entradas");
      const data: Entrada[] = await resposta.json();
      set_entradas(data);
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
        {entradas.map((entrada, index) => (
          <tr key={index}>
            <td>{entrada.nome}</td>
            <td>{entrada.quantidade}</td>
            <td>{`${entrada.dia}/${entrada.mes}/${entrada.ano}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
