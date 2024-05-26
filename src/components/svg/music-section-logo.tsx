import * as React from "react";
import { SVGProps } from "react";
const MusicSectionLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 29.6 29.6"
    width="2rem"
    height="2rem"
    {...props}
  >
    <defs>
      <linearGradient
        id="MusicSectionLogo1"
        x1={18.2}
        x2={18.2}
        y1={30.1}
        y2={2}
        gradientTransform="matrix(1 0 0 -1 0 31.6)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#35e625" />
        <stop offset={1} stopColor="#0e6407" />
      </linearGradient>
      <linearGradient
        id="MusicSectionLogo2"
        x1={6.5}
        x2={6.5}
        y1={31.6}
        y2={14.4}
        gradientTransform="matrix(1 0 0 -1 0 31.6)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#35e625" />
        <stop offset={1} stopColor="#0e6407" />
      </linearGradient>
    </defs>
    <path
      d="m15.8 15.5 11.7-4.7v7.8c-.7-.4-1.5-.7-2.4-.7-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5V9.3c0-1.6 0-2.9-.1-3.9V5c-.1-.7-.3-1.4-.7-1.9-.2-.3-.4-.5-.7-.7 0 0-.1 0-.2-.1-1-.7-2.1-.6-3.2-.3s-2.4.8-4.1 1.5l-2.9 1.2c-.8.3-1.4.6-1.9.9-.5.3-1 .7-1.4 1.2-.4.5-.5 1.1-.6 1.7v13c-.7-.4-1.5-.7-2.4-.7-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5v-9.6Z"
      style={{
        strokeWidth: 0,
        fill: "url(#MusicSectionLogo1)",
      }}
    />
    <path
      d="M8.9 1c0-.6-.5-1-1-1s-1 .5-1 1v7.9c-.7-.4-1.5-.7-2.4-.7-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5V5.1c1 .7 2.1 1 3.1 1s1-.5 1-1-.5-1-1-1-1.4-.2-2-.8c-.6-.5-1-1.2-1-2.3Z"
      style={{
        fill: "url(#MusicSectionLogo2)",
        strokeWidth: 0,
      }}
    />
  </svg>
);
export default MusicSectionLogo;
