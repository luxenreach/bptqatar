import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";
import beginnersImg from "@/assets/beginners.png";
import kidsImg from "@/assets/kids-bjj.png";
import nogiImg from "@/assets/nogi.jpg";
import muayThaiImg from "@/assets/muay-thai.jpg";
import ladiesImg from "@/assets/ladies-bjj.jpg";
import groupImg from "@/assets/group-training.jpg";

const Classes = () => {
  const classes = [
    {
      title: "Beginner Jiu-Jitsu",
      description: "Learn basic movements, positions, and submissions. Build a strong foundation with core BJJ principles.",
      image: beginnersImg,
    },
    {
      title: "Advanced Jiu-Jitsu",
      description: "Complex techniques and strategies for experienced practitioners with live sparring.",
      image: groupImg,
    },
    {
      title: "Kids Jiu-Jitsu",
      description: "Fun learning in a positive setting! Kids build confidence, coordination, and teamwork.",
      image: kidsImg,
    },
    {
      title: "Ladies Jiu-Jitsu",
      description: "Empowering classes designed for all ages and skill levels in a supportive environment.",
      image: ladiesImg,
    },
    {
      title: "NOGI Jiu-Jitsu",
      description: "Experience the freedom of No-Gi BJJ. Refine techniques without the traditional gi.",
      image: nogiImg,
    },
    {
      title: "Muay Thai",
      description: "Discover your warrior spirit. Classes for beginners and experienced fighters alike.",
      image: muayThaiImg,
    },
  ];

  const scrollToSchedule = () => {
    const element = document.getElementById("schedule");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="classes" className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-8 sm:mb-12">
          <p className="font-body text-primary font-semibold tracking-[0.2em] uppercase mb-2 text-sm sm:text-base">
            Our Programs
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 sm:mb-4">
            CLASSES FOR <span className="text-gradient">EVERY LEVEL</span>
          </h2>
          <p className="font-body text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            From complete beginners to seasoned competitors, we offer specialized programs.
          </p>
        </AnimateOnScroll>

        {/* Classes Grid - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {classes.map((classItem, index) => (
            <AnimateOnScroll key={classItem.title} animation="fade-up" delay={index * 50}>
              <div className="group relative rounded-lg overflow-hidden border border-border hover:border-primary smooth-transition touch-manipulation h-full flex flex-col">
                {/* Image */}
                <div className="relative h-28 sm:h-40 lg:h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={classItem.image}
                    alt={classItem.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-3 sm:p-4 lg:p-6 bg-card flex-grow flex flex-col">
                  <h3 className="font-heading text-base sm:text-xl lg:text-2xl text-foreground mb-1 sm:mb-2 lg:mb-3 group-hover:text-primary smooth-transition">
                    {classItem.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-[10px] sm:text-xs lg:text-sm mb-2 sm:mb-3 lg:mb-4 line-clamp-2 sm:line-clamp-3 flex-grow">
                    {classItem.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    onClick={scrollToSchedule}
                    className="p-0 h-auto text-foreground hover:text-primary group/btn touch-manipulation justify-start"
                  >
                    <span className="font-body font-semibold uppercase tracking-wider text-[10px] sm:text-xs lg:text-sm">
                      Schedule
                    </span>
                    <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 smooth-transition" />
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll animation="fade-up" className="text-center mt-8 sm:mt-12">
          <Button 
            size="lg"
            onClick={scrollToSchedule}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg sm:text-xl tracking-wider px-6 sm:px-8 touch-manipulation"
          >
            VIEW FULL SCHEDULE
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Classes;
