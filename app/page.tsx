"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { InvestorPlatformContent } from "@/components/sections";

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".scene",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out"
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return <InvestorPlatformContent />;
}
