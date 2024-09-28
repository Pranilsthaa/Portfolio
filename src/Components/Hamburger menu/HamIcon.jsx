import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function HamIcon() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div
        className={`h-[40px] w-[40px] bg-gray-100 flex items-center z-24 justify-center rounded-xl cursor-pointer z-30 fixed md:hidden transition-ease duration-500 lg:hidden ${
          isClicked ? "translate-x-[250px]" : ""
        }`}
        onClick={() => setIsClicked((p) => !p)}
      >
        <div
          className={`absolute transition-opacity duration-700 ease-in-out ${
            isClicked ? "opacity-0" : "opacity-100"
          }`}
        >
          <GiHamburgerMenu color="black" size={26} />
        </div>
        <div
          className={`absolute transition-opacity duration-700 ease-in-out ${
            isClicked ? "opacity-100" : "opacity-0"
          }`}
        >
          <RxCross2 color="black" size={26} />
        </div>
      </div>
    </>
  );
}

export default HamIcon;
