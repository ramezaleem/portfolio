import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import bookifyImg from "@/assets/Bookify.png";
import hrmImg from "@/assets/hrm-hero.jpg";
import mashaelImg from "@/assets/mashael.png";
import ruyaImg from "@/assets/منصة-أطفال-الرؤية.png";
import aiImg from "@/assets/مبادرة-التعلم-الذكي.png";
import pdfImg from "@/assets/pdf-swift.png";
import ecommerceImg from "@/assets/E-Commerce.png";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  name: string;
  desc: string;
  tech: string;
  image: string;
  tags: ("backend" | "frontend")[];
  liveUrl?: string | false;
  repoUrl?: string | false;
}

const projectData: Omit<Project, "name" | "desc" | "tech">[] = [
  {
    id: "mashael",
    image: mashaelImg,
    tags: ["frontend", "backend"],
    liveUrl: "https://mashaeilalmaerifa.com/",
    repoUrl: undefined,
  },
  {
    id: "pdfswifter",
    image: pdfImg,
    tags: ["frontend", "backend"],
    liveUrl: "https://pdfswifter.com/",
    repoUrl: undefined,
  },
  {
    id: "ecommerce",
    image: ecommerceImg,
    tags: ["frontend"],
    liveUrl: "https://e-commerce-depi-graduation-zhs1.vercel.app/home",
    repoUrl: undefined,
  },
  {
    id: "ruya",
    image: ruyaImg,
    tags: ["frontend"],
    liveUrl: "https://vision-kids-platform.vercel.app/",
    repoUrl: undefined,
  },
  {
    id: "bookify",
    image: bookifyImg,
    tags: ["backend", "frontend"],
    liveUrl: "https://bookify1.runasp.net",
    repoUrl: undefined,
  },
  {
    id: "ai_learning",
    image: aiImg,
    tags: ["frontend"],
    liveUrl: "https://nafes-ai-learning.vercel.app/",
    repoUrl: undefined,
  },
];

function ProjectCard({ p }: { p: Project }) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300">
      <div className="relative aspect-[3/1.4] overflow-hidden">
        <img
          src={p.image}
          alt={`${p.name} preview image`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
          {p.name}
        </h3>
        <div className="mt-2 flex-1">
          <p className={`text-sm text-muted-foreground leading-relaxed transition-all duration-300 ${isExpanded ? "line-clamp-none" : "line-clamp-3"}`}>
            {p.desc}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-1 text-xs font-bold text-primary hover:underline transition-all"
          >
            {isExpanded ? t("projects.readLess") : t("projects.readMore")}
          </button>
        </div>
        <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between gap-4">
          <p className="text-xs gradient-text font-medium">
            {p.tech}
          </p>
          <div className="flex items-center gap-3">
            {p.repoUrl && (
              <a
                href={p.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-all hover:text-primary hover:scale-110 p-1.5 rounded-full hover:bg-primary/10"
                aria-label="GitHub Repository"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group/demo"
              >
                <span className="text-xs font-bold uppercase tracking-widest">Demo</span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useTranslation();

  const projects = useMemo<Project[]>(
    () =>
      projectData.map((p) => ({
        ...p,
        name: t(`projects.${p.id}.name`),
        desc: t(`projects.${p.id}.desc`),
        tech: t(`projects.${p.id}.tech`),
      })),
    [t]
  );

  return (
    <section id="projects" className="py-12 md:py-16 relative">
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[120px] opacity-[0.05] pointer-events-none"
        style={{ background: "hsl(285 75% 65%)" }}
        aria-hidden
      />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {t("projects.title")}
            </h2>
            <div className="section-divider" />
          </div>

          {/* Project cards grids */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <AnimatePresence mode="popLayout">
              {projects.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectCard p={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
