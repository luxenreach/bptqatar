import { useState, useEffect, useRef, useCallback } from "react";

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || "");
  const sectionsRef = useRef<Map<string, IntersectionObserverEntry>>(new Map());

  const updateActiveSection = useCallback(() => {
    let mostVisibleSection = sectionIds[0] || "";
    let maxRatio = 0;
    
    sectionsRef.current.forEach((entry, id) => {
      if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
        maxRatio = entry.intersectionRatio;
        mostVisibleSection = id;
      }
    });
    
    // Fallback: check which section is closest to viewport center
    if (maxRatio === 0) {
      const viewportCenter = window.innerHeight / 2;
      let closestDistance = Infinity;
      
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            mostVisibleSection = id;
          }
        }
      });
    }
    
    setActiveSection(mostVisibleSection);
  }, [sectionIds]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionsRef.current.set(entry.target.id, entry);
        });
        updateActiveSection();
      },
      {
        rootMargin: "-10% 0px -10% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Also listen to scroll for more responsive updates
    const handleScroll = () => {
      requestAnimationFrame(updateActiveSection);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, updateActiveSection]);

  return activeSection;
};
