import React from 'react';
import clsx from 'clsx';
import Button from './Button';
import Scribble from './scribbles';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {
	variant: 'red' | 'blue' | 'yellow'
	children?: React.ReactNode
}

function Color({ variant, children }: Props) {
	return (
		<span className={clsx({
			'text-t-red': variant === 'red',
			'text-t-blue': variant === 'blue',
			'text-t-yellow': variant === 'yellow'
		})}>
			{children}
		</span>
	)
}

function Hero() {
	return (
		<div className='relative flex flex-col items-center justify-center w-full pb-16 pt-28'>
			<div className='max-w-[52.3125rem] flex flex-col justify-center items-center relative px-4' >
				<motion.div
					className='absolute flex flex-col items-center justify-center w-full h-full opacity-0 pointer-events-none'
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ type: 'spring', duration: 0.6, bounce: 0, delay: 0.8 }}
				>
					<Scribble.Twist />
					<Scribble.Shapes />
					<Scribble.Planet />
					<Scribble.Wizz />
					<Scribble.Sparkle />
					<Scribble.Gem />
					<Scribble.Butterfly />
					<Scribble.ArrowCurve />
					<Scribble.ArrowZigZag />
				</motion.div>

				<motion.div
					className='flex flex-col items-center justify-center w-full'
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
				>
					<p className='text-lg font-semibold text-center md:text-xl'>Hi, I&apos;m Teddy</p>
					<h1 className='text-[clamp(1.5rem,1.4982rem+1.6143vw,8.8125rem)] font-bold max-w-[52.3125rem] text-center mt-4 md:leading-[4.5rem] xs:px-8 px-0'>
						I specialize in
						{' '}
						<Color variant='red'>ideating</Color>,
						{' '}
						<Color variant='blue'>composing</Color>, and
						{' '}
						<Color variant='yellow'>realizing</Color> innovative apps
					</h1>

					<motion.div
						initial={{ opacity: 0, scale: 0.85 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'spring', duration: 0.5, bounce: 0, delay: 0.8 }}
						className='mt-10 mb-2'
					>
						<Link href='https://github.com/teddy-bersentes' target='_blank' className='px-8 py-4 font-medium leading-5 text-white bg-black rounded-xl'>
							Show me more
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}

export default Hero;
