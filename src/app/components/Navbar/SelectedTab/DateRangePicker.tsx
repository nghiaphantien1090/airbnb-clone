'use client'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import {DateRangePicker,Range} from 'react-date-range'
import { useState } from 'react';
import Tab from './Tab';

const RangeDatePicker=() => {
    
    const PropsDateRange:Range={
        startDate:new Date(),
        endDate:undefined  ,
        key:'selection'
    }

    const [state, setState] = useState([
       PropsDateRange
    ]);

    return (
        <Tab className='date-range w-full my-auto overflow-hidden min-h-[300px]'>
            <div style={{}} >
                <DateRangePicker
                    className='
                         -translate-x-[10px] 
                    '
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    months={12}
                    ranges={state}
                    direction="horizontal"
                    preventSnapRefocus={true}
                    showDateDisplay={false}
                    showMonthAndYearPickers={false}
                />
            </div>
        </Tab>
    );
}

export default RangeDatePicker;