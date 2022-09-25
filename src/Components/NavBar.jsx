import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
export const NavBar = () => {
  const container = {
    show: {
      scale: [1, 1.06, 1, 1.06, 1],
      x: [1, -3, 1, 3, 1],
      transition: {
        duration: 3,
        ease: "easeInOut",
        times: [0.4, 0.6, 0.9, 1.4, 1.2],
        repeat: Infinity,
        repeatDelay: 1,
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeIn" } },
    clickEffect: { scale: 0.9 },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 200,
        bottom: 500,
      }}
      className="text-pink-200 font-nunito fixed mt-20 font-bold text-xl z-20 right-0 mr-5  md:text-3xl lg:text-4xl"
    >
      <motion.div
        variants={item}
        whileTap="clickEffect"
        className="hover:cursor-pointer hover:text-white "
      >
        <Link
          activeClass="cursor-pointer text-white"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
        >
          - WHO'S TALKING ?
        </Link>
      </motion.div>
      <motion.div
        variants={item}
        whileTap="clickEffect"
        className="hover:cursor-pointer hover:text-white"
      >
        <Link
          activeClass="cursor-pointer text-white"
          to="work"
          spy={true}
          smooth={true}
          offset={-90}
          duration={1000}
        >
          - STUFF I'VE DONE
        </Link>
      </motion.div>
      <motion.div
        variants={item}
        whileTap="clickEffect"
        className="hover:cursor-pointer hover:text-white"
      >
        <Link
          activeClass="text-white"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
        >
          - STALK ME
        </Link>
      </motion.div>
    </motion.div>
  );
};
