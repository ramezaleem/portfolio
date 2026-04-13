import { useTranslation } from "react-i18next";
import { Database, Code2, Server, Wrench, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const categories = [
  {
    key: "backend",
    icon: Server,
    skills: ["C#", "ADO.NET", "OOP", "ASP.NET Core", "ASP.NET MVC", "Web API", "SQL Server", "EF Core", "LINQ", "SignalR", "Microservices", "Redis"],
  },
  {
    key: "frontend",
    icon: Code2,
    skills: ["Angular", "Next.js", "React", "TypeScript", "HTML5", "CSS3", "SCSS", "JavaScript", "Bootstrap"],
  },
  {
    key: "tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Postman", "Visual Studio 2022", "VS Code"],
  },
  {
    key: "soft",
    icon: Sparkles,
    skills: ["Problem Solving", "Communication", "Teamwork", "Data Structures", "Algorithms", "Agile / Scrum", "Clean Code"],
  },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setTransform(`perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: transform ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
      }}
    >
      {children}
    </div>
  );
}

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
              <TiltCard key={key}>
                <article
                  className="glass-card rounded-xl p-4 group h-full"
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
              </TiltCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
