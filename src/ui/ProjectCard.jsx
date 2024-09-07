import LinkButton from "./LinkButton";
import SocialLinkButton from "./SocialLinkButton";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({
  name,
  image,
  description,
  liveLink,
  sourceCodeLink,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.3 * index, "1")}
      className={`round-gradient-border relative grid h-[400px] w-[270px] justify-between gap-4 p-4 text-center text-white lg:w-[320px]`}
    >
      <div className="flex flex-col gap-5">
        <div className="flex justify-center">
          <img className="rounded-md" src={image} alt="Project Image" />
        </div>
        <h3 className="tertiaryHeading font-semibold">{name}</h3>
        <p className="text-[14px] text-[#b1b1b1]">{description}</p>
      </div>
      <div className="my-4 self-end transition-all duration-500 hover:scale-[0.95]">
        <LinkButton bg="bg-[var(--purple)]" to={liveLink}>
          View Live
        </LinkButton>
      </div>
      <div className="absolute right-2 top-2 z-10 rounded-full bg-[var(--dark-blue)] transition-all duration-500 hover:scale-[0.95]">
        <SocialLinkButton to={sourceCodeLink}>
          <FaGithub />
        </SocialLinkButton>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
