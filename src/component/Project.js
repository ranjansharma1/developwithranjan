import React from 'react'
import code from "../images/code.png";
import demo from "../images/demo.gif";
import { projects } from '../data';
import background from "../images/background.jpg";

function Project() {
  return (
    <section id='projects' >
        <div className="container text-center mx-auto py-5  mt-48 md:mt-0">
            <div className="flex flex-col">
                <img src={code} alt="code" className='h-10  inline-block mb-4 sm:h-10 sm:w-10 mx-auto ' />
                <h1 className='sm:text-4xl text-3xl text-white font-bold mb-4'>My Creative Project</h1>
                <p className='mx-auto leading-relaxed text-base my-6'>
                Get ready to be impressed by my portfolio of Full Stack projects, which showcase my ability to design and develop visually stunning and highly functional web applications that provide seamless user experiences.
                </p>
            </div>
            <div className='flex flex-wrap '>
                {projects.map(project =>(
                    <div 
                    key={project.id}
                    className='sm:w-1/2  h-96 my-5 '>
                        <div className='flex relative  mx-5 hover:scale-110 duration-300 hover:shadow-lg hover:shadow-blue-500'>
                            <img alt="gallery" className='absolute inset-0 w-full h-auto object-cover object-center' src={project.image}/>                       
                            
                            <div className='px-8 pt-10 relative w-full border-2 border-blue-800 bg-gray-900 opacity-0 hover:opacity-90 hover:bg-blue-950 h-96 sm:min-w-fit' >
                                <h2 className='tracking-widest text-lg title-font font-bold text-green-400 mb-1 '>{project.subtitle}</h2>
                                <h1 className='title-font text-3xl font-medium text-white mb-3'>{project.title}</h1>
                                <p className='leading-relaxed'>{project.description}</p>
                                <div className='flex  justify-center
                                align-middle' >
                                    <a href={project.link} target="_blank"                rel="noopener noreferrer" className='m-5 pt-3 rounded-full bg-black 
                                    hover:scale-90 hover:shadow-lg hover:shadow-blue-500 border-2 border-blue-800 ' style={{height: "50px" , width:"50px"}} >
                                        <i class="fa-solid fa-eye
                                        fa-flip fa-2xl"></i>
                                    </a>
                                    <a href={project.gihub} target="_blank"                rel="noopener noreferrer" className="m-5 pt-3 rounded-full bg-black 
                                    hover:scale-90 hover:shadow-lg hover:shadow-blue-500 border-2 border-blue-800"  style={{height: "50px" , width:"50px"}} >
                                    <i class="fa-brands fa-github 
                                    fa-flip fa-2xl"></i>
                                    </a>
                            </div>
                            </div>

                            
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </section>
  )
}

export default Project