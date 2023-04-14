import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Skills from "./component/Skills";

import bg1 from "./images/bg1.jpg";

function App() {

  return (
    <main className="text-blue-200  body-font" style={{backgroundColor:"#090812"}}>
      
      <Navbar />
      <About />
      <Project/>
      <Skills />
      <Contact/>
      <Footer />
    </main>
  );
}

export default App;
