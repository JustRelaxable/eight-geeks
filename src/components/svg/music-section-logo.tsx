import * as React from "react";
import { SVGProps } from "react";
const MusicSectionLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    fill="none"
    {...props}
  >
    <path
      fill="url(#musicSectionLogo1)"
      d="m17.531 17.698 11.688-4.675v7.773a4.469 4.469 0 1 0 2.062 3.766V11.427c0-1.571 0-2.89-.11-3.94a10.605 10.605 0 0 0-.055-.433c-.106-.717-.295-1.386-.658-1.945a3 3 0 0 0-.852-.866l-.011-.007c-.973-.648-2.066-.601-3.192-.314-1.089.277-2.44.842-4.095 1.535l-2.88 1.206c-.775.324-1.433.6-1.949.885-.55.303-1.022.66-1.377 1.194-.354.533-.502 1.107-.57 1.73-.063.587-.063 1.3-.063 2.14v10.935a4.469 4.469 0 1 0 2.062 3.766v-9.614Z"
    />
    <path
      fill="url(#musicSectionLogo2)"
      d="M10.656 3.25a1.031 1.031 0 1 0-2.062 0v7.921a4.469 4.469 0 1 0 2.062 3.766V7.381c.96.694 2.103 1.025 3.094 1.025a1.031 1.031 0 0 0 0-2.062c-.625 0-1.421-.242-2.047-.759-.595-.492-1.047-1.238-1.047-2.335Z"
    />
    <defs>
      <linearGradient
        id="musicSectionLogo1"
        x1={19.938}
        x2={19.938}
        y1={3.72}
        y2={31.781}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#35E625" />
        <stop offset={1} stopColor="#0E6407" />
      </linearGradient>
      <linearGradient
        id="musicSectionLogo2"
        x1={8.25}
        x2={8.25}
        y1={2.219}
        y2={19.406}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#35E625" />
        <stop offset={1} stopColor="#0E6407" />
      </linearGradient>
    </defs>
  </svg>
);
export default MusicSectionLogo;
