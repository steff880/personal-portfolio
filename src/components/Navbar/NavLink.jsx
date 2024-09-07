const NavLink = ({ title, id, handleActive, activeSection }) => {
  return (
    <>
      <li
        className={`${activeSection === id ? "text-[var(--purple)]" : ""}`}
        onClick={() => handleActive(title)}
      >
        <a
          className="hover:text-[var(--purple)]"
          href={`#${id}`}
          aria-label={`Link to ${title} section`}
        >
          {title}
        </a>
      </li>
    </>
  );
};

export default NavLink;
