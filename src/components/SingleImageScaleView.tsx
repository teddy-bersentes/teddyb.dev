import Image from "next/image"

type Props = {
	url: string
	alt?: string
	blurHash?: string
}

export default function SingleImageScaleView({ url, alt, blurHash }: Props) {
	return (
		<div className='relative flex group flex-col items-center justify-center w-full aspect-[1.5659824047] bg-t-gray-100 rounded-2xl border border-[#D6D6D6] hover:border-[#C2C2C2] transition-colors duration-500'>
			<Image
				src={url}
				alt={alt || 'A preview of the site'}
				className='transition-transform duration-500 transform group-hover:scale-110'
				fill
				blurDataURL={blurHash}
			/>
		</div>
	)
}