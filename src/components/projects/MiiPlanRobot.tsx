import { motion, MotionConfig, Variants } from 'framer-motion'

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

export default function MiiPlanRobot() {
	return (
		<MotionConfig transition={{ duration: 2, delay: 0.4 }}>
			<svg className='w-64 mt-12' viewBox="0 0 826 622" fill="none" xmlns="http://www.w3.org/2000/svg">
				<motion.path
					d="M369.42 163.098C401.462 114.685 503.613 22.0743 513.883 29.8336C522.287 36.1831 494.444 73.9613 490.883 78.1838C462.396 111.95 431.917 141.051 395.342 164.665C380.275 174.391 359.508 175.075 372.795 158.319"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="14.8357"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M359.072 174.1C337.557 195.999 360.297 182.175 373.636 174.922"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="14.8357"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M503.748 64.3644C516.272 82.635 480.787 113.117 467.356 125.162"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="14.8357"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M435.059 100.577C439.988 107.598 443.726 112.694 448.774 123.46"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="14.8357"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M64.5321 398.192C53.8802 373.835 45.4207 348.619 37.4186 323.24C31.7179 305.159 6.53725 250.719 7.85518 233.612C8.07684 230.726 22.1983 224.529 24.1169 224.255C36.1218 222.55 112.634 191.058 121.201 191.688C126.648 192.085 134.971 199.803 140.159 202.149C181.886 221.024 167.164 211.927 182.268 259.83"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="14.7212"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M204.276 337.37C203.316 342.506 217.749 364.344 213.929 367.984C209.979 371.746 89.1866 410.407 77.1918 412.8"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="14.7212"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M123.299 199.172C133.595 206.43 124.354 223.126 128.636 230.905C129.009 231.58 157.869 218.439 161.996 218.273"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="14.7212"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M49.9574 256.693C60.1421 254.287 68.4483 246.895 78.5031 244.688"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="11.0409"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M57.842 289.899C78.3849 285.042 99.3373 272.812 118.394 268.66"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="11.0409"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M71.6533 317.304C73.9519 315.486 74.7189 309.425 78.049 308.872C99.5648 305.299 108.481 306.239 129.855 296.816"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="11.0409"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M81.4102 348.249C96.0408 344.592 96.1461 338.471 116.453 336.342"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="11.0409"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M180.936 302.553C187.45 285.392 199.486 249.491 206.368 232.367C212.587 216.89 208.224 205.072 229.962 211.34C247.208 216.317 236.468 229.943 231.719 243.853C230.904 246.234 208.149 311.445 207.246 311.573C199.716 312.642 187.011 301.101 179.935 305.437C178.816 306.12 178.977 336.981 179.253 339.556C180.187 348.241 199.344 320.347 205.311 315.472"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="14.7212"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M816.236 265.214C806.266 307.26 799.397 332.945 795.63 342.27C789.978 356.257 781.696 371.77 771.353 369.875C767.071 369.091 759.357 365.974 748.211 360.525"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16.8516"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M778.057 224.099C782.806 215.565 781.336 209.745 773.647 206.638C762.114 201.978 751.294 195.128 745.231 199.2C741.189 201.914 737.945 206.299 735.499 212.353"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16.8516"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M366.835 320.668C446.198 325.531 482.037 318.989 507.042 318.989C530.297 318.989 541.239 395.466 531.683 418.048C522.671 439.341 369.33 440.197 362.191 431.763C353.935 422.008 358.709 381.275 358.709 367.301"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M367.332 456.694C258.34 557.485 390.25 539.498 417.233 561.083"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M367.33 456.694C368.792 479.702 370.164 531.696 369.263 538.898"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M477.307 402.239C477.307 397.959 477.307 393.678 477.307 389.396"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M446.299 403.271C446.035 399.883 446.3 392.121 446.3 389.396"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M472.398 507.721C621.097 505.921 643.881 492.73 581.524 607.851"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M554.55 611.449C465.81 607.851 405.851 640.229 447.223 530.504"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M449.018 611.448C429.77 597.385 408.302 586.213 389.658 570.675"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M487.395 456.156C488.024 471.563 488.594 486.899 488.594 502.324"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M487.395 456.156C494.896 468.037 501.97 475.77 510.777 496.328"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M349.117 385.041C344.6 386.221 340.049 385.99 335.441 386.409"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M328.594 375.469C328.654 383.755 328.592 391.914 327.91 400.085"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M546.74 381.622C550.154 381.268 553.588 380.823 556.996 380.255"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M560.412 370.682C561.382 376.109 561.095 381.613 561.095 387.093"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					d="M494.769 382.466C472.363 379.993 450.658 381.175 429.125 384.568"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					opacity="0.502093"
					d="M178.559 344.636C168.953 316.045 162.507 358.577 155.873 361.64C151.619 363.603 147.595 347.487 139.714 347.923C132.524 348.323 135.005 360.832 129.883 364.012C125.303 366.855 115.101 366.765 108.089 371.331"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="14.7212"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M687.549 199.361C666.653 195.583 657.326 211.413 652.664 219.859C643.569 236.333 621.782 284.391 622.625 294.208C623.468 304.025 637.907 316.661 662.336 326.53C686.765 336.4 734.246 359.31 750.696 362.23C767.145 365.15 825.338 267.704 811.365 253.767C793.347 239.516 708.445 203.139 687.549 199.361Z"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="16.8516"
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