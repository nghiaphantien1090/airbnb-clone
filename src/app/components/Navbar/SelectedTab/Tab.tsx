import clsx from "clsx";
import { ComponentProps, ReactElement } from "react";

export type PropsShownTab= {
    children: ReactElement
    className?: string
}

const Tab: React.FC<PropsShownTab> = (
    {
        children,
        className
    }
) => {

    return (
        <div
            className={clsx(`
                absolute
                top-[110px]
                h-auto
                 bg-white
                 rounded-2xl
                 p-4
            `,
                className
            )}
        >
            <div>{children}</div>
        </div>
    );

}

export default Tab;