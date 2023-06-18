
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import {Calendar} from 'react-date-range'
import { useState } from 'react';
import Tab from './Tab';
const DatePicker = () => {

    const [date,setDate]=useState<Date|undefined>(undefined)
    const handleChangeDate=(date: any)=>{
        setDate(date)
    }

    return (
        <Tab
            className='
                w-full date
            ' 
        >
            <div
                className='
                    flex flex-row justify-between 
                '>
                    <Calendar
                        className='w-1/2'
                        date={date}
                        onChange={handleChangeDate}
                    />
                    <Calendar
                        className='w-1/2'
                        date={date}
                        onChange={handleChangeDate}
                    />
            </div>
        </Tab>
    );
}


export default DatePicker;