import { Variants, motion } from "framer-motion"
import { cardVariants as card, springTransition as transition } from "~/utils/animation"
import Image from "next/image"
import Browser from "~/components/Browser"
import Link from "next/link"

const browser: Variants = {
	initial: { y: 0 },
	hover: { y: -10 }
}

export default function Self() {
	return (
		<Link href='https://github.com/teddy-bersentes/teddyb.dev' target='_blank' className='w-full lg:basis-1/2 lg:w-auto'>
			<motion.div
				variants={card}
				transition={transition}
				initial='initial'
				whileHover='hover'
				className='relative flex flex-col w-full overflow-hidden bg-white h-96 lg:basis-1/2 rounded-4xl pt-7 px-9 hover:cursor-pointer'
			>
				<h2 className='relative z-20 text-xl font-medium leading-5 text-t-gray'>PERSONAL PROJECT</h2>
				<h1 className='font-bold relative z-20 xs:text-[2.5rem] text-4xl leading-10 mt-2'>This Website?</h1>

				<motion.div
					className='relative z-10 h-full'
					variants={browser}
					transition={transition}
				>
					<Browser
						className='lg:w-[150%] lg:scale-[80%] lg:-top-4 top-16 left-0 absolute'
						url='teddyb.dev'
					>
						<div className='relative w-full aspect-[1.6] bg-[#FAFAFA]'>
							<Image
								src='/images/teddyb.png'
								alt='An image of the same website you are on now'
								className='object-contain w-full h-full'
								fill
							/>
						</div>
					</Browser>
				</motion.div>
			</motion.div>
		</Link>
	)
}