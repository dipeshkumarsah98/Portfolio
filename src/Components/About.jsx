import { motion } from "framer-motion";
import React from "react";

export const About = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeIn" },
      viewport: { once: false, amount: 0.3 },
    },
  };
  return (
    <div
      id="about"
      className="text-white flex flex-col items-center my-10 tracking-widest lg:my-20"
    >
      <motion.h1
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="font-nunito text-5xl font-bold text-pink-300 md:text-6xl lg:text-8xl lg:my-10"
      >
        WHO AM I?
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="my-10 font-merienda font-normal italic space-y-16 lg:space-y-32"
      >
        <motion.span
          variants={item}
          className="text-3xl mb-1 md:text-5xl lg:text-7xl lg:mb-3"
        >
          Hello, I'm Dipesh.
        </motion.span>

        <motion.p
          variants={item}
          className="text-justify text-md md:text-4xl lg:text-7xl"
        >
          I'm a Junior Full Stack Developer and currently persuing my Bachelor
          in <span className="text-red-400 line-through"> BTECH</span> from ISMT
          college at Tinkune Kathmandu, Nepal
        </motion.p>

        <motion.p
          variants={item}
          className="text-justify text-md md:text-4xl lg:text-7xl"
        >
          I create projects under the notion that "less is more" and my work
          reflects my addiction for minimal and create design as well as my
          desire to push boundries
        </motion.p>

        <motion.p
          variants={item}
          className="text-justify text-md md:text-4xl lg:text-7xl"
        >
          I am currently{" "}
          <span className="text-red-400 line-through">Redux</span> and jest to
          further my back front-end focus. I'm learing{" "}
          <span className="text-red-400 line-through">ML and AI </span>as well.
        </motion.p>

        <motion.p
          variants={item}
          className="text-justify text-md  md:text-4xl lg:text-7xl"
        >
          My aim is to take coding into the{" "}
          <span className="text-red-400 line-through">fifth</span> professional
          dimension where I hope to bring value and continously grow myself.
        </motion.p>

        <motion.p
          variants={item}
          className="text-justify text-md  md:text-4xl lg:text-7xl"
        >
          When i'm not coding, you can either find me playing{" "}
          <span className="text-red-400 line-through">Football</span> at the
          Work Cup park, or watching
          <span className="text-red-400 line-through"> Movies</span>.
        </motion.p>
      </motion.div>
    </div>
  );
};
