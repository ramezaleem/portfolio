import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the progress with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map the smooth progress from 0 to 1 as a percentage string
  const width = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[4px] pointer-events-none bg-transparent">
      <motion.div
        className="h-full bg-primary shadow-[0_0_15px_rgba(139,92,246,0.6)]"
        style={{ width }}
      />
    </div>
  );
}
