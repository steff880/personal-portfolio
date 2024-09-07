import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

const SkillCard = ({ title, icon, text, index }) => {
  return (
    <motion.div
      variants={fadeIn("left", "spring", 0.5 * index, "1")}
      initial="hidden"
      whileInView="show"
      className={`round-gradient-border flex h-[300px] w-[210px] -translate-y-0 flex-col justify-center gap-4 px-2 text-center text-white sm:w-[230px] lg:w-[250px] lg:even:-translate-y-10`}
    >
      <div className="flex justify-center">
        <img className="size-[50px]" src={icon} alt="Icon" />
      </div>
      <h3 className="text:[1.1rem] font-semibold md:text-[1.25rem]">{title}</h3>
      <p className="text-[14px] text-[#b1b1b1]">{text}</p>
    </motion.div>
  );
};

export default SkillCard;
