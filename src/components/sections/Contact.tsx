import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

const WhatsAppIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.037 2C6.494 2 2 6.495 2 12.038c0 2.254.743 4.33 2.001 6.007L2.1 23l5.122-1.892a9.982 9.982 0 004.814 1.232c5.543 0 10.038-4.495 10.038-10.038S17.58 2 12.037 2zm0 18.068a8.031 8.031 0 01-4.085-1.111l-.293-.16-3.033 1.12.355-3.15-.192-.303a8.01 8.01 0 01-1.353-4.426c0-4.432 3.606-8.038 8.038-8.038s8.038 3.606 8.038 8.038-3.606 8.038-8.038 8.038zM16.5 13.5c-.3-.15-1.785-.885-2.063-.99-.277-.1-.48-.15-.683.15s-.78.99-.953 1.185-.345.225-.645.075c-.3-.15-1.268-.465-2.415-1.485-.892-.795-1.492-1.785-1.673-2.085-.18-.3-.015-.465.135-.615s.3-.345.45-.518c.15-.173.2-.3.3-.495s.05-.375-.025-.525c-.075-.15-.683-1.643-.938-2.258-.248-.593-.503-.51-.69-.517-.173-.007-.375-.007-.57-.007s-.51.075-.78.375c-.27.3-1.035 1.013-1.035 2.468s1.057 2.858 1.207 3.06c.15.203 2.085 3.18 5.048 4.463.705.308 1.253.488 1.68.623.705.225 1.343.195 1.853.12.57-.083 1.785-.728 2.04-1.433.255-.705.255-1.313.18-1.433-.075-.12-.277-.195-.577-.345z" />
  </svg>
);

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
    icon: WhatsAppIcon,
    label: "WhatsApp: 01221614207",
    href: "https://wa.me/201221614207",
  },
  {
    icon: Mail,
    label: "ramez.aleem532@gmail.com",
    href: "mailto:ramez.aleem532@gmail.com",
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
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold inline-block">
              {t("contact.title")}
              <div className="section-divider mx-auto" />
            </h2>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {connectLinks.map((link) => {
              const Icon = link.icon;
              return (
                <div key={link.label}>
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
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-primary/70 italic text-lg">
              "Let's create something extraordinary together."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
