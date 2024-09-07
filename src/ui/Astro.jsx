import { astro } from "../assets";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

const Astro = () => {
  return (
    <motion.div
      className="flex w-max items-center py-5 transition-transform duration-700 ease-out"
      variants={slideIn("left", "tween")}
      initial="hidden"
      whileInView="show"
    >
      <img
        className="relative size-[270px] sm:size-[350px] md:size-[450px] lg:size-[550px]"
        src={astro}
        alt="Astronaut"
      />
    </motion.div>
  );
};

export default Astro;
