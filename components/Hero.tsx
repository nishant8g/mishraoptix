'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const ray1Y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const ray2Y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const rayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section 
      ref={targetRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-[#fdfbff] to-[#f3f0ff]"
    >
      {/* Parallax Rays */}
      <motion.div 
        style={{ y: ray1Y, opacity: rayOpacity }}
        className="absolute top-[-10%] left-[10%] w-[2px] h-[100%] bg-gradient-to-b from-transparent via-secondary/30 to-transparent rotate-45 blur-sm"
      />
      <motion.div 
        style={{ y: ray2Y, opacity: rayOpacity }}
        className="absolute top-[-20%] right-[20%] w-[3px] h-[120%] bg-gradient-to-b from-transparent via-primary/20 to-transparent -rotate-12 blur-md"
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Premium Blue Light Protection</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Guard Their <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Digital World.
            </span>
          </h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-lg">
            High-end eyewear designed specifically for growing eyes. 
            Doctor-recommended Blue-Cut lenses for the 0-14 generation.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2">
              Shop the Collection <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 glass rounded-full font-bold hover:bg-muted transition-all">
              Explore Science
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm text-foreground/50">UV Protection</p>
            </div>
            <div className="w-[1px] h-10 bg-border" />
            <div>
              <p className="text-2xl font-bold">15,000+</p>
              <p className="text-sm text-foreground/50">Happy Parents</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ scale }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="/images/hero_v2.png" 
                alt="Kids wearing stylish glasses looking at laptop" 
                width={500} 
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Shield Indicator Overlay */}
            {/* Hero image container without floating badge */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import { ShieldCheck } from 'lucide-react';
