import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Intro } from "./Components/Intro";
import { About } from "./Components/About";
import { Work } from "./Components/Work";
import { Contact } from "./Components/Contact";
import { NavBar } from "./Components/NavBar";
import HashLoader from "react-spinners/HashLoader";
import "./style/style.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setInterval(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <motion.div
          exit={{ x: "100%", transition: { duration: 1, stiffness: 100 } }}
          className="flex justify-center items-center bg-black w-full h-screen"
        >
          <HashLoader color="orange" loading={isLoading} size={100} />
        </motion.div>
      ) : (
        <div className="px-5 md:px-20 lg:px-28">
          <NavBar />
          <Intro />
          <About />
          <Work />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
