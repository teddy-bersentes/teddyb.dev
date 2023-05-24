import Scribble from "./scribbles"

type Props = {
	type: 'professional' | 'freelance' | 'personal'
}

function ProfessionalTitle() {
	return (
		<div className='flex flex-row items-center justify-between pr-32'>
			<div className='flex flex-col gap-3'>
				<h1 className='text-3xl font-bold'>Here&apos;s some of my <span className='text-t-red'>professional</span> work</h1>
				<svg className='w-full' viewBox="0 0 748 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2.07324 12.5413C22.6246 13.6183 42.8716 16.5048 63.5317 17.0729C140.113 19.1786 217.281 12.7365 293.719 8.63358C336.547 6.33474 379.4 5.75408 422.274 4.79174C462.196 3.89566 502.12 2.52127 542.053 2.26878C610.253 1.83757 678.273 4.03374 746.195 10.2524" stroke="black" stroke-width="3" stroke-linecap="round" />
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