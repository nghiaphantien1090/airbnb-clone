import clsx from "clsx";
import InputTab from "./InputTab";
import SelectionDate from "./SelectionDate";
import { PropsInputTab } from "./InputTab";
import {memo} from 'react'
import { useAppDispatch, useAppSelector } from "@/app/hook/hookRedux";
import { removeCheckInDate } from "@/app/redux/reducer/SearchSlide";

const InputCheckIn : React.FC<PropsInputTab>= (
    {
        selectedInputTab
    }
) => {

    const checkinDate = useAppSelector(state=>state.booking.checkInDate)
    const dispath=useAppDispatch()

    const handleClear=()=>{
        dispath(removeCheckInDate())
    }

     const isExpandSearch = useAppSelector(state=>state.toogleSearch.isExpanded)
    
    return (
        <InputTab 
            isShowClearIcon={(checkinDate&&isExpandSearch)?true:false}
            handleClear={handleClear}
            selectedInputTab={selectedInputTab} 
            className='w-1/2'
        >
            
            <SelectionDate
                title='Check in'
                subTitle={checkinDate?.toString()||'Add Date'}
                styleItem={clsx(
                    `px-4`
                )}
            />
        </InputTab>
    );
}

export default memo(InputCheckIn);