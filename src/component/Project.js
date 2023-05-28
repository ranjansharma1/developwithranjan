import React from "react";
import code from "../images/code.png";
import demo from "../images/demo.gif";
import { projects } from "../data";
import background from "../images/background.jpg";

function Project() {
  const style2 = {
    boxSizing: "border-box",
    height: "300px",
    // width:"400px",
    display: "flex",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    scrollBehaviour: "smooth",
    backgroundColor: "black",
  };
  return (
    <section id="projects">
      <div className="container text-center mx-auto py-5  mt-48 md:mt-0">
        <div className="flex flex-col">
          <img
            src={code}
            alt="code"
            className="h-10  inline-block mb-4 sm:h-10 sm:w-10 mx-auto "
          />
          <h1 className="sm:text-4xl text-3xl text-white font-bold mb-4">
            My Creative Project
          </h1>
          <p
            className="mx-auto leading-relaxed text-base my-6 font-mono"
            style={{ maxWidth: "1000px" }}
          >
            Get ready to be impressed by my portfolio of Full Stack projects,
            which showcase my ability to design and develop visually stunning
            and highly functional web applications that provide seamless user
            experiences.
          </p>
        </div>
    
    {/*} <div className="relative flex justify-center items-center mx-auto mb-7" style={{ border: "2px solid red", height:"500px"}}>
            <img src="https://picsum.photos/id/1/200/300" alt="screenshot" className="hover:opacity-0" style={{ borderRadius: "20px", boxShadow: "0px 5px 15px rgba(0,0,0,0.9)", height: "265px", width: "573px", border: "2px solid yellow" }} />
            <div className="absolute inset-0 z-10 opacity-0 hover:opacity-80 bg-blue-400" style={{ border: "5px solid blue" }}>
                <p className="text-white text-center">
                This is a paragraph that will be displayed when you hover on the image.
                </p>
            </div>
  </div> */}


        <div
          className="flex flex-wrap justify-center"
          //style={{ border: "3px solid silver" }}
          style={{ borderRadius:"20px", boxShadow:"0px 5px 15px rgba(0,0,0,0.9)"}}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              //className="sm:w-1/2  h-80 my-5"
              className="relative flex justify-center items-center mx-auto sm:w-1/2  h-80 mt-5 p-2"
              //style={{ border: "3px solid blue" }}
            >
              <div
                //className=" hover:scale-110 duration-300 hover:shadow-lg hover:shadow-blue-500"
                //className="relative flex justify-center items-center mx-auto my-auto"
                //style={{ border: "2px solid orange" }}
              >
                <img
                  alt="gallery"
                  //className="mx-auto my-auto"
                  className="hover:opacity-0" 
                  style={{ borderRadius: "20px", boxShadow: "0px 5px 15px rgba(0,0,0,0.9)", height: "265px", width: "573px"}}
                  src={project.image}
                  /*style={{
                    borderRadius: "20px",
                    boxShadow: "0px 5px 15px rgba(0,0,0,0.9)",
                    height: "265px",
                    width: "473px",
                    border: "2px solid yellow",
                  }}*/
                />

                <div
                  //className="relative border-2 border-blue-800 bg-gray-900 opacity-0 hover:opacity-90 hover:bg-blue-950 h-80 sm:min-w-fit pt-4"
                  className="absolute inset-0 z-10 opacity-0 hover:opacity-80 hover:bg-blue-950 border-2 border-blue-800 rounded-lg pt-4"
                  //style={{backgroundColor: "rgba(8, 8, 88, 0.9)", background: "transparent", backdropFilter:"blur(2px)", transition: "all .3s ease-in"}}
                  //style={{ border: "4px solid green" }}
                >
                  <h2 className="tracking-widest text-lg title-font font-bold text-green-400 mb-1 ">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-3xl font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <div
                    className="flex  justify-center
                                align-middle"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-5 pt-3 rounded-full bg-black 
                                    hover:scale-75 hover:shadow-lg hover:shadow-blue-500 border-2 border-blue-800 "
                      style={{ height: "50px", width: "50px" }}
                    >
                      <i
                        class="fa-solid fa-eye
                                        fa-flip fa-2xl"
                      ></i>
                    </a>
                    <a
                      href={project.gihub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-5 pt-3 rounded-full bg-black 
                                    hover:scale-75 hover:shadow-lg hover:shadow-blue-500 hover:border-2 hover:border-blue-800"
                      style={{ height: "50px", width: "50px" }}
                    >
                      <i
                        class="fa-brands fa-github 
                                    fa-flip fa-2xl"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
