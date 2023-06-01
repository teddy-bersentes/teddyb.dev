import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx'

export const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-poppins'
})

export const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--font-inter'
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<main className={clsx(poppins.className, 'min-w-[22.5rem] font-sans')}>
				<Component {...pageProps} />
			</main>
			<Analytics />
		</>
	)
}
