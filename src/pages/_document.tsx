import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en" className='font-sans subpixel-antialiased scroll-smooth'>
			<Head>
				<meta property="twitter:image" content="https://ucarecdn.com/947a7728-9875-4975-b8df-f90e829c8c6e/ogteddy.png" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:title" content="Teddy's Portfolio | Software Developer" />
				<meta property="twitter:description" content="The portfolio of Teddy Bersentes, Software Developer." />


				<meta property="og:image" content="https://ucarecdn.com/947a7728-9875-4975-b8df-f90e829c8c6e/ogteddy.png" />
				<meta property="og:title" content="Teddy's Portfolio | Software Developer" />
				<meta property="og:description" content="The portfolio of Teddy Bersentes, Software Developer." />
				<meta property="og:url" content="https://www.teddyb.dev" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
