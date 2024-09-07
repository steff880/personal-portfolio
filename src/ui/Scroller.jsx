import { motion } from "framer-motion";

const Scroller = () => {
  return (
    <div className="absolute bottom-24 flex w-full items-center justify-center sm:bottom-14 md:bottom-16 xl:bottom-20">
      <a href="#about" aria-label="Scroll to about section.">
        <div className="flex h-[50px] w-[27px] items-start justify-center rounded-3xl border-[2px] border-[var(--dark-blue)] p-2">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="mb-1 h-2 w-2 rounded-full bg-[var(--dark-blue)]"
          />
        </div>
      </a>
    </div>
  );
};

export default Scroller;
