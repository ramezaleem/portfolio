import { useTranslation } from "react-i18next";
import { Database, Code2, Server, Wrench, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    key: "backend",
    icon: Server,
    skills: ["C#", "ASP.NET Core", "Web API", "SQL Server", "EF Core", "LINQ", "SignalR", "Microservices", "Redis"],
  },
  {
    key: "frontend",
    icon: Code2,
    skills: ["Angular", "TypeScript", "HTML5", "CSS3", "SCSS", "JavaScript", "Bootstrap"],
  },
  {
    key: "tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Postman", "Visual Studio 2022", "VS Code"],
  },
  {
    key: "soft",
    icon: Sparkles,
    skills: ["Problem Solving", "Data Structures", "Algorithms", "Agile / Scrum", "Clean Code"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section id="skills" className="py-12 md:py-16 relative">
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-[0.06] pointer-events-none"
        style={{ background: "hsl(270 80% 60%)" }}
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
              {t("skills.title")}
            </h2>
            <div className="section-divider" />
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(({ key, icon: Icon, skills }) => (
              <article
                key={key}
                className="glass-card rounded-xl p-4 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-base">
                    {t(`skills.categories.${key}`)}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span
                      key={s}
                      className="skill-tag text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300 cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
