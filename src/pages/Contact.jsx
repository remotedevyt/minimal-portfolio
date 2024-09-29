import { FaCircle } from "react-icons/fa";
import { PiPlusCircle, PiCopy } from "react-icons/pi";
import Button from "../components/Button";

const Contact = () => {
    return <>
    <div className="my-2 p-4 flex flex-col border-[2px] border-[#2b2b2b] rounded-xl bg-[#212121]">
        
        <div className="flex justify-between">
          <div className="flex justify-start items-center">
            <FaCircle color="#555" size={12}></FaCircle>
            <span className="ml-2 text-xl">Hire Me</span>
          </div>
        </div>

        <div className="flex flex-col py-5 gap-5">
            <span className="text-3xl text-gray-300">Design Enquiry</span>
            <span>Got an idea and need design help? Reach out now</span>
            <div className="flex items-center justify-center gap-4">
                <input className="w-full border py-3 px-2 rounded bg-[#333] border-none text-sm focus:outline-none focus:ring-1" type="text" placeholder="Name" />
                <input className="w-full border py-3 px-2 rounded bg-[#333] border-none text-sm focus:outline-none focus:ring-1" type="text" placeholder="Email" />
            </div>
            <div className="flex flex-col gap-4">
                <textarea className="w-full border py-3 px-2 rounded bg-[#333] border-none text-sm focus:outline-none focus:ring-1" name="" id="" cols="30" rows="4" placeholder="Message"></textarea>
                <span className="flex items-center justify-center text-gray-300 text-sm py-3 px-2 rounded bg-[#3c3c3c] hover:bg-[#2c2c2c] cursor-pointer">Submit</span>
            </div>
        </div>
        
      </div>
      </>
};
  
export default Contact;