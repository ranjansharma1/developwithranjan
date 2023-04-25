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
  const SkillsDesc=[
    {html:html, name:"HTML"},
    {html:css, name:"CSS"},
    {html:javascript, name:"Javascript"},
    {html:cpp, name:"C++"},
    {html:java, name:"Core Java"},
    {html:angular, name:"Angular"},
    {html:bootstrap, name:"Bootstrap"},
    {html:tailwindcss, name:"Tailwind CSS"},
    {html:springboot, name:"Spring Boot"},
    {html:node, name:"Node.js"}, 
    {html:react, name:"ReactJs"}, 
    {html:mongodb, name:"Mongo DB"},
    {html:mysql, name:"MY SQL"},
    {html:git, name:"Git"}, 
    {html:azure, name:"Azure"},

  ]

  return (
    <section id="skills" className="py-1">
      <div className="container text-center mx-auto py-10 flex flex-col">
        <div className="flex">
          <img
            src={skill}
            alt=""
            className=" h-16 inline-block mb-4  mx-auto "
          />
        </div>
        <h1 className=" text-center font-bold text-white text-3xl mb-10 hover-effect px-5">
        Good Skills Means <span className="text-blue-400">Good Opportunities</span>
        </h1>
        <div class="flex items-center justify-center border-2 border-black py-5 mx-3 " style={{ borderRadius:"20px", boxShadow:"0px 5px 15px rgba(0,0,0,0.9)"}}>
          <div className="object-center grid grid-cols-2 md:grid-cols-4 lg:gap-x-32 gap-x-24 gap-y-10 ">   
            {SkillsDesc.map(skill =>(
              <div className="hover:scale-110 transform transition-all duration-300 hover:text-white">
                <img
                  className="  shad p-4   rounded-full"
                  src={skill.html}
                  alt="Not Available"
                />
                <h2 className="font-bold mt-2 ">{skill.name}</h2>
              </div>

            ) ) }         
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
