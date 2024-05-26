import * as React from "react";
import { SVGProps } from "react";
const BackLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 20 20"
    width="1.25rem"
    {...props}
  >
    <defs>
      <clipPath id="BackLogo1">
        <path
          d="M0 0h20v20H0z"
          style={{
            strokeWidth: 0,
            fill: "none",
          }}
        />
      </clipPath>
    </defs>
    <g
      style={{
        clipPath: "url(#BackLogo1)",
      }}
    >
      <path
        d="m4.4 11.3 5.9 6.4c.5.6.4 1.4-.2 1.9-.6.5-1.4.4-1.9-.2L.4 10.9c-.1-.1-.2-.2-.3-.4 0-.2-.1-.4-.1-.6 0-.2 0-.4.1-.6 0 0 .1-.2.2-.3L8.4.4c.5-.5 1.3-.6 1.9 0 .5.5.6 1.3 0 1.9l-6 6.4h14.3c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3H4.4Z"
        style={{
          fill: "#eff0f7",
          strokeWidth: 0,
        }}
      />
    </g>
  </svg>
);
export default BackLogo;
