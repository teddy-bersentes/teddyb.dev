import { Variants, motion } from "framer-motion"
import Image from "next/image"
import { cardVariants as card, springTransition as transition } from "~/utils/animation"
import Scribble from "~/components/scribbles"
import { useState } from "react"
import Link from "next/link"

const phone: Variants = {
	initial: { y: 0, rotate: 0.02 },
	hover: { y: -10, rotate: 0.02, transition }
}

export default function CookingPlus() {
	const [visible, setVisible] = useState(false)

	return (
		<Link href='https://github.com/teddy-bersentes/cooking-plus' target='_blank' className='relative w-full lg:w-96'>
			<div className='relative w-full lg:w-96'>
				<motion.div
					className='relative flex flex-col w-full overflow-hidden bg-white h-96 lg:w-96 rounded-4xl pt-7 px-9 hover:cursor-pointer'
					variants={card}
					initial='initial'
					whileHover='hover'
					transition={transition}
					onHoverStart={() => setVisible(true)}
					onHoverEnd={() => setVisible(false)}
				>
					<div className='absolute lg:-left-12 -left-8 w-[200%] bg-black lg:-rotate-[20deg] -rotate-[16deg] -bottom-2 lg:h-[55%] xs:h-3/4 h-1/2' />
					<h2 className='text-xl font-medium leading-5 text-t-gray'>PERSONAL PROJECTS</h2>
					<h1 className='font-bold xs:text-[2.5rem] text-4xl leading-10 mt-2'>Cooking +</h1>

					<motion.div
						className='absolute flex self-center w-60 aspect-[0.49] -bottom-[62%]'
						variants={phone}
						transition={transition}
					>
						<Image
							src='/images/cooking-plus-app.png'
							alt='Tabloid Phone'
							fill
						/>
					</motion.div>

				</motion.div>

				<Scribble.Pizza visible={visible} />
			</div>
		</Link>
	)
}