import React from "react";

interface WaveDividerProps {
  position: "top" | "bottom";
  flip?: boolean;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({ position, flip = false }) => {
  return (
    <div
      className={`absolute left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none ${
        position === "top" ? "top-0" : "bottom-0"
      } ${flip ? "rotate-180" : ""}`}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]"
        style={{ fill: "hsl(265 61% 11%)" }}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,105.7,121.29,115.86,183,115.11,244.64,114.36,289,86.07,321.39,56.44Z"
          opacity="0.5"
        ></path>
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86-32.39,29.63-76.75,57.92-118.39,58.66C141.29,115.86,78.47,105.7,20,95.8V120h1165.66c-67.81,23.09-144.29,15.48-214.34-3Z"
        ></path>
      </svg>
    </div>
  );
};
