"use client";
import Image from "next/image";
import LogoBikeline3 from "../../../../public/id/sem-fundo/logo_semfundo-03.png";
import InputText from "./InputText";
import { Calendar, Mail, Phone, User } from "lucide-react";
import { Dispatch, SetStateAction, useActionState, useEffect, useState } from "react";
import { postLead } from "@/actions/lead/postLead";
import { toast } from "react-toastify";

type FormProps = {
  setModal: Dispatch<SetStateAction<boolean>>
}

export function Form({ setModal }: FormProps) {
  const [currentLead, setCurrentLead] = useState({
    nome: "",
    email: "",
    telefone: "",
    dt_nascimento: "",
  });

  const [state, formAction, isPending] = useActionState(postLead, {
    errors: [],
    msg_success: "",
    success: false,
  });

  useEffect(() => {
    if (state?.errors?.length > 0) {
      state.errors.forEach((erro: string) => toast.error(erro));
    }

    if (state?.success) {
      toast.success(state.msg_success);
      setModal((prev) => !prev)
      setCurrentLead({
        nome: "",
        email: "",
        telefone: "",
        dt_nascimento: "",
      });
    }
  }, [state.success, state.errors, state.msg_success, setModal]);



  function formatPhone(value: string): string {
    const digits = value.replace(/\D/g, "").slice(0, 11); // Remove tudo que não for número e limita a 11 dígitos
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 7)
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  return (
    <form action={formAction} className="flex border-1 max-sm:rounded-none text-[#536FFD] bg-white  border-slate-200 shadow  flex-col justify-center gap-2  rounded-xl  py-4 px-6 ">
      <Image
        width={180}
        alt="logo-bikeline"
        className="mx-auto -my-5 max-sm:-my-6"
        src={LogoBikeline3}
      />
      <h1 className="text-[#536FFD] font-bold text-1xl text-center">
        🎉 Preencha abaixo para receber seus 2 cupons exclusivos!
      </h1>
      <InputText
        label="Nome"
        name="nome"
        placeholder="Nome Completo"
        required
        type="text"
        icon={User}
        value={currentLead.nome}
        onChange={(e) =>
          setCurrentLead({ ...currentLead, nome: e.target.value })
        }
      />
      <InputText
        label="Email"
        name="email"
        placeholder="seuemail@examplo.com"
        type="email"
        required
        icon={Mail}
        value={currentLead.email}
        onChange={(e) =>
          setCurrentLead({ ...currentLead, email: e.target.value })
        }
      />
      <InputText
        label="Telefone"
        name="telefone"
        placeholder="(99) 1234-5678"
        type="text"
        required
        icon={Phone}
        value={currentLead.telefone}
        onChange={(e) =>
          setCurrentLead({
            ...currentLead,
            telefone: formatPhone(e.target.value),
          })
        }
      />
      <InputText
        label="Data de nascimento"
        name="dt_nascimento"
        placeholder="Nome Completo"
        required
        type="date"
        icon={Calendar}
        value={currentLead.dt_nascimento}
        onChange={(e) =>
          setCurrentLead({ ...currentLead, dt_nascimento: e.target.value })
        }
      />
      <button type="submit" className="py-2 mt-3 text-lg font-bold text-white transition-all shadow cursor-pointer hover:brightness-110 bg-bkl-500 hover:bg-bkl-500/90 rounded-xl">
        {isPending ? '🎁 Buscando seu cupom...' : '🎁 Quero meus cupons!'}
      </button>
      <span className="text-center">
        *Cupons válidos apenas para produtos selecionados e por tempo limitado
      </span>
    </form>
  );
}
