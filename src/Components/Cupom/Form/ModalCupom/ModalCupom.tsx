'use client'
import { useState } from "react";
import { CheckCircle, Copy, X } from "lucide-react";

interface ModalCupomProps {
  onClose: () => void;
  cupomShopee: string;
}

export default function ModalCupom({ onClose, cupomShopee }: ModalCupomProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cupomShopee);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-hidden bg-black/50">
      <div className="relative w-full max-w-md p-6 text-center bg-white shadow-xl rounded-2xl">
        {/* Botão de fechar */}
        <button
          className="absolute text-gray-400 top-4 right-4 hover:text-gray-600"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Ícone de sucesso */}
        <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />

        {/* Mensagem principal */}
        <h2 className="mb-2 text-2xl font-bold text-gray-800">
          Desconto liberado com sucesso!
        </h2>
        <p className="mb-6 text-gray-600">
          Você já pode usar o cupom abaixo na sua próxima compra na Shopee.
        </p>

        {/* Cupom com botão de copiar */}
        <div className="flex items-center justify-center gap-2 mb-4 ">
          <span className="px-4 py-2 font-mono text-4xl tracking-wider text-gray-800 bg-gray-100 rounded-md">
            {cupomShopee}
          </span>
          <button
            className="text-sm text-blue-600 hover:text-blue-800"
            onClick={handleCopy}
          >
            {copied ? "Copiado!" : <Copy className="w-5 h-5" />}
          </button>
        </div>

        {/* Cupom futuro */}
        <div className="p-3 mb-4 text-sm text-purple-800 bg-purple-100 rounded-lg">
          O seu cupom de <strong>10% de desconto</strong> será enviado por email
          no lançamento da nossa nova loja online!
        </div>

        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="w-full px-6 py-2 mt-2 font-semibold text-white transition rounded-full bg-bkl-500 hover:bg-bkl-600"
        >
          Entendi!
        </button>
      </div>
    </div>
  );
}
