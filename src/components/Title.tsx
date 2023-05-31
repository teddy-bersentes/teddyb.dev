import Scribble from "~/components/scribbles"

type Props = {
	type: 'professional' | 'freelance' | 'personal'
}

function ProfessionalTitle() {

	return (
		<div className='relative flex flex-row items-center w-full'>
			<div className='flex flex-col w-full gap-3 md:w-auto'>
				<h1 className='text-3xl font-bold leading-[3rem]'>
					Here&apos;s some of my<br className='hidden xs:block md:hidden' /> <span className='text-t-red'>professional</span> work
				</h1>
				<svg className='w-full' viewBox="0 0 748 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M2.07324 12.5413C22.6246 13.6183 42.8716 16.5048 63.5317 17.0729C140.113 19.1786 217.281 12.7365 293.719 8.63358C336.547 6.33474 379.4 5.75408 422.274 4.79174C462.196 3.89566 502.12 2.52127 542.053 2.26878C610.253 1.83757 678.273 4.03374 746.195 10.2524"
						stroke="black"
						strokeWidth="3"
						strokeLinecap="round"
					/>
				</svg>
			</div>

			<Scribble.Bulb />
		</div>
	)
}

function FreelanceTitle() {
	return (
		<div className='relative flex flex-col items-end gap-3 pt-48'>
			<h1 className='text-3xl font-bold leading-[3rem] text-right'>
				I also do some<br className='min-[530px]:hidden block' /><span className='text-t-blue'> freelance</span> stuff
			</h1>

			<svg className='w-full md:w-3/4' viewBox="0 0 717 14" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.89258 7.93216C31.0835 7.1213 60.137 3.49452 89.3492 2.64066C132.696 1.37366 176.117 2.07014 219.432 4.03703C269.795 6.32397 319.862 11.2049 370.313 11.6803C448.838 12.4202 527.154 7.02453 605.637 6.79302C633.122 6.71194 660.576 7.50863 688.023 8.88757C696.436 9.31024 706.68 8.76691 714.921 11.2393" stroke="black" strokeWidth="3" strokeLinecap="round" />
			</svg>

			<Scribble.UFO className='absolute md:h-16 h-14 top-16 right-1/4' />
			<Scribble.ArrowSpiral />
		</div>
	)
}

function PersonalTitle() {
	return (
		<div className='relative flex flex-col items-center justify-center mt-32 text-center'>
			<h1 className='md:text-5xl xs:text-[2.5rem] text-[1.75rem] font-bold'>
				Some <span className='text-t-yellow'>cool</span> side projects
			</h1>
			<p className='max-w-[36rem] mt-6 text-lg xs:text-xl font-medium leading-8'>
				Dive into the realm of my creations, where curiosity and coffee turn ideas into reality
			</p>
			<Scribble.Airplane />
			<Scribble.Moon />
		</div>
	)
}

const components = {
	'professional': ProfessionalTitle,
	'freelance': FreelanceTitle,
	'personal': PersonalTitle
}

export default function Title({ type }: Props) {
	return components[type]()
}