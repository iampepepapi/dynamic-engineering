"use client";

import React, { useState, useEffect } from "react";

import { ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 hidden md:block">
      {isVisible && (
        <Button
          className="rounded-full bg-gray-300 p-3 text-white shadow-lg hover:bg-slate-400 dark:bg-primary-foreground dark:hover:bg-primary/30"
          onClick={scrollToTop}
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
