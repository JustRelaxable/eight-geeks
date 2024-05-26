import * as React from "react";
import { SVGProps } from "react";
const HamburgerMenuLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2.375em"
    height="2.375em"
    fill="none"
    {...props}
  >
    <path
      stroke="#EFF0F7"
      strokeLinecap="round"
      strokeWidth={3}
      d="M6.333 28.5h25.334M6.333 19h25.334M6.333 9.5h25.334"
    />
  </svg>
);
export default HamburgerMenuLogo;
