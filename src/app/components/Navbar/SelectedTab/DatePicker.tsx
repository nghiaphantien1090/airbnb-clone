import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import {DateRangePicker,Range} from 'react-date-range'
import { useEffect, useState } from 'react';
import Tab from './Tab';
import { useAppDispatch, useAppSelector } from '@/app/hook/hookRedux';
import { selectCheckInDate, selectCheckOutDate } from '@/app/redux/reducer/SearchSlide';
import { stat } from 'fs';
import { useSelectTab } from '@/app/hook/hook';

const DatePicker = () => {

    const booking = useAppSelector(state=>state.booking)
    const startDate =  new Date(Date.parse( booking.checkInDate as string)) ||undefined
    const endDate = new Date(Date.parse(booking.checkOutDate as string))||undefined

    const PropsDateRange:Range={
        startDate: booking.checkInDate?startDate:undefined,
        endDate: booking.checkOutDate?endDate:undefined,
        key:'selection'
    }

    const [state, setState] = useState([
       PropsDateRange
    ]);

    const dispatch =useAppDispatch()
    const selectedTab = useAppSelector (state=>state.selectTabSearch.selectingTab)

    const {selectTab}= useSelectTab()
    const handleChangeDate=(item:any)=>{
        // if(selectedTab==='checkInTab')
        // {
        //     selectTab({selectingTab:'checkOutTab'})
        // }
        // if(selectedTab==='checkOutTab')
        // {
        //     selectTab({selectingTab:'checkInTab'})
        // }
        return setState([item.selection])
    }

    console.log('state',state)

    useEffect(() => {

        dispatch(selectCheckInDate({
            checkInDate: state[0].startDate?.toLocaleDateString(
                'en-US', { month: 'short', day: 'numeric', year: '2-digit' }
            )
        }))
        dispatch(selectCheckOutDate({
            checkOutDate: state[0].endDate?.toLocaleDateString(
                'en-US', { month: 'short', day: 'numeric', year: '2-digit' }
            )
        }))

    }, [state,dispatch])

    return (
        <Tab className='date-range
                         w-full 
                         my-auto 
                         overflow-hidden 
                         min-h-[300px]'
                         >

            <div style={{}} >
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


export default DatePicker;