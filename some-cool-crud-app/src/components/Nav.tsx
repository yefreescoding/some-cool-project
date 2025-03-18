import logoApp from "/images/logo-app.png";

export const Nav = () => {
  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="bg-white rounded-t-4xl flex mx-auto w-full max-w-[var(--app-with)] items-center justify-between p-4">
      <div className="flex gap-2 items-center text-sm">
        <p className="sr-only md:not-sr-only font-semibold text-primary">
          Some cool CRUD app by{" "}
        </p>
        <a
          className="group flex items-center gap-1 text-gray-500 opacity-80 hover:opacity-100 transition-all"
          href="https://github.com/yefreescoding"
        >
          <img
            className="group-hover:rotate-25 w-10 h-10 object-cover bg-gray-300 p-0.5 rounded-full transition-all"
            src={logoApp}
            alt="logo"
          />
          <span className="sr-only">@yefreescoding</span>
        </a>
      </div>
      <nav>
        <ul className="flex">
          {links.map((link) => (
            <li key={link.name}>
              <a
                className="p-2 text-primary hover:bg-gray-100 rounded-md transition-all"
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
