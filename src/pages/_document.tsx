import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en" className='font-sans subpixel-antialiased scroll-smooth'>
			<Head>
				<meta property="twitter:image" content="https://ucarecdn.com/76f16958-c954-4b70-a97e-2e49789c4d5e/ognew.png" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:title" content="Teddy's Portfolio | Software Developer" />
				<meta property="twitter:description" content="The portfolio of Teddy Bersentes, Software Developer." />


				<meta property="og:image" content="https://ucarecdn.com/76f16958-c954-4b70-a97e-2e49789c4d5e/ognew.png" />
				<meta property="og:title" content="Teddy's Portfolio | Software Developer" />
				<meta property="og:description" content="The portfolio of Teddy Bersentes, Software Developer." />
				<meta property="og:url" content="https://www.teddyb.dev" />

				<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
