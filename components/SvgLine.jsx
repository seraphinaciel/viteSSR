import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SvgLine({ shape, className, color = "black" }) {
  switch (shape) {
    // 말풍선 모음
    case "bExperience":
      return (
        <svg
          className={className}
          width="347"
          height="90"
          viewBox="0 0 347 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M167.071 11.3825C114.038 10.8715 58.5416 10.9539 11.5558 36.2693C7.5723 38.4119 3.41285 41.0324 1.74906 45.334C-1.89846 54.7778 8.48418 63.4141 17.571 67.3531C49.5668 81.2304 84.7142 85.2024 119.366 87.2461C172.255 90.3611 225.368 89.3227 278.113 84.1641C295.886 82.4171 313.916 80.1261 330.25 72.726C336.681 69.8088 343.288 65.5072 345.352 58.585C348.632 47.5755 338.873 37.1758 329.338 31.1766C306.301 16.7224 279.265 10.6903 252.548 6.81714C184.541 -3.05519 114.838 -0.335788 47.743 14.7776"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "bSpecializing":
      return (
        <svg
          className={className}
          width="368"
          height="83"
          viewBox="0 0 368 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M59.2465 10.3111C43.6873 13.0265 28.6167 18.5686 14.9965 26.6355C9.81008 29.7004 4.52909 33.4956 2.40093 39.1647C-0.420855 46.6918 0.966391 52.2656 7.05136 57.4742C13.1363 62.6828 32.274 70.1781 52.7674 73.3541C129.681 85.2799 177.304 82.882 253.146 77.9434C286.077 75.7996 319.276 71.6073 350.237 60.0944C356.921 57.6171 363.936 54.6476 366.474 47.9463C371.597 34.4484 338.099 20.9505 317.605 16.1866C244.176 -0.88428 180.457 -4.45723 92.6665 10.057"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "bRespect":
      return (
        <svg width="155" height="67" viewBox="0 0 155 67" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M74.3522 65.7749C51.531 66.4804 27.9212 66.9405 7.73796 52.1694C4.7005 49.9443 1.49665 46.8522 0.738525 41.4701C-0.375553 33.5532 4.36141 25.9189 8.94311 21.7677C15.3584 15.958 22.4237 12.7886 29.4469 10.206C59.0879 -0.698337 89.5456 -2.18439 118.56 5.87378C129.125 8.8076 139.724 13.1426 148.391 22.7418C151.289 25.9454 154.189 30.8923 153.375 36.8011C152.725 41.5153 149.924 44.7936 147.24 46.9736C141.913 51.2914 136.135 53.4391 130.406 55.2547C99.4103 65.087 67.8413 66.3742 37.4631 59.0592"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "bCreativity":
      return (
        <svg width="173" height="60" viewBox="0 0 173 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M114.385 6.6519C90.2765 3.8312 65.6607 5.14755 42.0295 10.5141C32.1235 12.7707 22.3219 15.7505 13.4453 20.5819C6.52306 24.3428 -0.51856 31.0402 1.2866 38.5331C2.45026 43.3789 7.00046 46.7204 11.5208 49.0493C24.2465 55.6165 38.9414 57.5837 53.323 58.4517C80.7286 60.0862 108.373 58.0611 135.227 52.4486C146.087 50.1776 157.142 47.1688 165.899 40.5582C168.137 38.8658 170.271 36.8552 171.315 34.2948C172.881 30.4037 171.613 25.8472 169.017 22.5202C166.421 19.1932 162.677 16.8932 158.888 14.926C133.078 1.54571 102.51 0.677818 73.2394 1.06838"
            stroke="#040000"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "bHighquality":
      return (
        <svg width="382" height="95" viewBox="0 0 382 95" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M149.963 11.0847C115.297 8.64405 80.1982 12.2936 46.7623 21.7825C33.5064 25.5461 20.1138 30.4502 9.95547 39.7795C4.92186 44.4099 0.617097 50.6598 1.02707 57.5027C1.68759 68.383 13.2581 74.8382 23.5303 78.3965C60.0638 91.1016 99.3077 93.5879 137.982 93.9984C180.984 94.4546 224.009 92.4474 266.761 88.0223C300.219 84.5552 333.929 79.4914 364.905 66.3985C372.125 63.342 380.165 58.5291 380.803 50.6826C381.509 42.3114 373.355 36.1071 365.93 32.2522C325.41 11.2216 278.445 7.48075 232.915 4.40142C187.681 1.3449 141.763 -1.41508 97.3717 7.84571"
            stroke="#040000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "bBetter":
      return (
        <svg width="201" height="77" viewBox="0 0 201 77" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M31.9904 19.7448C23.1655 21.5246 14.8061 25.5899 7.93614 31.4537C5.23655 33.758 2.68591 36.4745 1.58745 39.8653C-0.0881514 44.9985 1.99705 50.8061 5.60891 54.7965C9.22077 58.7868 14.1731 61.2972 19.1068 63.4141C55.8212 79.1508 97.6369 78.3265 136.827 70.7579C154.421 67.367 172.127 62.5149 187.003 52.4547C193.221 48.2395 199.272 42.3944 199.942 34.8821C200.538 28.1378 196.479 21.6557 191.061 17.6654C185.643 13.675 179.015 11.7266 172.499 10.078C125.471 -1.78068 75.5934 -2.02423 28.453 9.36613"
            stroke="#040000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    // 돼지꼬리...
    case "sArrow":
      return (
        <svg
          className={className}
          width="188"
          height="268"
          viewBox="0 0 188 268"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="188" height="268" fill="white" />
          <path
            d="M124.211 22.8809C124.211 22.8809 148.769 44.4868 145.88 77.6159C142.991 110.745 124.384 146.524 75.0951 142.434C40.4251 139.553 34.6468 115.066 36.0914 104.983C37.536 94.9007 50.0605 79.0563 74.1272 82.6573C98.194 86.2583 127.1 125.149 119.877 159.719C112.654 194.288 83.7626 224.536 56.3155 234.619"
            stroke="#040000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M67 211C67 211 51.9819 234.619 51.9819 237.5C56.5 237.5 80.5 235.5 80.5 235.5"
            stroke="#040000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    // main the j
    case "sThej":
      return (
        <svg
          className={className}
          width="322"
          height="292"
          viewBox="0 0 322 292"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8022 78.8677L104.14 81.2018"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M82.5807 26.6116C82.5807 26.6116 6.32764 205.833 6.32764 225.969"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M124.93 6.87622C124.93 6.87622 60.2364 172.546 59.4565 179.13C66.7699 164.028 97.2018 105.205 119.922 112.172C142.642 119.14 95.2781 206.617 95.2781 206.617"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M147.274 143.126C152.663 144.676 176.163 158.994 186.163 130.741C196.162 102.488 137.552 106.999 138.99 165.352C139.527 187.178 154.604 195.783 167.29 191.097C185.227 184.478 196.908 166.362 204.568 155.476"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M315.181 82.7529L311.455 92.281"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M258.968 168.295C258.968 168.295 286.315 157.078 306.332 113.322C293.23 156.294 261.654 266.223 210.825 284.409C175.696 291.916 167.309 236.803 167.309 236.803"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return "No icon";
  }
}

SvgLine.propTypes = {
  shape: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
};

export default SvgLine;
