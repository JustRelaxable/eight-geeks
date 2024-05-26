import * as React from "react";
import { SVGProps } from "react";
const VideoSectionLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 30.5 21"
    width="2rem"
    height="2rem"
    {...props}
  >
    <defs>
      <linearGradient
        id="VideoSectionLogo1"
        x1={15.3}
        x2={15.3}
        y1={23}
        y2={2}
        gradientTransform="matrix(1 0 0 -1 0 23)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f70606" />
        <stop offset={1} stopColor="#780505" />
      </linearGradient>
      <linearGradient
        id="VideoSectionLogo2"
        x1={16}
        x2={16}
        y1={17.3}
        y2={7.7}
        gradientTransform="matrix(1 0 0 -1 0 23)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#eff0f7" />
        <stop offset={1} stopColor="#f1f1f1" />
      </linearGradient>
    </defs>
    <path
      d="M26 0H4.5C2 0 0 2 0 4.5v11.9c0 2.5 2 4.5 4.5 4.5H26c2.5 0 4.5-2 4.5-4.5V4.5C30.5 2 28.5 0 26 0ZM11.9 15.3V5.7l8.1 4.8-8.1 4.8Z"
      style={{
        strokeWidth: 0,
        fill: "url(#VideoSectionLogo1)",
      }}
    />
    <path
      d="M11.9 15.3V5.7l8.1 4.8"
      style={{
        fill: "url(#VideoSectionLogo2)",
        strokeWidth: 0,
      }}
    />
  </svg>
);
export default VideoSectionLogo;
