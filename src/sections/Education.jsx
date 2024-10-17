import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa6";

const educationData = [
  {
    title: "Bachelor's in Computer Science",
    description:
      "I am currently studying computer science at Kathmandu University.",
  },
  {
    title: "High School",
    description:
      "I completed my high school from St. Xavier's College, Maitighar.",
  },
  {
    title: "Plus 2",
    description:
      "I completed my high school from St. Xavier's College, Maitighar.",
  },
  {
    title: "School",
    description:
      "I completed my high school from St. Xavier's College, Maitighar.",
  },
  {
    title: "Lower Secondary",
    description:
      "I completed my high school from St. Xavier's College, Maitighar.",
  },
];

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { y: -20, opacity: 0.5 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const Card = ({ item }) => {
  return (
    <motion.div
      className={`bg-white w-full my-2 shadow-sm`}
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: 100,
        opacity: 1,
        padding: 10,
      }}
      exit={{ height: 0, opacity: 0, padding: 0 }}
    >
      <p className="select-none">{item.description}</p>
    </motion.div>
  );
};

const Education = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("");

  const handleCardClick = (index) => {
    if (selected !== index) {
      setShow(true);
      setSelected(index);
    } else {
      setShow((p) => !p);
      setSelected(index);
    }
  };

  return (
    <div className="min-h-[600px] pt-20 px-10">
      <motion.h1
        className="tracking-[3px] text-sm text-[#6F6D6F] font-medium mb-8 select-none"
        initial={{ x: -80, opacity: 0.5 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
      >
        Education
      </motion.h1>
      <motion.h1
        className="mb-10 font-poppins text-3xl select-none dark:text-white"
        initial={{ x: -40, y: 10 }}
        whileInView={{
          x: 0,
          y: 0,
          transition: {
            x: { duration: 0.8, ease: "easeInOut" },
            y: { delay: 0.5, ease: "easeInOut" },
          },
        }}
      >
        EDUCATION
      </motion.h1>
      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true }}
      >
        {educationData.map((item, index) => (
          <motion.div key={index} variants={childVariants}>
            <motion.div
              className="flex items-center justify-between px-5 border w-full h-14 border-gray-400 cursor-pointer mb-2"
              animate={{
                backgroundColor:
                  show && selected == index ? "#0ea5e9" : "#EFEFEF",
                transition: {
                  duration: 0.6,
                },
              }}
              onClick={() => handleCardClick(index)}
            >
              <motion.h1
                animate={{
                  color: show && selected == index ? "white" : "black",
                  transition: { duration: 5, delay: 0.1, ease: "circInOut" },
                }}
                className="select-none uppercase tracking-wider"
              >
                {item.title}
              </motion.h1>
              {show && selected == index ? <FaMinus /> : <FaPlus />}
            </motion.div>
            <AnimatePresence>
              {show && selected == index && <Card item={item} />}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
