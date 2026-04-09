import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function WaveLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Ambient glow blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute rounded-full"
              style={{
                width: 400,
                height: 400,
                background: "radial-gradient(circle, hsla(270 80% 60% / 0.2), transparent 70%)",
                top: "20%",
                left: "30%",
                animation: "float-blob 6s ease-in-out infinite",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: 300,
                height: 300,
                background: "radial-gradient(circle, hsla(285 75% 65% / 0.15), transparent 70%)",
                bottom: "20%",
                right: "25%",
                animation: "float-blob 8s ease-in-out infinite reverse",
              }}
            />
          </div>

          {/* Wave bars */}
          <div className="wave-loader mb-8">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="bar" />
            ))}
          </div>

          {/* Name */}
          <motion.h2
            className="text-2xl md:text-3xl font-bold gradient-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Ramez Khalifa
          </motion.h2>
          <motion.p
            className="text-sm text-muted-foreground mt-2 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Full-Stack .NET Developer
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
