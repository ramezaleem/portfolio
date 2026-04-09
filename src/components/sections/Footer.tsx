import { Heart, Phone, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <footer className="mt-20 border-t border-border/40 relative overflow-hidden bg-background/50">
      <div className="container py-12">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Branding */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-xl font-bold tracking-tight">
              Ramez <span className="gradient-text">Khalifa</span>
            </span>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
              Full-Stack .NET Developer
            </p>
          </div>

          {/* Availability Badge */}
          <motion.div 
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 w-fit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[11px] font-medium text-green-400 uppercase tracking-wider">{t("footer.available")}</span>
          </motion.div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1 font-medium">
            © {new Date().getFullYear()} Crafted with{" "}
            <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" /> by Ramez
            Khalifa
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
