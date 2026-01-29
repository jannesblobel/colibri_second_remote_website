"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const AppScreen = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let hasAnimated = false;
    const containerElement = containerRef.current;

    // Calculate dynamic rootMargin based on viewport height
    // Use a smaller margin for large viewports to ensure it works
    const viewportHeight = window.innerHeight;
    const rootMarginTop = Math.min(300, viewportHeight * 0.3); // Max 300px or 30% of viewport
    const rootMargin = `-${rootMarginTop}px 0px`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rect = entry.boundingClientRect;
          const currentScrollY = window.scrollY;
          const isScrollingDown = currentScrollY > lastScrollY;
          
          if (entry.isIntersecting) {
            // Element is coming from above if its top is above viewport
            const isComingFromAbove = rect.top < window.innerHeight;
            
            // Animate only once when entering from above (scrolling down)
            // Also animate if element is already visible on large screens
            if ((isScrollingDown && isComingFromAbove && !hasAnimated) || 
                (rect.top < viewportHeight && rect.top > -rect.height && !hasAnimated)) {
              controls1.start({ opacity: 1, y: 0 });
              controls2.start({ opacity: 1, scale: 1, x: 0 });
              controls3.start({ opacity: 1, scale: 1, y: 0 });
              hasAnimated = true;
            }
          } else {
            // Reset only when scrolling up past the element (coming from below)
            if (!isScrollingDown && rect.top > window.innerHeight) {
              controls1.start({ opacity: 0, y: 20 });
              controls2.start({ opacity: 0, scale: 1, x: 15 });
              controls3.start({ opacity: 0, scale: 1, y: 15 });
              hasAnimated = false;
            }
            // Don't reset when scrolling down past the element - keep animated state
          }
          
          lastScrollY = currentScrollY;
        });
      },
      {
        threshold: [0, 0.05, 0.1], // Multiple thresholds for better detection
        rootMargin: rootMargin,
      }
    );

    if (containerElement) {
      observer.observe(containerElement);
      
      // Check if element is already visible on large viewports
      const checkInitialVisibility = () => {
        const rect = containerElement.getBoundingClientRect();
        if (rect.top < viewportHeight && rect.top > -rect.height && !hasAnimated) {
          controls1.start({ opacity: 1, y: 0 });
          controls2.start({ opacity: 1, scale: 1, x: 0 });
          controls3.start({ opacity: 1, scale: 1, y: 0 });
          hasAnimated = true;
        }
      };
      
      // Check after a short delay to ensure DOM is ready
      setTimeout(checkInitialVisibility, 100);
    }

    return () => {
      if (containerElement) {
        observer.unobserve(containerElement);
      }
    };
  }, [controls1, controls2, controls3]);

  return (
    <div className="w-full mt-16 relative" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls1}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div>
            <Image src="/app-screen.png" alt="App Screen" width={1007} height={571} className="relative hidden lg:block"/>
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-transparent to-background"/>
        </div>
      </motion.div>
      <div>
        <Image src="/app-screen-mobile.png" alt="App Screen" width={400} height={600} className="relative lg:hidden max-w-[400px] w-full mx-auto bg-linear-to-b from-transparent via-transparent to-background"/>
      </div>
      
      <motion.div
        className="absolute bottom-[160px] right-[-150px] hidden lg:block"
        initial={{ opacity: 0, scale: 1, x: 15 }}
        animate={controls2}
        transition={{ 
          duration: 0.4, 
          delay: 0.2, 
          ease: "easeOut" 
        }}
      >
        <Image src="/comment.png" alt="App Screen Comment" width={300} height={69} />
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-1/2 translate-x-1/2 hidden lg:block"
        initial={{ opacity: 0, scale: 1, y: 15 }}
        animate={controls3}
        transition={{ 
          duration: 0.4, 
          delay: 0.4, 
          ease: "easeOut" 
        }}
      >
        <Image src="/git_sync.png" alt="App Screen Git Sync" width={270} height={50} />
      </motion.div>
    </div>
  );
};

export default AppScreen;