import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Skills from "./component/Skills";

function App() {
  return (
    <main className="text-blue-200 bg-blue-500 body-font" >
      
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
