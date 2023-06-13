import { ReactElement } from "react";

export type PropsButton={
    onClick:()=>void
    children?:ReactElement
    className?:string
    type:'button'|'submit'
}

const Button :React.FC<PropsButton>= ({onClick,children,className,type}) => {
    return ( 
        <button onClick={onClick} className={className} type={type}>
            {children}
        </button>
     );
}

export default Button;