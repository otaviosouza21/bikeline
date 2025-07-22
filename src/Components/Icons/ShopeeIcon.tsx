import React from "react";

interface ShopeeIconProps {
  color?: string;
}

export default function ShopeeIcon({ color = "#FA5130" }: ShopeeIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={30} 
      height={30}
    >
      <path
        d="M33.0549,43.5h-18.11a4,4,0,0,1-3.9731-3.5367L8.3844,17.7726H39.6156L37.028,39.9633A4,4,0,0,1,33.0549,43.5Z"
        strokeWidth="3"
      />
      <path
        d="M13.3519,17.7726V15.16a10.66,10.66,0,0,1,21.3192,0v2.613"
        strokeWidth="3"
      />
      <path
        d="M19.5288,36.9825c1.1539.8654,2.3077,1.1538,4.6154,1.1538h1.1539a3.75,3.75,0,0,0,0-7.5H22.7019a3.75,3.75,0,0,1,0-7.5h1.1539c2.5961,0,3.75.2885,4.6154,1.1539"
        strokeWidth="3"
      />
    </svg>
  );
}
