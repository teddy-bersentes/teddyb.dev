import { Variants, motion } from "framer-motion";

const leftEye: Variants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
	}
}

const rightEye: Variants = {
	hidden: {
		opacity: 0,
		pathLength: 0
	},
	visible: {
		opacity: 1,
		pathLength: 1
	}
}

const mouth: Variants = {
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

export default function Smile({ visible }: Props) {

	return (
		<svg className='absolute w-24 mt-24 bottom-8 left-8 -rotate-12' viewBox="0 0 141 150" fill="none" xmlns="http://www.w3.org/2000/svg">
			<motion.path
				variants={leftEye}
				initial='hidden'
				animate={visible ? 'visible' : 'hidden'}
				transition={{ duration: 0.25, type: 'spring' }}
				d="M35.3377,10C34.6575,20.8496 32.1612,35.3804 33.7903,47.411"
				stroke="black"
				strokeOpacity="0.9"
				strokeWidth="20"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			<motion.path
				variants={rightEye}
				initial='hidden'
				animate={visible ? 'visible' : 'hidden'}
				transition={{ duration: 0.25, delay: 0.2, type: 'spring' }}
				d="M103.915,11.9604C103.436,23.306 103.296,34.6018 103.143,45.9704"
				stroke="black"
				strokeOpacity="0.9"
				strokeWidth="20"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			<motion.path
				variants={mouth}
				initial='hidden'
				animate={visible ? 'visible' : 'hidden'}
				transition={{ duration: 0.25, delay: 0.4, type: 'spring' }}
				d="M10 117.511C51.7721 148.981 95.9556 147.64 130.735 107.188"
				stroke="black"
				strokeOpacity="0.9"
				strokeWidth="20"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}