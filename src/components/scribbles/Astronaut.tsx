import { motion, MotionConfig, Transition } from "framer-motion"
import { useVisibility, lineVariants as line } from "~/utils/animation"
import { useRef } from "react"

const transition: Transition = {
	delay: 1.8,
	duration: 0.5
}

export default function Astronaut() {
	const ref = useRef<SVGSVGElement>(null)
	const visible = useVisibility(ref)

	return (
		<MotionConfig transition={transition}>
			<svg ref={ref} className='absolute left-auto w-16 sm:w-20 sm:right-auto sm:left-16 sm:top-auto right-4 top-4' viewBox="0 0 82 101" fill="none" xmlns="http://www.w3.org/2000/svg">
				<motion.path
					d="M28.2349 29.4511C35.4349 6.65124 43.4925 2.69992 57.6966 8.70001C71.9006 14.7001 62.903 34.1586 57.6966 44.2444M17.603 51.98C13.703 58.58 9.95048 69 4.40004 82.05C1.66251 86.9883 13.7002 90.0001 16.5507 90.0001C18.6531 86.4001 26.0026 69.6801 26.8093 69.6801C27.6159 69.6801 16.1899 91.2211 18.6529 93.6801C19.44 94.4658 28.1682 99.2171 29.45 98.2501C37.7315 81.3971 39.8216 80.7402 47.6029 63.68"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="4.8"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M57.2588 49.4316C63.7996 61.8002 62.42 70.1318 61.0996 74.1002C60.4784 75.966 61.571 76.6628 59.5307 78.3676"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="4.8"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M24.5469 34.3286C16.2864 40.1636 9.64961 41.55 2.59961 52.8"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="4.8"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M52.6996 61.1806C42.277 56.4771 27.4893 50.2192 17.5998 47.0645"
					stroke="black"
					strokeOpacity="0.5"
					strokeWidth="4.8"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M57.2013 43.5003C48.7386 39.6893 36.7316 34.6193 28.7011 32.0649"
					stroke="black"
					strokeOpacity="0.5"
					strokeWidth="4.8"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M32.1582 92.0887C25.1294 87.885 15.146 82.2205 8.44278 79.1757"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="4.8"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M15.0684 33.8997C17.7941 26.8367 23.7403 7.82197 27.3941 5.24968C30.2286 3.25422 33.3896 5.23942 35.9456 6.07866"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="4.8"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M72.1907 20.3999C78.0387 21.7375 81.116 25.4688 78.4605 31.2594C73.5674 41.9296 70.263 49.6828 64.5684 59.9999"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="4.8"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M48.9775 33.922C62.306 36.297 64.5013 18.2163 52.6081 13.4233C39.9647 8.32796 31.083 25.0545 42.9826 32.258"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="4.8"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate={visible ? 'visible' : 'hidden'}
				/>

				<motion.path
					d="M17.9505 4.84169C29.789 -2.53166 29.0328 14.6781 19.7948 13.7442C16.2243 13.3841 15.7532 6.05577 18.5653 4.63466"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="4.8"
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