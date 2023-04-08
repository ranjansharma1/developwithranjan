import React from "react";
import skill from "../images/skill.png";
import check from "../images/check.png";
import { skills } from "../data";

function Skills() {
  return (
    <section id="skills" className="container text-center px-5 py-10  md:pl-28">
      <div className="flex flex-col">
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
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 ">
          {skills.map((skill) => (
            <div key={skill} className="p-2 w-full sm:w-1/2">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img src={check} alt="check icon" className="w-6 h-6 flex-shrink-0 mr-4" />
                
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
