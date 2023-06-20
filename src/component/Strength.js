import React from "react";
import laptop from "../images/laptop.jpg";
import laptop2 from "../images/laptop1.jpg";
import laptop3 from "../images/laptop3.jpg";
import { motion } from "framer-motion";

function Strength() {
  
  const strength = [
    {
      image: laptop,
      title: "Tech Enthusiast",
      description:
        "Love to learn new technologies and like to explore the field of Machine Learning, AI and Web3.",
    },
    {
      image: laptop2,
      title: "Full Stack Developer",
      description:
        "FullStack Developer, well versed with React JS, Springboot, microservices, MySQL, RESTful APIs, etc..",
    },
    {
      image: laptop3,
      title: "Problem Solver",
      description:
        "Always ready to take challenges and solve problems, I have solved 200+ coding problems from different programming websites",
    },
  ];
  return (
    <section id="strength" className="flex item-center py-10">
      <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 1.0 }} className="container text-center mx-auto" >
        <div className=" flex item-center mt-3" >
        <img src="https://img.icons8.com/cotton/64/null/brain-3.png" alt="mind icon not found" className="mx-auto animate-bounce"/>
        </div>
        <h2 className=" py-5  md:mt-0  sm:text-4xl text-3xl text-white font-bold mb-4 ">
          Open For Freelancing Work 
        </h2>
        <div className="flex flex-wrap justify-center py-6" >
          {strength.map((str) => (
            <motion.div
              whileInView={{ x: [200, 50, 0], opacity: [0, 0.5, 1]  }}
              whileHover={{scale:1.2}}
              transition={{ duration: 0.3, type:"spring", stiffness:50 }}
              key={str.name}
              className="mx-10 hover:scale-105 duration-300 hover:border-2 hover:border-white rounded-xl pb-2 my-3"
            >
              <img src={str.image} alt="str_Image"  className="w-52 h-44 rounded-xl" />
              <h2 className="b-text text-left pl-2 font-serif" style={{ marginTop: 10 }} > {str.title} </h2>
              <p className=" w-52 text-left pl-2 text-xs text-gray-100 opacity-50 font-mono " style={{ marginTop: 5 }} >
                {str.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Strength;
