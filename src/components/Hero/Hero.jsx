import Lottie from "lottie-react";
import animationData from "../../assets/animation/laptop-animation.json";
import Dot from "../../ui/Dot";
import Scroller from "../../ui/Scroller";
import { halfCircles } from "../../assets";
import { forwardRef } from "react";

const Hero = forwardRef(function Hero(_, ref) {
  return (
    <section
      ref={ref}
      id="home"
      className={`paddingX circular-gradient-bg relative mt-[6rem] min-h-screen py-6 md:py-16`}
    >
      <h1 className="text-center text-2xl font-extrabold sm:text-3xl lg:text-4xl">
        Hi there, I&apos;m <span className="text-[var(--purple)]">Stefan</span>.
      </h1>
      <p className="font-regular mx-auto mt-6 text-center text-[var(--dark-blue)] sm:w-[75%] sm:text-[1.15rem] md:w-[65%] xl:w-[75%] 2xl:w-1/2">
        A dedicated and passionate junior developer, with the ability to quickly
        grasp new concepts.
      </p>
      <Dot size="size-[16px]" position="top-[40%] left-[20%]" />
      <Dot position="top-[50%] left-[30%]" />
      <Dot size="size-[16px]" position="bottom-[15%] left-[25%]" />
      <Dot size="size-[12px]" position="bottom-[20%] right-[25%]" />
      <Dot position="top-[35%] right-[20%]" />
      <Dot position="top-[40%] right-[30%]" />
      <div className="relative isolate flex justify-center pt-6 sm:pt-0">
        <img
          src={halfCircles}
          alt="Half circles"
          className={`absolute top-8 size-[28rem] sm:top-16 sm:size-[40rem]`}
        />
        <div className="mt-[6rem] size-[28rem] pt-12 sm:mt-[8rem] sm:size-[32rem] sm:pt-6 xl:size-[35rem]">
          <Lottie animationData={animationData} />
        </div>
        <Scroller />
      </div>
    </section>
  );
});

export default Hero;
