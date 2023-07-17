import { memo } from "react";
import Button from "./Button";

type PropsExpand={
    handleExpand:()=>void,
    state:any
}
const ExpandButton :React.FC<PropsExpand>=memo( (
    {handleExpand: handleExpand,state}
) => {
    return ( 
			<Button 
				onClick={handleExpand}
				type='button'
				className='
					w-[100px]
					text-[13px]
					my-auto 
					px-2 
					text-[#222222] 
					font-semibold'>
						<>
						    {state}
						</>
			</Button>
     );
})
ExpandButton.displayName='ExpandButton'
 
export default ExpandButton;