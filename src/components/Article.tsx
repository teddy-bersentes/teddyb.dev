import { MDXProvider } from "@mdx-js/react";
import { motion } from "framer-motion";
import MDComponents from "./projects/MD";
import Footer from "./Footer";

type Props = {
	title: string,
	description: string,
	topComponent?: () => React.ReactNode,
	children?: React.ReactNode
}

export default function Article({ title, description, children, topComponent }: Props) {
	return (
		<MDXProvider components={MDComponents}>
			<div className='relative flex flex-col items-center w-full h-full min-h-screen overflow-scroll bg-t-bg no-scrollbar'>
				{topComponent && topComponent()}

				<motion.div
					className='flex flex-col text-center'
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

				<div className='flex w-full min-[1164px]:px-0 sm:px-16 xs:px-10 px-4 justify-center'>
					<div className='flex flex-col justify-center w-full min-[1164px]:max-w-5xl pt-24'>
						{children}
					</div>
				</div>

				<Footer />
			</div>
		</MDXProvider>
	)
}