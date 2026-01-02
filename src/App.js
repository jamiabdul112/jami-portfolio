import Card from "./card";
import Contact from "./contact";
import Exp from "./exp";
import Footer from "./footer";
import Header from "./header";
import Home from "./home";
import Project from './project'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




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
      <Card />
      <Project />
      <Exp />
      <Contact />
      <Footer />
  
    </div>
  );
}

export default App;
