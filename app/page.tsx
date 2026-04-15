"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { InvestorPlatformContent } from "@/components/sections";

export default function Home() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(".scene", { opacity: 0, y: 20 });

      gsap.to(".scene", {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out",
        stagger: 0.05,
        clearProps: "transform"
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return <InvestorPlatformContent />;
}
