import clsx from "clsx";
import SelectionDate from "./SelectionDate";

const InputCheckOut = () => {

const handleClick=()=>{
}
    return (
        <SelectionDate 
            onClick={handleClick}
            title='Check in'
            subTitle='Add Dates'
            styleItem={clsx(
                `px-4`
            )}
        />
    );
}

export default InputCheckOut;