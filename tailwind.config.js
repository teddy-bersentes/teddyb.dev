const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				xs: "504px",
			},
			fontFamily: {
				sans: ["var('--font-poppins')"],
				inter: ["var(--font-inter)"],
			},
			fontSize: {
				fluid: "clamp(0.625rem, 0.30231rem + 0.7692vw, 1rem)",
			},
			colors: {
				t: {
					red: "#FD3C39",
					blue: "#0085D4",
					yellow: "#FDB502",
					bg: "#F2F2F2",
					gray: "#4E4E4E",
				},
			},
			borderRadius: {
				"4xl": "1.875rem",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities, addVariant }) {
			addUtilities({
				".no-scrollbar": {
					"&::-webkit-scrollbar": {
						display: "none",
					},
					"-ms-overflow-style": "none",
					"scrollbar-width": "none",
				},
			});

			addVariant("em", ({ container }) => {
				container.walkRules((rule) => {
					rule.selector = `.em\\:${rule.selector.slice(1)}`;
					rule.walkDecls((decl) => {
						decl.value = decl.value.replace("rem", "em");
					});
				});
			});
		}),
	],
};
