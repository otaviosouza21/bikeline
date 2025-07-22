'use client'
import { Dispatch, SetStateAction, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import ModalFooter from "./ModalFooter";


type FaqProps = {
    setShowModalInfos: Dispatch<SetStateAction<"" | "faq" | "terms" | "policies">>
}

const faqs = [
    {
        pergunta: "Como recebo meus cupons?",
        resposta:
            "Após preencher o formulário, seus cupons serão enviados por e-mail e também exibidos na tela. Você poderá usar o cupom imediatamente na nossa loja na Shopee. Ao lançarmos nossa loja virtual própria (e-commerce), você receberá outro cupom exclusivo.",
    },
    {
        pergunta: "Como utilizo o cupom na Shopee?",
        resposta:
            "No momento de finalizar a compra na Shopee, copie e cole o código do cupom no campo apropriado para garantir seu desconto.",
    },
    {
        pergunta: "Quantas vezes posso utilizar meu cupom na Shopee?",
        resposta: "Cada cupom pode ser utilizado apenas uma vez por conta na Shopee.",
    },
    {
        pergunta: "O que fazer se meu cupom não funcionar na Shopee?",
        resposta:
            "Verifique se o cupom está dentro do prazo de validade, se está digitado corretamente e se sua conta já usou o mesmo cupom anteriormente. Em caso de dúvidas, entre em contato com nosso suporte.",
    },
    {
        pergunta: "O cupom é válido para qualquer produto da loja?",
        resposta:
            "Sim, a menos que esteja especificado o contrário. Em algumas campanhas, o cupom pode ser válido apenas para determinados produtos ou categorias.",
    },
    {
        pergunta: "Posso transferir meu cupom para outra pessoa?",
        resposta:
            "Não. Os cupons são vinculados à sua conta e não podem ser transferidos para outros usuários.",
    }
];

export default function Faq({ setShowModalInfos }: FaqProps) {
    const [aberto, setAberto] = useState<number | null>(null);

    const toggle = (index: number) => {
        setAberto((prev) => (prev === index ? null : index));
    };

    return (
        <ModalFooter>
            <div className="flex justify-between gap-4 mb-3 items-center">
                <h1 className="text-3xl font-bold ">Perguntas Frequentes</h1>
                <X className="cursor-pointer" onClick={() => setShowModalInfos('')} />
            </div>
            <div className="space-y-4 max-h-[550px] overflow-y-auto">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-4 shadow-sm">
                        <button
                            className="flex justify-between items-center w-full text-left font-semibold text-gray-800"
                            onClick={() => toggle(index)}
                        >
                            <span>{faq.pergunta}</span>
                            <ChevronDown
                                className={`h-5 w-5 transition-transform ${aberto === index ? "rotate-180" : ""}`}
                            />
                        </button>
                        {aberto === index && (
                            <p className="mt-2 text-gray-600 text-sm">{faq.resposta}</p>
                        )}
                    </div>
                ))}
            </div>
        </ModalFooter>
    );
}
