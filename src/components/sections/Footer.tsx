import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
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
