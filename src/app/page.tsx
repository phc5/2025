import Hero from '@/components/Hero';
import Island from '@/components/Island';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <NavBar />
      <Island />
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-8 px-16 bg-white sm:items-start">
        <Hero />
      </main>
    </div>
  );
}
