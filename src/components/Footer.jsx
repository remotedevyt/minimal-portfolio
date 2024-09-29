import { Link } from "react-router-dom";
import { PiPlusCircle, PiCopy,PiInstagramLogo,PiXLogo,PiDribbbleLogo,PiLinkedinLogo } from "react-icons/pi";
import Button from "./Button";

const Footer = (params) => {
    return <>
    <div className="flex flex-col gap-4 items-center border-[2px] border-[#2b2b2b] justify-center py-8 rounded-md bg-[#212121]">
        <span className="ml-2 text-3xl">Let’s work together.</span>
        <span className="text-xl">Creating user experience and visual appealing design</span>
        <div className="flex gap-2"> 
            <Button icon={<PiPlusCircle />} text="Hire Me" linkto='/contact' bg="true" />
            <Button icon={<PiCopy />} text="Copy Email" linkto='/projects' />
        </div>
        <div 
        className="flex gap-2 py-4">
            <Link to="/" className="rounded-full p-2 hover:bg-zinc-900 hover:text-gray-200 hover:scale-105"><PiXLogo size={24}></PiXLogo></Link>
            <Link to="/" className="rounded-full p-2 hover:bg-zinc-900 hover:text-gray-200 hover:scale-105"><PiInstagramLogo size={24}></PiInstagramLogo></Link>
            <Link to="/" className="rounded-full p-2 hover:bg-zinc-900 hover:text-gray-200 hover:scale-105"><PiDribbbleLogo size={24}></PiDribbbleLogo></Link>
            <Link to="/" className="rounded-full p-2 hover:bg-zinc-900 hover:text-gray-200 hover:scale-105"><PiLinkedinLogo size={24}></PiLinkedinLogo></Link>
        </div>
        <span className="text-[14px]">&copy; 2024 Remotedev</span>
    </div>
    </>;
};
  
export default Footer;