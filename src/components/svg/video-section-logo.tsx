import * as React from "react";
import { SVGProps } from "react";
const VideoSectionLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    fill="none"
    {...props}
  >
    <path
      fill="url(#videoLogoGradient1)"
      d="M26.23 5.506H4.77a4.528 4.528 0 0 0-4.53 4.53V21.96a4.528 4.528 0 0 0 4.53 4.53h21.46a4.528 4.528 0 0 0 4.53-4.53V10.04a4.528 4.528 0 0 0-4.53-4.53v-.003ZM12.16 20.77v-9.54L20.266 16l-8.106 4.77Z"
    />
    <path fill="url(#videoLogoGradient2)" d="M12.16 20.77v-9.54L20.27 16" />
    <defs>
      <linearGradient
        id="videoLogoGradient1"
        x1={15.5}
        x2={15.5}
        y1={5.506}
        y2={26.49}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F70606" />
        <stop offset={1} stopColor="#780505" />
      </linearGradient>
      <linearGradient
        id="videoLogoGradient2"
        x1={16.215}
        x2={16.215}
        y1={11.23}
        y2={20.77}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EFF0F7" />
        <stop offset={1} stopColor="#F1F1F1" />
      </linearGradient>
    </defs>
  </svg>
);
export default VideoSectionLogo;
