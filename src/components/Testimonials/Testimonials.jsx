import { forwardRef } from "react";
import TestimonialSlider from "./TestimonialSlider";
import { RiDoubleQuotesR } from "react-icons/ri";
import { motion } from "framer-motion";
import { zoomIn } from "../../utils/motion";

const Testimonials = forwardRef(function Testimonials(_, ref) {
  return (
    <motion.section
      ref={ref}
      id="testimonials"
      initial="hidden"
      whileInView="show"
      className="paddingX relative isolate flex max-h-screen flex-col items-center gap-10 bg-[var(--dark-blue)] py-16 text-center text-white md:gap-0"
    >
      <motion.h2
        variants={zoomIn("0.2", "0.5")}
        className="secondaryHeading font-extrabold"
      >
        What Others <span className="text-[var(--purple)]">Say About Me</span>
      </motion.h2>
      <TestimonialSlider />
      <div className="z-1 top-1/5 absolute text-[16rem] sm:text-[20rem]">
        <RiDoubleQuotesR color="rgba(255,255,255,0.02)" />
      </div>
    </motion.section>
  );
});

export default Testimonials;
