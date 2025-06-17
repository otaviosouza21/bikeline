import {
    ArrowLeft,
  Bike,
  CircleHelp,
  ShieldCheck,
  ThumbsUp,
  User,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import AboutCard from "./AboutCard";

export default function About() {
  return (
    <section className="global-container">
      <div className="flex gap-2 mb-2 items-center group">
        <h2 className="text-2xl text-bkl-500 font-semibold">Quem Somos</h2>
        <Bike className="text-bkl-700 group-hover:translate-x-2 transition-all"/>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-slate-600 text-sm mb-1">
            A Bikeline nasceu em 2008 da paixão por ciclismo de seus fundadores,
            que buscavam criar um espaço onde os amantes de bicicletas pudessem
            encontrar produtos de qualidade e serviços especializado
          </p>
          <p className="text-slate-600 text-sm">
            Hoje, somos referência no mercado, com uma equipe de profissionais
            altamente qualificados e apaixonados pelo que fazem. Nossa missão é
            proporcionar a melhor experiência em ciclismo, seja para quem está
            começando ou para ciclistas experientes.
          </p>
          <ul className="*:flex *:items-center *:gap-2 text-sm grid mt-4 gap-4 grid-cols-2">
            <AboutCard
              icon={ShieldCheck}
              text="Qualidade"
              subtext="Produtos Selecionados"
            />
            <AboutCard icon={Zap} text="Agilidade" subtext="Serviços rápidos" />
            <AboutCard
              icon={Users}
              text="Experiência"
              subtext="Equipe especializada"
            />

            <AboutCard
              icon={ThumbsUp}
              text="Satisfação"
              subtext="Clientes felizes"
            />
          </ul>
        </div>
        <div
          className="rounded-xl w-[100%] h-[100%]"
          style={{
            backgroundImage: `url(https://lh3.googleusercontent.com/gps-cs-s/AC9h4np0MbyWH4TX-xT6reSeFTxfIsRKqeJbInyd_mTCMC5BzHJ4m-1z3yfRs2nXERIhx-FnLNyPIK7cAOLldtXIzG5XHBRfhwTnk9GGB8K32g-Zg99M_PngklMTAUb8Xny2HJtvBsFY5w=s680-w680-h510-rw)`,

            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </section>
  );
}
