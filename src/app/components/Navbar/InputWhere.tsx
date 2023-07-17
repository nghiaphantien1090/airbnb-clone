import { useAppDispatch, useAppSelector } from "@/app/hook/hookRedux";
import clsx from "clsx";
import InputTab from "./InputTab";
import { PropsInputTab } from "./InputTab";
import {memo, useCallback} from 'react'
import React from "react";
import { ClearStateBooking } from "./ClearStateBooking";
import { removeDestination } from "@/app/redux/reducer/SearchSlide";

const InputWhere:React.FC<PropsInputTab>= (
    {selectedInputTab}
) => {

    const activeTab = useAppSelector(state => state.selectTabSearch.selectingTab)

    const color = activeTab === selectedInputTab.selectingTab ? 'bg-white group-hover:bg-white' :
    activeTab!==undefined?'group-hover:bg-slate-100 bg-slate-200':'bg-white group-hover:bg-slate-100'

    const destination = useAppSelector(state=>state.booking.destination)
    const dispath=useAppDispatch()

    const handleClear=()=>{
        dispath(removeDestination())
    }

    const isExpandSearch = useAppSelector(state=>state.toogleSearch.isExpanded)

    return (
        <InputTab
            handleClear={handleClear}
            isShowClearIcon={destination&&isExpandSearch?true:false}
            className='
								text-[12px]
                                w-1/3
								px-6
								py-[9px]
								flex
								flex-col
								justify-center
							'
            selectedInputTab={selectedInputTab}
        >
            <div
                className='
                    flex
                    flex-row
                    justify-between
                ' 
            >
            <div>
                <label
                    className='block font-semibold text-slate-600'
                >
                    Where
                </label>
                {
                    destination?
                    <p
                        className='
                            text-slate-400
                        ' 
                    >
                        {destination}
                    </p>
                    :
                    <input
                        type='text'
                        className={clsx(`  outline-none font-normal `,color)}
                        placeholder='Search destinations'
                    />

                }
            </div>
            {/* <ClearStateBooking
                isShow={destination?true:false}
                onClick={handleClear}
            /> */}
            </div>
        </InputTab>

    );
}

export default React.memo (InputWhere);