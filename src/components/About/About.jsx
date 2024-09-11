import Astro from "../../ui/Astro";
import LinkButton from "../../ui/LinkButton";
import Skill from "../../ui/Skill";
import SocialLinkButton from "../../ui/SocialLinkButton";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import SkillCard from "../../ui/SkillCard";
import { skills } from "../../constants";
import HalfCircles from "../../ui/HalfCircles";
import { motion } from "framer-motion";

import { forwardRef } from "react";
import { slideIn } from "../../utils/motion";

const About = forwardRef(function About(_, ref) {
  return (
    <motion.section
      ref={ref}
      id="about"
      initial="hidden"
      whileInView="show"
      className="paddingX relative isolate flex min-h-max flex-col gap-10 bg-[var(--dark-blue)] py-10 sm:py-16 md:gap-16 lg:gap-20"
    >
      <div className="flex flex-col items-center justify-evenly lg:flex-row">
        <Astro />
        <motion.div
          className="w-auto text-white sm:w-3/4 lg:w-1/2 lg:p-4"
          variants={slideIn("right", "tween", "0.2", "0.7")}
        >
          <h3 className="tertiaryHeading mb-3  font-bold">About me</h3>
          <h2 className="secondaryHeading font-extrabold">
            Stefan <span className="text-[var(--purple)]">Yordanov</span>
          </h2>
          <p className="my-8 text-[14px] text-[#b1b1b1]">
            Hello! I&apos;m Stefan Yordanov. A passionate Junior Developer
            fueled by curiosity and drive to learn and create. I am eager to
            expand my skills and make meaningful contributions to the world of
            software development.
          </p>
          <h3 className="tertiaryHeading mb-3 font-bold">My Skills</h3>
          <div className="flex flex-wrap gap-3 py-3 text-[12px] sm:text-[14px]">
            <Skill>HTML</Skill>
            <Skill>CSS</Skill>
            <Skill>JavaScript</Skill>
            <Skill>React</Skill>
            <Skill>Python</Skill>
            <Skill>Flask</Skill>
            <Skill>Tailwind</Skill>
            <Skill>SASS</Skill>
            <Skill>GitHub</Skill>
            <Skill>Git</Skill>
            <Skill>MongoDB</Skill>
            <Skill>PostgreSQL</Skill>
          </div>
          <div className="my-10 flex items-center gap-5">
            <LinkButton
              bg="bg-[var(--purple)]"
              hover="hover:scale-[0.95]"
              to="https://drive.google.com/file/d/1wMkLeEbDbtuBzx6U6QNm3u_Un5GmOWCM/view?usp=sharing"
            >
              Download CV
            </LinkButton>
            <SocialLinkButton to="https://github.com/steff880">
              <FaGithub />
            </SocialLinkButton>
            <SocialLinkButton to="https://www.linkedin.com/in/steff-yordanov-web-dev/">
              <FaLinkedin />
            </SocialLinkButton>
          </div>
        </motion.div>
      </div>
      <div className="mb-10 flex flex-wrap justify-center gap-4 sm:gap-7 md:gap-9 lg:mb-20 lg:gap-16">
        {skills.map((skill, i) => (
          <SkillCard
            key={skill.id}
            title={skill.title}
            icon={skill.icon}
            text={skill.text}
            index={i}
          />
        ))}
      </div>
      <HalfCircles
        size="size-[400px]"
        position="bottom-[390px] left-1/2"
        rotation="rotate-[225deg]"
      />
    </motion.section>
  );
});

export default About;
