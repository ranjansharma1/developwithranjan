import React, { useRef} from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();
  const sendEmail = () => {
    emailjs
        .sendForm(
            "service_vv96fem",
            "template_3vxwi39",
            form.current,
            "urznp8qO1-kNjXODK"
        )
        .then(
            (result) => {
            console.log(result.text);
            console.log("massage sent successfully");
            },
            (error) => {
            console.log("Error: "+error.text);
            }
        );

  };
  const isFormValid=(event)=>{
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
        sendEmail();
        toast.success("Thanks for Contacting, Will get back to you soon!!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
        console.log('Email validation successful')
        event.target.reset();
    } else {
        form.reportValidity();
        toast.error('Sorry, Error Occurred', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
        
        console.log("Validation failed")
      }
  }

  return (
    <section id="contact" className="relative" >      
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <motion.div whileInView={{ x: [-100, -50, 0], opacity: [0, 0.5, 1] }}
          transition={{type:"spring",  stiffness:20 }} className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative" style={{ borderRadius:"20px", boxShadow:"0px 5px 15px rgba(0,0,0,0.9)"}}>
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.9)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Daltonganj,+Jharkhand,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="opacity-0 md:opacity-80 bg-gray-900 relative flex flex-wrap py-5 rounded shadow-md mx-5 px-5 ">
            <div className="lg:w-1/2 ">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Daltonganj <br />
                Jharkhand, India 82201
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed pr-10">
                ranjansharmadto@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">6204470383</p>
            </div>
          </div>
        </motion.div>
        <div className="opacity-80 md:opacity-0 md:hidden bg-gray-900 relative flex flex-wrap py-2 rounded shadow-md mt-5" style={{ borderRadius:"20px", boxShadow:"0px 5px 15px rgba(0,0,0,0.9)"}}>
          <div className="lg:w-1/2 px-6 ">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              ADDRESS
            </h2>
            <p className="mt-1">
              Daltonganj <br />
              Jharkhand, India 822101
            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              EMAIL
            </h2>
            <a className="text-indigo-400 leading-relaxed mr-5">
              ranjansharmadto@gmail.com
            </a>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed">6204470383</p>
          </div>
        </div>

        <motion.form
          whileInView={{ x: [100, 50, 0], opacity: [0, 0.5, 1] }}
          transition={{type:"spring",  stiffness:20 }} 
          ref={form}
          onSubmit={isFormValid}
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-10 md:mt-0 p-4"
          style={{ borderRadius:"20px", boxShadow:"0px 5px 15px rgba(0,0,0,0.9)"}}
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-5  title-font text-center " style={{fontFamily:"cursive"}}>
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5 font-mono">
            I love building innovative web applications that solve real-world
            problems and spend most of my time honing my skills and exploring
            new technologies to continuously improve my craft.
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-200 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="w-full bg-gray-200 rounded border border-gray-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-200 font-semibold">
              Subject
            </label>
            <input
              type="text"
              id="name"
              name="user_subject"
              className="w-full bg-gray-200 rounded border border-gray-700 focus:border-gray-500 focus:ring-4 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-200 font-semibold">
              Phone Number
            </label>
            <input
              type="number"
              id="number"
              name="user_subject"
              className="w-full bg-gray-200 rounded border border-gray-700 focus:border-gray-500 focus:ring-4 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-200 font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="user_body"
              className="w-full bg-gray-200 rounded border border-gray-700 focus:border-blue-500 focus:ring-4 focus:ring-indigo-900 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <button
            type="submit"
            // className="text-white bg-blue-700 border-0 py-2 px-6 font-semibold focus:outline-none hover:bg-blue-800 rounded text-lg hover:shadow-lg hover:shadow-blue-500 hover:text-black"
            className="font-semibold transition ease-in-out delay-150 bg-blue-500 hover:translate-y-1 hover:scale-90 hover:bg-gradient-to-r from-blue-500 to-green-500 duration-300 py-2 px-6 rounded text-lg text-white hover:shadow-green-500 hover:text-black hover:shadow-lg " 
            style={{fontFamily:"monospace"}}
          >
            Submit
          </button>
        </motion.form>
        <ToastContainer
          style={{marginTop:"65px"}}
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </section>
  );
}

export default Contact;
