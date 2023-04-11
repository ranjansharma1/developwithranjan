import React from 'react'
import code from "../images/code.png";
import demo from "../images/demo.gif";
import { projects } from '../data';

function Project() {
  return (
    <section id='projects' >
        <div className="container text-center px-2 py-5  md:pl-28">
            <div className="flex flex-col">
                <img src={code} alt="code" className='h-10  inline-block mb-4 sm:h-10 sm:w-10 mx-auto ' />
                <h1 className='sm:text-4xl text-3xl text-white font-bold mb-4'>Project I've Built</h1>
                <p className='mx-auto leading-relaxed text-base my-6'>
                Get ready to be impressed by my portfolio of Full Stack projects, which showcase my ability to design and develop visually stunning and highly functional web applications that provide seamless user experiences.
                </p>
            </div>
            <div className='flex flex-wrap '>
                {projects.map(project =>(
                    <a href={project.link}
                    key={project.id}
                    className='sm:w-1/2  p-1'>
                        <div className='flex relative border-2 border-blue-500 bg-gray-900'>
                            <img alt="gallery" className='absolute inset-0 w-full h-auto object-cover object-center' src={demo}/>                       
                            
                            <div className='px-8 py-10 relative w-full border-2 border-blue-800 bg-gray-900 opacity-0 hover:opacity-80 hover:bg-blue-950 h-96 sm:min-w-fit'>
                                <h2 className='tracking-widest text-lg title-font font-bold text-green-400 mb-1 '>{project.subtitle}</h2>
                                <h1 className='title-font text-3xl font-medium text-white mb-3'>{project.title}</h1>
                                <p className='leading-relaxed'>{project.description}</p>
                            </div>

                            
                        </div>
                    </a>
                ))}
            </div>
        </div>

    </section>
  )
}

export default Project