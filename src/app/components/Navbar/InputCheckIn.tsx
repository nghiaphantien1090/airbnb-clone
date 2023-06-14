import clsx from "clsx";
import InputTab from "./InputTab";
import SelectionDate from "./SelectionDate";
import { PropsInputTab } from "./InputTab";

const InputCheckIn : React.FC<PropsInputTab>= (
    {
        selectedInputTab
    }
) => {

    return (
        <InputTab 
            selectedInputTab={selectedInputTab} 
            className='w-1/2'
        >
            <SelectionDate
                title='Check in'
                subTitle='Add Dates'
                styleItem={clsx(
                    `px-4`
                )}
            />
        </InputTab>
    );
}

export default InputCheckIn;