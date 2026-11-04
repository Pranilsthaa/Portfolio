import { motion } from "framer-motion";

const skillsData = [
  {
    id: 1,
    title: "React Native",
    progress: "99%",
    progressPercentage: "after:content-['99%']",
    bg: "bg-green-500",
    text: "text-green-500",
  },
  {
    id: 2,
    title: "React",
    progress: "90%",
    progressPercentage: "after:content-['90%']",
    bg: "bg-red-600",
    text: "text-red-600",
  },
  {
    id: 3,
    title: "Supabase",
    progress: "70%",
    progressPercentage: "after:content-['70%']",
    bg: "bg-teal-500",
    text: "text-teal-500",
  },
  {
    id: 4,
    title: "ExpressJS",
    progress: "70%",
    progressPercentage: "after:content-['70%']",
    bg: "bg-blue-500",
    text: "text-blue-500",
  },
  {
    id: 5,
    title: "NestJS",
    progress: "60%",
    progressPercentage: "after:content-['60%']",
    bg: "bg-rose-500",
    text: "text-rose-500",
  },
  {
    id: 6,
    title: "PostgreSQL",
    progress: "60%",
    progressPercentage: "after:content-['60%']",
    bg: "bg-indigo-500",
    text: "text-indigo-500",
  },
  {
    id: 7,
    title: "MySQL",
    progress: "60%",
    progressPercentage: "after:content-['60%']",
    bg: "bg-orange-500",
    text: "text-orange-500",
  },
  {
    id: 8,
    title: "Framer Motion",
    progress: "70%",
    progressPercentage: "after:content-['70%']",
    bg: "bg-yellow-500",
    text: "text-yellow-500",
  },
  {
    id: 9,
    title: "UI/UX",
    progress: "60%",
    progressPercentage: "after:content-['60%']",
    bg: "bg-purple-500",
    text: "text-purple-500",
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
        viewport={{ once: true }}
        variants={variants(0)}
      >
        My Specialty
      </motion.h1>
      <motion.h2
        className="mb-10 font-poppins text-3xl dark:text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={variants(0.06)}
      >
        My SKILLS
      </motion.h2>
      <p className="text-slate-600 dark:text-slate-200 leading-relaxed max-w-[90%]">
        Over the years, I've focused on building end-to-end applications that look
        clean, feel responsive, and run reliably in production. My core strength
        lies in mobile and web development—crafting fluid experiences with React
        Native and React, paired with well-structured backends in Express and NestJS.
        On the database side, I design and manage schemas across PostgreSQL and
        MySQL, frequently leveraging Supabase for fast, secure authentication and
        real-time data workflows. From polished animations down to scalable API
        architecture, I prioritize readable code, performance, and real user experience.
      </p>
      <div className="grid grid-cols-2 gap-x-2 gap-y-5 mt-10">
        {skillsData.map((skill) => (
          <div key={skill.id}>
            <p className="dark:text-white">{skill.title}</p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: skill.progress,
                transition: { stiffness: 40, type: "spring" },
              }}
              viewport={{ once: true }}
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
