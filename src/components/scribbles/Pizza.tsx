import { Variants, motion } from "framer-motion"
import { infiniteTransition } from "~/utils/animation"

const line: Variants = {
	hidden: {
		opacity: 0,
		pathLength: 0
	},
	visible: {
		opacity: 1,
		pathLength: 1
	}
}

type Props = {
	visible: boolean
}

export default function Pizza({ visible }: Props) {
	return (
		<motion.svg
			className='absolute top-0 z-50 w-16 md:w-20 sm:-right-12 right-4'
			viewBox="0 0 173 113"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			initial={{ rotate: 0, y: 0 }}
			animate={{ rotate: 6, y: -10 }}
			transition={{ ...infiniteTransition, duration: 1.6 }}
		>
			<motion.path
				d="M76.3203 24.4848C66.9875 30.4694 58.2308 37.8477 50.7924 45.9716C41.5734 56.0397 8.39567 85.6099 5.59125 96.3302C4.67831 99.8208 2.0693 104.517 6.52824 107.074C16.8957 113.018 37.6176 99.2501 48.9191 97.4494C52.1013 96.9428 56.3478 107.939 61.0517 107.19C63.0329 106.874 72.5665 93.1428 80.7705 91.1826C84.9589 90.1819 88.736 95.6592 93.4174 95.2118C97.624 94.8097 102.291 87.0517 107.001 85.3632C114.136 82.8064 118.568 87.5346 125.035 88.0496C126.877 88.1959 130.813 87.7499 132.529 86.9304C135.684 85.4231 137.105 80.741 140.024 78.649C143.275 76.3188 148.408 76.9264 150.797 73.5007C153.842 69.1363 141.358 62.1908 139.087 59.4006C128.835 46.8036 95.9549 17.285 77.0232 20.9037C75.7683 21.1434 74.5236 23.0863 73.51 23.8131"
				stroke="black"
				strokeOpacity="0.9"
				strokeWidth="7.84393"
				strokeLinecap="round"
				strokeLinejoin="round"
				variants={line}
				initial='hidden'
				animate={visible ? 'visible' : 'hidden'}
			/>

			<motion.path
				d="M82.1111 16.5615C88.5611 -0.00144989 94.8171 1.73705 107.19 12.2892C119.095 22.4436 172.375 55.7803 168.831 72.7823C167.739 78.0202 156.352 80.6248 151.955 81.3277C141.616 82.9815 132.086 88.6283 121.486 90.3234C89.2369 95.4801 56.4657 101.046 24.4541 107.19"
				stroke="black"
				strokeOpacity="0.9"
				strokeWidth="7.84393"
				strokeLinecap="round"
				strokeLinejoin="round"
				variants={line}
				initial='hidden'
				animate={visible ? 'visible' : 'hidden'}
			/>

			<motion.path
				d="M162.182 62.1895C157.659 62.8156 150.591 65.0641 150.591 69.6895"
				stroke="black"
				strokeOpacity="0.9"
				strokeWidth="7.84393"
				strokeLinecap="round"
				strokeLinejoin="round"
				variants={line}
				initial='hidden'
				animate={visible ? 'visible' : 'hidden'}
			/>

			<motion.path
				opacity="0.503384"
				d="M111.264 51.288C113.578 47.3094 121.389 45.9876 125.284 48.3911C137.387 55.8592 133.548 76.9098 114.712 74.9114C103.148 73.6845 103.148 62.1895 111.264 55.7454"
				stroke="black"
				strokeOpacity="0.9"
				strokeWidth="6.86344"
				strokeLinecap="round"
				strokeLinejoin="round"
				variants={line}
				initial='hidden'
				animate={visible ? 'visible' : 'hidden'}
			/>

			<motion.path
				opacity="0.503384"
				d="M72.7963 69.0246C75.5196 66.6954 79.2412 64.917 82.9399 64.917C94.1948 64.917 104.047 74.2839 91.6683 82.0329C76.5751 91.4801 60.6012 86.3515 73.5035 69.7095"
				stroke="black"
				strokeOpacity="0.9"
				strokeWidth="6.86344"
				strokeLinecap="round"
				strokeLinejoin="round"
				variants={line}
				initial='hidden'
				animate={visible ? 'visible' : 'hidden'}
			/>

			<motion.path
				opacity="0.503384"
				d="M69.2501 32.5922C71.8187 27.7215 77.0266 24.9558 82.8488 26.4662C86.9128 27.5201 90.6075 31.5665 93.5855 34.1802C111.829 50.1961 68.7725 66.7192 68.7725 44.8443C68.7725 39.5674 69.0421 37.8783 73.3059 34.6345"
				stroke="black"
				strokeOpacity="0.9"
				strokeWidth="6.86344"
				strokeLinecap="round"
				strokeLinejoin="round"
				variants={line}
				initial='hidden'
				animate={visible ? 'visible' : 'hidden'}
			/>

			<motion.path
				opacity="0.503384"
				d="M26.5 86.3666C27.6698 83.0059 29.9813 80.1189 32.933 77.9146C44.1707 69.5222 61.5662 82.1008 52.7082 90.37C43.2954 99.1579 23.598 99.3677 30.7884 82.5856"
				stroke="black"
				strokeOpacity="0.9"
				strokeWidth="6.86344"
				strokeLinecap="round"
				strokeLinejoin="round"
				variants={line}
				initial='hidden'
				animate={visible ? 'visible' : 'hidden'}
			/>
		</motion.svg>
	)
}