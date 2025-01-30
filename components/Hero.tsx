// app/components/Hero.tsx
import React from "react";

export default function Hero() {
  return (
    <section className="relative h-[400px] w-full overflow-hidden md:h-[500px]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover brightness-75"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 to-transparent" />

      {/* Content Overlay */}
      <div className="absolute left-8 top-1/3 z-20 max-w-xl text-white">
        <h2 className="text-4xl font-bold md:text-5xl">Winter Wellness</h2>
        <p className="mt-3 text-lg md:text-xl">
          Up to 33% off winter wellness essentials
        </p>
        <button className="mt-6 rounded-lg bg-emerald-500 px-8 py-3 text-base font-medium transition-colors hover:bg-emerald-600">
          Shop now
        </button>
      </div>
    </section>
  );
}
