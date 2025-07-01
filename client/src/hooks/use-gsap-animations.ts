import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGSAPAnimations() {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const sections = sectionsRef.current;

    // Animate sections on scroll
    sections.forEach((section, index) => {
      if (section) {
        gsap.fromTo(section, 
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }
    });

    // Animate cards with stagger
    const cards = document.querySelectorAll('.gsap-card');
    cards.forEach((card) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    // Hero section entrance animation
    const heroElements = document.querySelectorAll('.gsap-hero');
    gsap.fromTo(heroElements,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.3,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addSectionRef = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return { addSectionRef };
}