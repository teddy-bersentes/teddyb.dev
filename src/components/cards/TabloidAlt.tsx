import { Variants, motion } from "framer-motion"
import Image from "next/image"
import { cardVariants as card, springTransition as transition } from "~/utils/animation"
import Link from "next/link"

const phone: Variants = {
	initial: { y: 0, rotate: 0.02 },
	hover: { y: -10, rotate: 0.02, transition }
}

export default function LifeSphere() {
	return (
		<Link href='/projects/tabloid-senior' className='w-full lg:w-[23.125rem]'>
			<motion.div
				variants={card}
				initial='initial'
				whileHover='hover'
				transition={transition}
				className='relative flex flex-col w-full overflow-hidden bg-white cursor-pointer h-96 lg:w-[23.125rem] rounded-4xl pt-7 px-9'
			>
				<h2 className='text-xl font-medium leading-5 text-t-gray'>TABLOID APPS</h2>
				<h1 className='font-bold xs:text-[2.5rem] text-4xl leading-10 mt-2'>Social Media</h1>

				<motion.div
					className='absolute flex self-center w-64 h-[32.25rem] -bottom-[70%]'
					variants={phone}
					transition={transition}
				>
					<Image
						src='/images/tabloid-phone-alternate.png'
						alt='Tabloid Phone'
						fill
					/>
				</motion.div>
			</motion.div>
		</Link>
	)
}