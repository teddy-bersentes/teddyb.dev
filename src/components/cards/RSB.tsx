import { motion, Variants } from "framer-motion"
import { cardVariants as card, springTransition as transition } from "~/utils/animation"
import Scribbles from "~/components/scribbles"
import { useState } from "react"
import Browser from "~/components/Browser"
import Image from "next/image"
import clsx from "clsx"
import Link from "next/link"

const browser: Variants = {
	initial: { y: 0, rotate: 0.00 },
	hover: { y: -20, rotate: 0.02, transition }
}

export default function RSB() {
	const [hovering, setHovering] = useState(false)

	return (
		<div className='relative w-full lg:grow lg:w-auto'>
			<Link href='/projects/ready-steady-online'>
				<motion.div
					variants={card}
					transition={transition}
					initial='initial'
					whileHover='hover'
					className='relative flex flex-col w-full overflow-hidden bg-white pt-7 px-9 lg:grow lg:w-auto h-96 rounded-4xl hover:cursor-pointer'
					onHoverStart={() => setHovering(true)}
					onHoverEnd={() => setHovering(false)}
				>
					<h2 className='relative z-20 text-xl font-medium leading-5 text-t-gray'>PERSONAL PROJECT</h2>
					<h1 className='font-bold relative z-20 xs:text-[2.5rem] text-4xl leading-10 mt-2'>Ready. Steady. Online.</h1>

					<motion.div
						className='relative z-10 h-full'
						variants={browser}
						transition={transition}
					>
						<Browser
							className='lg:w-[150%] lg:scale-[80%] lg:-top-4 top-16 left-0 absolute'
							url='readysteadbang.com'
						>
							<div className='relative w-full aspect-[1.6] bg-[#FAFAFA]'>
								<Image
									src='/images/ready-stand.png'
									alt='Ready Steady Bang'
									className='object-contain w-full h-full'
									fill
								/>
							</div>

							<div className='absolute inset-0 z-20'>
								<div className={clsx(
									'relative w-full aspect-[1.6] bg-[#FAFAFA]',
									hovering ? 'opacity-100' : 'opacity-0'
								)}>
									<Image
										src='/images/ready-fire.png'
										alt='Ready Steady Bang'
										className='object-contain w-full h-full'
										fill
									/>
								</div>
							</div>

						</Browser>
					</motion.div>
				</motion.div>
			</Link>

			<Scribbles.CowboyHat tilted={hovering} />
		</div>
	)
}