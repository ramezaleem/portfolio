import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sulaiman M.",
    content: "هذا ثاني تعامل لي مع الأستاذ المبدع رامز وبالتأكيد لن يكون الأخير لأنه ليس فقط ينفذ ما تريده.. بل يمنحك إضافات تميز عملك وتفوق توقعاتك بالإضافة لسرعة التواصل والرد وبشاشة التعامل شكرا لك وبالتوفيق",
  },
  {
    name: "Shms A.",
    content: "مبرمج خبير وعمله مميز جدا ومتقن وذا جوده وتعامل راقي وفوق المتوقع ويمشي مع احتياج ورغبات العميل بكل ود وترحيب",
  },
  {
    name: "Mostafa S.",
    content: "واضح ان م.رامز خبير في مجال عمله في حالتي كان هذا العمل عبارة عن تعديلات على مشروع مكتوب بلغة سي شارب انا شخصيا انوي التعامل معه مجددا فيما يخص سي شارب ان شاء الله قام البشمهندس رامز بعمل المطلوب في وقت ممتاز - قام بالتسليم في الموعد بالنسبة لجودة الخدمة فهي ممتازة ممتاز في التواصل يحفظ اسرار المشروع ممتاز في المتابعه انساق في تعامله قام باكثر من المطلوب - اي انه يقوم بالتعديلات اللازمة ان طلبت منه واسع - صبور - و بيوضحلك ايه اللي بيحصل اول ب اول بارك الله فيك و في عملك و ان شاء الله لنا اعمال اخري معا مستقبلا -",
  },
  {
    name: "Osm K.",
    content: "عمله مرتب وممتاز انصح به",
  },
  {
    name: "الجوهره م.",
    content: "شغل ممتاز واحترافي",
  },
  {
    name: "Leen E.",
    content: "اشتغلت مع الأستاذ رامز للمرة الثانية، وكان بنفس الاحتراف والالتزام. تعامل محترم، صبور في التعديلات، وفاهم شغله كويس . أنصح بالتعامل معه، وإن شاء الله مش آخر تعامل بينا.",
  },
];

export default function Testimonials() {
  const { t } = useTranslation();
  const animationRef = useRef<any>(null);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [singleWidth, setSingleWidth] = useState(0);

  // We need many copies to simulate a never-ending rail
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    if (containerRef.current) {
      const content = containerRef.current.firstChild as HTMLElement;
      if (content) {
        setSingleWidth(content.scrollWidth / 5);
      }
    }
  }, []);

  const startInfiniteAnimation = (startX: number = x.get()) => {
    if (animationRef.current) animationRef.current.stop();
    
    // Mathematically wrap the starting position to be within the [0, -singleWidth] range
    let wrappedStart = startX % singleWidth;
    if (Object.is(wrappedStart, -0)) wrappedStart = 0;
    x.set(wrappedStart);

    const distanceLeft = singleWidth + wrappedStart;
    const duration = (25 * distanceLeft) / singleWidth;

    animationRef.current = animate(x, [wrappedStart, -singleWidth], {
      duration: duration || 25,
      ease: "linear",
      onComplete: () => {
        // When one cycle finishes, restart from 0
        x.set(0);
        startInfiniteAnimation(0);
      }
    });
  };

  useEffect(() => {
    if (singleWidth > 0) {
      // Start slightly offset so the user can drag both ways
      const initialOffset = -singleWidth * 2;
      x.set(initialOffset);
      
      animationRef.current = animate(x, [initialOffset, initialOffset - singleWidth], {
        duration: 25,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      });
    }
    return () => animationRef.current?.stop();
  }, [singleWidth]);

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="container">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center md:text-left mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {t("testimonials.title")}
            </h2>
            <div className="section-divider" />
          </div>

          <div 
            ref={containerRef}
            className="relative overflow-hidden rounded-[2rem] cursor-grab active:cursor-grabbing group"
          >
            <motion.div 
              drag="x"
              dragConstraints={{ left: -singleWidth * 4, right: 0 }}
              style={{ x }}
              whileTap={{ cursor: "grabbing" }}
              onDragStart={() => animationRef.current?.stop()}
              onDragEnd={() => {
                const currentX = x.get();
                
                if (currentX > 0) {
                  animate(x, 0, {
                    duration: 0.5,
                    ease: "easeOut"
                  }).then(() => startInfiniteAnimation(0));
                  return;
                }

                startInfiniteAnimation(currentX);
              }}
              className="flex gap-6 py-6"
            >
              {extendedTestimonials.map((item, i) => (
                <div
                  key={i}
                  className="w-[280px] md:w-[320px] shrink-0 glass-card p-5 md:p-6 rounded-[1.8rem] border-primary/20 flex flex-col justify-between shadow-xl"
                >
                  <div className="mb-2">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-primary/10 mb-2" />
                    <p className="text-foreground text-sm md:text-base leading-snug font-arabic font-bold text-right dir-rtl select-none line-clamp-5">
                      "{item.content}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 border-t border-primary/10 pt-4 mt-auto">
                    <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-tr from-primary/40 to-primary/10 flex items-center justify-center font-black text-primary text-sm border border-primary/20 shadow-lg">
                      {item.name.charAt(0)}
                    </div>
                    <div className="text-left overflow-hidden">
                      <p className="font-bold text-xs text-foreground tracking-tight truncate">{item.name}</p>
                      <p className="text-[8px] text-muted-foreground font-bold uppercase tracking-wider opacity-60">Verified Member</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Cinematic Gradient Overlays to truly hide the start/end points */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background via-background/10 to-transparent z-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background via-background/10 to-transparent z-20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
