'use client';

export default function Hero() {
  return (
    <section
      className="flex flex-col uppercase font-semibold absolute bottom-[15vh]
  lg:bottom-[20vh] left-8 right-8 items-center"
    >
      <div className="w-fit flex flex-col">
        <div className="grid grid-cols-3 gap-4">
          <p className="font-medium text-left tracking-tighter">A</p>
          <p className="font-medium text-center tracking-tighter">REALLY</p>
          <p className="font-medium text-right tracking-tighter">GOOD</p>
        </div>
        <h1 className="flex text-4xl md:text-6xl font-extrabold justify-center">
          SOFTWARE ENGINEER
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <p className="font-medium text-left tracking-tighter">WHO</p>
          <p className="font-medium text-center tracking-tighter">SHIPS</p>
          <p className="font-medium text-right tracking-tighter">THINGS</p>
        </div>
      </div>
    </section>
  );
}
