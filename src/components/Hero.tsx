import React from 'react';
import clsx from 'clsx';
import Button from './Button';
import Scribble from './scribbles';
import { motion } from 'framer-motion';

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
					initial={{ y: -10 }}
					animate={{ y: 0 }}
					transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
				>
					<p className='text-lg font-semibold text-center md:text-xl'>Hi, I&apos;m Teddy</p>
					<h1 className='md:text-5xl xs:text-[2.5rem] text-[1.75rem] font-bold max-w-[52.3125rem] text-center mt-4 md:leading-[4.5rem] xs:px-4 px-0'>
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
					>
						<Button className='mt-10'>
							Show me more
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}

export default Hero;
