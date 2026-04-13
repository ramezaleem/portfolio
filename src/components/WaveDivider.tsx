interface WaveDividerProps {
  flip?: boolean;
  color?: string;
}

export default function WaveDivider({ flip = false, color }: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] pointer-events-none ${flip ? "rotate-180" : ""}`}
      aria-hidden
    >
      <svg
        className="w-full h-[40px] md:h-[60px]"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,30 C240,55 480,5 720,30 C960,55 1200,5 1440,30 L1440,60 L0,60 Z"
          fill={color || "hsl(var(--primary) / 0.04)"}
        />
      </svg>
    </div>
  );
}
