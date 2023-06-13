import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import {Calendar, DateRange} from 'react-date-range'
import { useState } from 'react';
const DatePicker = () => {
    
    const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

    const handleChangeDate=(date: any)=>{
        console.log(date)
    }

    return (
        <div
            className='
                absolute
                top-[70px]
                w-full
                left-0
                h-48 
                bg-white
                rounded-xl
            ' 
        >
            <div
                className='
                    right-0 top-0 w-100 transform-origin-left scale-[.67]  flex flex-row   gap-0 p-2
                '>
                    <DateRange
                        className='transform-origin-left w-100 top-0 scale-[.67] '
                        editableDateInputs={false}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                    />
                    <DateRange
                        className='scale-[.67] transform-origin-left flex-grow -translate-x-[80px] '
                        editableDateInputs={false}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                    />
            </div>
        </div>
    );
}

type PropsRegion={
    src:any
    label:string
}

export default DatePicker;