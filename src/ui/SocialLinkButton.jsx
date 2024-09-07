const SocialLinkButton = ({ children, to = "" }) => {
  return (
    <a
      href={to}
      className="cursor-pointer text-[30px] text-white transition-all duration-300 hover:scale-[0.95] sm:text-[35px]"
      target="_blank"
      aria-label="Link to social media."
    >
      <span>{children}</span>
    </a>
  );
};

export default SocialLinkButton;
