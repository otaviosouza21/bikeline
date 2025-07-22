export default function Title() {
  return (
    <div className="text-8xl font-anton flex mt-4 justify-center flex-col items-center max-sm:text-5xl  max-lg:text-6xl text-[#303030]  font-extrabold -tracking-tighter">
      <div className="w-fit">
        <div className="flex flex-col leading-none ">
          <span>DESCONTO</span>
          <div className="flex justify-around gap-2 " >
            <span>EM</span>
            <span className=" px-2 py-1 flex items-center text-white align-bottom rounded-sm fles bg-bkl-500/80">
              DOBRO
            </span>
          </div>
        </div>
      </div>
      <h1 className="text-xl font-poppins font-medium text-center -tracking-wide col-span-full max-sm:text-xl text-slate-700"><strong>Ganhe 2 cupons:</strong> um para usar agora na Shopee e outro no lançamento da nossa loja!</h1>
    </div>
  );
}
