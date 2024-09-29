import { FaCircle } from "react-icons/fa";
import { PiPlusCircle, PiCopy, PiArrowRight } from "react-icons/pi";
import Button from "../components/Button";
import projectsData from "../data/Data";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Projects = () => {
    return <div>
      <div className="my-2 p-4 flex flex-col border-[2px] border-[#2b2b2b] rounded-xl bg-[#212121]">
        
        <div className="flex justify-between">
          <div className="flex justify-start items-center">
            <FaCircle color="#555" size={12}></FaCircle>
            <span className="ml-2 text-xl">Projects</span>
          </div>
        </div>

        <div className="flex flex-col py-5 gap-4">
            <span className="text-3xl text-gray-300">My Works</span>
            <span className="text-xl">Discover my portfolio, where purposeful interfaces meet captivating design. My work strives to enhance experiences and inspire.</span>
        </div>

        <div className="">
            {projectsData.map(x => {
                return <Card linkto={'/project/'+x.id} img={x.img} name={x.name} about={x.about} />
            })

            }
        </div>
        
       
      </div>
    </div>;
};
  
export default Projects;