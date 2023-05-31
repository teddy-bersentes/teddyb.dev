import { MotionConfig, Transition, motion } from "framer-motion"
import { useVisibility, lineVariants as line } from "~/utils/animation"
import { useRef } from "react"

const transition: Transition = {
	delay: 0.6,
	duration: 0.8
}

export default function Giraffe() {
	const ref = useRef<SVGSVGElement>(null)
	const visible = useVisibility(ref)

	return (
		<MotionConfig transition={transition}>
			<svg ref={ref} className='absolute bottom-0 sm:w-28 w-[5.125rem] sm:left-[19%] left-auto sm:right-auto right-[15%]' viewBox="0 0 108 142" fill="none" xmlns="http://www.w3.org/2000/svg">
				<motion.path
					d="M51.1475 70.6729C40.0977 69.5899 31.837 70.9508 28.0832 71.0603C25.5807 71.1333 21.0507 70.9676 14.4932 70.5634C14.4932 74.3802 14.4932 76.8044 14.4932 77.8359C14.4932 78.8675 14.8871 86.1509 15.6749 99.6862C33.4108 100.652 43.7569 101.135 46.7131 101.135C51.1475 101.135 67.6718 99.6862 67.6718 99.6862"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="6.64"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M76.7186 13.6475L91.7496 15.6363L103.222 17.8633C104.001 19.8134 103.819 20.9616 102.675 21.3078C101.532 21.6539 94.9354 22.672 82.8855 24.3621C78.1485 41.2143 74.7069 52.1118 72.5607 57.0546C70.4145 61.9973 69.4759 66.4091 69.7449 70.2897C70.162 80.65 70.2663 86.4395 70.0577 87.6582C69.8492 88.8769 69.6255 92.416 69.3867 98.2758"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="6.64"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M65.3839 101.135C65.3839 112.817 65.3839 119.728 65.3839 121.868C65.3839 124.008 65.3839 128.134 65.3839 134.245L64.2402 137.159"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="6.64"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M57.9502 100.563V115.648L59.0938 132.78L58.8186 136.016"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="6.64"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M16.7793 99.9912L20.782 127.303V136.015"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="6.64"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M15.637 98.2759L14.4693 118.932L11.0625 134.976V138.303"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="6.64"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M76.2484 13.6475C70.2292 24.467 66.1069 33.1017 63.8815 39.5518C61.6561 46.0019 58.5355 56.2369 54.5195 70.2569"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="6.64"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M14.4928 72.5444C11.7402 73.4884 9.57053 74.9116 7.98381 76.814C6.3971 78.7163 5.13589 80.5334 4.2002 82.2653"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="6.64"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M77.9639 13.0758C77.2015 8.84707 76.8203 6.4423 76.8203 5.8615C76.8203 5.2807 76.8203 4.4452 76.8203 3.35498"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="6.64"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M79.1074 13.0761C79.9338 11.2101 80.6963 9.11341 81.3947 6.78613"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="6.64"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M75.1052 14.791L71.1025 15.9346"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="6.64"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M74.5329 29.0869C73.1506 31.5131 72.1975 33.6098 71.6738 35.3769"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="6.64"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M72.2458 43.9536C70.8634 46.3798 69.9104 48.4765 69.3867 50.2436"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="6.64"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M64.2398 56.5332C63.9633 57.8566 63.7727 59.0002 63.668 59.9641"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="6.64"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M31.6469 77.7412C28.2477 77.745 25.9604 77.9019 24.7852 78.2121"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="6.64"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M37.365 89.1772C35.3821 89.181 34.0479 89.338 33.3623 89.6481"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="6.64"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M45.9418 82.2148C43.1091 82.2111 41.203 82.0541 40.2236 81.7439"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="6.64"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>
			</svg>
		</MotionConfig>
	)
}