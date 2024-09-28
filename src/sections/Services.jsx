import { HiLightBulb } from "react-icons/hi";
import { FaDatabase } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaLaptopCode } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { motion } from "framer-motion";

const iconArr = [
  HiLightBulb,
  FaDatabase,
  HiOutlineDevicePhoneMobile,
  FaLaptopCode,
  FaGoogle,
  PiFigmaLogoDuotone,
];

const cardData = [
  {
    title: "Web Development",
    description:
      "I can create a website from scratch using React, Next.js, and Gatsby.",

    color: "bg-violet-500",
    shadow: "shadow-violet-700",
    border: "border-b-violet-500",
  },
  {
    title: "App Development",
    description:
      "I can create a mobile application using React Native and Flutter.",
    color: "bg-orange-500",
    shadow: "shadow-orange-700",
    border: "border-b-orange-500",
  },
  {
    title: "App Development",
    description:
      "I can design a website or application using Figma and Adobe XD.",
    color: "bg-green-500",
    shadow: "shadow-green-700",
    border: "border-b-green-500",
  },
  {
    title: "Web Development",
    description:
      "I can optimize your website so that it ranks higher on search engines.",
    color: "bg-red-600",
    shadow: "shadow-red-700",
    border: "border-b-red-600",
  },
  {
    title: "SEO",
    description:
      "I can optimize your website so that it ranks higher on search engines.",
    color: "bg-purple-500",
    shadow: "shadow-purple-700",
    border: "border-b-purple-500",
  },
  {
    title: "UI/UX",
    description:
      "I can optimize your website so that it ranks higher on search engines.",
    color: "bg-yellow-400",
    shadow: "shadow-yellow-500",
    border: "border-b-yellow-400",
  },
];

const variants = {
  initial: {
    opacity: 0,
    y: 80,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: i * 0.15,
    },
  }),
};

const Card = ({ item, index }) => {
  let Icon = iconArr[index];
  return (
    <motion.div
      className={`relative px-4 flex justify-center items-center bg-white h-60 border-b-2  ${item.border} shadow-lg`}
      initial="initial"
      whileInView="animate"
      custom={index}
      variants={variants}
      // viewport={{ once: true }}
    >
      <div
        className={`absolute -top-[50px] flex justify-center items-center ${item.color}`}
        style={{
          width: "110px",
          height: "100px",
          clipPath:
            "polygon(93.3% 75%,50% 100%,6.7% 75%,6.7% 25%,50% 0%,93.3% 25%)",
        }}
      >
        <div
          className={`border border-2 w-full h-[50px] shadow-xl flex justify-center items-center ${item.shadow}`}
        >
          <Icon size={30} color="white" />
        </div>
      </div>
      <div className="body flex flex-col items-center gap-y-2 mt-4">
        <p className="font-bold font-poppins">{item.title}</p>
        <p className="text-center">{item.description}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="min-h-[600px] pl-10 pt-20">
      <h1 className="tracking-[3px] text-[#6F6D6F] font-medium mb-8">
        What I Do ?
      </h1>
      <h2 className="mb-20 font-poppins text-3xl dark:text-white">
        SOME OF MY EXPERTISE
      </h2>
      <div
        className="grid grid-cols-3 gap-y-20 gap-x-24 "
        style={{ maxWidth: "89.5%" }}
      >
        {cardData.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
