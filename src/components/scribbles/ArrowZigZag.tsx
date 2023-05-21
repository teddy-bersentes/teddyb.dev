import React from "react";
import { motion } from "framer-motion";
import { infiniteTransition } from "~/utils/animation";

export default function ArrowZigZag() {
	return (
		<motion.svg className='absolute -bottom-8 ml-96' width="103" height="103" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M57.6206 33.8052C58.5914 35.3646 59.3958 37.0217 60.0205 38.7491C60.6207 40.3577 61.1037 41.9388 61.5819 43.5112C62.516 46.6566 63.2346 49.7825 63.8775 52.9155L64.3502 54.8549L64.3964 55.2964L64.4612 55.6253C64.5089 55.7132 64.471 55.9158 64.5996 55.8802C64.8409 55.8751 65.0811 55.8475 65.3172 55.7977L65.5503 55.8078C65.6762 55.789 65.7996 55.7563 65.9184 55.7103L67.3534 55.2725L73.2036 53.473C77.1623 52.2404 81.1986 51.2729 85.2859 50.5768C86.0028 50.4721 86.7244 50.3761 87.43 50.3344C87.8004 50.304 88.1843 50.2776 88.5379 50.279C89.0274 50.2593 89.5176 50.2667 90.0063 50.301C91.0105 50.3461 91.9967 50.5832 92.9116 50.9994C93.7991 51.4049 94.5239 52.0977 94.9693 52.9658C95.117 53.573 95.2201 54.1902 95.2778 54.8124C95.2733 55.4748 95.2513 56.1468 95.2244 56.8099C95.1154 59.1449 95.103 61.4274 94.9638 63.665C94.9313 64.8206 94.843 65.9154 94.7554 67.0325C94.7202 67.5923 94.6417 68.1484 94.5208 68.6961L94.2766 70.3421C94.0401 71.688 93.3051 71.6546 92.1741 70.4936C91.4719 69.7311 90.8514 68.8972 90.3225 68.0056C89.7367 66.8724 89.3915 65.6302 89.3088 64.3572C89.2052 62.6156 89.1376 60.8772 89.0754 59.17L89.0107 56.7245C89.0107 56.7245 89.034 56.6208 88.9871 56.5553C88.9401 56.4897 88.9871 56.5553 88.8969 56.5359C88.8068 56.5166 88.6328 56.5314 88.4851 56.532C88.3375 56.5325 87.9041 56.5516 87.596 56.5709C86.9798 56.6097 86.338 56.685 85.6786 56.77C83.0195 57.1328 80.2074 57.7379 77.3738 58.3661C74.6316 59.0288 71.9284 59.8432 69.2765 60.8054L66.9413 61.6181C65.8316 62.0183 64.6958 62.3422 63.542 62.5876C63.0355 62.6812 62.5191 62.7092 62.0055 62.6709C61.5311 62.6293 61.07 62.4927 60.6495 62.2692C60.4877 62.1338 60.3428 61.9795 60.2178 61.8095C60.0846 61.6455 59.9692 61.4679 59.8733 61.2797C59.7355 61.0783 59.6188 60.8634 59.525 60.6382L59.2695 59.8324L59.1934 59.5665L58.487 55.8764L58.0349 53.6185C57.7276 52.1164 57.3953 50.6242 57.0379 49.1417C56.3638 46.2161 55.4544 43.3497 54.3186 40.5706C53.8824 39.5149 53.3601 38.4969 52.757 37.5268C52.5623 37.1996 52.3376 36.8911 52.086 36.6053C51.8814 36.3625 51.6219 36.1719 51.3289 36.0492C51.1782 35.9603 51.0057 36.0199 50.8501 36.0475C50.6944 36.0751 50.5211 36.1123 50.3614 36.1535C50.2017 36.1947 49.8648 36.2866 49.5725 36.377L48.5982 36.6784C43.0234 38.4195 37.2899 40.0988 31.6164 41.7C27.2021 42.9588 22.8386 44.395 18.2448 45.2393C17.2085 45.4264 16.2009 45.6663 15.1751 45.7681C13.7586 45.9964 12.308 45.8828 10.9443 45.4367C10.1013 45.0474 9.46904 44.3111 9.21155 43.419C9.05055 43.0248 8.92449 42.6173 8.8348 42.2012C8.81622 41.506 9.19319 40.8605 9.80769 40.535C10.1915 40.2798 10.5974 40.0594 11.0205 39.8765C11.5441 39.6677 12.0902 39.5201 12.6478 39.4368C19.9018 38.1267 27.7387 35.7946 35.7939 33.6968C38.2182 33.0064 40.6561 32.3199 43.0892 31.6247L46.8119 30.5592L49.1044 29.9403C49.7016 29.7641 50.3158 29.6518 50.9367 29.6055C51.5323 29.5914 52.1282 29.6176 52.7203 29.684C53.2458 29.8765 53.7506 30.1145 54.2242 30.358C54.7164 30.6356 55.1776 30.965 55.5998 31.3407C56.0346 31.7114 56.4402 32.1151 56.8129 32.5482C57.0063 32.7573 57.1843 32.9801 57.3456 33.2148L57.726 33.7479L57.6206 33.8052Z" fill="black" />
			<path d="M10.7398 42.1681C10.6343 42.2254 10.6783 42.2015 10.6519 42.2159L10.3882 42.359C10.274 42.421 10.0543 42.5403 10.153 42.6802C10.1895 42.7774 10.2393 42.869 10.3009 42.9526L10.4443 43.091C10.5454 43.1798 10.6633 43.2474 10.7911 43.2896C11.614 43.6734 12.5385 43.8883 13.4358 44.2204C16.6413 45.5937 19.9331 46.756 23.2902 47.7C24.8017 48.0936 26.3434 48.3603 27.8992 48.4973C29.7911 48.578 31.6698 48.8504 33.5066 49.3102C33.8783 49.4498 34.2178 50.4944 33.6585 51.6856C33.1356 52.9397 31.9904 53.8252 30.6452 54.0158C29.5445 54.0462 28.4434 53.9695 27.3575 53.7868C26.2828 53.6307 25.2289 53.4292 24.2062 53.2221C22.1134 52.7433 20.0647 52.0896 18.0814 51.2677C16.8694 50.7901 15.6321 50.3793 14.3751 50.0371L12.4847 49.4477C11.8507 49.223 11.2342 48.9888 10.6155 48.6875C9.99674 48.3862 9.72002 48.2747 9.27831 48.048L8.60383 47.686C8.33112 47.561 7.98283 47.3177 7.66392 47.1495C7.03093 46.813 6.44266 46.3984 5.9129 45.9154C5.4258 45.505 4.99852 45.0284 4.64347 44.4996C4.4883 44.2325 4.36459 43.9484 4.27479 43.6529C4.27479 43.6529 4.51509 43.6135 4.38904 43.5909C4.37157 43.5624 4.35564 43.5331 4.34132 43.503L4.36089 43.2875L4.41836 42.8695C4.58237 42.2388 4.89397 41.6562 5.32747 41.1697C6.62386 39.586 8.00691 38.0753 9.47029 36.6445C11.3175 34.7654 13.2667 32.9902 15.0644 31.1038C16.4647 29.638 17.6482 27.9827 18.9785 26.4298C19.2712 26.0888 19.5273 25.7221 19.8432 25.4027C21.0561 24.2207 21.7713 24.1965 22.9141 25.0439C23.1837 25.2263 23.4428 25.4237 23.6903 25.6352C24.4699 26.3988 24.5647 27.6212 23.9122 28.496C21.7926 31.453 19.3663 34.1778 16.6739 36.6249C14.7157 38.5301 12.6626 40.4073 10.7905 42.3454L10.7398 42.1681Z" fill="black" />
		</motion.svg>
	)
}