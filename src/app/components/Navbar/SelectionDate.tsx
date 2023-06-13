import clsx from "clsx";
import { Children, CSSProperties, HtmlHTMLAttributes, ReactElement, StyleHTMLAttributes } from "react";
import { ClassificationTypeNames } from "typescript";

export type PropsSelection={
    title:string
    subTitle?:string
    onClick?:()=>void
    styleItem?:string
}
const SelectionDate:React.FC<PropsSelection>= (
    {title,
    subTitle,
    onClick,
    styleItem}
) => {
    return (
        <div
            className={clsx(
                `
                        text-[12px]
                        hover:rounded-full
                        cursor-pointer
                        hover:bg-slate-100	 
                        flex
                        flex-col
                        justify-center
                    `,
                styleItem
            )}
            onClick={onClick}
        >
            <div className='flex flex-col justify-center'>
                <>
                    <label
                        className='block font-semibold text-slate-600'
                    >
                        {title}
                    </label>
                    <p className='block'>
                        {subTitle}
                    </p>
                </>
            </div>
        </div>
    );
}

export default SelectionDate;