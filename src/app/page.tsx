import About from "@/Components/About/About";
import Header from "@/Components/Header/Header";
import Hero from "@/Components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden h-[100vh]">
      <Hero />
      <About />
    </main>
  );
}
