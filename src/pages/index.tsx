import Hero from "~/components/Hero";
import Title from "~/components/Title";

export default function Home() {
	return (
		<div className='flex flex-col items-center w-full h-full min-h-screen overflow-scroll bg-t-bg'>
			<Hero />
			<div className='flex w-full min-[1164px]:px-0 sm:px-16 xs:px-10 px-4 justify-center'>
				<div className='flex flex-col justify-center w-full min-[1164px]:max-w-5xl py-24'>
					<Title type='professional' />

					<div className='flex flex-col items-center justify-center mt-16 lg:gap-12 gap-28 lg:flex-row'>
						<div className='w-full bg-purple-300 h-96 lg:w-96 rounded-4xl' />
						<div className='w-full bg-red-300 lg:grow lg:w-auto h-96 rounded-4xl' />
					</div>

					<div className='w-full bg-orange-300 mt-28 h-96 rounded-4xl' />

					<Title type='freelance' />

					<div className='w-full mt-16 bg-blue-300 h-96 rounded-4xl' />

					<div className='flex flex-col items-center justify-center lg:flex-row lg:gap-12 mt-28 gap-28'>
						<div className='w-full bg-pink-300 lg:grow h-96 lg:w-auto rounded-4xl' />
						<div className='bg-green-300 h-96 lg:w-[23.125rem] w-full rounded-4xl' />
					</div>

					<Title type='personal' />
				</div>
			</div>
		</div>
	)
}
