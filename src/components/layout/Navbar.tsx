import { Link as RouterLink } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const items = [
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <motion.header
      className="sticky top-0 z-40 navbar-glass"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="container flex h-16 items-center justify-between">
        <RouterLink
          to="#"
          className="font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity"
        >
          Ramez <span className="gradient-text">Khalifa</span>
        </RouterLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {items.map((it, i) => (
            <motion.a
              key={it.href}
              href={it.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors story-link relative font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
            >
              {it.label}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <Button
            asChild
            variant="hero"
            size="sm"
            className="hidden sm:inline-flex rounded-full px-5 group"
          >
            <a href="/Ramez-DotNet-Developer.pdf" download>
              <Download className="mr-1 h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
              {t("nav.downloadCV")}
            </a>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          className="md:hidden border-t border-border/50 navbar-glass"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <div className="container py-4 flex flex-col gap-3">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {it.label}
              </a>
            ))}
            <Button asChild variant="hero" size="sm" className="rounded-full w-fit mt-2">
              <a href="/Ramez-DotNet-Developer.pdf" download>
                <Download className="mr-1 h-3.5 w-3.5" />
                {t("nav.downloadCV")}
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
