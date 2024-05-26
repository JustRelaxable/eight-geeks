import * as React from "react";
import { SVGProps } from "react";
const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 19 20"
    width="1.5rem"
    height="1.5rem"
    {...props}
  >
    <path
      d="M17.4 7.4c2.1 1.2 2.1 4.1 0 5.3l-12.8 7C2.5 20.8 0 19.4 0 17.1V3C0 .7 2.5-.7 4.6.4l12.8 7Z"
      style={{
        fill: "#eff0f7",
        strokeWidth: 0,
      }}
    />
  </svg>
);
export default PlayIcon;
