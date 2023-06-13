import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import {Calendar, DateRange,Range} from 'react-date-range'
import { useState } from 'react';
const DatePicker = () => {
    
    const PropsDateRange:Range={
        startDate:new Date(),
        endDate:undefined,
        key:'selection'
    }
    
    const [state, setState] = useState([
       PropsDateRange
    ]);


    const handleChangeDate=(date: any)=>{
        console.log(date)
    }

    return (
        <div
            className='
                absolute
                top-[110px]
                w-full
                h-auto 
                bg-white
                rounded-xl
                p-2
            ' 
        >
            <div
                className='
                    flex flex-row justify-between 
                '>
                    <DateRange
                        editableDateInputs={false}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                    />
                    <DateRange
                        editableDateInputs={false}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                    />
            </div>
        </div>
    );
}


export default DatePicker;