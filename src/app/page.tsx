import About from "@/components/About";
import Hero from "@/components/Hero";
import Island from "@/components/Island";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="font-sans">
      <NavBar />
      <Island />
      <main className="py-8 px-16">
        <Hero />
        <About />
      </main>
    </div>
  );
}
