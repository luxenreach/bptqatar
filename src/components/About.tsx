import { AnimateOnScroll } from "@/hooks/useScrollAnimation";
import groupImage from "@/assets/group-training.jpg";

const About = () => {
  const values = [
    {
      title: "Respect",
      description: "Respect is fundamental in BJJ, extending to instructors, training partners, and the art itself.",
    },
    {
      title: "Humility",
      description: "Humility is central in BJJ, emphasizing learning from successes and failures.",
    },
    {
      title: "Perseverance",
      description: "The resilient spirit that propels practitioners through challenges and setbacks.",
    },
    {
      title: "Community",
      description: "A family of martial artists supporting each other's growth on and off the mats.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <AnimateOnScroll animation="fade-up" className="order-2 lg:order-1">
            <p className="font-body text-primary font-semibold tracking-[0.2em] uppercase mb-2 text-sm sm:text-base">
              About Us
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 sm:mb-6">
              BRAZILIAN<br />
              <span className="text-gradient">POWER TEAM</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground font-body text-base sm:text-lg">
              <p>
                Led by our experienced and passionate BJJ professor, BPT-QA offers a dynamic learning 
                environment that caters to both beginners and seasoned practitioners.
              </p>
              <p>
                At BPT-QA, we emphasize not only the technical aspects of Brazilian Jiu-Jitsu but also 
                the values of respect, humility, and camaraderie.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Right - Image and Values */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <AnimateOnScroll animation="fade-up">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={groupImage} 
                  alt="BPT Qatar Team Training" 
                  className="w-full h-48 sm:h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </AnimateOnScroll>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {values.map((value, index) => (
                <AnimateOnScroll key={value.title} animation="scale" delay={index * 100}>
                  <div className="p-3 sm:p-5 bg-secondary rounded-lg border border-border hover:border-primary smooth-transition hover-lift touch-manipulation h-full">
                    <h3 className="font-heading text-lg sm:text-xl text-foreground mb-1 sm:mb-2">
                      {value.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-xs sm:text-sm line-clamp-3">
                      {value.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
