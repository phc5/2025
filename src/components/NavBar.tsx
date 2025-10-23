const YEARS_OF_EXPERIENCE = Math.floor(
  (Date.now() - new Date('2017/05/01').getTime()) / (1000 * 60 * 60 * 24 * 365)
);

export default function NavBar() {
  return (
    <header className="overflow-hidden fixed left-4 lg:left-8 right-4 lg:right-8 top-4 lg:top-6">
      <nav className="grid grid-cols-12 gap-4 lg:gp-8 tracking-tighter">
        <ul className="hidden lg:block col-span-3">
          <span className="block overflow-hidden text-[clamp(16px,1.2vw,20px)] font-medium">
            Based in
          </span>
          <span className="block overflow-hidden text-[clamp(16px,1.2vw,20px)] font-medium text-neutral-400">
            California
          </span>
        </ul>
        <ul className="col-span-3">
          <span className="block overflow-hidden text-[clamp(16px,1.2vw,20px)] font-medium">
            Currently at
          </span>
          <span
            className="block overflow-hidden font-medium text-[clamp(16px,1.2vw,20px)] text-neutral-400
          hover:text-blue-600 hover:underline hover:cursor-pointer"
          >
            Meta
          </span>
        </ul>
        <ul className="hidden lg:block col-span-3">
          <span className="block overflow-hidden text-[clamp(16px,1.2vw,20px)] font-medium">
            Years of Experience{' '}
          </span>
          <span className="block overflow-hidden font-medium text-[clamp(16px,1.2vw,20px)] text-neutral-400">
            {YEARS_OF_EXPERIENCE}
          </span>
        </ul>
        <a
          href="mailto:paulhyunchong@gmail.com"
          className="fixed right-4 lg:right-8 top-4 lg:top-6"
          aria-label="Send me an email"
          role="button"
        >
          <button
            type="button"
            className="rounded-full bg-foreground px-4 py-2.5 text-background font-bold
            text-[clamp(16px,1.2vw,20px)] hover:cursor-pointer"
          >
            Get in touch
          </button>
        </a>
      </nav>
    </header>
  );
}
