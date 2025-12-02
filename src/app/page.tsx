import About from "@/components/About";
import Hero from "@/components/Hero";
import Island from "@/components/Island";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <NavBar />
      <Island />
      <main className="min-h-screen w-full items-center justify-between py-8 px-16 bg-white sm:items-start">
        <Hero />
        <About />
      </main>
    </div>
  );
}
