import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const PropType = {
  className: PropTypes.string,
};

const SvgLine = ({ id, className, color }) => {
  const components = {
    sBubble: <Bubble className={className} />,
    sBubble_s: <BubbleS className={className} color={color} />,
    sArrow: <Arrow className={className} />,
    sThej: <Thej />,
  };
  return components[id] || "No icon";
};

SvgLine.propTypes = {
  ...PropType,
  id: PropTypes.string.isRequired,
  color: PropTypes.string,
};

function Bubble({ className }) {
  return (
    <svg
      id="sBubble"
      className={className}
      width="347"
      height="90"
      viewBox="0 0 347 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Bubble-path"
        d="M167.071 11.3825C114.038 10.8715 58.5416 10.9539 11.5558 36.2693C7.5723 38.4119 3.41285 41.0324 1.74906 45.334C-1.89846 54.7778 8.48418 63.4141 17.571 67.3531C49.5668 81.2304 84.7142 85.2024 119.366 87.2461C172.255 90.3611 225.368 89.3227 278.113 84.1641C295.886 82.4171 313.916 80.1261 330.25 72.726C336.681 69.8088 343.288 65.5072 345.352 58.585C348.632 47.5755 338.873 37.1758 329.338 31.1766C306.301 16.7224 279.265 10.6903 252.548 6.81714C184.541 -3.05519 114.838 -0.335788 47.743 14.7776"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
Bubble.propTypes = PropType;

function BubbleS({ className, color }) {
  return (
    <svg
      id="sBubble"
      className={className}
      width="155"
      height="67"
      viewBox="0 0 155 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M74.3522 65.7749C51.531 66.4804 27.9212 66.9405 7.73796 52.1694C4.7005 49.9443 1.49665 46.8522 0.738525 41.4701C-0.375553 33.5532 4.36141 25.9189 8.94311 21.7677C15.3584 15.958 22.4237 12.7886 29.4469 10.206C59.0879 -0.698337 89.5456 -2.18439 118.56 5.87378C129.125 8.8076 139.724 13.1426 148.391 22.7418C151.289 25.9454 154.189 30.8923 153.375 36.8011C152.725 41.5153 149.924 44.7936 147.24 46.9736C141.913 51.2914 136.135 53.4391 130.406 55.2547C99.4103 65.087 67.8413 66.3742 37.4631 59.0592"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
BubbleS.propTypes = { ...PropType, color: PropTypes.string };

function Arrow({ className }) {
  return (
    <svg
      id="sArrow"
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
}
Arrow.propTypes = PropType;

function Thej() {
  return (
    <svg id="sThej" width="322" height="292" viewBox="0 0 322 292" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.8022 78.8677L104.14 81.2018"
        stroke="black"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M82.5807 26.6116C82.5807 26.6116 6.32764 205.833 6.32764 225.969"
        stroke="black"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M124.93 6.87622C124.93 6.87622 60.2364 172.546 59.4565 179.13C66.7699 164.028 97.2018 105.205 119.922 112.172C142.642 119.14 95.2781 206.617 95.2781 206.617"
        stroke="black"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M147.274 143.126C152.663 144.676 176.163 158.994 186.163 130.741C196.162 102.488 137.552 106.999 138.99 165.352C139.527 187.178 154.604 195.783 167.29 191.097C185.227 184.478 196.908 166.362 204.568 155.476"
        stroke="black"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M315.181 82.7529L311.455 92.281"
        stroke="black"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M258.968 168.295C258.968 168.295 286.315 157.078 306.332 113.322C293.23 156.294 261.654 266.223 210.825 284.409C175.696 291.916 167.309 236.803 167.309 236.803"
        stroke="black"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgLine;
