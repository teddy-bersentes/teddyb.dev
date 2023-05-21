import React from "react";
import clsx from "clsx";

type Props = React.ComponentPropsWithoutRef<"button">

export default function Button({ className, ...props }: Props) {
	return (
		<button
			className={clsx(
				'px-8 py-4 rounded-xl bg-black text-white font-medium leading-5',
				className
			)}
			{...props}
		/>
	)
}