import "./App.css";
import About from "./component/About";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Project from "./component/Project";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Project/>
      <Footer />
    </main>
  );
}

export default App;
