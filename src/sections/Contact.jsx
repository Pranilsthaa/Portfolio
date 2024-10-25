import { motion } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import { Toaster, toast } from "sonner";

const variants = (delay) => ({
  hidden: {
    x: -80,
    opacity: 0.5,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeIn", delay: delay },
  },
});

const parentVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { y: -20 },
  visible: {
    y: 0,
    transition: { duration: 0.4 },
  },
};

const parentVariants1 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const childVariants1 = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  function handleTextChange(e) {
    const { name, value } = e.target;
    setFormData((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    try {
      let response = await axios.post(
        "https://mailapi-x51k.onrender.com/submit",
        formData
      );
      if (response.status === 200) {
        toast.success("Email sent successfully");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="relative min-h-[700px] px-10 pb-20">
      <Toaster />
      <motion.h1
        className="tracking-[3px] text-sm text-[#6F6D6F] font-medium mb-8"
        initial="hidden"
        whileInView="visible"
        variants={variants(0)}
      >
        Get In Touch
      </motion.h1>
      <motion.h2
        className="mb-10 font-poppins text-3xl dark:text-white"
        initial="hidden"
        whileInView="visible"
        variants={variants(0.2)}
      >
        CONTACT
      </motion.h2>
      <motion.div className="flex flex-col gap-x-4 sm:flex-row gap-y-4">
        {/* Info */}
        <motion.div
          className="flex-1 max-w-[400px] grid grid-rows-3 gap-y-4 min-h-[350px]"
          initial="hidden"
          whileInView="visible"
          variants={parentVariants}
          viewport={{ once: false }}
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
            <div style={{ flex: 2 }}>pranilstha322@gmail.com</div>
          </motion.div>
          <motion.div
            className="border bg-white flex items-center justify-between gap-x-4 overflow-hidden"
            variants={childVariants}
          >
            <div
              className="bg-[#efefef] h-full flex items-center justify-center"
              style={{ flex: 1 }}
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
              className="bg-[#efefef] h-full flex items-center justify-center"
              style={{ flex: 1 }}
            >
              <FaPhone size={50} color="black" />
            </div>
            <p style={{ flex: 2 }}>+977 9847016459</p>
          </motion.div>
        </motion.div>
        {/* Form */}
        <motion.form
          className="flex-1 grid gap-y-4"
          initial="hidden"
          whileInView="visible"
          variants={parentVariants1}
          onSubmit={handleSubmit}
        >
          <motion.input
            type="text"
            placeholder="Name"
            name="name"
            className="h-12 pl-4"
            variants={childVariants1}
            onChange={handleTextChange}
            value={formData.name}
            required
          />
          <motion.input
            type="text"
            placeholder="Email"
            name="email"
            className="h-12 pl-4"
            variants={childVariants1}
            onChange={handleTextChange}
            value={formData.email}
            required
          />
          <motion.input
            type="text"
            placeholder="Subject"
            name="subject"
            className="h-12 pl-4"
            variants={childVariants1}
            onChange={handleTextChange}
            value={formData.subject}
            required
          />
          <motion.textarea
            rows={5}
            name="message"
            placeholder="Message"
            className="pt-4 pl-4"
            variants={childVariants1}
            onChange={handleTextChange}
            value={formData.message}
            required
          />
          <motion.button
            variants={childVariants1}
            className="bg-blue-600 max-w-[150px] shadow-lg rounded-sm h-10 text-white"
          >
            {loading ? (
              <ScaleLoader loading={loading} item size={5} color="white" />
            ) : (
              "Send Message"
            )}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
