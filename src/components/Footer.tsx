import Scribble from "~/components/scribbles";
import Button from "./Button";


export default function Footer() {
	return (
		<footer className='flex flex-col w-full'>
			<div className='relative flex flex-col items-center justify-center w-full xs:h-[28rem] h-[26rem]'>
				<h1 className='absolute text-4xl font-bold text-center sm:top-20 top-[4.5rem]'>
					Want to<br className='block sm:hidden' /> reach out?
				</h1>

				<Button className='px-12 sm:mb-16'>
					Contact Me
				</Button>

				<Scribble.JumpingPerson />
				<Scribble.Climber />
				<Scribble.PalmTrees />
				<Scribble.Astronaut />
				<Scribble.Meteor />
				<Scribble.PaperDove />
				<Scribble.Stars />
				<Scribble.UFO className='absolute w-20 right-[8%] top-12 sm:block hidden' />
				<Scribble.Giraffe />
			</div>
			<div className='flex flex-col w-full bg-white h-96 border-t-2 border-t-[#DEDEDE]'>
			</div>
		</footer>
	)
}