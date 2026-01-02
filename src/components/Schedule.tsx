import { AnimateOnScroll } from "@/hooks/useScrollAnimation";
import scheduleImage from "@/assets/schedule.png";

const Schedule = () => {
  const scheduleData = [
    {
      day: "SUN",
      classes: [
        { time: "09:00 AM", name: "Advanced BJJ" },
        { time: "05:00 PM", name: "Kids BJJ" },
        { time: "06:00 PM", name: "Beginner BJJ" },
        { time: "06:30 PM", name: "Muay Thai" },
        { time: "07:00 PM", name: "All Levels BJJ" },
      ],
    },
    {
      day: "MON",
      classes: [
        { time: "05:00 PM", name: "Kids BJJ" },
        { time: "06:00 PM", name: "Kids Muay Thai" },
        { time: "06:30 PM", name: "Beginner BJJ" },
        { time: "07:00 PM", name: "NoGi BJJ" },
      ],
    },
    {
      day: "TUE",
      classes: [
        { time: "09:00 AM", name: "Advanced BJJ" },
        { time: "05:00 PM", name: "Kids BJJ" },
        { time: "06:00 PM", name: "Beginner BJJ" },
        { time: "06:30 PM", name: "Muay Thai" },
        { time: "07:00 PM", name: "All Levels BJJ" },
      ],
    },
    {
      day: "WED",
      classes: [
        { time: "05:00 PM", name: "Kids BJJ" },
        { time: "06:00 PM", name: "Kids Muay Thai" },
        { time: "06:30 PM", name: "Beginner BJJ" },
        { time: "07:00 PM", name: "NoGi BJJ" },
      ],
    },
    {
      day: "THU",
      classes: [
        { time: "09:00 AM", name: "Advanced BJJ" },
        { time: "05:00 PM", name: "Kids BJJ" },
        { time: "06:00 PM", name: "Beginner BJJ" },
        { time: "06:30 PM", name: "Muay Thai" },
        { time: "07:00 PM", name: "Open Mat" },
      ],
    },
    {
      day: "SAT",
      classes: [
        { time: "12:00 PM", name: "Open Mat" },
        { time: "01:30 PM", name: "Muay Thai" },
      ],
    },
  ];

  return (
    <section id="schedule" className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-8 sm:mb-12">
          <p className="font-body text-primary font-semibold tracking-[0.2em] uppercase mb-2 text-sm sm:text-base">
            Weekly Schedule
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 sm:mb-4">
            TRAIN WITH <span className="text-gradient">US</span>
          </h2>
          <p className="font-body text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Find the perfect time to train.
          </p>
        </AnimateOnScroll>

        {/* Schedule Grid - 2 rows of 3 on mobile */}
        <AnimateOnScroll animation="fade-up">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
            {scheduleData.map((day, index) => (
              <div
                key={day.day}
                className="bg-secondary rounded-lg border border-border overflow-hidden"
              >
                {/* Day Header */}
                <div className="bg-primary py-1.5 sm:py-2 lg:py-3 px-1 sm:px-2 lg:px-4 text-center">
                  <h3 className="font-heading text-sm sm:text-lg lg:text-2xl text-primary-foreground">{day.day}</h3>
                </div>

                {/* Classes */}
                <div className="p-1.5 sm:p-2 lg:p-4 space-y-1.5 sm:space-y-2 lg:space-y-3">
                  {day.classes.map((classItem, idx) => (
                    <div key={idx} className="text-center">
                      <p className="font-body text-[8px] sm:text-[10px] lg:text-xs text-muted-foreground">{classItem.time}</p>
                      <p className="font-body text-[9px] sm:text-xs lg:text-sm font-semibold text-foreground leading-tight">
                        {classItem.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Schedule Image */}
        <AnimateOnScroll animation="fade-up" className="mt-6 sm:mt-8 lg:mt-12">
          <div className="rounded-lg overflow-hidden border border-border">
            <img 
              src={scheduleImage} 
              alt="Weekly Class Schedule" 
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </AnimateOnScroll>

        {/* Note */}
        <p className="text-center mt-4 sm:mt-6 lg:mt-8 text-muted-foreground font-body text-xs sm:text-sm lg:text-base px-2">
          <span className="text-accent font-semibold">*</span> Schedule may vary during holidays.
        </p>
      </div>
    </section>
  );
};

export default Schedule;
