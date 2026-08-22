import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Philosophy from "@/components/sections/Philosophy";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1 bg-zinc-950 selection:bg-white selection:text-black">
      <Hero />
      <Services />
      <Philosophy />
      <Contact />
    </main>
  );
}
