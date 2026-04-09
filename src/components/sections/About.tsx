import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { GraduationCap, Rocket, Zap } from "lucide-react";

const icons = [GraduationCap, Rocket, Zap];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function About() {
  const { t } = useTranslation();
  const timeline = t("about.timeline.items", { returnObjects: true }) as {
    title: string;
    desc: string;
  }[];

  return (
    <section id="about" className="py-12 md:py-16 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {t("about.title")}
          </h2>
          <div className="section-divider" />
        </motion.div>

        <motion.p
          className="text-muted-foreground text-lg max-w-3xl mt-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {t("about.bio")}
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {timeline.map((item, i) => {
            const Icon = icons[i] || Zap;
            return (
              <motion.article
                key={i}
                className="glass-card rounded-2xl p-8 group cursor-default"
                variants={cardVariants}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
