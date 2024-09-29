import { FaCircle } from "react-icons/fa";
import { PiPlusCircle, PiCopy } from "react-icons/pi";
import Button from "../components/Button";

const About = () => {
    return <>
    <div className="my-2 p-4 flex flex-col border-[2px] border-[#2b2b2b] rounded-xl bg-[#212121]">
        
        <div className="flex justify-between">
          <div className="flex justify-start items-center">
            <FaCircle color="#555" size={12}></FaCircle>
            <span className="ml-2 text-xl">About</span>
          </div>
        </div>

        <div className="flex flex-col gap-5 py-5 ">
            <span className="text-3xl text-gray-300">It's me Jane</span>
            <span className="text-xl">I'm Jane Doe, a product designer with over 5 years of experience, currently residing in Jakarta, Indonesia. I have a deep passion for crafting purposeful interfaces and products. My main goal is to bridge the divide between people and technology, transforming intricate challenges into meaningful and seamless experiences.</span>
            <div className="flex items-center justify-center">
                <img width={450} className="mt-5 border-[15px] border-[#3d3d3d] rounded-xl" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
            <span className="text-3xl text-gray-300">More About Me</span>
            <span className="text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam recusandae ipsa rerum similique hic molestias, unde ducimus laudantium assumenda necessitatibus perspiciatis culpa voluptatem doloremque, tempora maxime, pariatur asperiores consequuntur distinctio.</span>
        </div>
        
      </div>
      </>
};
  
export default About;