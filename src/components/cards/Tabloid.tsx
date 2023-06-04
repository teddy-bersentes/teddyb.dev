import clsx, { ClassValue } from "clsx"
import Image from "next/image"
import { Variants, motion } from "framer-motion"
import { springTransition as transition, cardVariants as card } from "~/utils/animation"
import Link from "next/link"


function Phone({ type, className }: {
	type: '1' | '2' | '3' | '4' | '5'
	className?: ClassValue
}) {
	return (
		<figure className={clsx('aspect-[0.49] relative', className)}>
			<Image
				src={`/images/tabloid-phone-${type}.png`}
				alt='Tabloid phone'
				fill
			/>
		</figure>
	)
}

const leftRow: Variants = {
	initial: { x: 0, y: 0, rotate: 0.02 },
	hover: { x: 0, y: -48, rotate: 0.02 }
}
const rightRow: Variants = {
	initial: { x: 0, y: 0, rotate: -0.02 },
	hover: { x: 0, y: 48, rotate: 0.02 }
}

export default function Tabloid() {
	return (
		<Link href='/projects/tabloid' className='w-full lg:grow lg:w-auto'>
			<motion.div
				variants={card}
				initial='initial'
				whileHover='hover'
				transition={transition}
				className='relative flex flex-col w-full overflow-hidden bg-white cursor-pointer lg:grow h-96 lg:w-auto rounded-4xl pt-7 px-9'
			>
				<h2 className='relative z-20 text-xl font-medium leading-5 text-t-gray'>TABLOID APPS</h2>
				<h1 className='font-bold relative z-20 xs:text-[2.5rem] text-4xl leading-10 mt-2'>Social Media</h1>

				<div className='absolute inset-0 flex flex-row items-center justify-end gap-6 mt-[25.5rem] ml-[25.5rem] rotate-[48deg] sm:rotate-45 sm:mt-0 sm:ml-0'>
					<motion.div
						className='flex flex-col items-center justify-center gap-8'
						variants={leftRow}
						transition={transition}
					>
						<Phone type='2' className='w-36' />
						<Phone type='3' className='w-36' />
						<Phone type='1' className='w-36' />
					</motion.div>

					<motion.div
						className='flex flex-col items-center justify-center gap-8'
						variants={rightRow}
						transition={transition}
					>
						<Phone type='4' className='w-36' />
						<Phone type='5' className='w-36' />
					</motion.div>
				</div>
			</motion.div>
		</Link>
	)
}