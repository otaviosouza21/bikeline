import Image from "next/image";
import LogoBikeline3 from "../../../public/id/sem-fundo/logo_semfundo-03.png";
import InputText from "./InputText";
import { Calendar, Mail, Phone } from "lucide-react";

export function Form() {
  return (
    <form className="flex flex-col justify-center gap-2  bg-white rounded-lg shadow-md py-4 px-6 ">
      <Image
        width={80}
        alt="logo-bikeline"
        className="m-auto"
        src={LogoBikeline3}
      />
      <h1 className="text-[#2D3B80] font-bold text-2xl text-center">
        Preencha e receba seu desconto exclusivo
      </h1>
      <InputText
        label="Nome"
        id="nome"
        placeholder="Nome Completo"
        type="text"
      />
      <InputText
        label="Email"
        id="email"
        placeholder="seuemail@examplo.com"
        type="text"
        icon={Mail}
      />
      <InputText
        label="Telefone"
        id="telefone"
        placeholder="(99) 9999-9999"
        type="text"
        icon={Phone}
      />
      <InputText
        label="Data de nascimento"
        id="nome"
        placeholder="Nome Completo"
        type="date"
        icon={Calendar}
      />
      <button className="bg-bkl-500 hover:bg-bkl-500/90 transition-all cursor-pointer rounded-lg  text-white py-2 text-sm shadow">
        Garantir Desconto em Dobro
      </button>
      <span className="text-center">
        *Cupom válido apenas para produtos selecionados. e por tempo limitado
      </span>
    </form>
  );
}
