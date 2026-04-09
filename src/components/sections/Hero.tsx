import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowDown, Linkedin, Github, Mail, Phone } from "lucide-react";
import profileUrl from "../../assets/Original 2.jpg";

function useTyped(words: string[], speed = 80, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setDeleting(true);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, deleting ? speed / 2 : speed);

    let pauseTimer: ReturnType<typeof setTimeout> | undefined;
    if (!deleting && text === current) {
      pauseTimer = setTimeout(() => setDeleting(true), pause);
    }
    return () => {
      clearTimeout(timeout);
      if (pauseTimer) clearTimeout(pauseTimer);
    };
  }, [deleting, index, text, words, speed, pause]);

  return text + (deleting ? "" : "|");
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  const { t } = useTranslation();
  const words = t("hero.typing", { returnObjects: true }) as string[];
  const typed = useTyped(words);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden min-h-[90vh] flex items-center particles-bg"
    >
      {/* Premium gradient overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)", opacity: 0.08 }}
        aria-hidden
      />

      {/* Ambient background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full blur-[120px] opacity-[0.12]"
          style={{ background: "radial-gradient(circle, hsl(265 80% 60%), transparent 70%)" }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
           className="absolute bottom-[-10%] right-[-5%] w-[35vw] h-[35vw] rounded-full blur-[100px] opacity-[0.1]"
           style={{ background: "radial-gradient(circle, hsl(280 70% 50%), transparent 70%)" }}
           animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Ambient grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      <div className="container flex flex-col-reverse md:flex-row items-center gap-12 py-12 md:py-16">
        {/* Text content */}
        <motion.div
          className="flex-1 text-center md:text-start"
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium"
            variants={fadeUp}
            custom={0}
          >
            {t("hero.title")}
          </motion.p>
          <motion.h1
            className="mt-3 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            variants={fadeUp}
            custom={1}
          >
            {t("hero.name")}{" "}
            <span className="gradient-text">.NET</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-muted-foreground min-h-7 font-light"
            variants={fadeUp}
            custom={2}
          >
            {typed}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={fadeUp}
            custom={3}
          >
            <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                variant="hero"
                className="px-7 h-11 text-sm font-bold rounded-xl hover-glow-primary transition-all duration-300 shadow-lg shadow-primary/20"
              >
                <a href="#projects" className="flex items-center">
                  {t("hero.ctas.viewProjects")}
                  <ArrowDown className="ml-2 h-3.5 w-3.5" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-7 h-11 text-sm font-bold rounded-xl bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md"
              >
                <a href="#contact">{t("hero.ctas.contactMe")}</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-5"
            variants={fadeUp}
            custom={4}
          >
            <a
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors story-link relative"
              href="https://www.linkedin.com/in/ramezkhalifa/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors story-link relative"
              href="https://github.com/ramezaleem"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors story-link relative"
              href="mailto:ramez.aleem532@gmail.com"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" /> 01221614207
            </span>
          </motion.div>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Glow behind photo */}
            <div
              className="absolute -inset-6 rounded-full blur-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, hsla(270 80% 60% / 0.5), hsla(285 75% 65% / 0.3), transparent 60%)",
              }}
            />
            {/* Spinning gradient ring */}
            <div className="glow-ring">
              <motion.img
                src={profileUrl}
                alt="Ramez Khalifa profile photo"
                className="h-48 w-48 md:h-64 md:w-64 lg:h-72 lg:w-72 rounded-full shadow-[var(--shadow-elevated)] object-cover relative z-10"
                whileHover={{ rotate: 2, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ArrowDown className="h-5 w-5 text-muted-foreground/50" />
      </motion.div>
    </section>
  );
}
