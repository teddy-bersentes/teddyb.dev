import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	variable: '--font-poppins'
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<main className={clsx(poppins.className, 'min-w-[22.5rem]')}>
				<Component {...pageProps} />
			</main>
			<Analytics />
		</>
	)
}
