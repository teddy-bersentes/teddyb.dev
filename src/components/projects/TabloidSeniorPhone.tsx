import { motion, MotionConfig, Variants } from "framer-motion"

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


export default function TabloidSeniorPhone() {
	return (
		<MotionConfig transition={{ duration: 2, delay: 0.4 }}>
			<svg className='w-12 mt-12' viewBox="0 0 148 296" fill="none" xmlns="http://www.w3.org/2000/svg">
				<motion.path
					d="M24.553 13.9918C50.0364 11.9143 67.482 10.3861 76.8898 9.40718C106.371 6.33957 121.23 9.21466 124.193 9.40718C130.767 9.83419 136.045 18.2177 137.534 35.8973C139.024 53.5769 141.81 247.676 135.014 271.629C129.206 292.101 73.9717 287.106 38.5716 284.709C26.7806 283.911 14.5872 280.705 12.7704 271.629C5.95766 237.596 6.8787 49.4315 12.7704 26.4477"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M71.9864 253.716C101.051 253.155 50.7311 281.504 70.0348 252.619"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M84.9682 30.0224C78.4153 29.9825 71.8361 29.5586 65.4941 31.29"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					opacity="0.503384"
					d="M17.2734 52.6191C55.0867 50.2944 94.9061 49.1191 132.12 49.1191"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					opacity="0.503384"
					d="M22.8379 234.378C53.7809 235.87 90.2359 229.759 119.281 234.378"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>
			</svg>
		</MotionConfig>
	)
}