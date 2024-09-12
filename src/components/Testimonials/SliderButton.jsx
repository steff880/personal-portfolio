const SliderButton = ({ children, handleOnClick, position }) => {
  return (
    <button
      onClick={handleOnClick}
      className={`${position} flex h-8 w-8 items-center justify-center rounded-full text-[1rem] transition-[background] duration-200 ease-in-out hover:bg-[var(--purple)]`}
    >
      {children}
    </button>
  );
};

export default SliderButton;
