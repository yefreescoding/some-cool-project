/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import styles from "./SideNav.module.css";

export const SideNav = ({ opacity = 1, timing = 200, width = 100 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  /*
   // Sections
    { name: "introduction", href: "introduction" },
    { name: "2020-and-beyond", href: "2020-and-beyond" },
    { name: "2022-and-2023", href: "2022-and-2023" },
    { name: "2024", href: "2024" },
    { name: "conclusion", href: "conclusion" },
  */

  const links = [
    // Cars (2020 and Beyond)
    { name: "mcLaren-speedtail", href: "mcLaren-speedtail" },
    { name: "ferrari-sf90-stradale", href: "ferrari-sf90-stradale" },
    { name: "lamborghini-sian", href: "lamborghini-sian" },

    // Cars (2022 and 2023)
    { name: "rimac-nevera", href: "rimac-nevera" },
    { name: "pagani-huayra-bc-roadster", href: "pagani-huayra-bc-roadster" },

    // Cars (2024)
    { name: "bugatti-chiron-bolide", href: "bugatti-chiron-bolide" },
    { name: "pagani-utopia", href: "pagani-utopia" },
    { name: "lamborghini-revuelto", href: "lamborghini-revuelto" },
    { name: "mcLaren-artura", href: "mcLaren-artura" },
    { name: "aston-martin-valkyrie", href: "aston-martin-valkyrie" },
    { name: "koenigsegg-cc850", href: "koenigsegg-cc850" },
  ];

  // const links = [
  //   {
  //     name: "introduction",
  //     href: "introduction",
  //   },
  //   {
  //     name: "chipset",
  //     href: "chipset",
  //   },
  //   {
  //     name: "display",
  //     href: "display",
  //   },
  //   {
  //     name: "camera",
  //     href: "camera",
  //   },
  //   {
  //     name: "battery",
  //     href: "battery",
  //   },
  //   {
  //     name: "design",
  //     href: "design",
  //   },
  //   {
  //     name: "connectivity",
  //     href: "connectivity",
  //   },
  //   {
  //     name: "conclusion",
  //     href: "conclusion",
  //   },
  // ];

  const handleClick = (href) => {
    setActiveLink(href);
    document.getElementById(href)?.scrollIntoView({ behavior: "instant" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const offsets = links
        .map((link) => {
          const section = document.getElementById(link.href);
          if (section) {
            return {
              href: link.href,
              offsetTop: section.offsetTop,
            };
          }
          return null;
        })
        .filter(Boolean);

      const scrollPosition = window.scrollY + 100;

      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollPosition >= offsets[i].offsetTop) {
          setActiveLink(offsets[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  const transitions = `width ${timing / 2.5}ms linear, opacity ${
    timing * 2
  }ms ease-in-out`;

  const style = {
    backfaceVisibility: "hidden",
    transition: transitions,
    opacity: isOpen ? 1 : opacity,
    width: isOpen ? `${width}vw` : "4.375rem",
  };

  return (
    <aside className={styles.sidenav} data-open={isOpen} style={style}>
      <div
        className={styles.container}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div>
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <img src="cube-hole.svg" alt="hamburger menu icon" />
            {isOpen && <span>Home</span>}
          </button>
        </div>
        <nav>
          <ul className="nav__links">
            {links.map((link) => (
              <li className="nav__link" key={link.name}>
                <a
                  href={`#${link.href}`}
                  onClick={() => handleClick(link.href)}
                  data-active={activeLink === link.href ? "true" : "false"}
                >
                  <span className="dot__line" data-open={isOpen}></span>
                  <span className="link__text" data-open={isOpen}>
                    {link.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
