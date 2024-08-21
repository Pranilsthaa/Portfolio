import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function HamIcon() {
    const [isClicked, setIsClicked] = React.useState(false);
  return (
<div className="h-[40px] w-[40px] bg-slate-300 flex items-center justify-center rounded-full cursor-pointer z-30 fixed md:hidden lg:hidden" onClick={() => setIsClicked(!isClicked)}>
        <div className={`absolute transition-opacity duration-700 ease-in-out ${isClicked ? 'opacity-0' : 'opacity-100'}`}>
            <GiHamburgerMenu color="black" size={26} />
        </div>
        <div className={`absolute transition-opacity duration-700 ease-in-out ${isClicked ? 'opacity-100' : 'opacity-0'}`}>
            <RxCross2 color="black" size={26} />
        </div>
</div>
  )
}

export default HamIcon
