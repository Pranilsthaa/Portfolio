import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useStore, useThemeStore } from "../../Store/useStore";

function HamIcon() {
  const isDark = useThemeStore((state) => state.isDark);
  const isHamIconClicked = useStore((state) => state.isHamIconClicked);
  const setisHamIconClicked = useStore((state) => state.setisHamIconClicked);
  return (
    <div
      className={`h-[40px] w-[40px] bg-gray-200 dark:bg-black flex items-center z-24 justify-center rounded-xl cursor-pointer z-30 fixed md:hidden transition-ease duration-500 lg:hidden ${
        isHamIconClicked ? "translate-x-[250px]" : ""
      }`}
      onClick={() => setisHamIconClicked()}
    >
      <div
        className={`absolute transition-opacity duration-700 ease-in-out ${
          isHamIconClicked ? "opacity-0" : "opacity-100"
        }`}
      >
        <GiHamburgerMenu color={isDark ? "white" : "black"} size={26} />
      </div>
      <div
        className={`absolute transition-opacity duration-700 ease-in-out ${
          isHamIconClicked ? "opacity-100" : "opacity-0"
        }`}
      >
        <RxCross2 color={isDark ? "white" : "black"} size={26} />
      </div>
    </div>
  );
}

export default HamIcon;
