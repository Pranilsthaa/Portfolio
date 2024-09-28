import { useRef, useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./sections/About";
import Home from "./sections/Home";
import Services from "./sections/Services";
import HamIcon from "./Components/Hamburger menu/HamIcon";
import Skills from "./sections/Skills";
import Info from "./sections/Info";
import Education from "./sections/Education";
import Work from "./sections/Work";
import Contact from "./sections/Contact";

function App() {
  const [activeLink, setActiveLink] = useState("nav_link_0");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const ServiceRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = () => {
    const scrollPos = window.pageYOffset;
    const refs = [
      homeRef,
      aboutRef,
      ServiceRef,
      skillsRef,
      educationRef,
      workRef,
      contactRef,
    ];
    refs.forEach((ref, index) => {
      // console.log(ref.current.offsetTop)
      // console.log(index + "hegiht =" + ref.current.offsetHeight);
      if (
        ref.current &&
        ref.current.offsetTop - 200 <= scrollPos &&
        ref.current.offsetTop + ref.current.offsetHeight > scrollPos
      ) {
        setActiveLink(`nav_link_${index}`);
      }
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="dark:bg-[#292929]">
      <div className="relative min-w-[250px]">
        <Sidebar activeLink={activeLink} />
        {/* <HamIcon /> */}
      </div>
      <div
        className="relative bg-gray-100 dark:bg-[#121212] pr-[10%]"
        // style={{ maxWidth: "calc(100% - 250px)" }}
      >
        <div
          className="max-w-[1920px] mx-auto lg:ml-[250px]"
          // style={{ maxWidth: "calc(100% - 250px)", position: "relative" }}
        >
          <div id="home" ref={homeRef}>
            <Home windowWidth={windowWidth} />
          </div>
          <div id="about" ref={aboutRef}>
            <About />
          </div>
          <div id="services" ref={ServiceRef}>
            <Services />
          </div>
          <div className="info" style={{ position: "relative" }}>
            <Info />
          </div>
          <div id="skills" ref={skillsRef}>
            <Skills />
          </div>
          <div id="education" ref={educationRef}>
            <Education />
          </div>
          <div id="work" ref={workRef}>
            <Work />
          </div>
          <div id="contact" ref={contactRef}>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
