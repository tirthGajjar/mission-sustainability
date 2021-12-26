import React from "react";

function ModelIcon() {
  return (
    <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="a" fill="#fff">
        <path d="M16 10.144a16 16 0 0 1 24 13.853L24 24l-8-13.856Z" />
      </mask>
      <path
        d="M16 10.144a16 16 0 0 1 24 13.853L24 24l-8-13.856Z"
        fill="#B6EC7F"
        stroke="#1F2937"
        strokeWidth="2.6"
        mask="url(#a)"
      />
      <path
        d="M16 37.856a16 16 0 0 1-.003-27.71L24 24l-8 13.856Z"
        fill="#72D8FF"
      />
      <path
        d="M16 37.856a16 16 0 0 0 24-13.823L24 24l-8 13.856Z"
        fill="#D19647"
      />
      <rect
        x="8.65"
        y="8.65"
        width="30.7"
        height="30.7"
        rx="15.35"
        stroke="#1F2937"
        strokeWidth="1.3"
      />
      <path
        d="M24.894 23.661a.65.65 0 0 0-1.122-.656l1.122.656Zm-9.122 13.01a.65.65 0 0 0 1.122.657l-1.122-.657Zm8-13.666-8 13.666 1.122.657 8-13.667-1.122-.656Z"
        fill="#1F2937"
      />
    </svg>
  );
}

export default ModelIcon;
