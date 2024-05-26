import * as React from "react";
import { SVGProps } from "react";
const SearchLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    fill="none"
    {...props}
  >
    <path
      stroke="#EFF0F7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M15.583 8.5a7.083 7.083 0 0 1 7.084 7.083m.933 8.011 6.15 6.156m-2.833-14.167c0 6.26-5.074 11.334-11.334 11.334-6.259 0-11.333-5.074-11.333-11.334C4.25 9.324 9.324 4.25 15.583 4.25c6.26 0 11.334 5.074 11.334 11.333Z"
    />
  </svg>
);
export default SearchLogo;
