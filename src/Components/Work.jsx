import React from "react";
import { motion } from "framer-motion";
import { Card } from "./Card";
import DogFinder from "../img/dog-finder.png";
import MovieExplore from "../img/movie-explore.png";
import SMS from "../img/student-management-system.png";

export const Work = () => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeIn",
        viewport: { once: false, amount: 0.5 },
      },
    },
  };
  var description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, veniam voluptate asperiores dolorum reprehenderit quaerat quod quae velit eius atque rerum debitis obcaecati corrupti necessitatibus sunt, earum sint possimus fuga voluptatibus officia iste reiciendis sed ratione. Enim cum at, ad, vero sequi veniam dolor eius, sed facilis neque molestias. Amet!";

  const works = [
    {
      id: 1,
      name: "Movie Explore",
      description: description,
      technology: [
        "JavaScript",
        "ReactJS",
        "MobX",
        "Axios",
        "HTML5",
        "Tailwind CSS",
      ],
      link: '"https://github.com/dipeshkumarsah98/E-commerical-API-django/tree/master"',
      img: MovieExplore,
    },
    {
      id: 2,
      name: "Dog Finder",
      description: description,
      technology: [
        "JavaScript",
        "ReactJs",
        "RRD",
        "HTML5",
        "Axios",
        "JSON Web Token",
      ],
      link: "https://github.com/dipeshkumarsah98/DogFinder_ReactJS",
      img: DogFinder,
    },
    {
      id: 3,
      name: "School Management System",
      description: description,
      technology: [
        "Python",
        "Javascript",
        "ReactJs",
        "Django",
        "Rest Framework",
        "HTML5",
        "Axios",
        "JSON Web Token",
      ],
      link: "https://github.com/dipeshkumarsah98/Student-management-system-backend",
      img: SMS,
    },
  ];

  return (
    <motion.div className="my-20" id="work">
      <motion.h1
        variants={item}
        initial="hidden"
        whileInView="show"
        className="font-nunito text-center text-5xl font-bold text-pink-300/80 lg:text-8xl md:text-left lg:my-30"
      >
        Recent Work
      </motion.h1>

      {works?.map((work) => (
        <Card
          item={item}
          key={work.id}
          image={work.img}
          projectName={work.name}
          projectDescription={work.description}
          repoLink={work.link}
          techItems={work.technology}
        />
      ))}

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="text-center font-xl font-nunito  text-gray-300 my-10 md:text-3xl lg:text-5xl"
      >
        More Project coming soon....
      </motion.div>
    </motion.div>
  );
};
