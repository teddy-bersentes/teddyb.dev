import Scribble from "~/components/scribbles";
import Button from "./Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
	return (
		<footer className='flex flex-col w-full max-w-[100vw] overflow-hidden'>
			<div className='relative flex flex-col items-center justify-center w-full xs:h-[28rem] h-[26rem]'>
				<h1 className='absolute text-[clamp(1.375rem,1.3837rem+.8163vw,2rem)] font-bold text-center sm:top-20 top-[4.5rem]'>
					Want to<br className='block sm:hidden' /> reach out?
				</h1>

				<Button
					className='px-12 sm:mb-16'
					onClick={() => window.open('mailto:theodore.bersentes@gmail.com')}
				>
					Contact Me
				</Button>

				<Scribble.JumpingPerson />
				<Scribble.Climber />
				<Scribble.PalmTrees />
				<Scribble.Astronaut />
				<Scribble.Meteor />
				<Scribble.PaperDove />
				<Scribble.Stars />
				<motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 1.2, duration: 0.6 }}>
					<Scribble.UFO className='absolute w-20 right-[8%] top-12 sm:block hidden' />
				</motion.div>
				<Scribble.Giraffe />
			</div>

			<div className='flex flex-col w-full bg-white h-96 border-t-2 border-t-[#DEDEDE] xs:pt-20 pt-9 xs:pl-28 justify-between xs:pb-12 pb-8 px-10 relative'>
				<div className='flex flex-row justify-between xs:justify-start xs:gap-32'>
					<div className='flex flex-col gap-5'>
						<h1 className='mb-2 text-lg font-semibold leading-8'>Elsewhere</h1>

						<Link href='https://github.com/teddy-bersentes' target='_blank' className='flex flex-row items-center gap-2 text-left text-[#4E4E4E] hover:underline'>
							<svg className='w-[1.375rem]' viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M11.0091 0C4.92135 0 0 4.95764 0 11.0909C0 15.9936 3.15328 20.1436 7.52772 21.6124C8.07463 21.7228 8.27497 21.3737 8.27497 21.0801C8.27497 20.823 8.25694 19.9417 8.25694 19.0234C5.19447 19.6845 4.55674 17.7013 4.55674 17.7013C4.06458 16.4159 3.33536 16.0855 3.33536 16.0855C2.33302 15.4061 3.40837 15.4061 3.40837 15.4061C4.52024 15.4796 5.10366 16.5445 5.10366 16.5445C6.08775 18.2337 7.67352 17.7565 8.31147 17.4626C8.40251 16.7465 8.69434 16.2507 9.00419 15.9753C6.56165 15.7182 3.9918 14.7634 3.9918 10.5032C3.9918 9.29129 4.42897 8.29976 5.12169 7.52863C5.01239 7.25325 4.62953 6.11457 5.23121 4.59055C5.23121 4.59055 6.16076 4.2967 8.25671 5.729C9.15406 5.48623 10.0795 5.36273 11.0091 5.36169C11.9387 5.36169 12.8862 5.49036 13.7613 5.729C15.8574 4.2967 16.787 4.59055 16.787 4.59055C17.3887 6.11457 17.0056 7.25325 16.8963 7.52863C17.6073 8.29976 18.0264 9.29129 18.0264 10.5032C18.0264 14.7634 15.4565 15.6997 12.9958 15.9753C13.3969 16.3242 13.743 16.9851 13.743 18.0318C13.743 19.5191 13.725 20.7128 13.725 21.0799C13.725 21.3737 13.9255 21.7228 14.4722 21.6126C18.8467 20.1433 21.9999 15.9936 21.9999 11.0909C22.018 4.95764 17.0786 0 11.0091 0Z" fill="#4E4E4E" />
							</svg>
							<span>Github</span>
						</Link>

						<Link href='https://www.linkedin.com/in/teddy-bersentes' target='_blank' className='flex flex-row items-center gap-2 text-left text-[#4E4E4E] hover:underline'>
							<svg className='w-5' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M18.5514 0H1.50762C0.692381 0 0 0.644762 0 1.43905V18.56C0 19.3552 0.454286 20 1.26952 20H18.3133C19.1295 20 20 19.3552 20 18.56V1.43905C20 0.644762 19.3676 0 18.5514 0ZM7.61905 7.61905H10.3114V8.99143H10.341C10.7514 8.25143 11.9638 7.5 13.4629 7.5C16.34 7.5 17.1429 9.02762 17.1429 11.8571V17.1429H14.2857V12.3781C14.2857 11.1114 13.78 10 12.5971 10C11.1609 10 10.4762 10.9724 10.4762 12.5686V17.1429H7.61905V7.61905ZM2.85714 17.1429H5.71429V7.61905H2.85714V17.1429ZM6.07143 4.28571C6.07143 5.27238 5.27238 6.07143 4.28571 6.07143C3.29905 6.07143 2.5 5.27238 2.5 4.28571C2.5 3.29905 3.29905 2.5 4.28571 2.5C5.27238 2.5 6.07143 3.29905 6.07143 4.28571Z" fill="#4E4E4E" />
							</svg>
							<span>LinkedIn</span>
						</Link>
					</div>

					<div className='flex flex-col gap-5'>
						<h1 className='mb-2 text-lg font-semibold leading-8'>Elsewhere</h1>

						<Link href='mailto:theodore.bersentes@gmail.com' className='flex flex-row items-center gap-2 text-left text-[#4E4E4E] hover:underline'>
							Email
						</Link>

						<Link href='tel:5714049665' className='flex flex-row items-center gap-2 text-left text-[#4E4E4E] hover:underline'>
							Phone
						</Link>
					</div>
				</div>

				<p className='text-[#4E4E4E] text-sm font-medium self-end'>Designed & built by Teddy</p>
			</div>
		</footer>
	)
}