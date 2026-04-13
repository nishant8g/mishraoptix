'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Sparkles } from 'lucide-react';
import Image from 'next/image';

export const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">See the <span className="text-primary">Difference</span></h2>
          <p className="text-foreground/60">Drag the slider to experience the Blue-Cut protection yourself.</p>
        </div>

        <div 
          className="relative aspect-video rounded-3xl overflow-hidden cursor-ew-resize select-none border-4 border-white shadow-2xl"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After (With BlueCut) */}
          <div className="absolute inset-0">
             <div className="w-full h-full bg-[#f0f9ff] flex items-center justify-center">
                <div className="text-center">
                   <p className="text-secondary font-bold text-2xl">BLUE-CUT LENS VIEW</p>
                   <p className="text-secondary/60 text-sm">Harmful rays neutralized</p>
                </div>
             </div>
          </div>

          {/* Before (No Protection) */}
          <div 
            className="absolute inset-0 z-10"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
             <div className="w-full h-full bg-[#3b82f6]/10 flex items-center justify-center grayscale-[0.2]">
                <div className="text-center">
                   <p className="text-red-500 font-bold text-2xl">UNPROTECTED VIEW</p>
                   <p className="text-red-500/60 text-sm">High-energy blue light exposure</p>
                </div>
             </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
              <MousePointer2 className="w-5 h-5 text-primary" />
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-6 left-6 z-30 bg-black/20 backdrop-blur px-4 py-2 rounded-full text-white text-xs font-bold">
            NO PROTECTION
          </div>
          <div className="absolute bottom-6 right-6 z-30 bg-primary/80 backdrop-blur px-4 py-2 rounded-full text-white text-xs font-bold">
            LILSHIELD ACTIVE
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <TrustBadge title="Doctor Recommended" />
            <TrustBadge title="Unbreakable Frames" />
            <TrustBadge title="Zero Glare Nano-Tech" />
        </div>
      </div>
    </section>
  );
};

const TrustBadge = ({ title }: { title: string }) => (
    <div className="flex items-center gap-3 glass p-4 rounded-2xl">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <p className="font-bold text-sm">{title}</p>
    </div>
);
