const HalfCircles = ({ size = "", position = "", rotation = "" }) => {
  return (
    <>
      {size && position && (
        <div
          className={`absolute ${position} -z-10 hidden justify-center lg:flex`}
        >
          <div
            className={`round-gradient-border2 ${size} ${rotation} absolute flex items-center justify-center p-4`}
          >
            <div className="round-gradient-border2 size-[85%]"></div>
          </div>
        </div>
      )}
    </>
  );
};
export default HalfCircles;
