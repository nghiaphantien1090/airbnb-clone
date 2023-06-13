
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import {Calendar} from 'react-date-range'
import { useState } from 'react';
const DatePicker = () => {

    const [date,setDate]=useState<Date|undefined>(undefined)
    const handleChangeDate=(date: any)=>{
        setDate(date)
    }

    return (
        <div
            className='
                absolute
                top-[120px]
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
                    <Calendar
                        date={date}
                        onChange={handleChangeDate}
                    />
                    <Calendar
                        date={date}
                        onChange={handleChangeDate}
                    />
            </div>
        </div>
    );
}


export default DatePicker;