import React from "react";
import skill from "../images/skill.png";
import "./Skills.css";
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
import microservices from "../images/microservices.png";
import mysql from "../images/mysql.png";
import mongodb from "../images/mongodb.png";
import azure from "../images/azure.png";
import docker from "../images/docker.png";
import kubernetes from "../images/kubernetes.png";  
import { motion } from "framer-motion";

function Skills() {
  const SkillsDesc=[
    {skill:java, name:"Core Java"},
    {skill:springboot, name:"Spring Boot"},
    {skill:microservices, name:"Microservices"},
    {skill:mysql, name:"MY SQL"},
    {skill:html, name:"HTML"},
    {skill:css, name:"CSS"},    
    {skill:bootstrap, name:"Bootstrap"},
    {skill:tailwindcss, name:"Tailwind CSS"},
    {skill:javascript, name:"Javascript"},    
    {skill:angular, name:"Angular"},
    {skill:node, name:"Node.js"}, 
    {skill:react, name:"ReactJs"}, 
    {skill:mongodb, name:"Mongo DB"},
    {skill:git, name:"Git"},     
    // {skill:docker, name:"Docker"},
    {skill:kubernetes, name:"Kubernetes"},
    {skill:azure, name:"Azure"}
  ]

  return (
    <section id="skills" className="py-1">
      <motion.div whileInView={{ y: [0, 0, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 1.0 }} className="container text-center mx-auto py-10 flex flex-col">
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
          <motion.div whileInView={{ x: [0, 0, 0], opacity: [0.2, 0.5, 1] }}
          transition={{type:"spring",  stiffness:20 }} whileTap={{scale:0.9}}  className="object-center grid grid-cols-2 md:grid-cols-4 lg:gap-x-32 gap-x-24 gap-y-10 ">   
            {SkillsDesc.map(skills =>(
              <div   key={skills.skill}  className="hover:scale-110 transform transition-all duration-300 hover:text-white">
                <img
                  className="  shad p-4   rounded-full"
                  src={skills.skill}
                  alt="Not Available"
                />
                <h2 className="font-bold mt-2 ">{skills.name}</h2>
              </div>

            ) ) }         
            
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
