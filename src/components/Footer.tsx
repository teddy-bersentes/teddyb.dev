import Scribble from "~/components/scribbles";
import Button from "./Button";

export default function Footer() {
	return (
		<footer className='flex flex-col w-full'>
			<div className='relative flex flex-col items-center justify-center w-full h-[28rem]'>
				<h1 className='absolute text-4xl font-bold text-center sm:top-20 top-12'>
					Want to<br className='block sm:hidden' /> reach out?
				</h1>

				<Button className='px-12 mb-16'>
					Contact Me
				</Button>

				<Scribble.JumpingPerson />
				<Scribble.Climber />
				<Scribble.PalmTrees />
				{/* <Scribble.Stars /> */}
			</div>
			<div className='flex flex-col w-full bg-white h-96 border-t-2 border-t-[#DEDEDE]'>
			</div>
		</footer>
	)
}