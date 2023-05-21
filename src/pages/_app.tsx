import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import clsx from 'clsx'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	variable: '--font-poppins'
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={clsx(poppins.className, 'subpixel-antialiased font-sans scroll-smooth bg-t-bg')}>
			<Component {...pageProps} />
		</main>
	)
}
