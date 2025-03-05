"use client"

import { useEffect, useState } from "react";

export function useNavigation() {

  const [expand, updateExpanded] = useState<boolean>(false);
  const [navColour, updateNavbar] = useState<boolean>(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
    scrollHandler();

    window.addEventListener("scroll", scrollHandler);
    
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 50;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      updateExpanded(false);
    }
  };

  return {
    expand,
    updateExpanded,
    navColour,
    handleScroll
  }
}