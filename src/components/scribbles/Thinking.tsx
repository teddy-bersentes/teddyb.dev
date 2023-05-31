import { motion } from "framer-motion"

type Props = {
	visible?: boolean
}

export default function Thinking({ visible }: Props) {
	return (
		<svg width="83" height="99" viewBox="0 0 83 99" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M37.1562 30.6639C37.0273 26.6837 36.804 22.6259 36.5024 18.8955" stroke="black" strokeOpacity="0.9" strokeWidth="6.15163" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M63.6358 30.5961C64.3798 26.4305 62.9049 19.7235 63.9627 15.6265" stroke="black" strokeOpacity="0.9" strokeWidth="6.15163" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M34.0752 51.1154C43.9705 50.3345 53.5976 51.9274 61.5349 58.1235" stroke="black" strokeOpacity="0.9" strokeWidth="6.15163" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M22.998 9.12572C25.9216 8.62209 30.1978 3.27598 33.8865 4.08274C37.9403 4.96936 42.4159 8.74135 43.6935 9.12572" stroke="black" strokeOpacity="0.9" strokeWidth="6.15163" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M63.9629 15.6264C68.699 13.3992 73.8349 12.7782 79.0003 12.3574" stroke="black" strokeOpacity="0.9" strokeWidth="6.15163" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M4 75.5037C4 64.0522 4.98947 52.4282 11.1667 55.4917C13.8763 56.8366 20.0881 68.7155 21.2185 68.3949C29.4758 66.0547 47.8047 60.1285 49.958 68.3949C51.9633 76.0935 36.9112 74.9521 36.9112 75.5037C36.9112 76.0386 40.9717 77.9427 40.6255 81.0336C40.2932 84.0045 30.7125 86.8264 33.7253 86.8264C49.618 86.8264 28.2771 93.5095 21.2185 94.9475C14.1599 96.3855 9.29502 94.499 4 92.8821" stroke="black" strokeOpacity="0.9" strokeWidth="6.15163" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}