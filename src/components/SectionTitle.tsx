import { useState } from "react"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import Scribble from "./scribbles"

type Props = {
	type: 'professional' | 'freelance' | 'personal'
}

function ProfessionalTitle() {
	// Normally, we would use the `whileInView` prop with an margin, but chrome 
	// has a bug with the Intersection Observer API.
	// https://bugs.chromium.org/p/chromium/issues/detail?id=963246
	const { scrollY } = useScroll()
	const [lineVisible, setLineVisible] = useState(false)
	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 150) setLineVisible(true)
	})

	return (
		<div className='relative flex flex-row items-center w-full'>
			<div className='flex flex-col w-full gap-3 md:w-auto'>
				<h1 className='text-3xl font-bold leading-[3rem]'>
					Here&apos;s some of my<br className='hidden xs:block md:hidden' /> <span className='text-t-red'>professional</span> work
				</h1>
				<svg className='w-full' viewBox="0 0 748 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<motion.path
						d="M2.07324 12.5413C22.6246 13.6183 42.8716 16.5048 63.5317 17.0729C140.113 19.1786 217.281 12.7365 293.719 8.63358C336.547 6.33474 379.4 5.75408 422.274 4.79174C462.196 3.89566 502.12 2.52127 542.053 2.26878C610.253 1.83757 678.273 4.03374 746.195 10.2524"
						stroke="black"
						strokeWidth="3"
						strokeLinecap="round"
						animate={{ pathLength: lineVisible ? 1 : 0 }}
						transition={{
							type: 'spring',
							stiffness: 50,
							damping: 10,
							mass: 1
						}}
					/>
				</svg>
			</div>

			<Scribble.Bulb />
		</div>
	)
}

function FreelanceTitle() {
	return (
		<div>
			{/* TODO */}
		</div>
	)
}

function PersonalTitle() {
	return (
		<div>
			{/* TODO */}
		</div>
	)
}

const components = {
	'professional': ProfessionalTitle,
	'freelance': FreelanceTitle,
	'personal': PersonalTitle
}

export default function SectionTitle({ type }: Props) {
	return components[type]()
}