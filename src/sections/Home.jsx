import React from "react";
import { GoDownload } from "react-icons/go";
import { motion } from "framer-motion";

function Home() {
  const [activeDiv, setActiveDiv] = React.useState(true);

  React.useEffect(()=>{
    const divTransition = setInterval(() => {
        setActiveDiv(!activeDiv)
      }, 4000);
    
    return ()=> clearInterval(divTransition);
  }, [activeDiv])



  return (
    <div className="max-w-screen  min-h-[700px]">
        <div className="absolute flex flex-col  md:items-center lg:items-start justify-center">
          { activeDiv ? 
            ( 
              <motion.section className='flex flex-col justify-center h-[700px] px-20' initial={{y: 80, opacity: 0}} animate={{y: 0, opacity: 1, transition: {ease: 'easeInOut', duration: 1.5}}}>
              <h1 className="font-playfair font-bold text-4xl sm:text-6xl lg:text-8xl ">Hi! <br /> I’m Pranil</h1>
              <a href="/myCV.pdf" className="flex items-center gap-1 rounded border border-black py-2 px-4 w-max text-[#6F6D6F] mt-6">Download CV <GoDownload color="black" /></a>
              </motion.section>
            ) : (
                <motion.div className='flex flex-col justify-center h-[700px] px-20' initial={{opacity: 0}} animate= {{opacity: 1, transition: {duration: 2}}}>
                <h1 className="font-playfair font-bold text-4xl sm:text-6xl lg:text-8xl ">I’m <br />  A Developer</h1>
                <a href="/myCV.pdf" className="flex items-center gap-1 rounded border border-black py-2 px-4 w-max text-[#6F6D6F] mt-6">Download CV <GoDownload color="black" /></a>
                </motion.div>
              )
          }  
          </div>
    </div>
  )
}

export default Home
