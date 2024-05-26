import * as React from "react";
import { SVGProps } from "react";
const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 18 18"
    width="1.5rem"
    height="1.5rem"
    {...props}
  >
    <path
      d="M17.7.3c-.4-.4-1-.4-1.4 0L9 7.6 1.7.3C1.3 0 .7 0 .3.3c-.3.4-.3 1 0 1.4L7.6 9 .3 16.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L9 10.4l7.3 7.3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L10.4 9l7.3-7.3c.4-.4.4-1 0-1.4Z"
      style={{
        fill: "#9f9fa5",
        strokeWidth: 0,
      }}
    />
  </svg>
);
export default CloseIcon;
