import { Link } from "react-router-dom";
const Button = (params) => {
    return <Link to={params.linkto}>
    <div className={`flex items-center border-[2px] border-[#444444] 
    justify-center ${params.bg == 'true' ? `bg-[#444444]` : ``} p-2 rounded-md hover:border-[#777] `}>
        {params.icon ? params.icon : ''}
        <span className="ml-2 text-sm">{params.text}</span>
    </div>
    </Link>;
};
  
export default Button;