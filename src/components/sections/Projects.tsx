import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import bookifyImg from "@/assets/bookify-hero.jpg";
import hrmImg from "@/assets/hrm-hero.jpg";
import { Button } from "@/components/ui/button";
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
    id: "transport",
    image: bookifyImg,
    tags: ["backend"],
    liveUrl: "https://transportmanagement.runasp.net/swagger/index.html",
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
    id: "school",
    image: hrmImg,
    tags: ["backend"],
    liveUrl: undefined,
    repoUrl: "https://github.com/ramezaleem/SchoolDisciplineAPI",
  },
  {
    id: "exam",
    image: hrmImg,
    tags: ["backend", "frontend"],
    liveUrl: undefined,
    repoUrl: "https://github.com/ramezaleem/Smart-Exam-System",
  },
  {
    id: "sales",
    image: hrmImg,
    tags: ["backend"],
    liveUrl: undefined,
    repoUrl: "https://github.com/ramezaleem/SalesInventoryWinForms",
  },
];

const filterBtnVariants = {
  inactive: { scale: 1 },
  active: { scale: 1.05 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { duration: 0.3 },
  },
};

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<"all" | "backend" | "frontend">("all");

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

  const visible = projects.filter(
    (p) => filter === "all" || p.tags.includes(filter)
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

          {/* Filter buttons */}
          <div className="mt-8 mb-12 flex flex-wrap gap-3">
            {(["all", "backend", "frontend"] as const).map((f) => (
              <Button
                key={f}
                variant={filter === f ? "hero" : "secondary"}
                size="sm"
                onClick={() => setFilter(f)}
                className="rounded-full px-5 transition-transform active:scale-95"
              >
                {t(`projects.filters.${f}`)}
              </Button>
            ))}
          </div>

          {/* Project cards grids */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <article className="glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl">
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
                      <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {p.desc}
                      </p>
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
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
