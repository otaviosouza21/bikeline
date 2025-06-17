import Image from "next/image";
import LogoBikeline3 from "../../../public/id/sem-fundo/logo_semfundo-03.png";

export default function Header() {
  return (
    <header className="flex justify-between px-19 shadow-md items-center bg-white">
      <div>
        <Image src={LogoBikeline3} width={70} alt="logo-bikeline" />
      </div>
      <ul className="flex gap-5 font-semibold *:transition-all text-slate-600 text-sm *:cursor-pointer *:hover:text-bkl-500">
        <li>Inicio</li>
        <li>Sobre Nós</li>
        <li>Serviços</li>
        <li>Loja</li>
        <li>Contato</li>
      </ul>
    </header>
  );
}
