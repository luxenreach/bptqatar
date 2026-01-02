import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/group-training.jpg";

const Hero = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Brazilian Power Team Group Training"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 sm:from-background/90 sm:to-background/90" />
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 container mx-auto px-4 pt-20 sm:pt-24 pb-16 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <p className={`font-body text-primary font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 transition-all duration-500 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Doha, Qatar
          </p>
          
          <h1 className={`font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none mb-4 sm:mb-6 transition-all duration-500 delay-100 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="text-foreground">BRAZILIAN</span>
            <br />
            <span className="text-gradient">POWER TEAM</span>
          </h1>
          
          <p className={`font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 px-2 transition-all duration-500 delay-200 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Discover the Art of BJJ. Where technique meets teamwork, and every roll is an opportunity for growth.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0 transition-all duration-500 delay-300 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg sm:text-xl tracking-wider px-6 sm:px-8 py-5 sm:py-6 glow-effect touch-manipulation"
            >
              START YOUR JOURNEY
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection("schedule")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading text-lg sm:text-xl tracking-wider px-6 sm:px-8 py-5 sm:py-6 touch-manipulation"
            >
              VIEW SCHEDULE
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <button 
          onClick={() => scrollToSection("about")}
          className="text-muted-foreground hover:text-primary smooth-transition p-2 touch-manipulation"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
