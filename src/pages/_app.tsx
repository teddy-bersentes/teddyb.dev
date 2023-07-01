import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

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

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
	posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
		api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
		loaded: (posthog) => {
			if (process.env.NODE_ENV === 'development') posthog.debug()
		}
	})
}

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = () => posthog?.capture('$pageview')
		router.events.on('routeChangeComplete', handleRouteChange)

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])

	useEffect(() => {
		console.info("If you're looking for easter eggs, they aren't here.\n\nBut they might be here: https://github.com/teddy-bersentes/teddyb.dev ")
	}, [])

	return (
		<>
			<PostHogProvider client={posthog}>
				<main className={clsx(poppins.className, 'min-w-[22.5rem] font-sans')}>
					<Component {...pageProps} />
				</main>
			</PostHogProvider>
			<Analytics />
		</>
	)
}
