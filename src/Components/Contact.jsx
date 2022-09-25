import React from "react";
import { motion } from "framer-motion";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const Contact = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        viewport: { once: true, amount: 0.5 },
      },
    },
  };
  return (
    <motion.div className="contact my-52">
      <motion.h1
        variants={item}
        initial="hidden"
        whileInView="show"
        className="font-nunito text-center text-5xl font-bold text-pink-300/80 lg:text-8xl md:text-left lg:my-30"
      >
        Talk to Me
      </motion.h1>
      {/* form */}
      <motion.form
        variants={container}
        initial="hidden"
        whileInView="show"
        className="text-white/80 font-raleway my-10"
      >
        <motion.p
          variants={item}
          className="text-left text-xl mb-2 md:mb-4 md:text-5xl lg:text-8xl"
        >
          HELLO,
        </motion.p>

        <motion.label
          variants={item}
          htmlFor="name"
          className="text-xl md:text-5xl lg:text-7xl"
        >
          MY NAME IS
        </motion.label>
        <motion.input
          variants={item}
          type="text"
          name="name"
          required
          autoComplete="off"
          className="bg-transparent select-none border-b text-xl
                    border-b-gray-200 border-x-0 border-t-0 ml-4 mb-2 text-red-600 w-36
                    focus:outline-none md:h-16 md:w-52 lg:h-20 lg:w-96 lg:text-5xl xl:w-[40vw]"
        />
        <br />
        <motion.label
          variants={item}
          htmlFor="email"
          className="text-xl md:text-5xl lg:text-7xl"
        >
          HERE IS MY EMAIL
        </motion.label>
        <motion.input
          variants={item}
          type="email"
          id="email"
          name="email"
          autoComplete="off"
          className="bg-transparent select-none border-b text-xl border-b-gray-200 border-x-0 border-t-0 ml-4 w-36 mb-2 text-red-600 lg:text-5xl md:h-16 md:w-52 lg:h-20 lg:w-96 xl:w-[40vw]"
        />
        <br />
        <motion.label
          variants={item}
          htmlFor="topic"
          className="text-xl md:text-5xl lg:text-7xl"
        >
          LET'S TALK ABOUT
        </motion.label>
        <motion.input
          variants={item}
          type="text"
          name="topic"
          autoComplete="off"
          className="bg-transparent border-b border-b-gray-200 border-x-0 border-t-0 ml-4 w-36 mb-2 text-xl text-red-600 md:h-16text-red-600 lg:text-5xl md:w-52 lg:h-20 lg:w-96 xl:w-[40vw]"
        />
        <br />
        <motion.button
          variants={item}
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          whileTap={{ scale: 1.1 }}
          type="submit"
          className="bg-red-400 text-sm md:text-lg lg:text-xl h-20 w-20 md:h-32 md:w-32 lg:h-40 lg:w-40 rounded-full ml-10 lg:ml-16 mt-3 lg:mt-10"
        >
          Send
        </motion.button>
      </motion.form>
      {/* social media */}
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="show"
        className="flex text-white/80 justify-end space-x-9 -mt-24 mb-10 font-nunito md:-mt-28 lg:-mt-32"
      >
        <div className="hover:text-pink-200 hover:line-through md:text-2xl lg:text-4xl">
          STALK ME
        </div>
        <div className="flex flex-col items-start space-y-1 md:space-y-2">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            href="https://www.linkedin.com/in/dipesh-kumar-sah-7921ab239/"
            target="_blank"
            className="hover:text-pink-200 hover:line-through md:text-2xl lg:text-4xl"
          >
            <div className="flex space-x-1 md:space-x-2 items-center">
              <AiFillLinkedin />
              LINKEDIN
            </div>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            href="https://github.com/dipeshkumarsah98"
            target="_blank"
            className="hover:text-pink-200 hover:line-through md:text-2xl lg:text-4xl"
          >
            <div className="flex space-x-1 md:space-x-2 items-center">
              <AiFillGithub /> GITHUB
            </div>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};
