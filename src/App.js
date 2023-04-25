import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Skills from "./component/Skills";
import Strength from "./component/Strength";

function App() {

  return (
    <main className="text-blue-200  body-font" style={{background: "linear-gradient(rgb(5 5 11), rgb(14 32 82))"}} >
      
      <Navbar />
      <About />
      <Strength />
      <Skills />
      <Project/>
      <Contact/>
      <Footer />
    </main>
  );
}

export default App;
