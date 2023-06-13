import clsx from "clsx";
import SelectionDate from "./SelectionDate";

const Experiences = () => {

    const handleClick = () => {

    }
    
    return (
        <>
            <SelectionDate
                onClick={handleClick}
                title='Date'
                subTitle='Add Dates'
                styleItem={clsx(
                    `px-4 flex-grow`
                )}
            />
        </>
    );
}

export default Experiences

