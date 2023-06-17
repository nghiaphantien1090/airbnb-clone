import clsx from "clsx";
import { TiDeleteOutline } from "react-icons/ti";

export type PropsClear={
	isShow:boolean
	onClick?:()=>void
}
const ClearStateBooking:React.FC<PropsClear>= ({
	isShow,onClick
}) => {
	return (
		<>
			<TiDeleteOutline
				className={clsx(`
                cursor-pointer
				fill-slate-400 
				my-auto
                
				${isShow?'visible':'invisible'}	
				`)}	
				onClick={onClick}
				size={20}
			/>
		</>
	  );
}
 
export {ClearStateBooking};