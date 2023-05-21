import { type Transition } from 'framer-motion'

export const infiniteTransition: Partial<Transition> = {
	repeat: Infinity,
	repeatType: 'mirror',
	ease: 'easeInOut'
}