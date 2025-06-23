
import { IconType } from "./../lib/utils";


const Icon = ({iconKey,svg_path,className}: IconType) =>{
    return(
        <img src={svg_path} alt={iconKey+'_icon'} className={className}/>
    )
}


export default Icon;

