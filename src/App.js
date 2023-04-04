import "./App.css";
import About from "./component/About";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}

export default App;
