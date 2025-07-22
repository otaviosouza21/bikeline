import { CalendarRange } from "lucide-react";
import Title from "./Title";
import SaleIcon from "@/Components/Icons/SaleIcon";
import ShopeeIcon from "@/Components/Icons/ShopeeIcon";




export default function Descount() {
  return (
    <div className="z-30 flex flex-col items-center">

      <Title />
      <div className="flex flex-col mt-5 max-sm:gap-5 gap-15 max-lg:gap-5 ">
        <div className="grid grid-cols-[200px_auto] max-md:flex max-md:flex-col max-md:items-center bg-white shadow hover:scale-[1.02] transition-all items-center rounded-xl gap-10 max-lg:gap-2 p-10 max-sm:p-3 max-sm:py-5 max-sm:rounded-none max-sm:shadow-none max-sm:border-0 max-sm:border-b max-sm:border-slate-200">
          <div className="flex flex-col items-center justify-center relative">
            {/* Marca d'água */}
            <div className="absolute opacity-20 max-md:hidden scale-[2] right-13 top-2">
              <SaleIcon color="#FA5130" />
            </div>

            {/* Conteúdo principal */}
            <div className="flex flex-col items-center z-10">
              <span className="text-[#FA5130] font-bebas font-bold text-9xl max-lg:text-8xl max-sm:text-7xl">
                5<span className="font-light">%</span>
              </span>
              <span className="bg-[#FA5130] text-white py-1 px-2 text-5xl max-lg:text-4xl max-sm:text-4xl font-anton tracking-tight rounded-sm font-normal">
                Desconto
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-2 max-md:items-center">
            <p className="text-slate-600 font-league text-[35px] max-lg:text-[35px] max-sm:text-[25px] leading-7">
              <strong>Cupom de desconto</strong> para usar em nossa loja na
              <span className="font-bold text-[#FA5130]"> Shopee</span>
            </p>

            <span className="text-xl flex gap-2 mt-2 items-center font-bold">
              <span className="flex items-center  text-2xl text-[#FA5130] gap-2">
                <ShopeeIcon /> Disponível Agora
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-[200px_auto] max-md:flex max-md:flex-col max-md:items-center bg-white shadow hover:scale-[1.02] transition-all items-center rounded-xl gap-10 max-lg:gap-2 p-10 max-sm:p-3 max-sm:py-5 max-sm:rounded-none max-sm:shadow-none max-sm:border-0 max-sm:border-b max-sm:border-slate-200">
          <div className="flex flex-col items-center justify-center relative">
            {/* Marca d'água */}
            <div className="absolute opacity-20 max-md:hidden scale-[2] right-13 top-2">
              <SaleIcon color="#c34dcd" />
            </div>

            {/* Conteúdo principal */}
            <div className="flex flex-col items-center z-10">
              <span className="text-purple-500 font-bebas font-bold text-9xl max-lg:text-8xl max-sm:text-7xl">
                10<span className="font-light">%</span>
              </span>
              <span className="bg-purple-500 text-white py-1 px-2 text-5xl max-lg:text-4xl max-sm:text-4xl font-anton tracking-tight rounded-sm font-normal">
                Desconto
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-2 max-md:items-center">
            <p className="text-slate-600 font-league text-[35px] max-lg:text-[35px] max-sm:text-[25px] leading-7">
              Garanta seu <strong>desconto</strong> para o lançamento da nossa
              <strong className="text-purple-500"> loja online</strong>
            </p>

            <span className="text-purple-500 text-xl flex gap-2 mt-2 items-center font-bold">
              <span className="flex items-center text-2xl gap-2">
                <CalendarRange /> Disponível Agora
              </span>
            </span>
          </div>
        </div>


      </div>
    </div>
  );
}
