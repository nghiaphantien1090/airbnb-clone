import clsx from "clsx";

export type PropsSelection={
    title:string
    subTitle?:string
    onClick?:()=>void
    styleItem?:string
}
const SelectionDate:React.FC<PropsSelection>= (
    {title,
    subTitle,
    styleItem}
) => {
    return (
        <div
            className={clsx(
                `
                        text-[12px]
                        cursor-pointer
                        flex
                        flex-col
                        justify-center
                        h-full
                    `,
                styleItem
            )}
        >
            <div className='flex flex-col justify-center h-full'>
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