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
                scroll
                p-4
                
            ' 
        >
            <h6 
                className='
                    text-[7px]
                    font-semibold 
                    text-slate-700
                    pb-3
                '>
               Pick Date 
            </h6>
            <div
                className='
                    flex flex-row scale-[.67] w-full
                '>
                    <DateRange
                        className='relative right-0 scale-[.67] '
                        editableDateInputs={false}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                    />
                    <DateRange
                        className='w-full scale-[.67]'
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