

type VantagensProps = {
    desconto: string,
    titulo: string,
    span: string,
    icon?: React.ElementType;
    color?: string
}

export default function Vantagens({ desconto, titulo, span, icon: Icon, color }: VantagensProps) {
    return (
        <div className={`grid grid-cols-[230px_auto] max-sm:rounded-none max-sm:py-5 max-md:flex max-md:flex-col  max-md:items-center bg-white shadow max-sm:shadow-none max-sm:border-0  max-sm:border-b-1 gap-4 max-lg:gap-2 border-1 border-bkl-600/10 p-8 max-sm:p-3 hover:scale-102 transition-all  items-center rounded-xl`}>
            <h2 className={`font-league ${color} max-sm:text-7xl flex flex-col justify-center items-center max-lg:text-8xl max-sm:flex max-sm:flex-col max-sm:items-center  font-extrabold text-9xl`}>{desconto}<span className="block -mt-2 text-5xl max-lg:text-4xl max-sm:text-4xl text-slate-700">Desconto</span></h2>
            <div className="flex flex-col gap-2 max-md:items-center">
                <p className=" max-sm:text-center max-sm:text-[20px] font-league text-slate-600 text-[23px] max-lg:text-[24px] leading-7">
                    {titulo}
                </p>
                <span className={`${color}  text-xl flex gap-2 mt-2 items-center font-bold`}>
                    {Icon && <Icon />}  {span}
                </span>
            </div>
        </div>
    )
}