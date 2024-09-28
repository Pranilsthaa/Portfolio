import { motion } from "framer-motion";
import { TbWorldWww } from "react-icons/tb";
import { IoPhonePortrait } from "react-icons/io5";
import { IoLogoFigma } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";

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
    1: { x: 80, opacity: 0.8 },
    2: { y: -80, opacity: 0.8 },
    3: { y: 80, opacity: 0.8 },
    default: { x: 80, opacity: 0.8 },
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
      // viewport={{ once: true }}
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
    <div className="lg:min-h-[700px] lg:w-[90%] pl-10 sm:w-[full] py-10">
      <motion.h1
        className="tracking-[3px] text-sm text-[#6F6D6F] font-medium mb-8"
        initial="initial"
        whileInView="animate"
        variants={variants(0)}
      >
        About Me
      </motion.h1>
      <motion.h2
        className="mb-10 font-poppins text-3xl  dark:text-white"
        initial="initial"
        whileInView="animate"
        variants={variants(0.05)}
      >
        WHO AM I ?
      </motion.h2>
      <motion.p
        className=" tracking-widest text-slate-600 dark:text-slate-200"
        initial="initial"
        whileInView="animate"
        variants={variants(0.08)}
      >
        <span className="font-bold text-black dark:text-white ">
          Hi, I am Pranil,
        </span>{" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dignissimos
        omnis consequuntur vitae dolore officia et ab est amet repudiandae?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
        sapiente repellendus corporis ducimus placeat numquam natus a earum
        saepe? Facilis eveniet pariatur voluptatibus! Quis ut deleniti rerum,
        fugit quod sequi?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed in
        recusandae doloremque tempora exercitationem sint rerum quidem
        voluptatibus a? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, repellendus. Lorem ipsum dolor sit amet consectetur
      </motion.p>
      <div className="grid lg:grid-cols-4 grid-flow-row sm:grid-row-4 gap-4 mt-10">
        {aboutCardData.map((data, index) => Card(data, index))}
      </div>
    </div>
  );
};

export default About;
