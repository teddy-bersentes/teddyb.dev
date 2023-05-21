import React from "react";
import { motion } from "framer-motion";
import { infiniteTransition } from "~/utils/animation";

export default function Butterfly() {
	return (
		<motion.svg className='absolute -bottom-4 left-20' width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M24.6312 6.65474C24.0612 6.99474 23.4112 7.45474 22.6312 7.94474C22.2512 8.18474 21.8412 8.43474 21.3912 8.67474L20.6912 9.03474C20.4312 9.16474 20.2112 9.24474 19.8512 9.39474C19.1726 9.65841 18.4492 9.78748 17.7212 9.77474C17.3556 9.76003 16.9914 9.71994 16.6312 9.65474L15.8812 9.49474C14.9912 9.27474 14.2012 9.02474 13.4112 8.79474C12.2612 8.48474 11.1212 8.31474 10.0312 8.02474C7.55123 7.45474 7.71124 7.28474 6.68124 7.21474C6.46186 7.18906 6.24152 7.25408 6.07124 7.39474C5.92505 7.53854 5.85156 7.74063 5.87123 7.94474C5.90012 8.37589 6.06069 8.78779 6.33123 9.12474C6.45224 9.30342 6.59689 9.46488 6.76124 9.60474L6.89124 9.71474L7.10123 9.90474L7.55124 10.2647C8.22524 10.7603 8.93747 11.2017 9.68124 11.5847C11.6212 12.5847 13.7412 13.3847 15.6812 14.2847C16.1512 14.5147 16.2212 15.2847 15.4012 16.0447C14.3659 16.9264 12.9881 17.2938 11.6512 17.0447C10.3692 16.763 9.11936 16.3509 7.92124 15.8147C7.31123 15.5447 6.71124 15.2447 6.11124 14.9147C5.51124 14.5847 4.97124 14.2547 4.24124 13.8147C3.86888 13.5612 3.5325 13.2584 3.24124 12.9147C2.83123 12.4947 2.40124 12.1047 2.04124 11.6747C1.68124 11.2447 1.24124 10.8147 0.941235 10.3647L0.311235 8.96474C0.184707 8.50753 0.0845423 8.04343 0.0112351 7.57474C-0.00374504 7.35166 -0.00374504 7.12782 0.0112351 6.90474C0.00219905 6.69017 0.0189861 6.4753 0.0612351 6.26474C0.143805 5.38345 0.520723 4.55564 1.13124 3.91474C1.88297 3.18861 2.83929 2.71045 3.87124 2.54474C5.02575 2.35839 6.20099 2.33818 7.36124 2.48474C8.71124 2.66474 9.53123 2.84474 10.2612 2.99474C10.9912 3.14474 11.7512 3.34474 12.4712 3.54474L14.7912 4.21474C15.5612 4.40474 16.3212 4.59474 17.0012 4.72474L17.3412 4.79474C17.4209 4.80437 17.5015 4.80437 17.5812 4.79474C17.7622 4.80258 17.942 4.7611 18.1012 4.67474C18.7146 4.38108 19.2946 4.02236 19.8312 3.60474C20.6112 3.06474 21.4412 2.42474 22.4312 1.83474C22.9655 1.51795 23.5239 1.24377 24.1012 1.01474C24.7731 0.730852 25.465 0.496884 26.1712 0.314737C28.2412 -0.185263 30.2412 -0.185263 31.7112 1.02474C32.4069 1.68327 32.8041 2.59686 32.8112 3.55474C32.829 4.5062 32.6556 5.45154 32.3012 6.33474C32.0169 7.07643 31.6828 7.79807 31.3012 8.49474L30.6512 9.56474L30.0912 10.4047C29.3687 11.4781 28.5486 12.4823 27.6412 13.4047C27.2535 13.8143 26.8428 14.2016 26.4112 14.5647C24.7312 15.8747 23.8212 15.6747 22.8112 14.6347C22.5662 14.402 22.3389 14.1513 22.1312 13.8847C21.5208 12.9026 21.6702 11.629 22.4912 10.8147C23.724 9.51919 24.873 8.14641 25.9312 6.70474C26.0281 6.58036 26.1119 6.44632 26.1812 6.30474H26.1312C26.1312 6.30474 26.1312 6.30474 26.1312 6.22474C26.1087 6.2163 26.0838 6.2163 26.0612 6.22474C25.602 6.39801 25.1655 6.62634 24.7612 6.90474L24.6312 6.65474Z" fill="#231F20" />
			<path d="M61.7213 27.9547L60.3913 28.9547L59.5213 29.6047C59.111 29.8982 58.668 30.1432 58.2013 30.3347C57.424 30.5896 56.6092 30.7113 55.7913 30.6947C55.1405 30.6695 54.494 30.579 53.8613 30.4247C52.8748 30.1623 51.9089 29.8281 50.9713 29.4247C50.0866 29.1087 49.1853 28.8416 48.2713 28.6247C47.8713 28.4947 47.4713 28.3947 47.0813 28.2947L46.5813 28.1847L46.3613 28.1147C46.041 28.0002 45.6968 27.9692 45.3613 28.0247C45.1722 28.0486 44.9999 28.1455 44.8813 28.2947C44.7838 28.4424 44.7381 28.6183 44.7513 28.7947C44.7692 29.1904 44.8936 29.5739 45.1113 29.9047C45.4284 30.2961 45.8066 30.6338 46.2313 30.9047C46.843 31.3019 47.4929 31.6369 48.1713 31.9047C50.184 32.5059 52.1253 33.3241 53.9613 34.3447C54.5513 34.7447 54.2913 35.0447 53.6113 35.3447C52.6674 35.7893 51.6512 36.0603 50.6113 36.1447C48.1532 36.2715 45.705 35.7508 43.5113 34.6347L43.0413 34.3647L42.4313 33.9547L41.8413 33.5447L41.3113 32.9647L40.8013 32.3847L40.4113 31.7247L40.0213 31.0847L39.7913 30.3947C39.0609 28.7669 39.2196 26.8778 40.2113 25.3947C41.4913 23.7647 43.5913 23.2847 45.8113 23.3947C46.3613 23.3947 46.9513 23.4847 47.3413 23.5447L48.4613 23.7047C49.1657 23.8247 49.8633 23.9816 50.5513 24.1747C51.1813 24.3647 51.7913 24.5547 52.4413 24.7947C53.0913 25.0347 53.5313 25.2147 54.0213 25.3747C54.4678 25.5257 54.926 25.6394 55.3913 25.7147C55.5344 25.7252 55.6781 25.7252 55.8213 25.7147C55.9505 25.7345 56.082 25.7345 56.2113 25.7147C56.3102 25.6892 56.4046 25.6488 56.4913 25.5947L56.6313 25.4947L56.8713 25.3147C58.1813 24.3147 59.5513 23.0247 61.1613 21.8947C61.8727 21.3744 62.6673 20.9788 63.5113 20.7247L63.9713 20.6447C64.1576 20.6296 64.3449 20.6296 64.5313 20.6447C64.7592 20.6598 64.9843 20.7035 65.2013 20.7747C65.4414 20.8514 65.6676 20.9662 65.8713 21.1147C66.4764 21.5749 66.8782 22.2529 66.9913 23.0047C66.9913 23.2447 67.0613 23.5347 67.0813 23.6947V24.2147C67.1208 24.6857 67.0973 25.1599 67.0113 25.6247C66.8292 26.489 66.4902 27.3126 66.0113 28.0547C65.3813 29.0547 64.7613 30.0547 64.1313 30.8947C63.5013 31.7347 62.8113 32.5947 62.1313 33.3947C61.8213 33.7447 61.5513 34.1047 61.2113 34.3947C59.9613 35.5947 59.2813 35.6447 58.1113 34.8847C57.8421 34.722 57.5817 34.5451 57.3313 34.3547C56.5277 33.6037 56.4281 32.3644 57.1013 31.4947C58.1013 29.8847 59.1013 28.3447 60.1013 26.9147C60.6413 26.2647 61.1013 25.6147 61.4813 25.1047C61.5927 24.9417 61.6929 24.7713 61.7813 24.5947L61.9813 24.6447L62.2513 24.7147H62.1913H61.9013C61.7613 24.7147 61.8013 24.7147 61.8013 24.7147C61.8068 24.6649 61.8068 24.6146 61.8013 24.5647V24.3247V24.0847C61.9113 24.0847 62.1413 24.0847 62.3013 23.9947C63.0904 23.9613 63.8493 23.6815 64.4713 23.1947C64.4713 23.1147 64.4713 23.1947 64.4713 23.1947C64.4483 23.2934 64.4483 23.396 64.4713 23.4947C64.4373 23.6798 64.4373 23.8696 64.4713 24.0547C64.499 24.3146 64.5595 24.57 64.6513 24.8147C64.7324 25.1264 64.8394 25.4308 64.9713 25.7247C64.9713 25.8447 64.9713 25.8347 64.9713 25.8347L64.7713 25.9247C64.2963 26.1816 63.8446 26.4794 63.4213 26.8147C62.9113 27.1947 62.4213 27.6247 61.8413 28.0747L61.7213 27.9547Z" fill="#231F20" />
			<path d="M36.9812 52.6747C37.6231 52.8014 38.2523 52.9854 38.8612 53.2247C39.2856 53.3973 39.6996 53.5943 40.1012 53.8147C40.8712 54.2247 41.5212 54.6347 42.1012 55.0147C42.2048 55.0823 42.3019 55.1593 42.3912 55.2447C42.4483 55.2966 42.5168 55.3343 42.5912 55.3547C42.743 55.3991 42.9064 55.3774 43.0412 55.2947C43.1794 55.2142 43.3071 55.1168 43.4212 55.0047L44.0512 54.4847C44.4714 54.126 44.9121 53.7921 45.3712 53.4847C46.6058 52.6297 47.9223 51.8995 49.3012 51.3047C50.4046 50.8132 51.6037 50.5741 52.8112 50.6047C53.331 50.6203 53.8446 50.7217 54.3312 50.9047C54.8611 51.114 55.3267 51.4588 55.6812 51.9047C55.8416 52.1446 55.9853 52.3952 56.1112 52.6547C56.2041 52.908 56.2744 53.169 56.3212 53.4347C56.3264 53.9057 56.276 54.3756 56.1712 54.8347C55.9374 55.8323 55.535 56.7826 54.9812 57.6447C54.6712 58.1547 54.2612 58.6447 53.9012 59.1947C53.5412 59.7447 53.1312 60.1947 52.7012 60.6847C52.2712 61.1747 52.2912 61.1947 52.1212 61.4147L51.6512 62.0247C51.3312 62.4347 51.0012 62.8347 50.6512 63.2347C49.93 63.9877 49.1509 64.6832 48.3212 65.3147C47.8212 65.6947 47.4412 65.3147 47.2712 64.5047C47.0506 63.417 47.1478 62.2887 47.5512 61.2547C48.0612 60.3347 48.6212 59.4647 49.1412 58.5847C49.2012 58.5147 49.2012 58.5847 49.3112 58.5047C49.4918 58.3982 49.6539 58.2631 49.7912 58.1047C50.0321 57.8318 50.1254 57.4589 50.0412 57.1047C49.9412 56.7747 49.5312 56.9047 49.1812 57.1047C49.002 57.2087 48.8284 57.3222 48.6612 57.4447L47.5312 58.2547C46.9312 58.6747 46.6612 58.9347 45.5312 59.7147C44.6005 60.3802 43.46 60.6857 42.3212 60.5747C41.7621 60.5049 41.2163 60.3533 40.7012 60.1247C40.1912 59.8847 39.7012 59.6047 39.4512 59.4547C38.8412 59.1147 38.2712 58.7947 37.7312 58.5447C37.2696 58.3055 36.7788 58.1274 36.2712 58.0147C35.8219 57.9298 35.3606 57.9298 34.9112 58.0147C34.4858 58.0709 34.0842 58.244 33.7512 58.5147C33.4383 58.8176 33.3838 59.2997 33.6212 59.6647C33.9293 60.2107 34.3651 60.6739 34.8912 61.0147C35.1409 61.1761 35.4015 61.3198 35.6712 61.4447C36.0812 61.6647 36.5312 61.8347 36.9612 62.0147C37.8512 62.3347 38.7512 62.5947 39.6612 62.8247C40.0681 62.8906 40.4692 62.9876 40.8612 63.1147C42.2912 63.6447 42.6912 64.0547 42.7812 65.2747C42.7812 65.5447 42.8512 65.8047 42.8512 66.0547C42.8512 66.8547 41.9912 67.5447 40.6112 67.5447C39.5995 67.5914 38.5868 67.4766 37.6112 67.2047C36.58 66.9469 35.5755 66.5919 34.6112 66.1447C34.1312 65.9047 33.6112 65.6747 33.1712 65.3847C32.4312 64.9647 31.6312 64.3847 30.8812 63.8347L29.8812 62.9047C29.5512 62.5947 29.2812 62.2647 28.9712 61.9047C28.4754 61.3128 28.0924 60.6349 27.8412 59.9047L27.6012 59.1447C27.4744 58.1224 27.6301 57.0849 28.0512 56.1447C28.2814 55.6789 28.5668 55.2424 28.9012 54.8447C29.2636 54.4686 29.666 54.1333 30.1012 53.8447C31.0736 53.2788 32.1356 52.8831 33.2412 52.6747C34.4637 52.3868 35.7306 52.3392 36.9712 52.5347L36.9812 52.6747Z" fill="#231F20" />
		</motion.svg>
	)
}