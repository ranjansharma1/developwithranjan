import React from "react";
import dwrlogo from "../images/dwrlogo.png";
import github from "../images/github.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import youtube from "../images/youtube.png";



function Footer() {
  return (
    <>
      <footer class="text-gray-600 body-font fixed inset-x-0 bottom-0">
        <div class="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src={dwrlogo} alt="logo" className="h-10 rounded-full" />
              
              <span class="ml-3 text-xl">Develop With Ranjan</span>
            </a>
            <p class="mt-2 text-sm text-gray-500">
              Best place to build your project. To provide a superior user experience, I provide custom website design and responsive web development services.
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
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
