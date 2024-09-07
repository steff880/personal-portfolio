import { testimonials } from "../../constants";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const handleDotIndication = (i) => {
    setIndex(i);
  };

  useEffect(() => {
    const handleNext = () =>
      setIndex((current) => (current + 1) % testimonials.length);
    const handlePrev = () =>
      setIndex(
        (current) => (current - 1 + testimonials.length) % testimonials.length,
      );

    const handleArrowKeyEvent = (e) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else return;
    };

    document.addEventListener("keydown", handleArrowKeyEvent);

    return () => {
      document.removeEventListener("keydown", handleArrowKeyEvent);
    };
  }, []);

  return (
    <motion.div
      variants={fadeIn("right", "spring", "0.2", "1")}
      className="grid h-[400px] w-full content-center px-4"
    >
      <motion.div
        key={testimonials[index].id}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
        className="mx-auto max-h-full w-full rounded-lg p-0 text-[14px] text-white sm:h-[220px] sm:p-6 md:h-[200px] md:max-w-[80%] md:text-[15px] lg:h-[200px] lg:max-w-[70%] xl:max-w-[65%] xl:text-[16px]"
      >
        <p className="text-[#b1b1b1]">{testimonials[index].quote}</p>
        <h3 className="mt-4 text-[18px] font-semibold">
          {testimonials[index].name}
        </h3>
        <p className="mt-1 text-xs text-[#b1b1b1]">
          {testimonials[index].title}
        </p>
      </motion.div>
      <div className="mt-8 flex justify-center space-x-4">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`border-1 h-3 w-3 cursor-pointer rounded-full  ${i === index ? "bg-[var(--purple)]" : "bg-white"}`}
            onClick={() => handleDotIndication(i)}
          >
            &nbsp;
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default TestimonialSlider;
