import Scribble from "~/components/scribbles";
import Button from "./Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
	return (
		<footer className='flex flex-col w-full max-w-[100vw] overflow-hidden'>
			<div className='relative flex flex-col items-center justify-center w-full xs:h-[28rem] h-[26rem]'>
				<h1 className='absolute text-4xl font-bold text-center sm:top-20 top-[4.5rem]'>
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

						<Link href='https://www.linkedin.com/in/teddy-bersentes-387068176' target='_blank' className='flex flex-row items-center gap-2 text-left text-[#4E4E4E] hover:underline'>
							<svg className='w-5' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M18.5514 0H1.50762C0.692381 0 0 0.644762 0 1.43905V18.56C0 19.3552 0.454286 20 1.26952 20H18.3133C19.1295 20 20 19.3552 20 18.56V1.43905C20 0.644762 19.3676 0 18.5514 0ZM7.61905 7.61905H10.3114V8.99143H10.341C10.7514 8.25143 11.9638 7.5 13.4629 7.5C16.34 7.5 17.1429 9.02762 17.1429 11.8571V17.1429H14.2857V12.3781C14.2857 11.1114 13.78 10 12.5971 10C11.1609 10 10.4762 10.9724 10.4762 12.5686V17.1429H7.61905V7.61905ZM2.85714 17.1429H5.71429V7.61905H2.85714V17.1429ZM6.07143 4.28571C6.07143 5.27238 5.27238 6.07143 4.28571 6.07143C3.29905 6.07143 2.5 5.27238 2.5 4.28571C2.5 3.29905 3.29905 2.5 4.28571 2.5C5.27238 2.5 6.07143 3.29905 6.07143 4.28571Z" fill="#4E4E4E" />
							</svg>
							<span>LinkedIn</span>
						</Link>

						<Link href='https://stackoverflow.com/users/13737173/teddy-bersentes' target='_blank' className='flex flex-row items-center gap-2 text-left text-[#4E4E4E] hover:underline'>
							<svg className='h-6' viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.5597 22.08C14.1997 19.6267 13.9864 17.1734 14.093 14.8267C14.093 14.2934 14.093 13.6533 14.8397 13.6533C15.4797 13.6533 15.4797 14.2934 15.4797 14.8267C15.4797 17.3867 15.4797 19.9466 15.5864 22.5066C15.5864 23.5733 15.053 24 13.9863 24C10.1463 24 6.30635 24 2.46634 23.8934C0.546341 23.8934 0.439673 23.68 0.439673 21.76C0.333006 19.4134 0.333008 16.96 0.333008 14.6133C0.333008 14.08 0.333005 13.44 1.07967 13.5467C1.61301 13.5467 1.93301 14.08 1.93301 14.6133C1.93301 15.8933 1.93301 17.1733 1.93301 18.4533C2.03968 22.08 2.03968 22.08 5.55968 21.9733C8.22635 22.08 10.893 22.08 13.5597 22.08Z" fill="#4E4E4E" />
								<path d="M8.65334 17.3864C7.26667 17.2797 5.98668 17.1731 4.60001 17.0664C3.85334 16.9597 3.32001 16.6397 3.42668 15.7864C3.42668 14.933 4.06667 14.8264 4.70668 14.9331C6.73334 15.0397 8.76001 15.2531 10.7867 15.3598C11.1067 15.3598 11.4267 15.3597 11.7467 15.4664C12.28 15.6797 12.4933 16.1064 12.3867 16.6397C12.28 17.0664 11.96 17.2797 11.4267 17.2797C10.4667 17.2797 9.61334 17.3864 8.65334 17.3864Z" fill="#4E4E4E" />
								<path d="M16.44 8.85333C15.6933 6.39999 15.8 3.84002 15.2667 1.28001C15.16 0.74668 15.0533 0 16.0133 0C16.76 0 17.5067 -6.48499e-06 17.4 0.959994C17.4 3.2 17.72 5.33335 18.04 7.57335C18.36 9.17335 17.4 9.06666 16.44 8.85333Z" fill="#4E4E4E" />
								<path d="M5.55927 10.773C6.30594 10.773 7.05261 11.093 7.69261 11.3063C9.07928 11.733 10.4659 12.2664 11.8526 12.6931C12.3859 12.9064 13.0259 13.013 12.7059 13.8664C12.4926 14.5064 12.0659 14.8264 11.3193 14.6131C10.1459 14.2931 9.07927 13.973 7.90594 13.653C7.0526 13.4397 6.0926 13.2264 5.1326 13.0131C4.59927 12.9064 3.74594 12.9064 4.06594 11.9464C4.38594 11.3064 4.59927 10.5597 5.55927 10.773Z" fill="#4E4E4E" />
								<path d="M16.4394 8.85341C14.7327 10.4534 14.7327 10.3467 13.2394 8.64007C11.9594 7.14673 10.8927 5.54676 9.93268 3.84009C9.61268 3.30676 9.50601 2.98675 10.0393 2.56008C10.5727 2.13341 11.106 2.02675 11.6393 2.56008C12.4927 3.41341 12.8127 4.58677 13.4527 5.54677C14.306 6.82677 14.8394 8.32008 16.4394 8.85341Z" fill="#4E4E4E" />
								<path d="M13.8802 11.0934C13.5602 11.7334 13.1335 12.2667 12.2802 11.7333C10.3602 10.56 8.33351 9.38667 6.41351 8.21334C5.88018 7.89334 5.98685 7.35999 6.20018 6.93332C6.52018 6.50666 6.84018 6.07998 7.37351 6.29332C7.90685 6.50665 8.44018 6.72 8.97351 7.04C10.4668 8.10666 11.8535 9.1733 13.2402 10.24C13.6669 10.4533 13.8802 10.56 13.8802 11.0934Z" fill="#4E4E4E" />
								<path d="M7.69312 18.4531C8.86645 18.4531 10.0398 18.4531 11.2131 18.4531C11.7465 18.4531 11.9598 18.6665 12.0665 19.1998C12.0665 19.7331 11.7464 19.9465 11.3198 20.0531C8.97311 20.1598 6.62645 20.2664 4.27978 20.3731C3.63978 20.3731 3.10644 20.1598 3.10644 19.4132C2.99978 18.5598 3.63978 18.4531 4.27978 18.4531C5.34644 18.4531 6.51978 18.4531 7.69312 18.4531Z" fill="#4E4E4E" />
							</svg>
							<span>Stack Overflow</span>
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