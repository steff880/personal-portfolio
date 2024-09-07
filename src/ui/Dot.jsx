const Dot = ({
  size = "size-[8px]",
  bg = "bg-[var(--dark-blue)]",
  position = "",
  visibility = "",
}) => {
  return (
    <>
      {position && (
        <span
          className={`absolute ${position} z-1 ${bg} rounded-full ${size} ${visibility}`}
        >
          &nbsp;
        </span>
      )}
    </>
  );
};

export default Dot;
