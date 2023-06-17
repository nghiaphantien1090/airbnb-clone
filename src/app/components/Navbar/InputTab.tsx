import clsx, { ClassValue } from "clsx"
import { HtmlHTMLAttributes, ReactElement, useCallback, useMemo } from "react"
import { SelectedInputTab } from "@/app/redux/reducer/SearchSlide"
import { useSelectTab } from "@/app/hook/hook"
import { useAppDispatch, useAppSelector } from "@/app/hook/hookRedux"
import {memo} from 'react'
import { ClearStateBooking } from "./ClearStateBooking"

export type PropsInputTab={
    onClick?:()=>void
    className?:string
    children?:ReactElement
    selectedInputTab:SelectedInputTab
    isShowClearIcon?:boolean
    handleClear?:()=>void
    
}

const InputTab: React.FC<PropsInputTab> = (
    {
        className,
        selectedInputTab,
        children,
        handleClear,
        isShowClearIcon=false
    }
) => {

    const {selectTab}=useSelectTab()
    
	const selectedTab=useAppSelector(state=>state.selectTabSearch.selectingTab)

    const isExpandSearch = useAppSelector(state=>state.toogleSearch.isExpanded)
    

    const handleClick = ()=>selectTab(selectedInputTab)

    const changeColor =selectedTab===selectedInputTab.selectingTab?'bg-white shadow-2xl':' hover:bg-slate-100 hover:shadow-2xl'

    const destination = useAppSelector(state=>state.booking.destination)

    return (
        <div
            className={clsx(`
                                group
                                h-full
								cursor-pointer
                                rounded-full
                                ${changeColor}
							`,
                            className,
                            )}
            onClick={handleClick}
        >
            <div 
            className='flex flex-row justify-between h-full' 
            >
            {children}
            <div className='
                mr-2 
                my-auto
            
            '>
                    <ClearStateBooking
                        isShow={isShowClearIcon}
                        onClick={handleClear}
                    />
            </div>
            </div>
        </div>
    );
}

export default memo(InputTab);