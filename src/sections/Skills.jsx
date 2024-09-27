import { motion } from "framer-motion";

const skillsData = [
  {
    id: 1,
    title: "HTML",
    progress: "90%",
    progressPercentage: "after:content-['90%']",
    bg: "bg-red-600",
    text: "text-red-600",
  },
  {
    id: 2,
    title: "REACT",
    progress: "80%",
    progressPercentage: "after:content-['80%']",
    bg: "bg-green-500",
    text: "text-green-500",
  },
  {
    id: 3,
    title: "QBASIC",
    progress: "70%",
    progressPercentage: "after:content-['70%']",
    bg: "bg-blue-500",
    text: "text-blue-500",
  },
  {
    id: 4,
    title: "SEO",
    progress: "40%",
    progressPercentage: "after:content-['40%']",
    bg: "bg-yellow-500",
    text: "text-yellow-500",
  },
  {
    id: 5,
    title: "UI/UX",
    progress: "50%",
    progressPercentage: "after:content-['50%']",
    bg: "bg-purple-500",
    text: "text-purple-500",
  },
  {
    id: 6,
    title: "App Development",
    progress: "70%",
    progressPercentage: "after:content-['70%']",
    bg: "bg-orange-500",
    text: "text-orange-500",
  },
];

const variants = (delay) => ({
  initial: {
    x: -80,
    opacity: 0.5,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeIn", delay: delay },
  },
});

function Skills() {
  return (
    <div className="min-h-[650px] pl-10 pt-20">
      <motion.h1
        className="tracking-[3px] text-sm text-[#6F6D6F] font-medium mb-8"
        initial="initial"
        whileInView="animate"
        variants={variants(0)}
      >
        My Specialty
      </motion.h1>
      <motion.h2
        className="mb-10 font-poppins text-3xl"
        initial="initial"
        whileInView="animate"
        variants={variants(0.06)}
      >
        My SKILLS
      </motion.h2>
      <p className="text-slate-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        aliquam autem numquam eligendi, provident asperiores perferendis
        nesciunt. Iste corporis perferendis fugiat voluptates neque provident
        harum, aperiam vitae molestias animi placeat, unde repellat fuga ipsum
        a. Fuga aliquid doloribus qui commodi quam ut laudantium odio id
        incidunt officia consequatur sit, rem fugit beatae adipisci. Nulla, et.
      </p>
      <div className="grid grid-cols-2 gap-x-2 gap-y-5 mt-10">
        {skillsData.map((skill) => (
          <div key={skill.id}>
            <p>{skill.title}</p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: skill.progress,
                transition: { stiffness: 40, type: "spring" },
              }}
              className={`relative progress-bar flex items-center ${skill.bg} h-[6px] rounded-[8px] ${skill.progressPercentage} after:absolute after:-top-5 after:-right-0 after:text-xs ${skill.text} font-poppins `}
            >
              <div
                className={`absolute right-0 w-3 h-3 rounded-full ${skill.bg} `}
              ></div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
