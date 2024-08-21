import {useRef, useEffect, useState} from 'react'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import About from './sections/About'
import Home from './sections/Home'
import Services from './sections/Services'
import HamIcon from './Components/Hamburger menu/HamIcon'

function App() {

  const [activeLink, setActiveLink] = useState('nav_link_0')


  const homeRef = useRef(null)
  const aboutRef = useRef(null);
  const ServiceRef = useRef(null);

  const handleScroll = () => {
    const scrollPos = window.pageYOffset;
    const refs = [homeRef, aboutRef, ServiceRef];

    refs.forEach((ref, index) => {
      // console.log(ref.current.offsetTop)
      console.log(index + 'hegiht =' + ref.current.offsetHeight)
      if (
        ref.current &&
        (ref.current.offsetTop - 200) <= scrollPos &&
        ref.current.offsetTop + ref.current.offsetHeight > scrollPos
      ) {
       
        setActiveLink(`nav_link_${index}`);
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Sidebar activeLink={activeLink}/>
      <HamIcon />

      <div className="relative sm:left-[250px]" style={{maxWidth: 'calc(100% - 250px)'}}>
          <div className="max-w-[1920px] mx-auto">
            <div id="home" ref={homeRef}> <Home /></div>
            <div id="about" ref={aboutRef}> <About /></div>
            <div id="services" ref={ServiceRef}> <Services /></div>
          </div>
      </div>
      
    </>
  )
}

export default App
