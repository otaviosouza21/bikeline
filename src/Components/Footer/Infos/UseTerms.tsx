import { X } from "lucide-react";
import ModalFooter from "./ModalFooter";
import { Dispatch, SetStateAction } from "react";

type UseTermsProps = {
    setShowModalInfos: Dispatch<SetStateAction<"" | "faq" | "terms" | "policies">>
}

export default function UseTerms({ setShowModalInfos }: UseTermsProps) {
    return (
        <ModalFooter>
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>
                <X className="cursor-pointer" onClick={() => setShowModalInfos('')} />
            </div>
            <p className="mb-4">
                Ao utilizar o site da Bikeline, você concorda com os termos descritos abaixo.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">1. Uso do Site</h2>
            <p className="mb-4">
                Você concorda em utilizar o site apenas para finalidades legais e não prejudiciais à empresa ou a terceiros.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">2. Propriedade Intelectual</h2>
            <p className="mb-4">
                Todo o conteúdo presente neste site é de propriedade da Bikeline e não pode ser reproduzido sem autorização.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">3. Modificações</h2>
            <p className="mb-4">
                A Bikeline pode modificar estes termos a qualquer momento, com ou sem aviso prévio.
            </p>
            <p className="text-sm text-gray-600 mt-6">Última atualização: julho de 2025</p>

        </ModalFooter>
    );
}
