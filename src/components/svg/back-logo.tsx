import * as React from "react";
import { SVGProps } from "react";
const BackLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.25rem"
    height="1.25rem"
    fill="none"
    {...props}
  >
    <g clipPath="url(#backLogo1)">
      <path
        fill="#EFF0F7"
        d="m4.354 11.33 5.886 6.417a1.331 1.331 0 0 1-2.03 1.722L.381 10.937a1.325 1.325 0 0 1-.386-.967v-.001a1.335 1.335 0 0 1 .367-.888L8.398.412a1.331 1.331 0 1 1 1.953 1.81L4.377 8.668h14.267a1.331 1.331 0 1 1 0 2.662H4.354Z"
      />
    </g>
    <defs>
      <clipPath id="backLogo1">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default BackLogo;
