import Card from "./card";
import Contact from "./contact";
import Exp from "./exp";
import Footer from "./footer";
import Header from "./header";
import Home from "./home";
import Project from './project'
import About from './about'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TechStack from "./techStack";
import Blog from "./blog";
import Current from "./current";




function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,   // animation duration
      easing: "ease-out", // easing style
      once: false,     // allow reverse animation on scroll back
    });
  }, []);




  return (
    <div className="App">
      
      <Header />
      <Home />
      <About />
      <Card />
      <TechStack />
      <Project />
      <Exp />
      <Blog />
      <Contact />
      <Current />
      <Footer />
  
    </div>
  );
}

export default App;
