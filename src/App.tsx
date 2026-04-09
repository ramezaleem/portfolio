import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./i18n";
import i18next from "i18next";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const applyLangDir = () => {
      const lang = i18next.language || "en";
      const isRTL = lang.startsWith("ar");
      document.documentElement.lang = lang;
      document.documentElement.dir = isRTL ? "rtl" : "ltr";
    };
    applyLangDir();
    i18next.on("languageChanged", applyLangDir);

    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      i18next.off("languageChanged", applyLangDir);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
