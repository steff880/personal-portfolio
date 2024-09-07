import ProjectCard from "../../ui/ProjectCard";
import { projects } from "../../constants";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";

const Projects = forwardRef(function Projects(_, ref) {
  return (
    <motion.section
      ref={ref}
      id="projects"
      initial="hidden"
      whileInView="show"
      className="paddingX flex min-h-max flex-col bg-[var(--dark-blue)] py-5 lg:py-28"
    >
      <motion.h2
        variants={textVariant("0.3")}
        className="secondaryHeading mb-10 mt-10 text-center font-extrabold text-white lg:my-10"
      >
        What I Have <span className="text-[var(--purple)]">Worked On</span>
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-5 py-10 lg:gap-10">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            image={project.image}
            description={project.description}
            sourceCodeLink={project.sourceCodeLink}
            liveLink={project.liveLink}
            index={i}
          />
        ))}
      </div>
    </motion.section>
  );
});

export default Projects;
