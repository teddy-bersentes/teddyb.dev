import Hero from "~/components/Hero";
import Title from "~/components/Title";
import Card from "~/components/cards";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
	return (
		<div className='relative flex flex-col items-center w-full h-full min-h-screen overflow-scroll bg-t-bg no-scrollbar'>

			<Head>
				<title>Teddy&apos;s Portfolio | Software Developer</title>
				<meta name="description" content="The personal portfolio website of Theodore (Teddy) Bersentes, a skilled software developer showcasing his work and experience." />
				<meta name="keywords" content="Teddy, Theodore, Bersentes, web developer, app developer, full-stack developer, programmer, portfolio" />
				<meta name="author" content="Theodore 'Teddy' Bersentes" />
			</Head>

			<Hero />
			<div className='flex w-full min-[1164px]:px-0 sm:px-16 xs:px-10 px-4 justify-center'>
				<motion.div
					className='flex flex-col justify-center w-full min-[1164px]:max-w-5xl py-24'
					initial={{ opacity: 0, y: -12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ type: 'spring', duration: 0.5, bounce: 0, delay: 0.3 }}
				>
					<Title type='professional' />

					<div className='flex flex-col items-center justify-center mt-16 lg:gap-12 gap-28 lg:flex-row'>
						<Card.SiteCommsMobile />
						<Card.SiteCommsPortal />
					</div>

					<Card.MiiPlan />

					<Title type='freelance' />

					<Card.SmileFood />

					<div className='flex flex-col items-center justify-center lg:flex-row lg:gap-12 mt-28 gap-28'>
						<div className='w-full bg-pink-300 lg:grow h-96 lg:w-auto rounded-4xl' />
						<div className='bg-green-300 h-96 lg:w-[23.125rem] w-full rounded-4xl' />
					</div>

					<Title type='personal' />
				</motion.div>
			</div>
		</div>
	)
}
