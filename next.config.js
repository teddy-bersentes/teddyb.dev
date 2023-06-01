const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: "@mdx-js/react",
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
	images: {
		domains: ["ucarecdn.com"],
	},
};

module.exports = withMDX(nextConfig);
