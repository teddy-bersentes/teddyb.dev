import Image from "next/image"
import { motion, Transition, Variants } from "framer-motion"

const transition: Transition = {
	type: 'spring',
	stiffness: 100,
	damping: 20,
	bounce: 0,
	mass: 0.4
}

const containerVariants: Variants = {
	initial: {
		y: 0,
		rotate: 0.00,
		boxShadow: '0px 0px 22px rgba(0, 0, 0, 0.0)',
	},
	hover: {
		y: -4,
		rotate: 0.02,
		boxShadow: '0px 0px 22px rgba(0, 0, 0, 0.02)',
	}
}

const phoneVariants: Variants = {
	initial: {
		y: 0,
		rotate: 0.00
	},
	hover: {
		y: -8,
		rotate: 0.02,
		transition
	}
}

export default function SiteCommsMobile() {
	return (
		<motion.div
			className='relative flex flex-col w-full overflow-hidden bg-white h-96 lg:w-96 rounded-4xl pt-7 px-9 hover:cursor-pointer'
			variants={containerVariants}
			initial={'initial'}
			whileHover={'hover'}
			transition={transition}
		>
			<div className="absolute top-0 left-0 w-full h-full bg-repeat bg-[url('/topography.svg')]" />

			<h2 className='text-xl font-medium leading-5 text-t-gray'>SITE COMMS</h2>
			<h1 className='font-bold xs:text-[2.5rem] text-4xl leading-10 mt-2'>Time Carding</h1>

			<motion.div
				className='absolute flex self-center w-64 h-[32.25rem] -bottom-[70%]'
				variants={phoneVariants}
				transition={transition}
			>
				<Image
					src='/images/iphone-site-comms.png'
					alt='Site Comms Mobile'
					fill
					className='object-contain'
				/>
			</motion.div>
		</motion.div>
	)
}