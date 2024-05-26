import * as React from "react";
import { SVGProps } from "react";
const SearchLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 28.5 28.5"
    width="2rem"
    height="2rem"
    {...props}
  >
    <path
      d="M12.8 5.8c3.9 0 7.1 3.2 7.1 7.1m1 7.9L27 27m-2.8-14.2c0 6.3-5.1 11.3-11.3 11.3s-11.4-5-11.4-11.3S6.6 1.5 12.8 1.5s11.3 5.1 11.3 11.3Z"
      style={{
        fill: "none",
        stroke: "#eff0f7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 3,
      }}
    />
  </svg>
);
export default SearchLogo;
