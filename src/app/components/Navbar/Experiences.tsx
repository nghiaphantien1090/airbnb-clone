import { useAppDispatch, useAppSelector } from "@/app/hook/hookRedux";
import clsx from "clsx";
import InputTab from "./InputTab";
import SelectionDate from "./SelectionDate";

const Experiences = () => {
    
    const bookDate = useAppSelector(state=>state.booking)
    const checkInDate = bookDate.checkInDate
    const checkOutDate=bookDate.checkOutDate

    const isExpandSearch =useAppSelector(state=>state.toogleSearch.isExpanded)
    const isShowClearIcon = checkInDate&&checkOutDate&&isExpandSearch?true:false
    console.log(isShowClearIcon)

    return (
        <>
            <InputTab
                isShowClearIcon={isShowClearIcon}
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

