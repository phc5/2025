import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import GridMotion from "@/components/GridMotion";
import Hero from "@/components/Hero";
import Island from "@/components/Island";
import NavBar from "@/components/NavBar";
import TechStack from "@/components/TechStack";

const items = [
  "Item 1",
  <div key="jsx-item-1">Custom JSX Content</div>,
  // Add more items as needed
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <NavBar />
      <Island />
      <main className="min-h-screen w-full items-center justify-between py-8 px-16 bg-white sm:items-start">
        <Hero />
        <div className="h-svh relative px-4 lg:px-8 overflow-x-hidden">
          <div className="absolute w-[50%] h-[50%] left-[25%] top-[10%]">
            <GridMotion items={items} />
          </div>
        </div>
        <About />
        <Experience />
        <TechStack />
        <Contact />
      </main>
    </div>
  );
}
