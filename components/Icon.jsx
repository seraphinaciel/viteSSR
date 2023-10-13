// node module

// prop type
import PropTypes from "prop-types";

// components

// style
// import styles from "#root/styles/index.css";

function Icon({ shape = "", style, restAttributes = {} }) {
  switch (shape) {
    case "the j":
      return (
        <svg viewBox="0 0 98 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M41.4389 15.2625C41.4389 15.2396 41.4389 15.2151 41.4346 15.1907C40.7833 9.29017 35.0864 8.65273 32.6763 8.65273C30.5688 8.65273 27.7512 9.25715 25.4314 10.8809V0.453669C25.4314 0.202428 25.2277 0 24.9767 0H21.5709C21.3198 0 21.1161 0.203864 21.1161 0.453669V34.5377C21.1161 34.789 21.3198 34.9914 21.5709 34.9914H24.9767C25.2277 34.9914 25.4314 34.7875 25.4314 34.5377V15.5999C27.196 13.8139 29.4799 12.7817 31.9905 12.6884C32.0608 12.6884 32.3276 12.6913 33.0019 12.6913C34.4796 12.6913 36.9959 13.2023 37.1264 16.625V34.5392C37.1264 34.7904 37.3287 34.9928 37.5798 34.9928H40.9855C41.2366 34.9928 41.4389 34.789 41.4389 34.5392V15.2625ZM16.2355 31.6994C16.2355 31.4482 16.0318 31.2457 15.7808 31.2457H9.23319C8.08693 31.2228 7.15443 30.2652 7.15443 29.1095V12.7271H12.9431C13.1942 12.7271 13.3964 12.5233 13.3964 12.2735V9.43373C13.3964 9.18249 13.1927 8.97863 12.9431 8.97863L7.15443 8.9815V3.86337C7.15443 3.61213 6.95072 3.40826 6.69966 3.40826H3.29388C3.04282 3.40826 2.83911 3.61213 2.83911 3.86337V8.97576H0.454773C0.203716 8.97576 0 9.17962 0 9.43086V12.2706C0 12.5218 0.203716 12.7243 0.454773 12.7243H2.83767C2.83767 14.7988 2.83767 21.466 2.83767 28.4017C2.88071 32.0354 5.86901 34.9914 9.49716 34.9914H15.7808C16.0318 34.9914 16.2355 34.789 16.2355 34.5377V31.698V31.6994ZM66.8703 15.9732C66.8703 12.1184 63.7371 8.98294 59.8852 8.98294H53.5341C49.6836 8.98294 46.5504 12.1184 46.5504 15.9732V28.0011C46.5504 31.8545 49.6836 34.99 53.5341 34.99L64.2593 34.9928C64.5104 34.9928 64.7141 34.789 64.7141 34.5392V31.6994C64.7141 31.4482 64.5104 31.2457 64.2593 31.2457L53.263 31.2501C51.9647 31.2501 50.9074 30.2336 50.8614 28.9358C50.8614 26.2138 50.8614 23.8607 50.8614 23.8607H66.4156C66.6666 23.8607 66.8703 23.6554 66.8703 23.4056V15.9746V15.9732ZM50.8643 20.1093V15.04C50.9117 13.7422 51.9618 12.7257 53.2601 12.7257H60.1578C61.4561 12.7257 62.5091 13.7422 62.5564 15.04C62.5564 18.2329 62.5593 20.1093 62.5593 20.1093H50.8658H50.8643ZM97.5452 3.40826H94.1394C93.8884 3.40826 93.6861 3.61213 93.6861 3.86337V29.1109C93.6861 30.2666 92.7364 31.2242 91.5686 31.2472H84.0684C82.9265 31.2256 81.9983 30.2709 81.994 29.1224C81.994 27.3063 81.9925 24.2024 81.9925 24.2024C81.9925 23.9511 81.7888 23.7473 81.5392 23.7473H78.1334C77.8824 23.7473 77.6801 23.9511 77.6801 24.2024V28.3242C77.6801 32.0052 80.667 35 84.3367 35H91.3032C94.9529 35 97.957 32.044 98 28.4046C98 11.837 98 3.86624 98 3.86624C98 3.615 97.7963 3.41113 97.5467 3.41113L97.5452 3.40826Z"
            {...style}
            {...restAttributes}
          />
        </svg>
      );
    case "the j/thin":
      return (
        <svg viewBox="0 0 395 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M60.6039 129.045H36.0686C33.0301 128.989 30.1355 127.744 28.0099 125.579C25.8842 123.414 24.698 120.503 24.7074 117.474V46.6396H48.7811C49.2629 46.6397 49.7252 46.4497 50.0669 46.1111C50.4087 45.7726 50.6022 45.3131 50.6052 44.8329V38.4923C50.6022 38.011 50.4091 37.5503 50.0676 37.21C49.7262 36.8697 49.2639 36.6772 48.7811 36.6743H24.7074V15.352C24.7074 15.1148 24.6605 14.8798 24.5694 14.6606C24.4783 14.4414 24.3448 14.2422 24.1765 14.0744C24.0081 13.9067 23.8083 13.7736 23.5883 13.6828C23.3684 13.592 23.1327 13.5452 22.8946 13.5452H14.2583C13.7775 13.5452 13.3164 13.7356 12.9764 14.0744C12.6364 14.4133 12.4454 14.8728 12.4454 15.352V36.6743H2.44663C1.9648 36.6773 1.50372 36.8701 1.16407 37.2107C0.824416 37.5513 0.63378 38.0121 0.633789 38.4923V44.8329C0.633789 45.312 0.824784 45.7716 1.16476 46.1105C1.50473 46.4493 1.96584 46.6396 2.44663 46.6396H12.4454V114.366C12.5283 120.922 15.1973 127.182 19.8753 131.792C24.5532 136.401 30.8639 138.99 37.4424 138.999H60.5927C61.0745 138.999 61.5368 138.809 61.8786 138.47C62.2203 138.132 62.4138 137.672 62.4168 137.192V130.851C62.4168 130.372 62.2258 129.913 61.8858 129.574C61.5458 129.235 61.0847 129.045 60.6039 129.045ZM130.517 35.3276C120.653 35.3276 106.871 38.6943 97.4012 47.5374V1.80678C97.4012 1.32759 97.2103 0.868031 96.8703 0.529193C96.5303 0.190356 96.0692 0 95.5884 0H86.9521C86.4713 0 86.0102 0.190356 85.6702 0.529193C85.3302 0.868031 85.1392 1.32759 85.1392 1.80678V137.192C85.1392 137.671 85.3302 138.131 85.6702 138.47C86.0102 138.808 86.4713 138.999 86.9521 138.999H95.5884C96.0692 138.999 96.5303 138.808 96.8703 138.47C97.2103 138.131 97.4012 137.671 97.4012 137.192V60.3083C105.262 51.9478 116.123 47.026 127.611 46.6172H132.115C135.493 46.6172 151.257 47.2569 151.922 65.594V137.181C151.919 137.656 152.104 138.113 152.437 138.454C152.77 138.794 153.224 138.99 153.701 138.999H162.337C162.818 138.999 163.279 138.808 163.619 138.47C163.959 138.131 164.15 137.671 164.15 137.192C164.15 137.192 164.15 75.1105 164.15 60.0053C161.718 37.8077 140.38 35.3276 130.517 35.3276ZM239.591 36.6967H213.243C206.255 36.6967 199.553 39.4634 194.612 44.3881C189.671 49.3128 186.895 55.9922 186.895 62.9568V112.761C186.895 119.726 189.671 126.405 194.612 131.33C199.553 136.255 206.255 139.021 213.243 139.021H252.788C253.271 139.018 253.733 138.826 254.074 138.485C254.416 138.145 254.609 137.684 254.612 137.203V130.874C254.612 130.392 254.42 129.929 254.077 129.588C253.735 129.247 253.271 129.056 252.788 129.056H211.881C208.588 129.055 205.424 127.783 203.054 125.506C200.683 123.229 199.29 120.125 199.168 116.846V92.8304H264.126C264.607 92.8304 265.068 92.6401 265.408 92.3012C265.748 91.9624 265.939 91.5028 265.939 91.0236V62.968C265.942 59.5181 265.263 56.1015 263.94 52.9135C262.617 49.7256 260.676 46.8288 258.229 44.3888C255.782 41.9489 252.877 40.0136 249.678 38.6937C246.48 37.3739 243.053 36.6953 239.591 36.6967ZM253.677 82.8763H199.168V58.8607C199.29 55.5817 200.683 52.4777 203.054 50.2008C205.424 47.924 208.588 46.6515 211.881 46.6509H240.954C244.246 46.6515 247.41 47.924 249.78 50.2008C252.151 52.4777 253.544 55.5817 253.666 58.8607L253.677 82.8763ZM394.944 15.3969C394.941 14.9167 394.747 14.4572 394.405 14.1186C394.064 13.7801 393.601 13.5901 393.12 13.5901H384.528C384.048 13.5901 383.586 13.7805 383.246 14.1193C382.906 14.4582 382.715 14.9177 382.715 15.3969C382.715 15.3969 382.715 113.513 382.715 117.519C382.687 120.564 381.466 123.476 379.315 125.637C377.164 127.798 374.251 129.037 371.197 129.089H339.489C336.465 129.005 333.594 127.744 331.49 125.578C329.386 123.412 328.216 120.512 328.229 117.497C328.229 113.412 328.229 98.3517 328.229 94.1771C328.226 93.6969 328.032 93.2373 327.691 92.8988C327.349 92.5603 326.887 92.3703 326.405 92.3703H317.768C317.288 92.3703 316.827 92.5606 316.487 92.8995C316.147 93.2383 315.956 93.6979 315.956 94.1771V114.04C315.959 120.647 318.589 126.984 323.27 131.662C327.951 136.34 334.301 138.978 340.93 138.999H369.845C376.44 138.994 382.769 136.411 387.473 131.805C392.176 127.199 394.879 120.937 395 114.366C394.955 96.3317 394.944 15.3969 394.944 15.3969Z"
            {...style}
            {...restAttributes}
          />
        </svg>
      );
    case "arrow/up":
      return (
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2L9.99999 20M10 2L3 9M10 2L17 9" stroke="white" strokeWidth="2" />
        </svg>
      );

    default:
      return <>{/* ...markup */}</>;
  }
}

Icon.propTypes = {
  shape: PropTypes.string.isRequired,
  style: PropTypes.object,
  restAttributes: PropTypes.object,
};

export default Icon;
