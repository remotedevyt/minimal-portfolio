import { FaCircle } from "react-icons/fa";
import { PiPlusCircle, PiCopy, PiArrowRight } from "react-icons/pi";
import Button from "../components/Button";
import projectsData from "../data/Data";
import Card from "../components/Card";

const Home = () => {
    return <div>
      <div className="my-2 p-4 flex flex-col border-[2px] border-[#2b2b2b] rounded-xl bg-[#212121]">
        
        <div className="flex justify-between">
          <div className="flex justify-start items-center">
            <FaCircle color="#555" size={12}></FaCircle>
            <span className="ml-2 text-xl">Product Designer</span>
          </div>
          <div className="flex bg-[#29e351] bg-opacity-15 justify-center items-center px-2 rounded-full">
            <FaCircle color="#29e351" size={10}></FaCircle>
            <span className="text-[12px] text-[#29e351] ml-2">AVAILABLE FOR WORK</span>
          </div>
        </div>
        
        <div className="md:flex-row flex flex-col gap-8 justify-center items-center py-[50px]">
          <div className="flex flex-col gap-3 items-center md:items-start justify-center">
            <h1 className="text-3xl text-gray-300">Hey, I am Jane Doe</h1>
            <p className="text-xl">Product designer from Jakarta, ID.</p>
            <p className="text-xl">Currently designing at Facebook.</p>
            <div className="mt-2 flex gap-2">
              <Button icon={<PiPlusCircle />} text="Hire Me" linkto='/contact' bg="true" />
              <Button icon={<PiCopy />} text="Copy Email" linkto='/projects' />
            </div>
          </div>
          <div className="flex order-first md:order-last items-center w-[150px] h-[150px] border-[5px] border-[#444] rounded-full overflow-hidden">
            <img className="mt-5" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
        </div>

        <div className="p-4 bg-[#2c2c2c] rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex justify-start items-center py-4">
              <FaCircle color="#555" size={12}></FaCircle>
              <span className="ml-2 text-xl">My Projects</span>
            </div>
            <div>
            <Button icon={<PiArrowRight />} text="View All" linkto='/projects' bg="true" />
            </div>
          </div>
            {projectsData.slice(0,3).map(x => {
                return <Card linkto={'/project/'+x.id} img={x.img} name={x.name} about={x.about} />
            })}
        </div>

      </div>
    </div>
};
  
export default Home;