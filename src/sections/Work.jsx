import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const myWork = [
  {
    id: 1,
    title: "UI/UX",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem",
  },
  {
    id: 4,
    title: "APP Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem",
  },
  {
    id: 5,
    title: "APP Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem",
  },
  {
    id: 6,
    title: "APP Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem",
  },
  {
    id: 7,
    title: "APP Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem",
  },
  {
    id: 8,
    title: "SEO",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vol",
  },
  {
    id: 9,
    title: "UI/UX",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem",
  },
];

const menus = ["UI/UX", "Web Development", "APP Development", "SEO"];

const variants = {
  hidden: { x: -80, opacity: 0.5 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const ULvariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2, ease: "linear" },
  },
};
const LIvariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const Work = () => {
  const [filteredWork, setFilteredWork] = useState(
    myWork.filter((item) => item.title === "UI/UX")
  );
  const [selected, setSelected] = useState(0);
  function filter(title, index) {
    setSelected(index);
    let filteredWork = myWork.filter((item) => item.title === title);
    setFilteredWork(filteredWork);
  }
  return (
    <div className="min-h-[680px] px-10 pt-20 mb-10">
      <motion.h1
        className="tracking-[3px] text-sm text-[#6F6D6F] font-medium mb-8 select-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
      >
        My Work
      </motion.h1>
      <motion.h1
        className="mb-10 font-poppins text-3xl select-none dark:text-white"
        initial={{ x: -80, y: 20 }}
        whileInView={{
          x: 0,
          y: 0,
          transition: {
            x: { duration: 0.8, ease: "easeInOut" },
            y: { delay: 0.5, ease: "easeInOut" },
          },
        }}
        viewport={{ once: true }}
      >
        RECENT WORK
      </motion.h1>
      <motion.ul
        className="flex flex-row gap-x-4 lg:text-lg sm:text-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={ULvariants}
      >
        {menus.map((item, index) => (
          <motion.li
            key={index}
            variants={LIvariants}
            onClick={() => filter(item, index)}
            className={`cursor-pointer select-none dark:text-white ${
              index == selected ? "text-blue-500 dark:text-blue-500" : ""
            }`}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
      <motion.div
        className="mt-10 grid grid-cols-2 gap-x-16 gap-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
      >
        <AnimatePresence>
          {filteredWork.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col overflow-hidden gap-y-4 bg-white h-[320px] p-6 shadow-sm"
              initial={
                index % 2 === 0
                  ? { x: -80, opacity: 0.6 }
                  : { x: 80, opacity: 0.6 }
              }
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, ease: "easeInOut" },
              }}
              exit={{ opacity: 0 }}
            >
              <h1 className="font-bold font-poppins">{item.title}</h1>
              <p className="text-[#6F6D6F]">{item.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Work;
