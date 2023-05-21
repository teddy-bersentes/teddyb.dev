import React from "react";
import { motion } from "framer-motion";
import { infiniteTransition } from "~/utils/animation";

export default function Sparkle() {
	return (
		<svg className='absolute top-0 -left-10' width="68" height="78" viewBox="0 0 68 78" fill="none" xmlns="http://www.w3.org/2000/svg">
			<motion.path
				initial={{ scale: 1, rotate: 0.02 }}
				animate={{ scale: [0.8, 1.2], rotate: 0.02 }}
				transition={{ duration: 1.1, ...infiniteTransition }}
				d="M30.47 16.6996C37.3677 13.2861 42.6396 7.28832 45.14 0.0096237C45.3 -0.430376 47.9 14.3496 56.66 17.1996C56.66 17.1996 46.06 22.2796 43.55 32.3396C43.56 32.4796 42.95 24.3496 30.47 16.6996Z"
				fill="black"
			/>

			<motion.path
				initial={{ scale: 1, rotate: 0.02 }}
				animate={{ scale: [0.8, 1.2], rotate: 0.02 }}
				transition={{ duration: 1.1, ...infiniteTransition, delay: 0.3 }}
				d="M45.76 64.5696C51.4393 61.7554 55.7747 56.8088 57.82 50.8096C57.95 50.4496 60.08 62.6096 67.32 64.9496C67.32 64.9496 58.61 69.1296 56.54 77.3996C56.51 77.5096 56.01 70.8296 45.76 64.5696Z"
				fill="black"
			/>

			<motion.path
				initial={{ scale: 1, rotate: 0.02 }}
				animate={{ scale: [0.8, 1.3] }}
				transition={{ duration: 1.1, ...infiniteTransition, delay: 0.6 }}
				d="M0 46.0896C5.48176 43.3685 9.67087 38.5973 11.66 32.8096C11.78 32.4496 13.85 44.1896 20.84 46.4496C20.84 46.4496 12.42 50.4496 10.43 58.4496C10.38 58.5796 9.9 52.1296 0 46.0896Z"
				fill="black"
			/>
		</svg>
	)
}