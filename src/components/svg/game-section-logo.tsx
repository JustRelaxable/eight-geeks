import * as React from "react";
import { SVGProps } from "react";
const GameSectionLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 35.35 22.63"
    width="2rem"
    {...props}
  >
    <defs>
      <linearGradient
        id="GameSectionLogo1"
        x1={17.68}
        x2={17.68}
        y1={23.43}
        y2={0.8}
        gradientTransform="matrix(1 0 0 -1 0 23.43)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ed7dff" />
        <stop offset={1} stopColor="#9d00fd" />
      </linearGradient>
      <linearGradient
        id="GameSectionLogo2"
        x1={9.9}
        x2={9.9}
        y1={16.67}
        y2={8.35}
        gradientTransform="matrix(1 0 0 -1 0 23.43)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fff" />
        <stop offset={1} stopColor="#d3d0f1" />
      </linearGradient>
      <linearGradient
        id="GameSectionLogo3"
        x1={26.16}
        x2={26.16}
        y1={16.36}
        y2={9.28}
        gradientTransform="matrix(1 0 0 -1 0 23.43)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fff" />
        <stop offset={1} stopColor="#d3d0f1" />
      </linearGradient>
    </defs>
    <path
      d="M5.6 22.63c-.89 0-1.72-.19-2.48-.58-1.85-.96-2.94-2.96-3.09-5.62-.24-4.3.98-8.49 3.72-12.82C5.86.28 8.28-.65 12.11.43c1.79.5 3.71.99 5.54.93 1.64-.03 3.42-.32 5.58-.93 3.83-1.08 6.25-.15 8.36 3.19 2.74 4.33 3.96 8.52 3.72 12.81-.15 2.67-1.25 4.66-3.09 5.61-1.92.99-4.34.72-6.83-.78-1.84-1.1-3.59-2.27-5.05-3.26-1.57-1.06-3.77-1.06-5.35 0-1.46.99-3.21 2.16-5.05 3.26-1.51.9-2.99 1.36-4.35 1.36Z"
      style={{
        strokeWidth: 0,
        fill: "url(#GameSectionLogo1)",
      }}
    />
    <path
      d="M8.2 13.41c0 .92.76 1.67 1.7 1.67s1.7-.75 1.7-1.67v-.83h.85c.94 0 1.7-.75 1.7-1.67s-.76-1.66-1.7-1.66h-.85v-.83c0-.92-.76-1.66-1.7-1.66s-1.7.75-1.7 1.66v.83h-.85c-.94 0-1.7.75-1.7 1.66s.76 1.67 1.7 1.67h.85v.83Z"
      style={{
        fill: "url(#GameSectionLogo2)",
        fillRule: "evenodd",
        strokeWidth: 0,
      }}
    />
    <path
      d="M26.16 14.14a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 0 0 0 7.08Z"
      style={{
        fill: "url(#GameSectionLogo3)",
        strokeWidth: 0,
      }}
    />
  </svg>
);
export default GameSectionLogo;
