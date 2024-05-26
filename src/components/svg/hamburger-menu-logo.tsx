import * as React from "react";
import { SVGProps } from "react";
const HamburgerMenuLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 28.3 22"
    width="2rem"
    height="2rem"
    {...props}
  >
    <defs>
      <style>
        {
          ".HamburgerMenuLogo1{fill:none;stroke:#eff0f7;stroke-linecap:round;stroke-width:3px}"
        }
      </style>
    </defs>
    <path
      d="M1.5 20.5h25.3M1.5 11h25.3M1.5 1.5h25.3"
      className="HamburgerMenuLogo1"
    />
  </svg>
);
export default HamburgerMenuLogo;
