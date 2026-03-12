"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const predicates = [
  "a UI Engineer.",
  "a Frontend Engineer.",
  "a creative.",
  "a thinker.",
  "a problem-solver.",
  "a Product Engineer.",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % predicates.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center pt-5 md:flex-row md:gap-16 md:py-0 md:pb-16 md:pt-12 lg:gap-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 md:flex-row md:items-center md:justify-between md:px-6 max-md:flex-initial">
        <div className="flex flex-1 flex-col items-start text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-4xl font-bold leading-none text-[var(--primary-text)] md:text-5xl lg:text-6xl"
        >
          Hi, my name is Andrew
        </motion.h1>

        <div className="mt-2 flex min-h-[2.5em] items-baseline justify-start overflow-hidden md:mt-3">
          <span className="font-display text-2xl font-semibold text-[var(--primary-text)] md:text-3xl lg:text-4xl">
            I am{" "}
          </span>
          <span className="relative ml-2 inline-block min-w-[200px] align-baseline md:min-w-[280px]">
            <span
              className="invisible font-display text-2xl font-semibold text-[var(--accent)] md:text-3xl lg:text-4xl"
              aria-hidden
            >
              {predicates[index]}
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={predicates[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-0 font-display text-2xl font-semibold text-[var(--accent)] md:text-3xl lg:text-4xl"
              >
                {predicates[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>
        </div>

        <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mt-6 aspect-[3/4] w-72 shrink-0 overflow-hidden rounded-2xl shadow-xl md:mt-0 md:w-80 lg:w-96"
      >
        <Image
          src="/portfolio-photo.png"
          alt="Andrew - UI Engineer"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 288px, 320px"
        />
      </motion.div>
      </div>
    </section>
  );
}
