import clsx, { ClassValue } from "clsx"
import { HtmlHTMLAttributes, ReactElement } from "react"
import { SelectedInputTab } from "@/app/redux/reducer/SearchSlide"
import { useSelectTab } from "@/app/hook/hook"
import { useAppSelector } from "@/app/hook/hookRedux"

export type PropsInputTab={
    onClick?:()=>void
    className?:string
    children?:ReactElement
    selectedInputTab:SelectedInputTab
}

const InputTab: React.FC<PropsInputTab> = (
    {
        className,
        selectedInputTab,
        children
    }
) => {

    const {selectTab}=useSelectTab()
    
	const selectedTab=useAppSelector(state=>state.selectTabSearch.selectingTab)

    const handleClick=()=>{
        selectTab(selectedInputTab)
    }
    const changeColor = selectedTab===selectedInputTab.selectingTab?'bg-white shadow-2xl':' hover:bg-slate-100 hover:shadow-2xl'

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
            {children}
        </div>
    );
}

export default InputTab;