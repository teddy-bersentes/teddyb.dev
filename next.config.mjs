import unwrapImages from "remark-unwrap-images";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: "@mdx-js/react",
		remarkPlugins: [unwrapImages],
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

export default withMDX(nextConfig);
