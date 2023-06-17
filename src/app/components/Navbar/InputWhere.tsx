import { useAppSelector } from "@/app/hook/hookRedux";
import clsx from "clsx";
import InputTab from "./InputTab";
import { PropsInputTab } from "./InputTab";
import {memo, useCallback} from 'react'
import React from "react";

const InputWhere:React.FC<PropsInputTab>= (
    {selectedInputTab}
) => {

    const activeTab = useAppSelector(state => state.selectTabSearch.selectingTab)

    const color = activeTab === selectedInputTab.selectingTab ? 'bg-white group-hover:bg-white' :
    activeTab!==undefined?'group-hover:bg-slate-100 bg-slate-200':'bg-white group-hover:bg-slate-100'

    return (
        <InputTab
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
            <>
                <label
                    className='block font-semibold text-slate-600'
                >
                    Where
                </label>
                <input
                    type='text'
                    className={clsx(`  outline-none font-normal `,color)}
                    placeholder='Search destinations'
                />
            </>
        </InputTab>

    );
}

export default React.memo (InputWhere);