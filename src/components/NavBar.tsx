export default function NavBar() {
  return (
    <header className="overflow-hidden fixed left-4 lg:left-8 right-4 lg:right-8 top-4 lg:top-6">
      <nav className="grid grid-cols-12 gap-4 lg:gp-8 ">
        <ul className="hidden lg:block col-span-3">
          <span className="block overflow-hidden font-medium">Based in</span>{' '}
          <span className="block overflow-hidden font-medium text-neutral-400">California</span>
        </ul>
        <ul className="col-span-6">
          <span className="block overflow-hidden font-medium">Currently at</span>{' '}
          <span
            className="block overflow-hidden font-medium text-neutral-400
          hover:text-blue-600 hover:underline hover:cursor-pointer"
          >
            Meta
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
            className="rounded-full bg-foreground px-3.5 py-2 font-medium text-background
            hover:cursor-pointer"
          >
            Get in touch
          </button>
        </a>
      </nav>
    </header>
  );
}
