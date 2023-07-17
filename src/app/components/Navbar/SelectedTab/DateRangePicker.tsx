'use client'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import {DateRangePicker,Range} from 'react-date-range'
import { useEffect, useState } from 'react';
import Tab from './Tab';
import { useAppDispatch, useAppSelector } from '@/app/hook/hookRedux';
import { selectDateRange } from '@/app/redux/reducer/SearchSlide';

const RangeDatePicker=() => {
    const booking = useAppSelector(state=>state.booking)
    const startDate =  new Date(Date.parse( booking.checkInDate as string)) 
    const endDate = new Date(Date.parse(booking.checkOutDate as string))
     console.log('startDate',startDate)
     console.log('endDate',endDate)

    const PropsDateRange:Range={
        startDate: booking.checkInDate?startDate:undefined,
        endDate: booking.checkOutDate?endDate:undefined,
        key:'selection'
    }
    

    const [state, setState] = useState([
       PropsDateRange
    ]);

    const dispatch = useAppDispatch()
    const handleChangeDate=(item:any)=>{
        setState([item.selection])
    }

    useEffect(()=>{
        dispatch(selectDateRange({
            checkInDate:state[0].startDate?.toLocaleDateString('en-US', 
            { month: 'short', day: 'numeric', year: '2-digit' }),
            checkOutDate:state[0].endDate?.toLocaleDateString('en-US', 
            { month: 'short', day: 'numeric', year: '2-digit' })
        }))
    },[state])

    console.log(state)
    return (
        <Tab className='date-range
                         w-full 
                         my-auto 
                         overflow-hidden 
                         min-h-[300px]'
                         >
            <div >
                <DateRangePicker
                    className='
                         -translate-x-[10px] 
                    '
                    onChange={handleChangeDate}
                    moveRangeOnFirstSelection={false}
                    months={12}
                    ranges={state}
                    direction="horizontal"
                    preventSnapRefocus={true}
                    showDateDisplay={false}
                    showMonthAndYearPickers={false}
                    startDatePlaceholder={undefined}
                    endDatePlaceholder={undefined}
                />
            </div>
        </Tab>
    );
}

export default RangeDatePicker;