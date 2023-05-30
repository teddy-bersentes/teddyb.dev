import { type Variants, type Transition } from 'framer-motion'

export const infiniteTransition: Partial<Transition> = {
	repeat: Infinity,
	repeatType: 'mirror',
	ease: 'easeInOut'
}

export const cardVariants: Variants = {
	initial: {
		y: 0,
		rotate: 0.02,
		boxShadow: '0px 0px 22px rgba(0, 0, 0, 0.0)',
	},
	hover: {
		y: -12,
		rotate: 0.02,
		boxShadow: '0px 0px 22px rgba(0, 0, 0, 0.07)',
	}
}

export const springTransition: Transition = {
	type: 'spring',
	stiffness: 100,
	damping: 20,
	bounce: 0,
	mass: 0.4
}