
import { FaCircle } from "react-icons/fa";
import { PiArrowLeft } from "react-icons/pi";
import Button from "../components/Button";
import {useParams,useNavigate} from "react-router-dom";
import projectsData from "../data/Data";

const Projects = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const pData = projectsData.find(x => x.id == id)
    return <div>
    <div className="my-2 p-4 flex flex-col border-[2px] border-[#2b2b2b] rounded-xl bg-[#212121]">
        
        <div className="flex justify-end">
            <div onClick={()=>navigate(-1)} className="flex items-center justify-center border border-[#555] p-1 rounded hover:bg-zinc-900 cursor-pointer">
                <PiArrowLeft size={14}></PiArrowLeft>
                <span className="text-[12px] ml-1">Back</span>
            </div>
        </div>
        <div className="flex flex-col gap-5 overflow-hidden relative">
            <img className="absolute right-0 opacity-5" src={pData.img} width={300} alt="" />
            <img className="" src={pData.img} width={100} alt="" />
            <span className="text-3xl text-gray-300">{pData.name}</span>
            <span className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, maxime laudantium eius quidem iusto incidunt eaque vero magni modi voluptatem beatae soluta exercitationem quis provident dolorem quos vitae excepturi blanditiis?</span>
            <img src="https://images.klipfolio.com/website/public/22b133bc-124d-44f4-85f8-9170b08d3ce9/dashboard-examples-hero.png" alt="" />
            <span className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, fugit vitae ipsa, illo in pariatur repellendus voluptatibus nihil fugiat laborum reiciendis corporis perferendis. Consequuntur cupiditate sequi nesciunt expedita repudiandae mollitia!</span>
            <img src="https://images.klipfolio.com/website/public/4d789bf2-a6d2-45ea-87e7-38e131f9d354/sales%20dashboard.png" alt="" />
        </div>

        
       

    </div>
    </div>;
};

export default Projects;