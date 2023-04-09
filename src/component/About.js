import React from 'react'
import laptop from "../images/laptop.png";
import image from "../images/image.jpg";
import image2 from "../images/image2.jpg";

function About() {
  return (
    <>
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, Meet Ranjan.
            <br className="hidden lg:inline-block" />A Certified Java Full Stack Developer
          </h1>
          <p className="mb-8 leading-relaxed">
          As a passionate Java Full Stack Developer, I thoroughly enjoy building innovative web applications that solve real-world problems, and spend most of my time honing my skills and exploring new technologies to continuously improve my craft.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Download
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-4/12 md:w-2/5 w-3/5">
          <img
            className="object-cover object-center rounded-full opacity-70"
            alt="hero"
            src={image2}
          />
        </div>
      </div>
    </section>

    </>
  )
}

export default About