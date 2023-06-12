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
		>
			{children}
		</div>
	);
}
 
export default Container;