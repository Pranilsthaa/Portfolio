import { motion } from "framer-motion";
import { TbWorldWww } from "react-icons/tb";
import { IoPhonePortrait } from "react-icons/io5";
import { IoLogoFigma } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { useThemeStore } from "../Store/useStore";

let logo = [TbWorldWww, IoPhonePortrait, IoLogoFigma, FaGoogle];

const variants = (delay) => ({
  initial: {
    x: -80,
    opacity: 0.5,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut", delay: delay },
  },
});

const cardVariants = (index) => {
  const initialVar = {
    0: { x: -80, opacity: 0.8 },
    1: { y: -80, opacity: 0.8 },
    2: { x: -80, opacity: 0.8 },
    3: { y: 80, opacity: 0.8 },
    default: { x: -80, opacity: 0.8 },
  };

  const initial = initialVar[index] || initialVar.default;

  return {
    initial: initial,
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
};

const aboutCardData = [
  {
    title: "Web Development",
  },
  {
    title: "App Development",
  },
  {
    title: "UI/UX",
  },
  {
    title: "SEO",
  },
];

const Card = (item, index) => {
  let Icon = logo[index];

  let borderBottom = "";
  let iconColor = "";
  if (index === 0) {
    borderBottom = "border-b-orange-600";
    iconColor = "#ea580c";
  } else if (index === 1) {
    borderBottom = "border-b-blue-800";
    iconColor = "#1e40af";
  } else if (index === 2) {
    borderBottom = "border-b-yellow-600";
    iconColor = "#ca8a04";
  } else {
    borderBottom = "border-b-green-600";
    iconColor = "#16a34a";
  }
  return (
    <motion.div
      className={`flex bg-white shadow-slate-300 shadow-lg dark:shadow-gray-600 dark:shadow-md h-40 items-center p-4 ${borderBottom} border-b-2 select-none overflow-hidden`}
      initial="initial"
      whileInView="animate"
      variants={cardVariants(index)}
      viewport={{ once: true }}
      key={index}
    >
      <div className="flex gap-x-4 items-center">
        <Icon size={40} color={iconColor} />
        <p className="md:text-lg sm:text-xs lg:text-lg">{item.title}</p>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="lg:min-h-[700px] lg:w-[90%] px-10 sm:w-[full] py-10">
      <motion.h1
        className="tracking-[3px] text-sm text-[#6F6D6F] font-medium mb-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={variants(0)}
      >
        About Me
      </motion.h1>
      <motion.h2
        className="mb-10 font-poppins text-3xl  dark:text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={variants(0.05)}
      >
        WHO AM I ?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-bold text-black dark:text-white ">
          Hi, I am Pranil,
        </span>{" "}
        a passionate developer with experience in building web and mobile
        applications. I specialize in React, React Native, Express.js, and
        databases like PostgreSQL/MySQL. I enjoy turning ideas into scalable and
        user-friendly solutions.
        <br />
        <br />
        I have developed projects ranging from ERP systems to mobile
        applications, focusing on clean UI, performance optimization, and smooth
        user experience. Alongside development, I also work with tools like
        Figma, Git/GitHub, and SEO optimization to ensure high-quality outcomes.
        <br />
        <br />
        My goal is to keep learning and contributing to impactful projects that
        combine technology with creativity to solve real-world problems.
      </motion.p>
      <div className="grid lg:grid-cols-4 grid-flow-row sm:grid-row-4 gap-4 mt-10">
        {aboutCardData.map((data, index) => Card(data, index))}
      </div>
    </div>
  );
};

export default About;
