import { useState } from "react";
import Icon from "./Icon";

function GridOrList(){
    
    const [selectedIcon, setSelectedIcon] = useState("list1");
    
    const handleIconClick = (iconKey: string) => {
        setSelectedIcon(iconKey);

    };
    return( <>
    <div className="absolute right-0 flex space-x-0">
    <button className={`w-14 h-14 border-2 border-gray-900 shadow-md flex items-center justify-center transition-colors 
        ${selectedIcon === "list1" ? "bg-gray-400 text-white" : "bg-gray-100 hover:bg-gray-300"}`}
        onClick={() => handleIconClick("list1")}>
        <Icon svg_path="/apps.svg" iconKey="list1" className="w-8 h-8" />
    </button>

    <button className={`w-14 h-14 border-2 border-gray-900 shadow-md flex items-center justify-center transition-colors ml-[-2px] 
        ${selectedIcon === "list2" ? "bg-gray-400 text-white" : "bg-gray-100 hover:bg-gray-300"}`}
        onClick={() => handleIconClick("list2")}>
        <Icon svg_path="/list.svg" iconKey="list2" className="w-8 h-8" />
    </button>
    </div>
    
    </>
    )
}

export default GridOrList;
