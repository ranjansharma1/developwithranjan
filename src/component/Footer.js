import React from "react";
import dwrlogo from "../images/dwrlogo.png";
import github from "../images/github.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import youtube from "../images/youtube.png";



function Footer() {
  return (
    <>
      <footer class="text-gray-600 body-font ">
        <div class=" py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap md:pl-20 flex-wrap flex-col bg-slate-300">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center  md:text-left md:mt-0 mt-10 order-first">
            <a href="#" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src={dwrlogo} alt="logo" className="h-10 rounded-full" />
              
              <span class="ml-3 text-xl w-48">Develop With Ranjan</span>
            </a>
            <p class="mt-2 text-sm text-gray-500 mr-1">
              Best place to build your project.  I provide custom website design and responsive web development services to provide a superior user experience.
            </p>
          </div>
          <div class="flex-grow mt-3 flex flex-wrap md:pr-20 -mb-10 md:text-left text-center ">
            <div class="lg:w-52 md:w-1/2 w-full px-10">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                PROJECTS
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a href="#" class="text-gray-600 hover:text-gray-800">Project 1</a>
                </li>
                <li>
                  <a href="#" class="text-gray-600 hover:text-gray-800">Project 2</a>
                </li>                
                <li>
                  <a href="#" class="text-gray-600 hover:text-gray-800">Project 3</a>
                </li>
                <li>
                  <a href="#" class="text-gray-600 hover:text-gray-800">Project 4</a>
                </li>
              </nav>
            </div>            
            <div class="lg:w-60 md:w-1/2 w-full px-10">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a href="#" class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a href="#" class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a href="#" class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a href="#" class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-60 md:w-1/2 w-full px-10">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CONTACT
              </h2>
              <nav class="list-none mb-10">
                <li class="text-gray-600">
                  Jharkhand, India
                </li>
                <li class="text-gray-600">
                  developwithranjan@gmail.com
                </li>
                <li class="text-gray-600">
                  +91 6204470383
                </li>               
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-slate-400">
          <div class="container mx-auto py-4  flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left mt-2">
             Copyright © 2023 developwithranjan.com               
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a href="http://youtube.com/@developwithranjan" target="_blank" rel="noopener noreferrer">
                <img className="h-8 px-1" src={youtube} alt="youtube" />
              </a>
              <a href="http://youtube.com/@developwithranjan" target="_blank" rel="noopener noreferrer">
                <img className="h-8 px-1" src={insta} alt="insta" />
              </a>
              <a href="http://youtube.com/@developwithranjan" target="_blank" rel="noopener noreferrer">
                <img className="h-8 px-1" src={linkedin} alt="linkedin" />
              </a>
              <a href="http://youtube.com/@developwithranjan" target="_blank" rel="noopener noreferrer">
                <img className="h-8 px-1" src={github} alt="github" />
              </a>              
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
