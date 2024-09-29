import { GoHome, GoProject } from "react-icons/go";
import { PiUser, PiBag, PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

function Nav(){
const iconSize = 24;
const navArr = [
    {text:'Home',icon:<GoHome size={iconSize} />,link:'/'},
    {text:'About',icon:<PiUser size={iconSize} />,link:'/about'},
    {text:'Projects',icon:<GoProject size={iconSize} />,link:'/projects'},
];
const [activeNav,setActivenav] = useState("/");

return (
<div className="p-4 flex flex-row justify-between items-center border-[2px] border-[#2b2b2b] rounded-xl bg-[#212121] sticky top-0 z-10 shadow-md">
    <div className="flex gap-4">
    {navArr.map(x => {
    return <Link to={x.link} onClick={() => setActivenav(x.link)}>
    <div className="flex items-center justify-center group">
        <div className={`group-hover:opacity-100 p-2 rounded-full cursor-pointer text-gray-200 ${activeNav == x.link ? `bg-[#444] opacity-100` : `opacity-50`}`}>
            {x.icon}
        </div>
        <div className="group-hover:opacity-100 opacity-0 px-1 rounded-md absolute top-5 group-hover:top-1 transition-all ease-linear duration-300 bg-[#333333]">
            <span className="text-[12px]">{x.text}</span>
        </div>
    </div>
    </Link>
    })
    }
    </div>
    <Button icon={<PiPlusCircle />} text="Hire Me" linkto='/contact' />
    {/* <div className="flex items-center justify-center bg-[#444444] p-2 rounded-md">
        <PiPlusCircle></PiPlusCircle>
        <span className="ml-2 text-sm">Hire Me</span>
    </div> */}
    {/* <div className="p-2 rounded-full cursor-pointer bg-[#333333]">
        <PiUser size={24}></PiUser>
        <span>Home</span>
    </div>
    <div className="p-2 rounded-full cursor-pointer bg-[#333333]">
        <GoProject size={24}></GoProject>
        <span>Home</span>
    </div>
    <div className="p-2 rounded-full cursor-pointer bg-[#333333]">
        <PiBag size={24}></PiBag>
        <span>Home</span>
    </div> */}
</div>
)
}

export default Nav