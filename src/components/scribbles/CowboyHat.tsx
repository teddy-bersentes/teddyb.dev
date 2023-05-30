import { motion, Variants } from "framer-motion"
import { springTransition as transition } from "~/utils/animation"

const hat: Variants = {
	initial: {
		y: 0,
		rotate: 24
	},
	hover: {
		y: -13,
		rotate: 30
	}
}

type Props = {
	tilted?: boolean
}

export default function CowboyHat({ tilted }: Props) {
	return (
		<motion.svg
			className='absolute -right-9 -top-7 w-28'
			viewBox="0 0 200 91"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			variants={hat}
			transition={transition}
			initial='initial'
			animate={tilted ? 'hover' : 'initial'}
		>
			<path d="M38.8246 85.2522C23.4466 77.1655 6.22977 74.1842 5 63.7312C11.1489 55.0401 34.0937 62.5167 56.373 67.1452C89.0444 73.9327 140.938 72.5818 146.657 67.1452C149.357 67.5808 187.006 54.5078 195 67.1452C190.274 73.6313 168.06 81.7997 166.08 82.0846" stroke="black" strokeOpacity="0.9" strokeWidth="9.83819" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M52.9612 59.7249C53.6715 43.4414 64.7529 2.53387 84.2678 6.37152C90.3604 7.5691 95.0709 10.1372 101.274 10.1372C107.446 10.1372 111.663 7.09205 117.894 5.45988C138.044 0.175503 146.052 41.8659 147.654 56.9886" stroke="black" strokeOpacity="0.9" strokeWidth="9.83819" strokeLinecap="round" strokeLinejoin="round" fill='#FFFFFF' />
		</motion.svg>
	)
}