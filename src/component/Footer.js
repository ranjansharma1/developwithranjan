import React from "react";
import dwrlogo from "../images/dwrlogo.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="text-blue-600 body-font " >
        <div className="bg-blue-950 " style={{backgroundColor: "rgba(0, 13, 101, 0.72)"}}>
          <div className="container mx-auto py-2  flex flex-wrap flex-col sm:flex-row">
          <div class="flex justify-center items-center">
          <img src={dwrlogo} alt="logo" className="md:h-10 md:w-10 h-20 w-20 rounded-full mr-2  max-w-full max-h-full" />
          </div>
            <p className="text-gray-300 text-sm text-center sm:text-left mt-3 font-thin">
              Copyright © 2023 developwithranjan.com
            </p>
            <div className="wrapper inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <div className="icon linkedin" >
                <div className="tooltip">LinkedIn</div>
                <a
                  href="https://www.linkedin.com/in/ranjan-sharma-6a40511b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <i className="fab fa-linkedin"></i>
                  </span>
                </a>
              </div>
              <div className="icon github">
                <div className="tooltip">Github</div>
                <a
                  href="https://github.com/ranjansharma1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <i className="fab fa-github"></i>
                  </span>
                </a>
              </div>
              <div className="icon youtube">
                <div className="tooltip">YouTube</div>
                <a
                  href="http://youtube.com/@developwithranjan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <i className="fab fa-youtube"></i>
                  </span>
                </a>
              </div>
              <div className="icon twitter">
                <div className="tooltip">Twitter</div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <i className="fab fa-twitter"></i>
                  </span>
                </a>
              </div>
              <div className="icon instagram">
                <div className="tooltip">Instagram</div>
                <a
                  href="https://www.instagram.com/developwithranjan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <i className="fab fa-instagram"></i>
                  </span>
                </a>
              </div>            
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
