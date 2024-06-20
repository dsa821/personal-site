import Image from "next/image";
import React from "react"

type Props = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
}

export const PortfolioImage: React.FC<Props> = (props) => {
	return (
		<div className="flex justify-center">
			<Image {...props} />
		</div>
	)
}