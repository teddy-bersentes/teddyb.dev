import { motion, MotionConfig, Variants } from "framer-motion"

const line: Variants = {
	hidden: {
		opacity: 0,
		pathLength: 0
	},
	visible: {
		opacity: 1,
		pathLength: 1
	}
}

export default function TabloidSelfie() {
	return (
		<MotionConfig transition={{ duration: 2, delay: 0.4 }}>
			<svg className='w-32 mt-12' viewBox="0 0 368 339" fill="none" xmlns="http://www.w3.org/2000/svg">
				<motion.path
					d="M163.457 61.7754C173.213 52.0774 180.622 47.2447 194.35 43.3082C252.315 26.6874 261.925 119.967 218.124 145.084C161.703 177.436 119.9 104.978 159.625 71.7496"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="18.9867"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M140.566 170.685C135.123 174.275 134.967 181.528 134.634 187.31C134.506 189.507 134.478 191.718 134.468 193.91C134.604 211.823 135.105 229.691 135.945 247.592C136.18 252.535 136.858 257.485 137.286 262.423C137.688 266.877 142.885 299.058 143.729 304.921C144.082 307.355 144.476 309.743 144.796 312.16C144.935 313.366 145.067 314.573 145.18 315.787C145.343 317.453 145.397 319.448 146.014 320.972"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="18.9867"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M269.016 71.3331C360.522 35.5964 362.464 169.664 311.377 181.157C260.292 192.649 224.098 124.619 255.8 92.7713"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="18.9867"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M229.206 198.945C228.697 200.668 228.722 202.64 228.622 204.437C228.529 206.577 228.504 208.71 228.455 210.849C228.38 215.147 228.38 219.426 228.604 223.68C228.846 228.364 236.516 319.853 236.609 321.899C235.641 324.225 235.852 327.111 237.087 329.213"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="18.9867"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M307.035 329.214C308.026 327.356 308.081 325.63 307.874 323.673L307.983 324.493C307.71 320.83 307.831 317.246 308.075 313.583C309.072 306.145 310.391 298.706 312.281 291.46C314.682 282.262 317.223 273.145 319.807 264.007C324.676 246.856 329.922 229.81 334.7 212.606"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="18.9867"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M334.701 212.606C335.91 214.233 337.176 215.853 338.037 217.698C339.076 219.958 340.044 222.261 340.905 224.59C342.615 229.147 344.096 233.779 345.286 238.486C347.856 248.501 349.566 258.691 350.775 268.948C351.319 273.531 351.642 278.119 351.984 282.702C352.212 285.639 352.478 288.545 352.554 291.482C352.731 298.535 352.877 305.595 352.775 312.68C352.712 315.747 352.661 318.833 352.585 321.926C354.276 321.224 356.194 321.044 357.998 321.528"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="18.9867"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M139.589 171.793C132.384 166.197 124.825 161.216 117.234 156.21C110.789 151.989 104.631 147.304 98.3789 142.838C98.9642 143.309 99.5495 143.749 100.11 144.214C94.5368 139.849 88.945 135.527 83.3967 131.137C77.6554 126.596 72.0387 121.866 66.1542 117.52C62.4553 114.775 58.7565 112.05 55.0577 109.305C52.5295 107.439 49.8581 105.769 47.2303 104.054C44.3846 102.189 41.5389 100.399 38.6184 98.6525C33.1449 95.4493 27.4783 92.4722 22.3535 88.6974C19.9187 86.6373 17.6895 84.4013 15.6283 81.9706C15.4104 81.6554 11.5824 77.8802 10.5111 73.2442C9.25596 67.813 10.7361 61.4019 10.5111 61.0156"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="18.9867"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M10 68.3186C14.0043 62.9177 26.2769 44.9712 30.3368 39.5957L29.0329 41.2992C32.7962 36.3463 36.5163 31.3935 39.9212 26.163C42.5413 22.1755 44.976 18.0302 47.7258 14.0869C48.6033 13.008 49.4993 11.9732 50.5128 11.0331C51.0257 10.6924 51.5571 10.3769 52.1009 10.0804C52.1627 10.0615 52.2245 10.0426 52.2925 10.0236C52.8115 9.99839 53.3306 9.99208 53.8682 10.011C55.1536 10.2697 56.4018 10.623 57.6501 11.071C63.0447 13.7209 67.7597 17.5002 72.4993 21.2228L72.0729 20.8947C74.3902 22.7749 78.978 26.9806 80.9369 29.2457C81.0358 29.3971 81.1285 29.5548 81.2212 29.7189C81.2521 29.8262 81.283 29.9397 81.3139 30.0533C81.3633 30.9555 81.3571 31.8515 81.2953 32.76C80.9122 34.5203 80.3869 36.2239 79.7566 37.9337C74.3902 47.3226 72.0729 49.6107 66.4971 57.1177C62.6107 62.3501 58.268 68.114 54.3626 73.4896C51.0813 77.7106 47.8596 82.4449 44.5227 86.6154C40.9386 91.1266 38.0901 95.7083 34.6852 100.371"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="18.9867"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>
			</svg>
		</MotionConfig>
	)
}