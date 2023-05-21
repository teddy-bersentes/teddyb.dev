import React from 'react';
import clsx from 'clsx';
import Button from './Button';
import Scribble from './scribbles';
import { motion } from 'framer-motion'
import { infiniteTransition } from '~/utils/animation';

type Props = {
	variant: 'red' | 'blue' | 'yellow'
	children?: React.ReactNode
}

function Color({ variant, children }: Props) {
	return (
		<span
			className={clsx({
				'text-t-red': variant === 'red',
				'text-t-blue': variant === 'blue',
				'text-t-yellow': variant === 'yellow'
			})}
		>
			{children}
		</span>
	)
}

function Hero() {

	return (
		<div className='relative flex flex-col items-center justify-center w-full pt-28'>
			<div className='max-w-[52.3125rem] flex flex-col justify-center items-center relative'>
				<p className='text-xl font-semibold text-center'>Hi, I&apos;m Teddy</p>
				<h1 className='text-5xl font-bold max-w-[52.3125rem] text-center mt-4 leading-[4.5rem]'>
					I specialize in
					{' '}
					<Color variant='red'>ideating</Color>,
					{' '}
					<Color variant='blue'>composing</Color>, and
					{' '}
					<Color variant='yellow'>realizing</Color> innovative apps
				</h1>

				<Button className='mt-10'>
					Show me more
				</Button>

				<Scribble.Twist />
				<Scribble.Shapes />
				<Scribble.Planet />
				<Scribble.Wizz />
				<Scribble.Sparkle />
				<Scribble.Gem />
				<Scribble.Butterfly />
				<Scribble.ArrowCurve />
				<Scribble.ArrowZigZag />
			</div>
		</div>
	);
}

export default Hero;
