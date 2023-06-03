import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { springTransition as transition, cardVariants as card } from "~/utils/animation"
import { useState } from "react"
import Scribble from "~/components/scribbles"
import Link from "next/link"

const primary: Variants = {
	initial: { y: 0, rotate: 0.00 },
	hover: { y: -10, rotate: 0.02, transition }
}

const secondary: Variants = {
	initial: { y: 0, rotate: 0.00 },
	hover: {
		y: -10,
		rotate: 0.02,
		transition: {
			...transition,
			delay: 0.2
		}
	}
}

export default function SmileFood() {
	const [visible, setVisible] = useState(false)

	return (
		<Link href='/projects/smile-food-system'>
			<div className='relative'>
				<motion.div
					className='relative flex flex-col w-full mt-16 overflow-hidden bg-white cursor-pointer h-96 rounded-4xl pt-7 px-9'
					initial='initial'
					whileHover='hover'
					variants={card}
					transition={transition}
					onHoverStart={() => setVisible(true)}
					onHoverEnd={() => setVisible(false)}
				>
					<svg className='absolute inset-0 z-0' width="100%" height="100%">
						<pattern id="pattern-circles" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
							<circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#0f172a" opacity="0.15" />
						</pattern>
						<rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
					</svg>

					<div
						className='absolute inset-0 w-full h-full z-[5]'
						style={{ background: 'radial-gradient(60% 65% at 50% 50%, rgba(217, 217, 217, 0) 0%, #ffffff 100%)' }}
					/>

					<h2 className='relative z-10 text-xl font-medium leading-5 bg-white text-t-gray'>SMILE FOOD SYSTEM</h2>
					<h1 className='font-bold xs:text-[2.5rem] text-4xl leading-10 mt-2 bg-white relative z-10'>Smile Food System</h1>

					<div className='relative z-10 flex flex-col items-center justify-center grow'>
						<div className='relative min-[700px]:flex hidden flex-row items-center justify-center w-full pt-20 lg:pt-16 lg:gap-40 min-[796px]:gap-16'>
							<motion.figure
								className='w-56 aspect-[0.49] relative'
								variants={secondary}
								transition={{ ...transition, delay: 0.2 }}
							>
								<Image
									alt='Smile Food System'
									src='/images/smile-phone-2.png'
									className='object-contain rotate-[-12deg] bg-white rounded-4xl'
									fill
								/>
							</motion.figure>

							<motion.figure
								className='w-56 aspect-[0.49] relative'
								variants={secondary}
								transition={{ ...transition, delay: 0.2 }}
							>
								<Image
									alt='Smile Food System'
									src='/images/smile-phone-3.png'
									className='object-contain rotate-[12deg] bg-white rounded-4xl'
									fill
								/>
							</motion.figure>
						</div>

						<motion.figure
							className='w-56 aspect-[0.49] absolute md:top-6 top-10'
							variants={primary}
							transition={transition}
						>
							<Image
								alt='Smile Food System'
								src='/images/smile-phone-1.png'
								className='object-contain bg-white rounded-4xl'
								fill
							/>
						</motion.figure>
					</div>
				</motion.div>

				<Scribble.Smile visible={visible} />
			</div>
		</Link>
	)
}