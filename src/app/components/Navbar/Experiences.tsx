import clsx from "clsx";
import InputTab from "./InputTab";
import SelectionDate from "./SelectionDate";

const Experiences = () => {

    return (
        <>
            <InputTab
                selectedInputTab={{ selectingTab:'experienceTab' }}
            >
                <SelectionDate
                    title='Date'
                    subTitle='Add Dates'
                    styleItem={clsx(
                        `px-4 flex-grow`
                    )}
                />
            </InputTab>
        </>
    );
}

export default Experiences

