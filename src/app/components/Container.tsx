import React, { Children, ReactElement} from "react";

type Children={
    children:ReactElement
}

const Container = ({children}:Children) => {
	return (
		<div
			className='
				xl:px-20 
			' 
			//Change 10_13_2023
		>
			{children}
		</div>
	);
}
 
export default Container;