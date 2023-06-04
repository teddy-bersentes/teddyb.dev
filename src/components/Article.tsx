import { MDXProvider } from "@mdx-js/react";
import { Variants, motion } from "framer-motion";
import MDComponents from "./projects/MD";
import Footer from "./Footer";
import Link from "next/link";

type Props = {
	title: string,
	description: string,
	topComponent?: () => React.ReactNode,
	children?: React.ReactNode
}

const backButton: Variants = {
	initial: {},
	hover: {}
}

const arrow: Variants = {
	initial: { x: 0 },
	hover: { x: -4 }
}

export default function Article({ title, description, children, topComponent }: Props) {
	return (
		<MDXProvider components={MDComponents}>
			<div className='relative flex flex-col items-center w-full h-full min-h-screen overflow-scroll bg-t-bg no-scrollbar'>
				{topComponent && topComponent()}

				<Link href='/' className='absolute md:top-12 md:left-20 top-8 left-10'>
					<motion.div
						className='flex flex-row items-center gap-2 md:gap-3'
						variants={backButton}
						initial='initial'
						whileHover='hover'
					>
						<motion.svg
							variants={arrow}
							className='w-9 md:w-12'
							viewBox="0 0 48 46"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M23.6948 23.1609L26.5995 23.0743L29.4978 23.0566C30.2038 23.0661 30.9045 23.1613 31.6179 23.1652C34.1163 23.181 36.6269 23.205 39.1153 23.3389C40.2475 23.4117 41.3548 23.5673 42.4415 23.7267C43.8226 23.9954 45.223 24.1533 46.6292 24.199C47.0692 24.1877 47.1331 23.662 46.862 23.0627C46.7005 22.727 46.4741 22.4265 46.1958 22.1787C45.9085 21.8958 45.5526 21.6924 45.163 21.5886C44.4501 21.4153 43.7205 21.2895 42.9994 21.1516C42.2782 21.0138 41.5451 20.9605 40.8185 20.885C39.3536 20.7395 37.882 20.6724 36.41 20.6839C34.6437 20.7046 32.8348 20.3906 31.0365 20.284C30.0523 20.2221 29.0616 20.1824 28.07 20.1494C27.0783 20.1163 26.0895 20.0869 25.0933 20.0631C23.8812 20.0389 22.6562 20.0593 21.4173 20.0612C19.5718 20.0542 17.7108 20.1347 15.8644 20.1343C15.1388 20.0987 14.4291 20.1152 13.711 20.0741C13.351 20.06 12.9928 20.0329 12.6319 20.0254L11.5343 20.0371C11.2079 20.0444 10.886 20.0191 10.5633 20.0468C10.1082 20.0631 9.66991 20.2222 9.31045 20.5017C9.06046 20.7683 8.93403 21.1277 8.96203 21.4922C8.94374 21.6919 8.93551 21.8925 8.93735 22.0931C9.00676 22.7571 9.59848 23.2255 10.3949 23.3241C10.9819 23.3302 11.5913 23.4125 12.1959 23.4344C12.5029 23.4477 12.7941 23.4554 13.1094 23.4565C13.4247 23.4577 13.7215 23.4961 14.0443 23.4916C14.367 23.4872 14.6964 23.5069 15.0107 23.4913C15.3251 23.4757 15.6376 23.4731 15.9604 23.4687C16.5966 23.4551 17.2383 23.4258 17.88 23.3964C18.8399 23.3719 19.8022 23.3378 20.767 23.294L23.6904 23.24L23.6948 23.1609Z" fill="#231F20" />
							<path d="M10.0386 31.0048C8.35469 29.6357 0.761252 24.8757 0.526075 22.4848C0.354814 20.7969 16.2849 11.4657 16.2321 12.8099C16.1391 15.2676 15.0028 17.4923 14.1792 19.761C13.2844 22.2288 12.6065 24.7371 11.9025 27.265C11.7825 27.6699 10.6434 31.4982 10.0386 31.0048Z" fill="#231F20" />
						</motion.svg>

						<span className='text-base font-semibold md:text-lg'>Projects</span>
					</motion.div>
				</Link>

				<motion.div
					className='relative flex flex-col text-center'
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
				>
					<h1 className='text-[clamp(1.5rem,1.7982rem+1.6143vw,8.8125rem)] font-bold max-w-[52.3125rem] text-center md:leading-[4.5rem] px-8 mt-12'>
						{title}
					</h1>

					<p className='text-[clamp(1rem,.8852rem+.4898vw,1.375rem)] text-center font-normal text-[#4E4E4E] mt-4 px-8'>
						{description}
					</p>

				</motion.div>

				<motion.div
					className='flex w-full min-[1164px]:px-0 sm:px-16 xs:px-10 px-4 justify-center'
					initial={{ opacity: 0, y: -12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ type: 'spring', duration: 0.5, bounce: 0, delay: 0.3 }}
				>
					<div className='flex flex-col justify-center w-full min-[1164px]:max-w-5xl pt-24'>
						{children}
					</div>
				</motion.div>

				<Footer />
			</div>
		</MDXProvider>
	)
}