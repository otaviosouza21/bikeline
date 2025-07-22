'use client'
import { X } from "lucide-react";
import ModalFooter from "./ModalFooter";
import { Dispatch, SetStateAction } from "react";

type PrivacyPoliciesProps = {
    setShowModalInfos: Dispatch<SetStateAction<"" | "faq" | "terms" | "policies">>
}

export default function PrivacyPolicies({ setShowModalInfos }: PrivacyPoliciesProps) {
    return (
        <ModalFooter>
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
                <X className="cursor-pointer"  onClick={() => setShowModalInfos('')} />
            </div>
            <p className="mb-4">
                Na Bikeline, respeitamos a sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">1. Coleta de Informações</h2>
            <p className="mb-4">
                Coletamos dados como nome, e-mail, telefone e dados de navegação para oferecer uma melhor experiência.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">2. Uso das Informações</h2>
            <p className="mb-4">
                Utilizamos os dados para processar pedidos, enviar promoções e melhorar nosso site.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">3. Segurança</h2>
            <p className="mb-4">
                Adotamos medidas técnicas e organizacionais para proteger seus dados.
            </p>
            <p className="text-sm text-gray-600 mt-6">Última atualização: julho de 2025</p>
        </ModalFooter>
    );
}
