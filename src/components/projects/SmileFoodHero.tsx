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

export default function SmileFoodHero() {
	return (
		<MotionConfig transition={{ duration: 2, delay: 0.4 }}>
			<svg className='w-64 mt-12' viewBox="0 0 692 404" fill="none" xmlns="http://www.w3.org/2000/svg">
				<motion.path
					d="M281.67 337.639C533.171 278.387 337.968 488.858 261 344.442"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="15.159"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>
				<motion.path
					d="M283.555 379.78C315.172 365.508 349.888 368.458 381.832 381.611"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="15.159"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>
				<motion.path
					d="M315.045 281.722C316.495 268.847 316.086 255.976 316.511 243.056"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="15.159"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>
				<motion.path
					d="M382.872 273.667C384.922 261.877 380.86 242.637 380.223 235"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="15.159"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>
				<motion.path
					d="M78.8223 197.369C65.7785 184.718 32.0081 188.946 30.6785 210.923C29.1694 235.884 65.4665 298.765 97.1742 289.672C110.035 285.984 103.856 266.034 114.748 263.288C127.227 260.143 140.749 288.021 152.713 248.043C164.351 209.157 115.179 130.977 82.3306 194.469"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="9.42738"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>
				<motion.path
					d="M61.3223 165.835C73.2973 173.279 75.8645 185.507 81.3309 196.967"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="9.42738"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>
				<motion.path
					d="M77.9875 188.6C73.0106 180.058 68.1373 121.112 78.6235 123.303C95.7039 126.874 81.9155 175.35 78.3767 183.509"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="9.42738"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>
				<motion.path
					d="M412.897 91.6859C419.135 82.3857 433.592 94.3235 425.636 102.559C418.555 109.891 415.421 102.315 409.232 103.308C407.414 103.6 388.712 110.553 383.696 114.951C370.124 126.851 338.489 142.163 310.199 129.433C290.678 120.649 295.67 96.6377 307.725 85.0181C334.357 59.3451 376.422 93.6495 377.555 93.3198C385.951 90.8721 392.165 88.09 399.174 88.0355"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="9.95458"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>
				<motion.path
					d="M400.921 80.4626C405.12 72.8608 417.576 65.2008 422.199 76.2813"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="9.95458"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>
				<motion.path
					d="M285.659 100.371C280.721 98.38 274.348 93.5742 270.548 89.6638C249.448 67.9495 315.253 -1.38565 373.706 40.188C388.379 50.6244 397.245 65.2102 398.316 80.0923"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="9.95458"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>
				<motion.path
					d="M273.492 58.4294C258.748 38.2261 288.163 24.1559 304.836 28.3921"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="9.95458"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>
				<motion.path
					d="M381.24 36.4159C390.263 30.1642 392.139 33.7125 395.91 41.6838"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="9.95458"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>
				<motion.path
					d="M399.938 36.6029C410.607 42.0721 405.257 52.3775 394.697 51.2815"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="9.95458"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>
				<motion.path
					d="M584.21 163.459C573.859 170.097 564.147 178.28 555.897 187.29C545.672 198.456 508.875 231.252 505.765 243.142C504.752 247.013 501.859 252.222 506.804 255.058C518.303 261.651 541.285 246.38 553.819 244.383C557.349 243.822 562.058 256.017 567.276 255.186C569.473 254.836 580.046 239.607 589.145 237.433C593.791 236.323 597.98 242.398 603.172 241.902C607.838 241.456 613.013 232.851 618.238 230.979C626.15 228.143 631.066 233.387 638.238 233.958C640.282 234.12 644.648 233.626 646.551 232.717C650.049 231.045 651.626 225.852 654.863 223.532C658.469 220.948 664.161 221.622 666.812 217.822C670.189 212.982 656.343 205.278 653.823 202.184C642.453 188.213 605.986 155.474 584.989 159.487C583.598 159.753 582.217 161.908 581.093 162.714"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="8.69963"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>
				<motion.path
					d="M590.632 154.671C597.786 136.302 604.724 138.23 618.447 149.933C631.651 161.195 690.743 198.169 686.812 217.025C685.602 222.835 672.972 225.723 668.096 226.503C656.629 228.337 646.059 234.6 634.303 236.48C598.536 242.199 562.189 248.373 526.686 255.186"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="8.69963"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>
				<motion.path
					d="M679.437 205.276C674.421 205.971 666.582 208.465 666.582 213.595"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="8.69963"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>
				<motion.path
					opacity="0.503384"
					d="M622.966 193.186C625.532 188.773 634.195 187.307 638.515 189.973C651.938 198.256 647.68 221.603 626.79 219.386C613.963 218.026 613.963 205.277 622.966 198.129"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="7.61218"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					opacity="0.503384"
					d="M580.301 212.857C583.321 210.274 587.449 208.302 591.551 208.302C604.034 208.302 614.96 218.69 601.231 227.285C584.492 237.763 566.775 232.075 581.085 213.617"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="7.61218"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					opacity="0.503384"
					d="M576.368 172.451C579.216 167.048 584.993 163.981 591.45 165.656C595.957 166.825 600.055 171.313 603.358 174.212C623.592 191.975 575.838 210.3 575.838 186.039C575.838 180.187 576.137 178.313 580.866 174.716"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="7.61218"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={line}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					opacity="0.503384"
					d="M528.955 232.091C530.253 228.364 532.816 225.162 536.09 222.717C548.553 213.409 567.847 227.36 558.022 236.532C547.583 246.278 525.737 246.511 533.711 227.898"
					stroke="black"
					strokeOpacity="0.9"
					strokeWidth="7.61218"
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