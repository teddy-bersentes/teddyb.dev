import Hero from "~/components/Hero";
import SectionTitle from "~/components/SectionTitle";

export default function Home() {
	return (
		<div className='flex flex-col items-center w-full h-full min-h-screen overflow-scroll bg-t-bg'>
			<Hero />
			<div className='flex w-full h-full min-[1164px]:px-0 sm:px-16 xs:px-10 px-4 justify-center'>
				<div className='flex flex-col justify-center w-full h-24 min-[1164px]:max-w-5xl pt-36'>
					<SectionTitle type='professional' />
				</div>
			</div>
		</div>
	)
}
