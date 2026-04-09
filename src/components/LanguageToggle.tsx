import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import i18n from "i18next";

export default function LanguageToggle() {
  const isArabic = (i18n.language || "en").startsWith("ar");
  return (
    <Button
      variant="ghost"
      size="sm"
      className="gap-1 hover-scale"
      onClick={() => i18n.changeLanguage(isArabic ? "en" : "ar")}
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4" />
      <span>{isArabic ? "EN" : "AR"}</span>
    </Button>
  );
}
