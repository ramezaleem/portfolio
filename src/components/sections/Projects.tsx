import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import bookifyImg from "@/assets/bookify-hero.jpg";
import hrmImg from "@/assets/hrm-hero.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  name: string;
  desc: string;
  tech: string;
  image: string;
  tags: ("backend" | "frontend")[];
  liveUrl?: string;
  repoUrl?: string;
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {t("projects.title")}
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="mt-8 mb-12 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {(["all", "backend", "frontend"] as const).map((f) => (
            <motion.div
              key={f}
              variants={filterBtnVariants}
              animate={filter === f ? "active" : "inactive"}
            >
              <Button
                variant={filter === f ? "hero" : "secondary"}
                size="sm"
                onClick={() => setFilter(f)}
                className="rounded-full px-5"
              >
                {t(`projects.filters.${f}`)}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Project cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {visible.map((p, i) => (
              <motion.div
                key={p.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ delay: i * 0.1 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <article className="glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl cursor-pointer">
                      <div className="relative aspect-[3/1.4] overflow-hidden">
                        <img
                          src={p.image}
                          alt={`${p.name} preview image`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {p.name}
                        </h3>
                        <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {p.desc}
                        </p>
                        <div className="mt-4 flex items-center justify-between pt-4 border-t border-border/50">
                          <p className="text-xs gradient-text font-medium">
                            {p.tech}
                          </p>
                          <div className="flex items-center gap-3">
                            {p.liveUrl && (
                              <a
                                href={p.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                                aria-label="Live Demo"
                              >
                                <ExternalLink className="h-5 w-5" />
                              </a>
                            )}
                            {p.repoUrl && (
                              <a
                                href={p.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                                aria-label="GitHub Repository"
                              >
                                <Github className="h-5 w-5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-2xl border-primary/10">
                    <div className="grid h-full max-h-[90vh] grid-rows-[auto,1fr]">
                      <DialogHeader className="p-8 pb-0">
                        <DialogTitle className="text-3xl font-bold gradient-text">
                          {p.name}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-8 overflow-y-auto p-8 md:grid-cols-2">
                        <div className="relative aspect-video w-full self-start overflow-hidden rounded-xl">
                          <img
                            src={p.image}
                            alt={`${p.name} preview large`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-6">
                          <div>
                            <h4 className="mb-2 text-lg font-semibold">
                              About the Project
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {p.desc}
                            </p>
                          </div>
                          <div>
                            <h4 className="mb-2 text-lg font-semibold">
                              Technologies Used
                            </h4>
                            <p className="text-sm gradient-text font-medium">
                              {p.tech}
                            </p>
                          </div>
                          <div className="mt-auto flex flex-wrap gap-3 pt-4">
                            {p.liveUrl && (
                              <Button
                                asChild
                                variant="hero"
                                className="transition-transform active:scale-95"
                              >
                                <a
                                  href={p.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2"
                                >
                                  Live Demo{" "}
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              </Button>
                            )}
                            {p.repoUrl && (
                              <Button
                                asChild
                                variant="secondary"
                                className="transition-transform active:scale-95"
                              >
                                <a
                                  href={p.repoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2"
                                >
                                  GitHub <Github className="h-4 w-4" />
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
