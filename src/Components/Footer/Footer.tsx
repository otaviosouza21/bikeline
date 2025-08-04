'use client'
import Image from "next/image";
import LogoBikeline3 from '@/../public/images/logo_semfundo-02.png'
import { useState } from "react";
import Faq from "./Infos/Faq";
import PrivacyPolicies from "./Infos/PrivacyPolicies";
import UseTerms from "./Infos/UseTerms";


export default function Footer() {
    const [showModalInfos, setShowModalInfos] = useState<"faq" | "terms" | "policies" | "">("")

    return <footer className="bg-[#0D1B2A] text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
                <Image
                    width={180}
                    alt="logo-bikeline"
                    className="mx-auto -my-5 max-sm:-my-6"
                    src={LogoBikeline3}
                />
            </div>
            <div>
                <h3 className="text-md font-semibold mb-3">Institucional</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                    <li onClick={() => setShowModalInfos('policies')}><a href="#" className="hover:text-white transition">Política de privacidade</a></li>
                    <li onClick={() => setShowModalInfos('terms')}><a href="#" className="hover:text-white transition">Termos de uso</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-md font-semibold mb-3">Ajuda</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                    <li onClick={() => setShowModalInfos('faq')}><a href="#" className="hover:text-white transition">Perguntas frequentes</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-md font-semibold mb-3">Contato</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                    <li>📞 (11) 97602-2393</li>
                    <li>📧 contato@bikeline.com.br</li>
                    <li>📍 Mogi das Cruzes - SP</li>
                </ul>
            </div>

        </div>

        <div className="text-center py-4 text-sm text-gray-400 border-t border-slate-700">
            © 2025 Bikeline. Todos os direitos reservados.
        </div>

        {showModalInfos === 'faq' && <Faq setShowModalInfos={setShowModalInfos} />}
        {showModalInfos === 'policies' && <PrivacyPolicies setShowModalInfos={setShowModalInfos}  />}
        {showModalInfos === 'terms' && <UseTerms setShowModalInfos={setShowModalInfos}  />}

    </footer>
}