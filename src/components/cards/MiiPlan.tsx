import clsx, { ClassValue } from "clsx";
import { motion, Variants } from "framer-motion";
import { cardVariants as card, springTransition as transition } from "~/utils/animation";
import Browser from "../Browser";
import Image from "next/image";

type CableProps = {
	width: number
	height: number
	path: string
	className?: ClassValue
}

function Cable({ width, height, path, className }: CableProps) {
	// width = 289;
	// height = 34;
	// path = "M289 1H131.032C129 1 129 1 129 2.95V33.175H0.5";
	return (
		<svg className={clsx(className)} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
			<path d={path} stroke="url(#pulse-1)" strokeLinecap="round" strokeWidth="2" />
			<defs>
				<motion.linearGradient
					animate={{
						x1: [0, width * 2],
						x2: [0, width],
						y1: [height, height / 2],
						y2: [height * 2, height]
					}}
					transition={{
						duration: 1.85,
						repeat: Infinity
					}}
					id="pulse-1"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#2EB9DF" stopOpacity="0" />
					<stop stopColor="#2EB9DF" />
					<stop offset="1" stopColor="#9E00FF" stopOpacity="0" />
				</motion.linearGradient>
			</defs>
		</svg>
	)
}

const browser: Variants = {
	initial: { y: 0, rotate: 0.00 },
	hover: { y: -20, rotate: 0.02, transition }
}

export default function MiiPlan() {
	return (
		<motion.div
			variants={card}
			initial='initial'
			whileHover='hover'
			transition={transition}
			className='relative w-full overflow-hidden bg-white cursor-pointer pt-7 px-9 mt-28 h-96 rounded-4xl'
		>
			<div className="absolute inset-0 z-0 bg-[url(/grid.svg)] bg-center" />
			<div
				className='absolute inset-0 w-full h-full z-[5]'
				style={{ background: 'radial-gradient(60% 50% at 50% 50%, rgba(217, 217, 217, 0) 0%, #ffffff 100%)' }}
			/>

			<h2 className='relative z-20 text-xl font-medium leading-5 text-t-gray'>MIIPLAN</h2>
			<h1 className='font-bold relative z-20 xs:text-[2.5rem] text-4xl leading-10 mt-2'>AI Legal Plans</h1>

			<motion.div
				className='relative z-10'
				variants={browser}
				transition={transition}
			>
				<Browser
					className='z-20 min-w-[28.125rem] sm:relative sm:right-auto absolute sm:top-16 top-40 xs:-right-32 -right-36'
					url='miiplan.ai'
				>
					<div className='relative w-full aspect-[1.6] bg-white'>
						<Image
							src='/images/miiplan.png'
							alt='MiiPlan Panel'
							className='object-contain w-full h-full'
							fill
						/>
					</div>
				</Browser>
			</motion.div>
		</motion.div>
	)
}