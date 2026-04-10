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
        testimonials: "Reviews",
        contact: "Contact",
        downloadCV: "Download CV",
      },
      hero: {
        badge: "Open for New Challenges",
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
        title: "Skills & Expertise",
        categories: {
          backend: "Backend .NET",
          frontend: "Frontend",
          tools: "DevOps & Tools",
          soft: "Soft Skills",
        },
      },
      testimonials: {
        title: "What My Clients Say"
      },
      projects: {
        title: "Featured Projects",
        readMore: "Read More",
        readLess: "Show Less",
        mashael: {
          name: "Mashael Almarefa Platform",
          desc: "Mashael Almarefa is a scalable educational platform designed to manage the full learning lifecycle, enabling students to enroll in structured programs, interact with instructors, and attend sessions through a centralized dashboard, with robust admin control over users, courses, and operations.",
          tech: "Next.js, TypeScript, Tailwind CSS, Authentication",
        },
        ruya: {
          name: "Ruya Kids Platform",
          desc: "Ru’ya Kids Platform is a curated educational hub designed for young learners, bringing together trusted global and Arabic learning platforms in one place, with organized sections for reading, math, science, and interactive learning experiences in a safe and engaging environment.",
          tech: "React, JavaScript, Tailwind CSS, React Router",
        },
        bookify: {
          name: "Bookify – Library Management",
          desc: "A comprehensive digital library platform that improved management efficiency by 40% for its active user base.",
          tech: "ASP.NET Core MVC, EF, Azure",
        },
        ai_learning: {
          name: "AI Self-Learning Initiative",
          desc: "AI Self-Learning Initiative for Nafes Skills is an educational platform designed to enhance students’ readiness for national assessments by leveraging AI-powered tools and curated learning resources across core subjects including mathematics, language, and science, providing an interactive and structured learning experience.",
          tech: "React, JavaScript, Tailwind CSS, React Router",
        },
        pdfswifter: {
          name: "pdfSwifter – PDF Tools & Downloader",
          desc: "pdfSwifter is a fast and secure web platform offering a suite of online tools for PDF processing and media downloads, including compression, conversion, and social media video downloading, with a focus on performance, privacy, and seamless user experience.",
          tech: "Next.js, TypeScript, Tailwind CSS, API Integration",
        },
        ecommerce: {
          name: "E-Commerce Platform",
          desc: "A modern e-commerce platform featuring product listings, flash sales, categories, and a complete shopping experience with cart, wishlist, and user authentication, designed for performance and seamless user interaction.",
          tech: "Angular, TypeScript, RxJS, HTML, CSS",
        },
      },
      footer: {
        available: "Available for new projects",
      },
      contact: {
        title: "Contact",
        subtitle: "Let's build something great together.",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        success: "Thanks! I'll get back to you soon.",
        khamsat: "Khamsat Profile",
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
        testimonials: "الآراء",
        contact: "تواصل",
        downloadCV: "تحميل السيرة الذاتية",
      },
      hero: {
        badge: "متاح لتحديات جديدة",
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
        title: "المهارات والخبرات",
        categories: {
          backend: "البنية التحتية .NET",
          frontend: "واجهة أمامية",
          tools: "الأدوات والمزيد",
          soft: "مهارات ناعمة",
        },
      },
      testimonials: {
        title: "آراء العملاء"
      },
      projects: {
        title: "أهم المشاريع",
        readMore: "قراءة المزيد",
        readLess: "عرض أقل",
        mashael: {
          name: "منصة مشاعل المعرفة",
          desc: "مشاعل المعرفة هي منصة تعليمية متطورة مصممة لإدارة دورة التعلم بالكامل، مما يتيح للطلاب التسجيل في برامج منظمة، والتفاعل مع المدرسين، وحضور الجلسات من خلال لوحة تحكم مركزية، مع تحكم إداري قوي في المستخدمين والدورات والعمليات.",
          tech: "Next.js, TypeScript, Tailwind CSS, Authentication",
        },
        ruya: {
          name: "منصة رؤية للأطفال",
          desc: "منصة رؤية للأطفال هي مركز تعليمي منسق مصمم للمتعلمين الصغار، يجمع بين منصات التعلم العالمية والعربية الموثوقة في مكان واحد، مع أقسام منظمة للقراءة والرياضيات والعلوم وتجارب التعلم التفاعلية في بيئة آمنة وجذابة.",
          tech: "React, JavaScript, Tailwind CSS, React Router",
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

        ai_learning: {
          name: "مبادرة التعلّم الذاتي (AI)",
          desc: "مبادرة التعلم الذاتي بالذكاء الاصطناعي لمهارات نافس هي منصة تعليمية مصممة لتعزيز جاهزية الطلاب للتقييمات الوطنية من خلال الاستفادة من الأدوات المدعومة بالذكاء الاصطناعي والموارد التعليمية المنسقة في المواد الأساسية بما في ذلك الرياضيات واللغة والعلوم، مما يوفر تجربة تعليمية تفاعلية ومنظمة.",
          tech: "React, JavaScript, Tailwind CSS, React Router",
        },
        pdfswifter: {
          name: "pdfSwifter – منصة أدوات PDF",
          desc: "pdfSwifter هي منصة ويب سريعة وآمنة تقدم مجموعة من الأدوات عبر الإنترنت لمعالجة ملفات PDF وتنزيل الوسائط، مع التركيز على الأداء والخصوصية وتجربة مستخدم سلسة.",
          tech: "Next.js, TypeScript, Tailwind CSS, API Integration",
        },
        ecommerce: {
          name: "منصة التجارة الإلكترونية",
          desc: "منصة تجارة إلكترونية حديثة تتميز بقوائم المنتجات، ومبيعات سريعة، وفئات، وتجربة تسوق كاملة مع سلة المشتريات، وقائمة الرغبات، ومصادقة المستخدم، مصممة للأداء والتفاعل السلس للمستخدم.",
          tech: "Angular, TypeScript, RxJS, HTML, CSS",
        },
      },
      footer: {
        available: "متاح لمشاريع جديدة",
      },
      contact: {
        title: "تواصل",
        subtitle: "لنصنع شيئًا رائعًا معًا.",
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        send: "إرسال",
        success: "شكرًا! سأتواصل معك قريبًا.",
        khamsat: "حساب خمسات",
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
