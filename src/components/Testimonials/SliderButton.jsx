const SliderButton = ({ children, handleOnClick, position }) => {
  return (
    <button
      onClick={handleOnClick}
      className={`${position} flex h-8 w-8 items-center justify-center rounded-full text-[1rem] transition-[background] duration-200 ease-in-out hover:bg-[var(--purple)] sm:right-0 md:right-5 md:h-10 md:w-10 md:text-[1.1rem] lg:right-10 xl:right-28`}
    >
      {children}
    </button>
  );
};

export default SliderButton;
