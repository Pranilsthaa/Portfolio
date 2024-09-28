import { motion } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

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

const parentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: {
    x: -20,
    y: 10,
  },
  visible: {
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Contact = () => {
  return (
    <div className="min-h-[700px] px-10 pb-20">
      <motion.h1
        className="tracking-[3px] text-sm text-[#6F6D6F] font-medium mb-8"
        initial="initial"
        whileInView="animate"
        variants={variants(0)}
      >
        Get In Touch
      </motion.h1>
      <motion.h2
        className="mb-10 font-poppins text-3xl dark:text-white"
        initial="initial"
        whileInView="animate"
        variants={variants(0.06)}
      >
        CONTACT
      </motion.h2>
      <div className="flex flex-col gap-x-4 sm:flex-row gap-y-4">
        {/*info*/}
        <motion.div
          className="flex-1 max-w-[400px] grid grid-rows-3 gap-y-4 min-h-[350px]"
          initial="initial"
          whileInView="visible"
          variants={parentVariants}
        >
          <motion.div
            className="border bg-white flex items-center justify-between gap-x-4 overflow-hidden"
            variants={childVariants}
          >
            <div
              className="bg-[#efefef] h-full flex items-center justify-center"
              style={{ flex: 1 }}
            >
              <BiLogoGmail size={50} color="black" />
            </div>
            <div className="" style={{ flex: 2 }}>
              pranilstha322@gmail.com
            </div>
          </motion.div>
          <motion.div
            className="border bg-white flex items-center justify-between gap-x-4 overflow-hidden"
            variants={childVariants}
          >
            <div
              style={{ flex: 1 }}
              className="bg-[#efefef] h-full flex items-center justify-center"
            >
              <FaMapLocationDot size={50} color="black" />
            </div>
            <p style={{ flex: 2 }}>Tilottama-15, Lumbini Province, Nepal</p>
          </motion.div>
          <motion.div
            className="border bg-white flex items-center justify-between gap-x-4 overflow-hidden"
            variants={childVariants}
          >
            <div
              style={{ flex: 1 }}
              className="bg-[#efefef] h-full flex items-center justify-center"
            >
              <FaPhone size={50} color="black" />
            </div>
            <p style={{ flex: 2 }}>+977 9847016459</p>
          </motion.div>
        </motion.div>
        {/*----------------------*/}
        <div className="form flex-1">
          <form className="grid gap-y-4">
            <input type="text" placeholder="Name" className="h-12 pl-4" />
            <input type="text" placeholder="Email" className="h-12 pl-4" />
            <input type="text" placeholder="Subject" className="h-12 pl-4" />
            <textarea
              rows={5}
              name="message"
              placeholder="Message"
              className="pt-4 pl-4"
            />
            <button className="bg-blue-600 max-w-[150px] shadow-lg rounded-sm h-10 text-white">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
