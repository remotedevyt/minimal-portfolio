import { Link } from "react-router-dom";
import { PiArrowRight } from "react-icons/pi";

const Card = (params) => {
    return <Link to={params.linkto}>
    <div className="flex flex-row justify-between items-center w-full p-2 my-2 border-[2px] border-[#555] hover:border-[#888] hover:bg-[#1c1c1c] rounded-xl ">
        <div className="left flex">
            <div className="flex items-center justify-center mr-4 p-2">
                <img src={params.img} alt="" />
            </div>
            <div className="flex flex-col items-start justify-center">
                <span className="text-xl">{params.name}</span>
                <span className="text-sm">{params.about}</span>
            </div>
        </div>
        <div className="right flex">
            <PiArrowRight size={24}></PiArrowRight>
        </div>
    </div>
    </Link>;
};
  
export default Card;