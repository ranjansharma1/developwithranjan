import React from "react";
import image2 from "../images/image2.jpg";
import background from "../images/background2.png";
import { useState, useEffect } from "react";
import "./About.css";
import { motion } from "framer-motion";

function About() {

  const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
    backgroundPosition: "center",
    // height: "70vh",
    backgroundColor: "red",
    // border: "2px solid yellow",  
  };

  const [typedText, setTypedText] = useState("");
  const fullText = "Hi, Meet Ranjan";
  const typingSpeed = 60; // in milliseconds
  const pauseSpeed = 1000; // in milliseconds

  useEffect(() => {
    let timer;
    if (typedText === "") {
      // Start typing
      timer = setTimeout(() => {
        setTypedText(fullText[0]);
      }, typingSpeed);
    } else if (typedText === fullText) {
      // Wait before erasing
      timer = setTimeout(() => {
        setTypedText("");
      }, pauseSpeed);
    } else {
      // Continue typing
      timer = setTimeout(() => {
        const nextCharIndex = typedText.length;
        setTypedText(fullText.substring(0, nextCharIndex + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedText, fullText]);

  return (
    <>
      <section id="about" style={styles}>
        <div className="container mx-auto flex px-10 pt-10 md:flex-row flex-col items-center">
          <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.8 }}   className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white typing-animation" style={{fontFamily:"inherit"}}>
                {typedText}
            </h1>
            <h2 className="text-3xl font-bold h2-bg highligter" style={{fontFamily:"cursive"}}>A Certified Java Full Stack Developer</h2>
            <p className="my-5 leading-relaxed">
              As a passionate Java Full Stack Developer, I thoroughly enjoy
              building innovative web applications that solve real-world
              problems, and spend most of my time honing my skills and exploring
              new technologies to continuously improve my craft.
            </p>
            <div className="flex justify-center">
              <motion.a
                whileTap={{scale:0.8}}
                href="https://drive.google.com/file/d/1bSidAo8zI1Xw-kFrvD__fbcpRwcX_c4f/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg hover:shadow-lg hover:shadow-green-500 hover:text-black"
              >
                Download CV
              </motion.a>
              <motion.a
                whileTap={{scale:0.8}}
                href="#projects"
                className="ml-4 inline-flex text-black bg-blue-700 border-0 py-2 px-6 focus:outline-none 
                hover:shadow-lg hover:shadow-blue-500 hover:bg-blue-800 hover:text-white rounded text-lg"
              >
                See My Past Work
              </motion.a>
            </div>
          </motion.div>
          <motion.div  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="lg:max-w-lg lg:w-3/12 md:w-2/5 w-3/5 pt-10 " >
            <motion.img
              drag
              initial={{ opacity: 1, y: 0 }} // Initial position and opacity
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }} // Set drag constraints
              dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }} // Define drag transition properties
            
              className="object-cover object-center rounded-full opacity-90 hover:border-4 hover:border-violet-900 filter hover:grayscale "
              alt="hero"
              src={image2}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;
