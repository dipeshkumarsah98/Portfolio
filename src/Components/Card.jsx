import React from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import Marquee from "react-fast-marquee";

export const Card = ({
  projectName,
  projectDescription,
  techItems,
  repoLink,
  item,
  image,
}) => {
  return (
    <>
      {/* slider */}
      <motion.div
        variants={item}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="mt-20"
      >
        <Marquee
          className="bg-transparent h-20 md:h-28 lg:h-32 font-nunito text-3xl md:text-4xl lg:text-7xl text-black border border-y-gray-400 border-x-transparent hover:text-orange-400"
          speed={70}
          play={true}
          gradient={false}
        >
          <p className="text-white/80 hover:text-orange-400 hover:italic hover:line-through">
            {projectName}
          </p>
        </Marquee>
      </motion.div>

      <motion.div
        variants={item}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="text-white/80 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center"
      >
        <div className="lg:space-x-3">
          {/* project title */}

          <h1 className="font-nunito text-4xl my-10 text-center font-semibold md:text-5xl md:text-left lg:text-7xl">
            {projectName}
          </h1>
          {/* about project */}

          <h2 className="font-merienda text-2xl my-3 text-pink-300/80 md:text-3xl lg:text-4xl">
            PROJECT CONCEPT
          </h2>
          <p className="font-merienda text-xl  text-justify md:text-3xl">
            {projectDescription}
          </p>
          {/* Tech implemented */}

          <h2 className="font-merienda text-2xl my-3 text-pink-300/80 md:text-3xl lg:text-4xl">
            TECH BEING IMPLEMENTED
          </h2>
          <ul className="list-disc grid grid-cols-2 px-5 lg:px-5 text-xl  md:text-3xl">
            {techItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Github link */}
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center my-3 space-x-2 lg:space-x-3">
              <BsGithub
                color="pink"
                className="cursor-pointer "
                fontSize={30}
              />
              <div className="text-pink-200 text-lg cursor-pointer lg:text-xl hover:text-white/80 transition-colors">
                VIEW REPO
              </div>
            </div>
          </a>
        </div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ x: -350, scale: 1.5, transition: { duration: 2 } }}
          className="cursor-pointer "
        >
          <img src={image} alt={projectName} className="h-[50vh] rounded-lg " />
        </motion.div>
      </motion.div>
    </>
  );
};
