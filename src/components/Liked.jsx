import React from "react"

function Liked({ filled }) {
  return (
    <svg
      fill={filled ? "#F0DBDB" : "white"}
      width="40px"
      height="40px"
      viewBox="-3.2 -3.2 38.40 38.40"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#DBA39A"
        strokeWidth="2.304"
      >
        {" "}
        <title>heart</title>{" "}
        <path d="M0.256 12.16q0.544 2.080 2.080 3.616l13.664 14.144 13.664-14.144q1.536-1.536 2.080-3.616t0-4.128-2.080-3.584-3.584-2.080-4.16 0-3.584 2.080l-2.336 2.816-2.336-2.816q-1.536-1.536-3.584-2.080t-4.128 0-3.616 2.080-2.080 3.584 0 4.128z"></path>{" "}
      </g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>heart</title>{" "}
        <path d="M0.256 12.16q0.544 2.080 2.080 3.616l13.664 14.144 13.664-14.144q1.536-1.536 2.080-3.616t0-4.128-2.080-3.584-3.584-2.080-4.16 0-3.584 2.080l-2.336 2.816-2.336-2.816q-1.536-1.536-3.584-2.080t-4.128 0-3.616 2.080-2.080 3.584 0 4.128z"></path>{" "}
      </g>
    </svg>
  )
}

export default Liked
