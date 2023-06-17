import clsx from "clsx";
import InputTab from "./InputTab";
import SelectionDate from "./SelectionDate";
import { PropsInputTab } from "./InputTab";
import { useAppDispatch, useAppSelector } from "@/app/hook/hookRedux";
import { removeCheckOutDate } from "@/app/redux/reducer/SearchSlide";

const InputCheckOut : React.FC<PropsInputTab>= (
    {selectedInputTab}
) => {

    const checkOutDate = useAppSelector(state=>state.booking.checkOutDate)
    const dispath=useAppDispatch()

    const handleClear=()=>{
        dispath(removeCheckOutDate())
    }

    const isExpandSearch = useAppSelector(state=>state.toogleSearch.isExpanded)

    return (
        <InputTab
            isShowClearIcon={checkOutDate&&isExpandSearch?true:false}
            selectedInputTab={selectedInputTab}
            handleClear={handleClear}
            className='w-1/2'
        >
            <SelectionDate
                title='Check in'
                subTitle={checkOutDate?.toString()||'Add Date'}
                styleItem={clsx(
                    `px-4`
                )}
            />
        </InputTab>
    );
}

export default InputCheckOut;