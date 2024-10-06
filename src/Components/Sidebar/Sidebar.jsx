/* eslint-disable react/prop-types */
import myPIC from "/images/pp.jpg";
import npFLAG from "/images/np.png";
import { forwardRef, useEffect, useRef } from "react";
import { useStore, useThemeStore } from "../../Store/useStore";
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import HamIcon from "../Hamburger menu/HamIcon";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "SKILLS", href: "#skills" },
  { name: "EDUCATION", href: "#education" },
  { name: "WORK", href: "#work" },
  { name: "CONTACT", href: "#contact" },
];

const Sidebar = ({ activeLink }, ref) => {
  const isDark = useThemeStore((state) => state.isDark);
  const setIsDark = useThemeStore((state) => state.setIsDark);
  const isHamIconClicked = useStore((state) => state.isHamIconClicked);
  const setisHamIconClicked = useStore((state) => state.setisHamIconClicked);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, [setIsDark]);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  let sidebarRef = useRef(null);

  function handleClick(event) {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setisHamIconClicked();
    }
  }
  useEffect(() => {
    if (isHamIconClicked) {
      document.addEventListener("touchend", handleClick);
    }
    return () => {
      document.removeEventListener("touchend", handleClick);
    };
  }, [isHamIconClicked]);

  return (
    <div ref={sidebarRef}>
      <div
        className={`bg-[#efefef] dark:bg-[#1F1F1F] fixed min-w-[250px] min-h-[100lvh] flex flex-col items-center z-20 pt-[3rem] transition-ease duration-500 ${
          isHamIconClicked ? "translate-x-0" : ""
        } -translate-x-full  md:translate-x-0`}
      >
        <img
          src={myPIC}
          alt="profile picture"
          className="rounded-full min-h-[135px] max-w-[135px] mb-[20px]"
        />
        <h1 className="mb-[10px] dark:text-white text-2xl font-playfair font-bold">
          Pranil Shrestha
        </h1>
        <h2 className="mb-[20px] flex gap-2">
          <span className="text-[#2C98F0]">Developer</span>{" "}
          <img src={npFLAG} alt="np" height={20} width={20} />
        </h2>
        <ul className="flex flex-col items-center gap-[10px] text-sm tracking-[2px] font-poppins text-[#3d3d3d] hover:text-black">
          {navLinks.map((link, index) => (
            <li key={link.name} className="group flex flex-col items-center">
              <a
                href={link.href}
                onClick={() => setisHamIconClicked()}
                className={`${
                  activeLink === `nav_link_${index}`
                    ? "text-blue-500"
                    : "dark:text-white text-slate-700"
                } `}
              >
                {link.name}
              </a>
              <div
                className={`relative w-[1px] h-[0.01rem] duration-500 transition-all ease-in-out group-hover:w-full group-hover:bg-[#3d3d3d] ${
                  activeLink === `nav_link_${index}`
                    ? "w-full bg-[#144be1]"
                    : ""
                }`}
              />
            </li>
          ))}
        </ul>
        <button
          className="mt-40 ml-32 dark:bg-black bg-gray-700 border-none text-white flex items-center justify-center border rounded-full w-12 h-12"
          onClick={() => setIsDark()}
        >
          {isDark ? (
            <IoIosSunny size={28} color="yellow" />
          ) : (
            <FaMoon size={20} color="white" />
          )}
        </button>
      </div>
      <div className="ml-1 pt-1">
        <HamIcon />
      </div>
    </div>
  );
};
export default Sidebar;
