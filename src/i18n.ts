import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        downloadCV: "Download CV",
      },
      hero: {
        name: "Ramez Khalifa",
        title: "Full-Stack .NET Developer",
        typing: [
          "Full-Stack .NET Developer",
          "ASP.NET Core & C# Expert",
          "Clean Architecture Advocate",
          "Angular & TypeScript",
          "Building Scalable Web Apps",
        ],
        ctas: {
          viewProjects: "View Projects",
          contactMe: "Contact Me",
        },
      },
      about: {
        title: "About Me",
        bio: "As a Full-Stack .NET Developer at ZITS and a Freelance Star recognized by the Ministry of Communications, I’ve worked on production systems including e-commerce, restaurant, and educational platforms, building .NET APIs, dashboards, and handling real business logic, while also delivering freelance solutions for clients across different countries.",
        timeline: {
          items: [
            {
              title: "Education",
              desc: "B.Sc. Computer Science — Menoufia University (GPA 3.3/4.0). Specializing in software engineering fundamentals.",
            },
            {
              title: "Career",
              desc: "Currently at ZITS, building robust .NET solutions. Previously gained strong experience at DEPI and ITI.",
            },
            {
              title: "Philosophy",
              desc: "I believe in writing code for people, not just machines. Delivering clean, maintainable, and impactful software is my top priority.",
            },
          ],
        },
      },
      skills: {
        title: "Skills",
        categories: {
          backend: "Backend & Databases",
          frontend: "Frontend",
          tools: "DevOps & Tools",
          soft: "Soft Skills",
        },
      },
      projects: {
        title: "Featured Projects",
        filters: { all: "All", backend: ".NET Backend", frontend: "Frontend" },
        transport: {
          name: "Transport Management API",
          desc: "A high-performance modular API built for scale, supporting real-time tracking and scheduling with a focus on security and maintainability.",
          tech: "C#, ASP.NET Core, EF Core, JWT",
        },
        school: {
          name: "School Discipline API",
          desc: "Streamlining administrative workflows for 500+ students by automating behavioral tracking and real-time alerts.",
          tech: "C#, ASP.NET Core, Identity, SQL Server",
        },
        bookify: {
          name: "Bookify – Library Management",
          desc: "A comprehensive digital library platform that improved management efficiency by 40% for its active user base.",
          tech: "ASP.NET Core MVC, EF, Azure",
        },
        exam: {
          name: "Smart Exam System",
          desc: "An interactive examination platform providing real-time feedback and a seamless experience for both students and educators.",
          tech: "ASP.NET Core MVC, Identity, Ajax",
        },
        sales: {
          name: "Sales Inventory (ZITS)",
          desc: "A mission-critical desktop application for managing real-time inventory and sales operations with high reliability.",
          tech: "C#, WinForms, SQL Server",
        },
      },
      contact: {
        title: "Contact",
        subtitle: "Let's build something great together.",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        success: "Thanks! I'll get back to you soon.",
      },
    },
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        about: "نبذة عني",
        skills: "المهارات",
        projects: "المشاريع",
        contact: "تواصل",
        downloadCV: "تحميل السيرة الذاتية",
      },
      hero: {
        name: "رامز خليفة",
        title: "مطور ويب متكامل .NET",
        typing: [
          "مطور ويب متكامل .NET",
          "خبير ASP.NET Core و C#",
          "معمارية نظيفة وكود احترافي",
          "Angular وTypeScript",
          "بناء تطبيقات ويب قابلة للتوسع",
        ],
        ctas: {
          viewProjects: "عرض المشاريع",
          contactMe: "تواصل معي",
        },
      },
      about: {
        title: "نبذة عني",
        bio: "بصفتي مطور .NET متكامل مستقل، أعمل على أنظمة جاهزة للإنتاج تشمل منصات المطاعم والتعليم، حيث أقوم ببناء واجهات برمجية ولوحات تحكم ومعالجة منطق الأعمال الحقيقي لعملاء في دول مختلفة.",
        timeline: {
          items: [
            {
              title: "التعليم",
              desc: "بكالوريوس علوم الحاسوب — جامعة المنوفية (GPA 3.3/4.0). متخصص في أساسيات هندسة البرمجيات.",
            },
            {
              title: "المسار المهني",
              desc: "أعمل حالياً في ZITS على بناء حلول .NET قوية. اكتسبت خبرة سابقة قوية في DEPI و ITI.",
            },
            {
              title: "فلسفتي",
              desc: "أؤمن بكتابة الكود للبشر، وليس فقط للآلات. تقديم برمجيات نظيفة وقابلة للصيانة وذات أثر هو أولويتي القصوى.",
            },
          ],
        },
      },
      skills: {
        title: "المهارات",
        categories: {
          backend: "Backend & Databases",
          frontend: "Frontend",
          tools: "DevOps & Tools",
          soft: "Soft Skills",
        },
      },
      projects: {
        title: "أهم المشاريع",
        filters: { all: "الكل", backend: "خلفي .NET", frontend: "واجهة أمامية" },
        transport: {
          name: "Transport Management API",
          desc: "A high-performance modular API built for scale, supporting real-time tracking and scheduling with a focus on security and maintainability.",
          tech: "C#, ASP.NET Core, EF Core, JWT",
        },
        school: {
          name: "School Discipline API",
          desc: "Streamlining administrative workflows for 500+ students by automating behavioral tracking and real-time alerts.",
          tech: "C#, ASP.NET Core, Identity, SQL Server",
        },
        bookify: {
          name: "Bookify – Library Management",
          desc: "A comprehensive digital library platform that improved management efficiency by 40% for its active user base.",
          tech: "ASP.NET Core MVC, EF, Azure",
        },
        exam: {
          name: "Smart Exam System",
          desc: "An interactive examination platform providing real-time feedback and a seamless experience for both students and educators.",
          tech: "ASP.NET Core MVC, Identity, Ajax",
        },
        sales: {
          name: "Sales Inventory (ZITS)",
          desc: "A mission-critical desktop application for managing real-time inventory and sales operations with high reliability.",
          tech: "C#, WinForms, SQL Server",
        },
      },
      contact: {
        title: "تواصل",
        subtitle: "لنصنع شيئًا رائعًا معًا.",
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        send: "إرسال",
        success: "شكرًا! سأتواصل معك قريبًا.",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "ar"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["querystring", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
