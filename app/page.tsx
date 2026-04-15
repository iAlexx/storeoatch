"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { InvestorPlatformContent } from "@/components/sections";

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-3d",
        { opacity: 0, y: 24, rotateX: -8 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.2, ease: "power3.out" }
      );

      gsap.to(".page-shell", {
        backgroundPosition: "200% 50%",
        duration: 18,
        ease: "none",
        repeat: -1
      });
    });

    return () => ctx.revert();
  }, []);

  return <InvestorPlatformContent />;
}
