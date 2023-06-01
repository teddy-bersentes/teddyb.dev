import { MDXProvider } from "@mdx-js/react";
import MDComponents from "./projects/MD";
import Footer from "./Footer";

type Props = {
	title: string,
	description: string,
	children?: React.ReactNode
}

export default function Article({ title, description, children }: Props) {
	return (
		<MDXProvider components={MDComponents}>
			<div className='relative flex flex-col items-center w-full h-full min-h-screen overflow-scroll bg-t-bg no-scrollbar'>
				<h1 className='text-[clamp(1.5rem,1.7982rem+1.6143vw,8.8125rem)] font-bold max-w-[52.3125rem] text-center md:leading-[4.5rem] px-8 mt-20'>
					{title}
				</h1>

				<p className='text-[clamp(1rem,.8852rem+.4898vw,1.375rem)] text-center font-normal text-[#4E4E4E] mt-6 px-8'>
					{description}
				</p>

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