import React from "react";
import { motion } from "framer-motion";
import { infiniteTransition } from "~/utils/animation";

export default function ArrowCurve() {
	return (
		<motion.svg className='absolute mr-72 -bottom-20' width="90" height="87" viewBox="0 0 90 87" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M73.9214 29.4367C75.8782 29.6968 77.7971 30.1886 79.6378 30.9018L80.7251 31.333C81.1115 31.5076 81.483 31.7135 81.8359 31.9487L82.5222 32.5463C82.7735 32.8001 83.0043 33.0733 83.2125 33.3635C83.6291 34.0157 83.8759 34.7617 83.9305 35.5336C83.9648 36.1723 83.9028 36.8125 83.7468 37.4327C83.4995 38.4195 83.168 39.3834 82.7559 40.3135L81.5678 43.1993C81.3459 43.8315 81.0652 44.4415 80.7294 45.0213C80.309 45.5681 79.8347 46.0713 79.3137 46.5233C78.9663 46.7995 78.6766 46.5589 78.3866 46.0094C77.979 45.3324 77.724 44.5745 77.6395 43.7888C78.2604 41.5034 79.0588 39.27 80.0274 37.1089C80.25 36.2948 80.2771 36.184 80.1117 35.8636C80.033 35.82 79.9221 35.69 79.7006 35.6358C79.5074 35.5105 79.3057 35.3987 79.0971 35.3013C77.7124 34.6027 76.2238 34.1328 74.6891 33.9097C73.6989 33.7044 72.6981 33.5543 71.6912 33.46C70.0958 33.3614 68.4948 33.3996 66.9058 33.5743C65.6579 33.7629 64.4917 34.1341 63.2973 34.4324C63.0352 34.4929 62.7895 34.5854 62.5186 34.641C62.1584 34.7814 61.7545 34.7541 61.4164 34.5667C61.0783 34.3793 60.8412 34.0512 60.7693 33.6714C60.6798 33.4617 60.5718 33.2646 60.4958 33.051C60.2422 32.3216 60.5921 31.5199 61.2993 31.2097C62.3426 30.6184 63.4447 30.1372 64.5876 29.7739C65.8044 29.4442 67.0566 29.2629 68.3169 29.2342C70.1943 29.1363 72.0766 29.1894 73.9456 29.393L73.9214 29.4367Z" fill="#231F20" />
			<path d="M46.7595 62.1842C42.7621 63.6595 38.5878 64.6018 34.3443 64.9866C32.7988 65.1802 31.2429 65.28 29.6853 65.2853C24.256 64.8739 18.9778 63.3048 14.2054 60.6835C13.1734 60.1115 12.1501 59.5442 11.1656 58.907C10.6495 58.621 10.181 58.2698 9.69314 57.9537C9.20526 57.6375 8.77945 57.23 8.32455 56.8749C6.02401 55.0344 3.98031 52.894 2.24794 50.511C1.70624 49.7762 1.93639 49.7323 2.72535 50.021C3.96651 50.4783 5.17295 51.0247 6.33523 51.6561C7.56075 52.4155 8.85414 53.0524 10.0786 53.7311L11.9579 54.5899C12.5526 54.9196 13.1474 55.2492 13.7071 55.5595C16.0866 56.8573 18.5744 57.9455 21.1425 58.8121C22.7276 59.3382 24.3772 59.6448 26.0455 59.7233C26.8838 59.7992 27.7374 59.7236 28.5737 59.7413C29.41 59.7589 30.2501 59.6872 31.0883 59.6602C34.8264 59.5075 38.5233 58.819 42.0658 57.6159L43.7329 57.0422L45.3592 56.3773C46.4603 55.9586 47.5087 55.4078 48.5737 54.8891C51.8072 53.2768 54.8778 51.3567 57.743 49.1556C59.9773 47.4557 61.7323 45.2385 63.8343 43.3852C64.2729 42.9652 64.6727 42.5122 65.1463 42.1116C65.3646 41.9239 65.5684 41.7625 65.7626 41.6186C65.9567 41.4746 66.179 41.4035 66.3664 41.313C66.6949 41.1604 67.0409 41.0488 67.3966 40.9808C67.9919 40.8824 68.6031 40.9839 69.1345 41.2696C69.4025 41.3741 69.6635 41.4958 69.9158 41.634C70.6525 42.0995 70.5012 43.342 69.7122 45.0541C69.4293 45.6618 69.0713 46.2316 68.6463 46.75C68.2564 47.2885 67.8529 47.8309 67.4318 48.3635C67.0108 48.8962 66.5684 49.4056 66.1299 49.9285C65.6749 50.4308 65.1852 50.9006 64.6646 51.3344C62.5917 53.1806 60.3832 54.8687 58.0578 56.3846C54.5174 58.7067 50.7509 60.6641 46.8159 62.2269L46.7595 62.1842Z" fill="#231F20" />
			<path d="M70.498 27.8364C72.0987 27.636 73.71 27.5326 75.3231 27.5268C76.1944 27.5277 77.0649 27.5752 77.9311 27.669C78.1584 27.6921 78.4023 27.7473 78.6335 27.784C78.8895 27.8201 79.143 27.8727 79.3922 27.9416C80.0347 28.0824 80.6557 28.3075 81.2393 28.611C81.9531 28.9808 82.5984 29.4699 83.1473 30.0573C83.4597 30.4744 83.7186 30.929 83.9178 31.4106C84.1049 31.9093 84.2316 32.4286 84.2952 32.9575C84.3378 33.346 84.3541 33.737 84.3439 34.1278C84.3503 34.4127 84.3412 34.6977 84.3165 34.9816C84.2792 35.544 84.2166 36.0695 84.1316 36.5941C83.9704 37.6481 83.748 38.6682 83.5429 39.595C83.0485 41.539 82.5559 43.4383 81.8738 45.2669C81.2722 46.8886 80.7814 48.5373 80.2905 50.1861C79.9928 51.246 79.5692 52.2664 79.0288 53.2255C78.4598 54.2051 77.8016 55.1301 77.0626 55.9887C76.5785 56.5321 76.3296 56.2798 76.0744 55.5438C75.6847 54.4859 75.444 53.379 75.3593 52.2547L75.377 51.4185C75.3633 51.1443 75.3886 50.8696 75.4519 50.6025L75.8176 49.0559L76.5577 45.9674C76.8064 44.9619 77.0113 43.9322 77.3639 42.9042L78.4236 39.8786C78.8432 38.69 79.0963 37.4489 79.1757 36.1909C79.2208 35.6134 79.229 35.0337 79.2003 34.4552C79.1912 34.1415 79.1864 34.1502 79.1746 34.0065C79.1594 33.8939 79.1372 33.7823 79.1082 33.6724C79.0941 33.6065 79.0662 33.5443 79.0265 33.4899C78.8901 33.29 78.6921 33.1401 78.4627 33.0631L78.3053 32.9758C78.2091 32.9225 78.0566 32.9294 77.9235 32.9014C77.6502 32.8461 77.3738 32.8074 77.0959 32.7856C75.8291 32.6973 74.5571 32.715 73.2933 32.8388C71.525 32.9979 69.767 33.2564 68.0277 33.613C65.3296 34.1084 62.6666 34.7786 60.0554 35.6195C58.0396 36.2858 56.204 37.3492 54.299 38.1455C53.8748 38.3334 53.4806 38.5494 53.0398 38.7052C51.4173 39.2808 50.7791 39.1328 49.9602 38.0729C49.7823 37.8371 49.5771 37.609 49.4263 37.3654C48.9292 36.5296 49.308 35.5161 50.3727 34.6886C51.1812 34.0963 52.0112 33.5273 52.8663 32.9952C53.7308 32.48 54.6311 32.0276 55.5604 31.6416C57.4326 30.8241 59.3598 30.1387 61.3279 29.5905C64.3157 28.7387 67.3549 28.0786 70.4269 27.614L70.498 27.8364Z" fill="#231F20" />
		</motion.svg>
	)
}