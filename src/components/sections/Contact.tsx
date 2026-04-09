import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

const connectLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ramezkhalifa/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/ramezaleem",
  },
  {
    icon: Mail,
    label: "ramez.aleem532@gmail.com",
    href: "mailto:ramez.aleem532@gmail.com",
  },
  {
    icon: Phone,
    label: "01221614207",
    href: "tel:+201221614207",
  },
  {
    icon: MapPin,
    label: "Egypt",
    href: undefined,
  },
];

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-12 md:py-16 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.06] pointer-events-none"
        style={{ background: "hsl(270 80% 60%)" }}
        aria-hidden
      />

      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold inline-block">
            {t("contact.title")}
            <div className="section-divider mx-auto" />
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {connectLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 p-6 rounded-3xl bg-primary/5 border border-primary/10 transition-all hover:bg-primary/10 hover:border-primary/30 group/link hover:-translate-y-1"
                  >
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover/link:bg-primary group-hover/link:text-primary-foreground transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground group-hover/link:text-foreground transition-colors overflow-hidden text-ellipsis whitespace-nowrap">
                      {link.label}
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-6 rounded-3xl bg-primary/5 border border-primary/10 cursor-default">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground">
                      {link.label}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Floating invitation text */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-primary/70 italic text-lg">
            "Let's create something extraordinary together."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
