import clsx from "clsx"
import { motion } from "framer-motion"
import { infiniteTransition } from "~/utils/animation"

type Props = {
	className?: string
}

export default function UFO({ className }: Props) {
	return (
		<motion.svg
			className={clsx(className)}
			viewBox="0 0 94 63"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			initial={{ y: 0, rotate: 3 }}
			animate={{ y: [-5, 5], rotate: 8 }}
			transition={{ duration: 2, ...infiniteTransition }}
		>
			<path d="M19.8788 40.4208C15.1918 42.5187 2.72082 56.8534 5.05382 57.878C7.38682 58.9026 50.1123 50.3074 74.0967 36.4862C75.5939 35.6229 92.3803 27.1851 90.9732 25.4316C90.0054 24.2251 71.0952 23.9075 68.8991 23.9519" stroke="black" strokeOpacity="0.9" strokeWidth="5.4" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M25.9358 37.5305C32.8281 39.3172 39.9751 36.4898 46.5993 34.5903C55.0483 32.1676 63.2606 28.2432 64.9943 24.6406C68.2632 17.8479 50.903 3.07497 38.576 6.60969C30.2141 9.00741 21.3006 15.8429 24.0225 35.7425" stroke="black" strokeOpacity="0.9" strokeWidth="5.4" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M78.5003 33.6994C79.0207 35.0545 81.184 36.2516 81.0996 37.838C80.9519 40.6557 24.9718 62.4829 19.0504 60.1215" stroke="black" strokeOpacity="0.9" strokeWidth="5.4" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M32.5104 20.4075C39.7342 7.99052 44.6465 33.6443 32.7875 26.7558C30.4443 25.0596 31.2595 22.9898 32.0293 20.7467" stroke="black" strokeOpacity="0.9" strokeWidth="4.05" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M45.6273 17.3177C47.3788 14.6633 48.968 13.7175 51.575 15.0712C62.3388 20.6604 42.8663 31.9321 45.0525 20.0134" stroke="black" strokeOpacity="0.9" strokeWidth="4.05" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M46.8772 28.1112C46.5042 29.1932 46.7713 30.4406 46.7174 31.6055" stroke="black" strokeOpacity="0.9" strokeWidth="4.05" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M56.2686 24.1252C57.1539 25.3952 57.8396 26.8124 58.4916 28.2294" stroke="black" strokeOpacity="0.9" strokeWidth="4.05" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M40.2217 28.2954C41.2959 29.7506 42.0369 31.4778 42.6732 33.1962" stroke="black" strokeOpacity="0.9" strokeWidth="4.05" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M33.6207 29.757C32.6689 31.925 31.7908 34.0702 30.724 36.1914" stroke="black" strokeOpacity="0.9" strokeWidth="4.05" strokeLinecap="round" strokeLinejoin="round" />
		</motion.svg>
	)
}