const LinkButton = ({
  bg = "bg-transparent",
  textColor = "text-white",
  hover = "",
  to = "",
  children,
}) => {
  return (
    <a
      className={`rounded-full ${bg} px-5 py-2 font-light ${textColor} ${hover} cursor-pointer text-[12px] transition-all duration-500 md:text-[14px]`}
      href={to}
      target="_blank"
      aria-label="Open live project in a new tab."
    >
      {children}
    </a>
  );
};

export default LinkButton;
