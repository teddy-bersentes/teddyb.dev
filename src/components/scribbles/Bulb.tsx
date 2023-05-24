import { motion } from "framer-motion"
import { infiniteTransition } from "~/utils/animation"

export default function Bulb() {
	return (
		<svg width="109" height="122" viewBox="0 0 109 122" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M38.8389 75.1455C40.0977 74.8379 41.1983 74.0757 41.9289 73.0055C42.0789 72.8055 42.3189 72.5255 42.4089 72.3955L42.7389 71.9555C42.9689 71.6555 43.1489 71.4255 43.3689 71.1655C43.5889 70.9055 44.0989 70.5255 44.4289 70.1655L44.5889 70.0155L44.7089 69.8855C44.7571 69.8273 44.8107 69.7737 44.8689 69.7255C44.9978 69.5927 45.1662 69.505 45.3489 69.4755C45.7689 69.4755 45.8589 69.9255 45.9389 70.3455C45.9389 70.3955 45.9389 70.6755 45.9389 70.8455C45.9389 71.0155 45.9389 71.2455 45.9389 71.4455C45.9374 71.8375 45.9039 72.2288 45.8389 72.6155C45.695 73.5197 45.4223 74.3987 45.0289 75.2255C44.8889 75.4755 45.0289 75.7355 45.5189 75.8455C46.2562 75.9771 47.0097 75.7247 47.5189 75.1755C47.7657 74.8983 47.9929 74.6042 48.1989 74.2955C48.362 73.9793 48.483 73.6431 48.5589 73.2955C48.7108 72.6789 48.8045 72.0495 48.8389 71.4155L48.8989 70.4655C48.9131 69.9547 48.893 69.4436 48.8389 68.9355C48.6911 68.0315 48.1867 67.2245 47.4389 66.6955C46.517 66.1733 45.3996 66.1286 44.4389 66.5755C43.9319 66.7862 43.4491 67.051 42.9989 67.3655C42.6444 67.5896 42.3098 67.8439 41.9989 68.1255C41.3957 68.6806 40.8373 69.2824 40.3289 69.9255C39.7289 70.6455 39.7189 70.7555 39.4489 71.0555C39.3138 71.2471 39.1155 71.3852 38.8889 71.4455C38.6543 71.4516 38.4383 71.3181 38.3389 71.1055C38.238 70.9588 38.1541 70.8011 38.0889 70.6355C38.0435 70.5446 38.0034 70.4511 37.9689 70.3555L37.8089 69.9455L37.0289 67.9455C36.6557 66.7875 36.163 65.6715 35.5589 64.6155C35.4106 64.3664 35.2434 64.1291 35.0589 63.9055C34.821 63.5779 34.4599 63.3613 34.0589 63.3055C33.6952 63.3834 33.3679 63.5805 33.1289 63.8655C32.9984 63.9818 32.878 64.1089 32.7689 64.2455C32.6128 64.4807 32.523 64.7536 32.5089 65.0355C32.4141 65.328 32.4141 65.643 32.5089 65.9355C33.2089 67.4114 33.8298 68.9235 34.3689 70.4655L34.8389 71.6155C34.9464 71.9586 35.0801 72.2929 35.2389 72.6155C35.3637 72.9412 35.5283 73.2502 35.7289 73.5355C35.9031 73.8136 36.1114 74.069 36.3489 74.2955L36.6889 74.6155L37.0789 74.8555C37.6226 75.162 38.2483 75.2913 38.8689 75.2255L38.8389 75.1455Z" fill="#231F20" />
			<path d="M52.179 87.2255C55.632 83.1125 58.7581 78.7358 61.529 74.1355C64.4573 69.3602 66.3957 64.0449 67.229 58.5055C67.8588 54.3132 67.4783 50.0311 66.119 46.0155C64.773 42.4329 62.4735 39.2862 59.469 36.9155C56.4817 34.6191 52.937 33.1592 49.199 32.6855C45.5765 32.2099 41.8946 32.496 38.389 33.5255C34.8627 34.5749 31.662 36.5057 29.089 39.1355C26.9015 41.4541 25.126 44.1292 23.839 47.0455C22.5967 49.8613 21.6451 52.7965 20.999 55.8055C20.5844 57.7398 20.3104 59.7016 20.179 61.6755C20.021 63.6012 19.9676 65.534 20.019 67.4655C20.0708 71.2948 20.3446 75.1179 20.839 78.9155C21.159 81.2655 21.839 80.9155 22.579 78.8555C23.5705 75.6092 24.1352 72.2476 24.259 68.8555C24.329 66.9555 24.479 65.0655 24.599 63.2155C24.7064 61.4083 24.9168 59.6088 25.229 57.8255C25.8979 54.3117 27.0383 50.9042 28.619 47.6955C29.4074 46.1839 30.3526 44.7594 31.439 43.4455C32.515 42.1961 33.7565 41.0993 35.129 40.1855C36.5482 39.3043 38.0694 38.5991 39.659 38.0855C41.3458 37.5807 43.0828 37.2622 44.839 37.1355C49.0378 36.7526 53.2232 37.9985 56.529 40.6155C59.7809 43.3594 61.8743 47.2319 62.389 51.4555C62.6929 53.8353 62.6559 56.2462 62.279 58.6155C61.8694 61.0342 61.1988 63.4014 60.279 65.6755C58.2277 70.3153 55.6076 74.6821 52.479 78.6755C50.839 80.8555 49.129 82.9955 47.369 85.1255L42.429 91.0555C42.269 91.2355 42.139 91.4355 41.969 91.5955C41.799 91.7555 41.509 91.5355 41.299 91.4555C41.089 91.3755 40.749 91.1455 40.479 90.9755L38.999 89.9755C37.999 89.2955 36.939 88.6055 35.869 87.9755C35.339 87.6455 34.789 87.3155 34.239 86.9755L33.359 86.4955C33.019 86.3155 32.729 86.1555 32.299 85.9555C30.8092 85.2139 29.2293 84.6693 27.599 84.3355C26.2254 84.0659 24.8126 84.0659 23.439 84.3355C22.1389 84.5693 20.934 85.1735 19.969 86.0755C19.4797 86.5447 19.2614 87.2298 19.389 87.8955C19.5341 88.4253 19.7935 88.9168 20.149 89.3355C20.9426 90.3314 21.8795 91.2043 22.929 91.9255C23.929 92.6255 25.099 93.3255 26.259 94.0255L27.949 95.0255L28.589 95.4455L29.139 95.8255C29.8501 96.3119 30.5192 96.8571 31.139 97.4555C31.656 97.9203 32.0684 98.4895 32.349 99.1255L32.409 99.3055V99.3055L33.849 98.8355V98.8355V98.8355C33.8711 98.8248 33.8969 98.8248 33.919 98.8355C34.009 98.8355 33.919 98.8355 33.919 98.8355C33.919 98.8355 33.919 98.8355 33.919 98.7655L33.839 98.6055C33.7989 98.5001 33.7786 98.3883 33.779 98.2755C33.7218 97.9453 33.695 97.6106 33.699 97.2755V97.2755H33.489C33.139 97.2155 32.709 97.1055 32.289 96.9955L29.639 96.2555C27.129 95.5755 23.749 94.6355 21.579 94.8155C20.9819 94.8473 20.391 94.9514 19.819 95.1255C19.281 95.3161 18.79 95.6195 18.379 96.0155C18.2221 96.2699 18.1042 96.5463 18.029 96.8355C17.99 97.0672 17.99 97.3038 18.029 97.5355C18.1151 98.1573 18.3079 98.7594 18.599 99.3155C18.9484 99.981 19.3856 100.597 19.899 101.146C20.9937 102.213 22.1707 103.193 23.419 104.076L24.089 104.576C24.249 104.705 24.4159 104.825 24.589 104.936C24.819 105.066 25.029 105.176 25.229 105.266C25.6014 105.428 25.9859 105.562 26.379 105.666C26.7387 105.801 27.0759 105.989 27.379 106.226C27.619 106.386 27.849 106.376 28.029 106.016C28.2289 105.456 28.2289 104.845 28.029 104.286C27.9091 103.903 27.7552 103.531 27.569 103.176C27.4739 102.976 27.3671 102.782 27.249 102.596L27.159 102.446C27.159 102.446 27.159 102.446 27.159 102.376V102.256C27.0502 101.98 26.9163 101.716 26.759 101.466C26.661 101.321 26.5772 101.167 26.509 101.006C26.4986 100.943 26.4986 100.878 26.509 100.816C26.5002 100.77 26.5118 100.723 26.5405 100.686C26.5693 100.65 26.6126 100.628 26.659 100.626C27.0416 100.619 27.4198 100.708 27.759 100.886L28.119 101.046L28.259 101.126H28.319L28.469 101.186L30.629 101.766C31.4869 102 32.3586 102.18 33.239 102.306H33.779H34.219C34.4522 102.293 34.6835 102.257 34.909 102.196C35.1002 102.151 35.2875 102.09 35.469 102.016L35.759 101.886C35.9992 101.751 36.2239 101.59 36.429 101.406C37.2844 100.659 37.6993 99.5278 37.529 98.4055C37.529 98.2755 37.529 98.1355 37.469 98.0155C37.409 97.8955 37.379 97.7155 37.389 97.7555V97.6955V97.5755L37.289 97.3255C37.1793 97.0155 37.0386 96.7173 36.869 96.4355C36.7323 96.165 36.5716 95.9074 36.389 95.6655C35.7977 94.8274 35.1021 94.068 34.319 93.4055C33.619 92.8055 32.929 92.2755 32.239 91.7855L31.239 91.1455L30.949 90.9455V90.9455V90.9455V90.9455V90.9455L31.209 91.0855L31.629 91.3155C31.989 91.5155 32.349 91.7355 32.709 91.9455C34.149 92.8255 35.579 93.8055 37.129 94.8355L37.719 95.2255L38.209 95.5455L38.779 95.8955C39.5064 96.3586 40.2892 96.7282 41.109 96.9955C41.8715 97.2054 42.6765 97.2054 43.439 96.9955C43.6246 96.9517 43.7965 96.8623 43.939 96.7355L44.419 96.4055L45.419 95.7455L52.519 87.3455L52.179 87.2255Z" fill="#231F20" />
			<path d="M42.9792 64.4255C42.1105 64.9889 41.3174 65.661 40.6192 66.4255L40.1892 66.8955V66.9855L40.0792 67.1855L39.7992 67.6955C39.7492 67.7655 39.6792 67.9755 39.5992 67.8955C39.551 67.8396 39.5137 67.7752 39.4892 67.7055C39.3992 67.4755 39.4292 67.1255 39.3092 66.8855V66.8855C39.3092 66.8855 39.3092 66.8855 39.3092 66.7755L39.1992 66.3755L38.9392 65.4955L38.7792 65.0055L38.5192 64.3855C38.3331 63.9544 38.1053 63.5424 37.8392 63.1555C37.4012 62.4477 36.7744 61.8763 36.0292 61.5055C35.2907 61.1548 34.4546 61.0666 33.6592 61.2555C32.8536 61.4359 32.1027 61.8062 31.4692 62.3355C31.1515 62.6066 30.8478 62.8936 30.5592 63.1955C30.3192 63.5055 30.1292 63.8355 29.9192 64.1955C29.314 65.3151 28.9463 66.5474 28.8392 67.8155C28.7692 68.3455 28.7692 68.8155 28.7192 69.3555C28.6692 69.8955 28.7192 70.3555 28.7192 70.8555C28.7082 71.8203 28.7482 72.785 28.8392 73.7455C28.9592 74.9655 29.1092 76.1655 29.2992 77.3455C29.3992 77.9355 29.6992 78.4955 29.8092 79.0755C29.9192 79.6555 30.0592 80.2355 30.1592 80.8155C30.2592 81.3955 30.6192 81.4455 30.9992 80.8155C31.2424 80.3851 31.4369 79.929 31.5792 79.4555C31.6892 79.1655 31.7292 78.8655 31.8392 78.5355C31.9788 78.2096 32.099 77.8757 32.1992 77.5355C32.3392 76.2855 32.3092 75.0955 32.3892 73.9155L32.4992 72.1855C32.4992 71.6255 32.4992 71.0655 32.5792 70.5255C32.6283 69.5405 32.7893 68.5642 33.0592 67.6155C33.1045 67.4155 33.1716 67.221 33.2592 67.0355C33.3292 66.8955 33.4092 66.6455 33.4492 66.5855C33.5692 66.3455 33.5892 66.2155 33.6692 66.0555C33.7715 65.8441 33.9756 65.7004 34.2092 65.6755C34.4403 65.7164 34.6356 65.8703 34.7292 66.0855C34.7862 66.1943 34.8331 66.3081 34.8692 66.4255C34.9392 66.6155 35.0492 66.9355 35.1392 67.2555L35.2892 67.7755L35.5092 68.6755L35.8992 70.4855C36.0686 71.5367 36.4756 72.5354 37.0892 73.4055C37.2056 73.5483 37.3326 73.682 37.4692 73.8055C37.6193 73.9488 37.8008 74.055 37.9992 74.1155C38.1693 74.1457 38.3445 74.1099 38.4892 74.0155C38.6292 73.9355 38.7392 73.9055 38.9092 73.7955L39.3992 73.4955L39.9792 73.0455L40.1292 72.9355L40.2892 72.7255L40.5992 72.3055L41.2192 71.4755L41.8392 70.6155L42.4792 69.8755C42.5892 69.7555 42.6892 69.6255 42.8092 69.5155L43.0192 69.2855C43.1592 69.1555 43.2792 69.0055 43.4192 68.8855C43.9364 68.369 44.5342 67.9401 45.1892 67.6155C45.4208 67.5097 45.6804 67.4817 45.9292 67.5355C46.1748 67.6177 46.3906 67.7708 46.5492 67.9755C46.8008 68.3218 46.9116 68.7507 46.8592 69.1755C46.8102 69.8244 46.6618 70.4618 46.4192 71.0655C45.8868 72.4159 45.1845 73.6928 44.3292 74.8655C42.9285 76.6776 41.358 78.3519 39.6392 79.8655C39.2692 80.2155 38.8792 80.5255 38.5192 80.8655C37.1592 82.1755 36.8992 82.7255 37.2492 83.7155C37.3138 83.9428 37.3906 84.1665 37.4792 84.3855C37.8292 85.0655 38.8592 84.9755 40.0592 84.1055C43.7739 81.3574 46.8962 77.8882 49.2392 73.9055C49.7372 73.0348 50.1396 72.1128 50.4392 71.1555C50.6004 70.5927 50.7142 70.0174 50.7792 69.4355C50.8054 69.0526 50.8054 68.6684 50.7792 68.2855C50.7466 67.8808 50.666 67.4813 50.5392 67.0955C50.4846 66.9015 50.4178 66.7111 50.3392 66.5255L50.0492 65.9955C49.8573 65.6374 49.6259 65.302 49.3592 64.9955C49.0792 64.7355 48.7792 64.4755 48.4692 64.2355C48.1499 64.0277 47.8157 63.8439 47.4692 63.6855C45.9402 63.233 44.2904 63.4588 42.9392 64.3055L42.9792 64.4255Z" fill="#231F20" />
			<path d="M70.6387 40.3355C70.3287 40.3355 70.4187 40.7655 70.7587 41.4355C70.9327 41.7428 71.1634 42.0143 71.4387 42.2355C71.6397 42.316 71.8471 42.3796 72.0587 42.4255C72.1587 42.4255 73.3487 42.0355 73.7887 41.9455C74.1836 41.8407 74.5586 41.6718 74.8987 41.4455C75.5987 41.0255 76.3287 40.6355 77.0487 40.2255C77.2121 40.1354 77.3524 40.0088 77.4587 39.8555C77.8572 39.347 78.381 38.9507 78.9787 38.7055C79.0775 38.6272 79.2094 38.6046 79.3287 38.6455C80.0362 38.4857 80.6885 38.1405 81.2187 37.6455C81.4987 37.0555 81.8487 36.5655 82.1687 36.0255C82.2187 35.9555 82.3087 35.9455 82.2787 35.7655C82.1987 35.3655 82.3687 35.3055 82.4887 35.1655C82.6712 34.9518 82.7922 34.6926 82.8387 34.4155C82.865 34.2298 82.865 34.0412 82.8387 33.8555C82.8387 33.6855 82.5487 33.4055 82.4887 33.3855C82.4287 33.3655 82.2687 33.1355 82.1687 32.9955C82.1378 32.9415 82.1009 32.8912 82.0587 32.8455C82.0587 32.8455 81.5787 32.7855 81.0587 32.6955C80.7272 32.6458 80.3902 32.6458 80.0587 32.6955L79.7487 32.8255L79.0787 33.0855L77.9287 33.4955C77.8187 33.4955 77.7787 33.6755 77.7087 33.7955C77.6387 33.9155 76.2287 34.5155 76.1787 34.5655C75.9387 34.7955 75.5887 34.8755 75.5087 35.3455C75.5087 35.4355 75.4287 35.4555 75.3687 35.4955C74.928 35.8227 74.5255 36.1984 74.1687 36.6155C73.9587 36.8155 73.6887 36.9555 73.4587 37.1355C73.4587 37.1355 73.3987 37.2355 73.3687 37.2855C73.3387 37.3355 73.2987 37.4255 73.2387 37.4555C72.7071 37.9151 72.1459 38.3393 71.5587 38.7255C71.4087 38.8055 70.9987 39.5755 70.8287 39.6555C70.6587 39.7355 70.7587 40.3455 70.6387 40.3355Z" fill="#231F20" />
			<path d="M63.3888 33.0455C63.1588 33.2455 63.5387 33.4755 64.2587 33.6755C64.5872 33.7451 64.9238 33.7687 65.2587 33.7455C65.4687 33.6455 65.6687 33.5555 65.8187 33.4655C65.9687 33.3755 66.4288 32.4655 66.6688 32.1155C66.8754 31.8119 67.0245 31.473 67.1087 31.1155C67.3087 30.4255 67.5588 29.7455 67.7988 29.0355C67.8342 28.8707 67.8342 28.7003 67.7988 28.5355C67.7331 27.9507 67.8409 27.3595 68.1087 26.8355C68.1087 26.7455 68.1088 26.6455 68.3188 26.5855C68.7191 26.0382 68.9456 25.3832 68.9688 24.7055C68.7687 24.1155 68.6688 23.5455 68.5188 22.9755C68.5188 22.8955 68.5187 22.8255 68.4187 22.7255C68.2058 22.6383 68.0873 22.4098 68.1388 22.1855C68.1171 21.9237 68.0274 21.6721 67.8787 21.4555C67.7635 21.3175 67.6326 21.1934 67.4887 21.0855C67.3067 21.005 67.1047 20.9806 66.9088 21.0155C66.7588 21.1055 66.5688 21.0155 66.3988 21.0155H66.2188C66.2188 21.0155 65.8388 21.2855 65.4388 21.5355C65.1908 21.6985 64.9684 21.8973 64.7787 22.1255C64.7787 22.1255 64.7288 22.2355 64.6588 22.3955L64.3688 22.9655C64.1588 23.3855 63.8888 23.8055 63.8488 23.9055C63.8088 24.0055 63.8488 24.1155 63.8488 24.2255C63.8488 24.3355 63.2887 25.5955 63.2787 25.6555C63.2787 25.9555 63.0688 26.2155 63.3288 26.5855C63.359 26.6417 63.359 26.7093 63.3288 26.7655C63.2059 27.2829 63.1488 27.8138 63.1588 28.3455C63.1242 28.6115 63.0741 28.8753 63.0087 29.1355C62.9992 29.1884 62.9992 29.2426 63.0087 29.2955C63.0276 29.3608 63.0276 29.4302 63.0087 29.4955C62.9354 30.1472 62.8286 30.7948 62.6887 31.4355C62.6387 31.5855 62.8988 32.3655 62.8288 32.5355C62.7588 32.7055 63.4688 32.9755 63.3888 33.0455Z" fill="#231F20" />
			<path d="M72.5291 50.4755C72.2291 50.3155 72.0491 50.7455 71.9791 51.4755C71.9819 51.8175 72.0462 52.1563 72.1691 52.4755C72.3291 52.6555 72.4791 52.8355 72.6191 52.9655C73.2062 53.1494 73.7836 53.363 74.3491 53.6055C74.7306 53.7782 75.1346 53.896 75.5491 53.9555C76.3691 54.1255 77.1891 54.3555 78.0391 54.5855C78.2337 54.6254 78.4344 54.6254 78.6291 54.5855C79.299 54.4629 79.9895 54.5216 80.6291 54.7555C80.7491 54.7555 80.8691 54.7555 80.9491 54.9555C81.652 55.3301 82.4327 55.5356 83.2291 55.5555C83.9091 55.3455 84.5791 55.2455 85.2291 55.0955C85.3191 55.0955 85.4091 55.0955 85.5191 54.9755C85.7591 54.6055 85.9491 54.6955 86.1491 54.6755C86.4472 54.6218 86.7365 54.5276 87.0091 54.3955C87.1713 54.284 87.3162 54.1493 87.4391 53.9955C87.5691 53.8655 87.5291 53.4055 87.4991 53.3455C87.4691 53.2855 87.4991 52.9655 87.4991 52.7755C87.4991 52.5855 87.4991 52.6255 87.4991 52.5655C87.2853 52.3041 87.0583 52.0538 86.8191 51.8155C86.6108 51.532 86.3534 51.2881 86.0591 51.0955L85.7191 50.9755L84.9991 50.6955L83.8391 50.2055C83.7291 50.1455 83.5791 50.2055 83.4491 50.2055C83.3191 50.2055 81.7291 49.5755 81.6491 49.5755C81.2791 49.5755 80.9391 49.3455 80.5091 49.6255C80.4291 49.6855 80.3591 49.6255 80.2791 49.6255C79.6229 49.4801 78.9479 49.4396 78.2791 49.5055C77.9391 49.5055 77.6091 49.4555 77.2791 49.4455C77.2191 49.4455 77.1491 49.4455 77.0891 49.5055C77.011 49.5325 76.9307 49.5526 76.8491 49.5655C76.0291 49.4955 75.2091 49.6555 74.3791 49.5655C74.1791 49.5655 73.2691 49.9655 73.0491 49.9555C72.8291 49.9455 72.6391 50.5355 72.5291 50.4755Z" fill="#231F20" />
		</svg>

	)
}