import { type Variants, type Transition, useInView } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'

export const infiniteTransition: Transition = {
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

export const lineVariants: Variants = {
	hidden: { opacity: 0, pathLength: 0 },
	visible: { opacity: 1, pathLength: 1 }
}

export const springTransition: Transition = {
	type: 'spring',
	stiffness: 100,
	damping: 20,
	bounce: 0,
	mass: 0.4
}

type Params = Parameters<typeof useInView>

export const useVisibility = (...params: Params) => {
	const isInView = useInView(...params)
	const [visible, setVisible] = useState(false)

	const handleStateChange = useCallback(() => {
		if (isInView) setVisible(true)
	}, [isInView])

	useEffect(() => handleStateChange(), [isInView, handleStateChange])

	return visible
}