import DatePicker from "./DatePicker";
import  DateRangePicker  from "react-date-range";
import DetailRegion from "./DetailRegion";
import RangeDatePicker from "./DateRangePicker";
import { useAppSelector } from "@/app/hook/hookRedux";
import Guest from "./Guest";

const ShownTab = () => {

	const selectedTab=useAppSelector(
        state=>state.selectTabSearch.selectingTab)

    return ( 
        <>
            {selectedTab === 'destinationTab' ? <DetailRegion /> : null}
            {selectedTab === 'checkInTab' ? <DatePicker /> : null}
            {selectedTab === 'checkOutTab' ? <DatePicker /> : null}
            {selectedTab === 'experienceTab' ? <RangeDatePicker /> : null}
            {selectedTab === 'addGuestTab' ? <Guest /> : null}
        </>
     );
}
 
export default ShownTab;