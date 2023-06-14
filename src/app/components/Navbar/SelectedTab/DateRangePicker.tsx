'use client'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import {DateRange,Range} from 'react-date-range'
import { useState } from 'react';
import Tab, { PropsShownTab } from './Tab';

const RangeDatePicker=() => {
    
    const PropsDateRange:Range={
        startDate:new Date(),
        endDate:undefined   ,
        key:'selection'
    }

    const [state, setState] = useState([
       PropsDateRange
    ]);

    return (
        <Tab className='w-full'>
            <div
                className='
                   flex flex-row justify-between gap-4 w-full 
                '>
                    <DateRange
                        className='w-1/2 '
                        editableDateInputs={false}
                        showDateDisplay={false}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                    />
                    <DateRange
                        className='w-1/2 flex-grow '
                        showDateDisplay={false}
                        editableDateInputs={false}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                    />
            </div>
        </Tab>
    );
}


export default RangeDatePicker;