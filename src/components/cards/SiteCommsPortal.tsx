import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { springTransition as transition, cardVariants as card } from "~/utils/animation";
import Link from "next/link";

const browser: Variants = {
	initial: { y: 0, rotate: 0.00 },
	hover: { y: -8, rotate: 0.02, transition }
}

export default function SiteCommsPortal() {
	return (
		<Link href='/projects/sitecomms' className='w-full lg:grow lg:w-auto'>
			<motion.div
				className='relative flex flex-col w-full overflow-hidden bg-white pt-7 px-9 lg:grow lg:w-auto h-96 rounded-4xl hover:cursor-pointer'
				variants={card}
				initial='initial'
				whileHover='hover'
				transition={transition}
			>
				<div className="absolute top-0 left-0 w-full h-full bg-repeat bg-[url('/topography.svg')]" />
				<h2 className='text-xl font-medium leading-5 text-t-gray'>SITE COMMS</h2>
				<h1 className='font-bold xs:text-[2.5rem] text-4xl leading-10 mt-2'>Admin Portal</h1>
				<motion.div
					className='absolute flex self-center sm:w-[32rem] w-[28rem] lg:left-40 sm:left-8 left-20 lg:top-36 top-32'
					variants={browser}
					transition={transition}
				>
					<Image
						src='/images/dashboard-site-comms.png'
						alt='Site Comms Dashboard'
						className='object-contain rounded-xl'
						quality={100}
						width={1342}
						height={978}
					/>
				</motion.div>
			</motion.div>
		</Link>
	)
}
