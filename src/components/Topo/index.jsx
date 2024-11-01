import Link from "next/link";

export default function Topo() {
  return (
    <header className="bg-blue-500 text-white p-4 text-center">
      <h1 className="text-2xl font-bold">Mind</h1>
      <nav className="mt-2 flex space-x-4 justify-center ">
        <Link className="links" href="/">
          Consultar Produtos
        </Link>
        <Link className="links" href="/">
          Registrar Produto
        </Link>
        <Link className="links" href="/">
          Editar Produto
        </Link>
        <Link className="links" href="/">
          Deletar Produto
        </Link>
        <Link className="links" href="/pagina_consultar_entradas">
          Consultar Entradas
        </Link>
        <Link className="links" href="/pagina_consultar_saidas">
          Consultar Saidas
        </Link>
      </nav>
    </header>
  );
}
