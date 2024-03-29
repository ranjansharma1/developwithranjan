import React from "react";
import code from "../images/code.png";
import { projects } from "../data";
import { motion } from "framer-motion";

function Project() {
  return (
    <section id="projects">
      <div className="container text-center mx-auto py-5  mt-48 md:mt-0">
        <div className="flex flex-col">
          <img src={code} alt="code" className="h-10  inline-block mb-4 sm:h-10 sm:w-10 mx-auto " />
          <motion.h1 whileInView={{ y: [0, 0, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.6 }} className="sm:text-4xl text-3xl text-white font-bold mb-4">
            My Creative Project
          </motion.h1>
          <motion.p whileInView={{ y: [0, 0, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.8 }} className="mx-auto leading-relaxed text-base my-6 font-mono" style={{ maxWidth: "1000px" }} >
            Get ready to be impressed by my portfolio of Full Stack projects,
            which showcase my ability to design and develop visually stunning
            and highly functional web applications that provide seamless user
            experiences.
          </motion.p>
        </div>

        <div
          className="flex flex-wrap justify-center"
          style={{
            borderRadius: "20px",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.9)",
          }}
        >
          {projects.map((project) => (
            <motion.div whileInView={{ x: [0, 0, 0], opacity: [0, 0.5, 1] }}
            transition={{type:"spring",  stiffness:20 }}  key={project.id} className="relative flex justify-center items-center mx-auto sm:w-1/2  h-80 mt-5 p-2" >
              <img
                alt="gallery"
                className="hover:opacity-0"
                style={{
                  borderRadius: "20px",
                  boxShadow: "0px 5px 15px rgba(0,0,0,0.9)",
                  height: "265px",
                  width: "573px",
                }}
                src={project.image}
              />

              <div className="absolute inset-0 z-10 opacity-0 hover:opacity-80 hover:bg-blue-950 border-2 border-blue-800 rounded-lg pt-4">
                <h2 className="tracking-widest text-lg title-font font-bold text-green-400 mb-1 ">
                  {project.subtitle}
                </h2>
                <h1 className="title-font text-3xl font-medium text-white mb-3">
                  {project.title}
                </h1>
                <p className="leading-relaxed px-3">{project.description}</p>
                <div className="flex  justify-center align-middle" >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-5 pt-3 rounded-full bg-black  hover:scale-75 hover:shadow-lg hover:shadow-blue-500 border-2 border-blue-800 "
                    style={{ height: "50px", width: "50px" }}
                  >
                    <i class="fa-solid fa-eye fa-flip fa-2xl" ></i>
                  </a>
                  <a
                    href={project.gihub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-5 pt-3 rounded-full bg-black  hover:scale-75 hover:shadow-lg hover:shadow-blue-500 hover:border-2 hover:border-blue-800"
                    style={{ height: "50px", width: "50px" }}
                  >
                    <i class="fa-brands fa-github  fa-flip fa-2xl" ></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
