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

  const works = [
    {
      id: 1,
      name: "Movie Explore",
      description:
        "This is a personal project I created using the public API and ReactJS. Here, you may browse top Movies and search for films based on user reviews.",
      technology: [
        "JavaScript",
        "ReactJS",
        "MobX",
        "Axios",
        "HTML5",
        "Tailwind CSS",
      ],
      link: "https://github.com/dipeshkumarsah98/explore-movie",
      img: MovieExplore,
    },
    {
      id: 2,
      name: "Dog Finder",
      description:
        "I developed this as a side project using ReactJS and the open API. You can browse dogs in this area based on breed. You can filter dogs based on your needs and search dogs based on their breeds.",
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
      description:
        "This is the student management system made with python using django framework. Default superuser is username: dipesh password: dipesh. This is an backend made with django rest framework. I have implemented jwt for the authentication.",
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
