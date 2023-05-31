import { motion } from "framer-motion"
import Image from "next/image"
import { cardVariants as card, springTransition as transition } from "~/utils/animation"

export default function Physarum() {
	return (
		<motion.div
			className='relative flex flex-col w-full overflow-hidden bg-black pt-7 px-9 lg:basis-1/2 lg:w-auto h-96 rounded-4xl hover:cursor-pointer'
			variants={card}
			initial='initial'
			whileHover='hover'
			transition={transition}
		>

			<h2 className='text-xl font-medium leading-5 text-[#949494]'>PERSONAL PROJECTS</h2>
			<h1 className='font-bold xs:text-[2.5rem] text-4xl text-white leading-10 mt-2'>Physarum</h1>

			<div className='absolute w-full h-full top-32'>
				<div className='relative w-[calc(100%-4.5rem)] aspect-[1.28]'>
					<Image
						alt='Physarum Simulation'
						src='/images/physarum.png'
						fill
						className='object-contain'
					/>
				</div>

			</div>
		</motion.div>
	)
}