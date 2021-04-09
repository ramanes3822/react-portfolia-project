import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import About from "./component/About";
import Services from "./component/Services";
import Experience from "./component/Experience";
import Portfolio from "./component/Portfolio";
import Testimonials from "./component/Testimonials";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: { value: 30, density: { enable: true, value_area: 900 } },
            shape: { type: "square", stroke: { width: 6, color: "#f9ab00" } },
          },
        }}
      />
      <Navbar />
      <Header />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
