import About from "@/components/About";
import Experience from "@/components/Experience";
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
        <div className="h-svh relative px-4 lg:px-8 overflow-x-hidden"></div>
        <About />
        <Experience />
      </main>
    </div>
  );
}
