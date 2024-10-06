import React, { useEffect, useRef } from "react";
import { GoDownload } from "react-icons/go";
import { motion } from "framer-motion";
import { useThemeStore } from "../Store/useStore";

function Home() {
  const [activeDiv, setActiveDiv] = React.useState(true);
  const isDark = useThemeStore((state) => state.isDark);

  useEffect(() => {
    const divTransition = setInterval(() => {
      setActiveDiv(!activeDiv);
    }, 4000);

    return () => clearInterval(divTransition);
  }, [activeDiv]);
  return (
    <div className="relative max-w-screen gap-x-60 min-h-[700px] flex flex-row lg:justify-start justify-center">
      <div className="flex flex-col md:items-center lg:items-start justify-center dark:text-white">
        {activeDiv ? (
          <motion.section
            className="flex flex-col justify-center h-[700px] max-w-[350px] px-20"
            initial={{ y: 80, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { ease: "easeInOut", duration: 1.5 },
            }}
          >
            <h1 className="font-playfair font-bold text-4xl sm:text-6xl lg:text-8xl ">
              Hi! <br /> I’m Pranil
            </h1>
            <a
              href="/myCV (updated).pdf"
              className="flex items-center justify-center gap-1 rounded border border-black py-2 px-4 w-max text-[#6F6D6F] mt-6
              dark:text-white dark:border-white"
            >
              Download CV <GoDownload color={`${isDark ? "white" : "black"}`} />
            </a>
          </motion.section>
        ) : (
          <motion.div
            className="flex flex-col justify-center h-[700px] max-w-[350px] px-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
          >
            <h1 className="font-playfair font-bold text-4xl sm:text-6xl lg:text-8xl ">
              I’m <br /> A Developer
            </h1>
            <a
              href="/myCV (updated).pdf"
              className="flex items-center justify-center gap-1 rounded border border-black py-2 px-4 w-max text-[#6F6D6F] mt-6
              dark:text-white dark:border-white"
            >
              Download CV <GoDownload color={`${isDark ? "white" : "black"}`} />
            </a>
          </motion.div>
        )}
      </div>
      <div className="img mt-12 w-full">
        <img
          src="/images/pp_png.png"
          alt=""
          width="350px"
          style={{ height: "100vh", resize: "contain" }}
        />
      </div>
    </div>
  );
}

export default Home;
