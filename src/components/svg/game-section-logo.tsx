import * as React from "react";
import { SVGProps } from "react";
const GameSectionLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2.25em"
    height="2.25em"
    fill="none"
    {...props}
  >
    <path
      fill="url(#gameLogoGradient1)"
      d="M7.752 28.2a4.53 4.53 0 0 1-2.103-.497c-1.568-.808-2.5-2.501-2.625-4.764-.2-3.642.833-7.2 3.16-10.873C7.976 9.234 10.03 8.45 13.28 9.361c1.522.428 3.146.84 4.702.79 1.393-.025 2.9-.276 4.737-.79 3.25-.912 5.305-.125 7.096 2.706 2.328 3.674 3.36 7.23 3.16 10.873-.124 2.264-1.057 3.955-2.624 4.764-1.628.841-3.686.608-5.795-.66-1.563-.936-3.043-1.922-4.287-2.765-1.334-.903-3.201-.903-4.537 0-1.243.843-2.725 1.83-4.287 2.766-1.279.766-2.537 1.154-3.693 1.154Z"
    />
    <path
      fill="url(#gameLogoGradient2)"
      fillRule="evenodd"
      d="M9.96 20.384c0 .78.645 1.412 1.44 1.412.794 0 1.44-.632 1.44-1.412v-.707h.72c.795 0 1.44-.633 1.44-1.413s-.645-1.413-1.44-1.413h-.72v-.707c0-.78-.646-1.412-1.44-1.412-.795 0-1.44.632-1.44 1.412v.707h-.72c-.795 0-1.44.633-1.44 1.413s.644 1.413 1.44 1.413h.72v.707Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#gameLogoGradient3)"
      d="M25.2 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <defs>
      <linearGradient
        id="gameLogoGradient1"
        x1={18}
        x2={18}
        y1={9}
        y2={28.201}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ED7DFF" />
        <stop offset={1} stopColor="#9D00FD" />
      </linearGradient>
      <linearGradient
        id="gameLogoGradient2"
        x1={11.4}
        x2={11.4}
        y1={14.732}
        y2={21.796}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#D3D0F1" />
      </linearGradient>
      <linearGradient
        id="gameLogoGradient3"
        x1={25.2}
        x2={25.2}
        y1={15}
        y2={21}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#D3D0F1" />
      </linearGradient>
    </defs>
  </svg>
);
export default GameSectionLogo;
