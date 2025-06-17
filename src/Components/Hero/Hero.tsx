import PrimaryButton from "../UI/PrimaryButton";
import LogoBikeline2 from "../../../public/id/background/logo_bl_jpg-02.jpg";

export default function Hero() {
  return (
    <section
      className="relative bg-[#546FFE] w-[100vw] flex items-center justify-center h-[90vh] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${LogoBikeline2.src})`, backgroundSize: 800 }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/90 z-0" />

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-ow text-5xl font-bold">Excelência em Ciclismo</h1>
        <p className="text-ow/80 mt-2 max-w-xl mx-auto">
          Oferecendo os melhores produtos e serviços para ciclistas de todos os níveis.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
          <PrimaryButton
            text="Nossos Serviços"
            className="bg-bkl-700 hover:bg-bkl-600 text-ow"
          />
          <PrimaryButton
            text="Entre em Contato"
            className="border-ow border-2 hover:bg-ow text-ow hover:text-bkl-700"
          />
        </div>
      </div>
    </section>
  );
}
