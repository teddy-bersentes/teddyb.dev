import type { Components } from "@mdx-js/react/lib";

const MDComponents: Components = {
	h1: ({ ...props }) => <h1 className='mb-4 text-3xl font-semibold' {...props} />,
	h2: ({ ...props }) => <h2 className='mb-4 text-2xl font-semibold' {...props} />,
	h3: ({ ...props }) => <h3 className='text-xl font-semibold' {...props} />,
	p: ({ ...props }) => <p className='mb-4 text-lg leading-7' {...props} />,
	strong: ({ ...props }) => <strong className='font-semibold' {...props} />,
	blockquote: ({ ...props }) => <blockquote className='text-lg font-normal italic text-[#D2D2D2] border-l-4 border-[#d2d2d2] pl-4 my-4' {...props} />,
	a: ({ ...props }) => <a className='transition-opacity text-t-blue hover:opacity-80 hover:underline' {...props} />,
	hr: ({ ...props }) => <hr className='mb-4 border-t-2 border-[#D2D2D2]' {...props} />,
	// eslint-disable-next-line jsx-a11y/alt-text
	img: (props: any) => (
		<div className="relative not-prose [a:not(:first-child)>&]:mt-[2em] [a:not(:last-child)>&]:mb-[2em] my-[2em] first:mt-0 last:mb-0 rounded-2xl overflow-hidden [figure>&]:my-0">
			{/* eslint-disable @next/next/no-img-element */}
			{/* eslint-disable-next-line jsx-a11y/alt-text */}
			<img {...props} decoding="async" />
			<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10 dark:ring-white/10" />
		</div>
	)
}

export default MDComponents;