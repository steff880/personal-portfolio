import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../../constants";
import NavLink from "./NavLink";
import Menu from "../../ui/Menu";
import Close from "../../ui/Close";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setIsActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef();

  const handleActive = (title) => {
    setIsActive(title);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollTop > windowHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClose = (e) => {
      if (menuRef.current.contains(e.target)) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClose);

    return () => document.removeEventListener("mousedown", handleClose);
  }, []);

  return (
    <header
      className={`paddingX fixed top-0 z-50 flex h-16 w-full items-center justify-between  ${scrolled ? "bg-[var(--dark-blue)] text-white sm:h-16" : "bg-white text-[var(--dark-blue)] sm:h-20"} transition-all duration-500`}
      ref={menuRef}
    >
      <a
        href="#home"
        className={`text-[1.3rem] font-black transition-all duration-200 ease-out ${scrolled ? "sm:text-[1.4rem] md:text-[1.4rem] xl:text-[1.5rem]" : "sm:text-[1.5rem] md:text-[1.55rem] xl:text-[1.65rem]"}`}
      >
        Stefan <span className="text-[var(--purple)]">Yordanov</span>.
      </a>
      <nav className="hidden sm:flex">
        <ul className="flex items-center gap-4 sm:text-[14px] md:text-[16px] md:font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              title={link.title}
              id={link.id}
              handleActive={handleActive}
              active={active}
              activeSection={activeSection}
            />
          ))}
        </ul>
      </nav>
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className={`border-bottom-gradient absolute right-[0] top-[4rem] z-50 flex h-fit max-h-dvh w-dvw items-center justify-center py-6 sm:hidden ${scrolled ? "bg-[var(--dark-blue)] text-white" : "bg-white text-[var(--dark-blue)]"}`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              title={link.title}
              id={link.id}
              handleActive={handleActive}
              active={active}
              activeSection={activeSection}
            />
          ))}
        </ul>
      </motion.nav>
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="cursor-pointer sm:hidden"
      >
        {isOpen ? (
          <Close fill={`${scrolled ? "#fff" : "#000"}`} />
        ) : (
          <Menu fill={`${scrolled ? "#fff" : "#000"}`} />
        )}
      </button>
    </header>
  );
};

export default Navbar;
