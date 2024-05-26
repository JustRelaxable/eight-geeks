import * as React from "react";
import { SVGProps } from "react";
const StopIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 20 20"
    width="1.5rem"
    height="1.5rem"
    {...props}
  >
    <path
      d="M0 10c0-4.7 0-7.1 1.5-8.5C2.9 0 5.3 0 10 0s7.1 0 8.5 1.5C20 3 20 5.3 20 10s0 7.1-1.5 8.5C17 20 14.7 20 10 20s-7.1 0-8.5-1.5C0 17 0 14.7 0 10Z"
      style={{
        fill: "#eff0f7",
        strokeWidth: 0,
      }}
    />
  </svg>
);
export default StopIcon;
