import * as React from "react";
import { SVGProps } from "react";
const VideoPlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 54 54"
    width="3.375rem"
    height="3.375rem"
    {...props}
  >
    <defs>
      <clipPath id="VideoPlayIcon1">
        <path
          d="M0 0h54v54H0z"
          style={{
            strokeWidth: 0,
            fill: "none",
          }}
        />
      </clipPath>
    </defs>
    <g
      style={{
        clipPath: "url(#VideoPlayIcon1)",
      }}
    >
      <path
        d="M27 0C12.08 0 0 12.08 0 27s12.08 27 27 27 27-12.08 27-27S41.92 0 27 0Zm9.73 30-12.69 7.33a3.45 3.45 0 0 1-3.46 0 3.465 3.465 0 0 1-1.73-3V19.67a3.45 3.45 0 0 1 3.46-3.46c.6 0 1.2.15 1.73.46L36.73 24a3.465 3.465 0 0 1 0 6Z"
        style={{
          fill: "#eff0f7",
          strokeWidth: 0,
        }}
      />
    </g>
  </svg>
);
export default VideoPlayIcon;
