import React from "react";
import skill from "../images/skill.png";
import check from "../images/check.png";
import { skills } from "../data";
import { hover } from "@testing-library/user-event/dist/hover";
import "./Skills.css";
import cpp from "../images/cpp.png";
import css from "../images/css.png";
import git from "../images/git.png";
import javascript from "../images/javascript.png";
import node from "../images/node.png";
import react from "../images/react.png";
import html from "../images/html.png";
import angular from "../images/angular.png";
import bootstrap from "../images/bootstrap.png";
import tailwindcss from "../images/tailwindcss.png";
import java from "../images/java.png";
import springboot from "../images/springboot.png";
import mysql from "../images/mysql.png";
import mongodb from "../images/mongodb.png";
import azure from "../images/azure.png";

function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-b from-gray-950 to-blue-950">
      <div className="container text-center px-5 py-10  md:pl-28  flex flex-col">
        <div className="flex">
          <img
            src={skill}
            alt=""
            className=" h-16 inline-block mb-4  mx-auto "
          />
        </div>
        <h1 className="font-bold text-white text-3xl mb-4 ">
          Skills &amp; Technologies
        </h1>
        <div class="flex items-center justify-center w-full border-2 border-black py-5">
          <div className="object-center grid grid-cols-2 md:grid-cols-4 lg:gap-x-28 gap-x-24 gap-y-10 ">            
            <div className="hover:scale-110 transform transition-all duration-300 hover:text-white">
              <img
                className="  shad p-4   rounded-full"
                src={html}
                alt="Not Available"
              />
              <h2 className="font-bold mt-2 ">HTML</h2>
            </div>
            <div className="hover:scale-110 transform transition-all duration-300 hover:text-white">
              <img
                className="  shad p-4   rounded-full"
                src={css}
                alt="Not Available"
              />
              <h2 className="font-bold mt-2 ">CSS</h2>
            </div>
            <div className="hover:scale-110 transform transition-all duration-300 hover:text-white">
              <img
                className="  shad p-4   rounded-full"
                src={javascript}
                alt="Not Available"
              />
              <h2 className="font-bold mt-2 ">Javascript</h2>
            </div>
            <div className="hover:scale-110 transform transition-all duration-300 hover:text-white">
              <img
                className="  shad p-4   rounded-full"
                src={react}
                alt="Not Available"
              />
              <h2 className="font-bold mt-2 ">React</h2>
            </div>
            <div className="hover:scale-110 transform transition-all duration-300 hover:text-white">
              <img
                className="  shad p-4   rounded-full"
                src={angular}
                alt="Not Available"
              />
              <h2 className="font-bold mt-2 ">Angular</h2>
            </div>
            <div className="hover:scale-110 transform transition-all duration-300 hover:text-white">
              <img
                className="  shad p-4   rounded-full"
                src={bootstrap}
                alt="Not Available"
              />
              <h2 className="font-bold mt-2 ">Bootstrap</h2>
            </div>
            <div className="hover:scale-110 transform transition-all duration-300 hover:text-white">
              <img
                className="  shad p-4   rounded-full"
                src={tailwindcss}
                alt="Not Available"
              />
              <h2 className="font-bold mt-2 ">Tailwind Css</h2>
            </div>
            <div className="hover:scale-110 transform transition-all duration-300 hover:text-white">
              <img
                className="  shad p-4   rounded-full"
                src={java}
                alt="Not Available"
              />
              <h2 className="font-bold mt-2 ">CoreJava</h2>
            </div>
            <div className="hover:scale-110 transform transition-all duration-300 hover:text-white">
              <img
                className="  shad p-4   rounded-full"
                src={springboot}
                alt="Not Available"
              />
              <h2 className="font-bold mt-2 ">Spring Boot</h2>
            </div>
            <div className="hover:scale-110 transform transition-all duration-300 hover:text-white">
              <img
                className="  shad p-4   rounded-full"
                src={mysql}
                alt="Not Available"
              />
              <h2 className="font-bold mt-2 ">MySQL</h2>
            </div>
            <div className="hover:scale-110 transform transition-all duration-300 hover:text-white">
              <img
                className="  shad p-4   rounded-full"
                src={mongodb}
                alt="Not Available"
              />
              <h2 className="font-bold mt-2 ">Mongo DB</h2>
            </div>
            <div className="hover:scale-110 transform transition-all duration-300 hover:text-white">
              <img
                className="  shad p-4   rounded-full"
                src={git}
                alt="Not Available"
              />
              <h2 className="font-bold mt-2 ">Git</h2>
            </div>
            <div className="hover:scale-110 transform transition-all duration-300 hover:text-white">
              <img
                className="  shad p-4   rounded-full"
                src={azure}
                alt="Not Available"
              />
              <h2 className="font-bold mt-2 ">Azure</h2>
            </div>
            
            
          </div>
        </div>
        {/* <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 ">
          {skills.map((skill) => (
            <div key={skill} className="p-2 w-full sm:w-1/2">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img
                  src={check}
                  alt="check icon"
                  className="w-6 h-6 flex-shrink-0 mr-4"
                />

                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default Skills;
