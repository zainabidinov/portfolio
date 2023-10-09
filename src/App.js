import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Technologies />
      <About />
      <Footer />
    </div>
  );
}

export default App;
