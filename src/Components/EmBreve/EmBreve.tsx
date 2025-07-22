import Image from 'next/image';
import BikelineLogo from '../../../public/id/sem-fundo/logo_semfundo-02.png'
import Link from 'next/link';

export default function EmBreve() {
    return (
        <div className="bg-background font-sans text-gray-800 overflow-x-hidden min-h-screen">

            {/* Hero Section */}
            <section className="relative flex items-center justify-center h-screen">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/70 to-primary/50" />
                <div className="relative z-10 flex flex-col text-center px-2 max-w-xl mx-auto">
                  <Image src={BikelineLogo} alt='bikeline-logo' />
                    <h1 className="text-white -mt-10 text-xl md:text-5xl font-bold mb-4">
                        Estamos Chegando
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl mb-8 max-w-lg mx-auto">
                        Estamos preparando a melhor experiência para apaixonados por
                        bicicletas. Fique ligado!
                    </p>

                    <div className="text-white/80 flex flex-col gap-2">
                        <p className="font-bold">Continue nos acompanhando nas redes</p>
                        <div className="flex justify-center space-x-4 text-xl">
                            <Link
                                href="https://www.instagram.com/bikelinebr/"
                                className="hover:text-white transition"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <img
                                    src="/icons/instagram (1).png"
                                    alt="Instagram"
                                    className="h-6 w-6"
                                />
                            </Link>
                            <Link
                                href="https://www.facebook.com/bikelineoficial/?locale=pt_BR"
                                className="hover:text-white transition"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <img
                                    src="/icons/facebook (1).png"
                                    alt="Facebook"
                                    className="h-6 w-6"
                                />
                            </Link>
                            <Link
                                href="https://wa.me/551126108210?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20seu%20site%20em%20desenvolvimento."
                                className="hover:text-white transition"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                            >
                                <img
                                    src="/icons/whatsapp-2.svg"
                                    alt="WhatsApp"
                                    className="h-6 w-6"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

