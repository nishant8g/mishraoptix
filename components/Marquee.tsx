'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, ShieldCheck, Zap, Heart, Truck, Award } from 'lucide-react';

const LOGOS = [
  { icon: <Microscope />, text: "Lab Tested" },
  { icon: <ShieldCheck />, text: "FDA Approved" },
  { icon: <Zap />, text: "Nanolens™ Tech" },
  { icon: <Heart />, text: "Kid Safe" },
  { icon: <Truck />, text: "Free Shipping" },
  { icon: <Award />, text: "Best in Show" },
];

export const Marquee = () => {
  return (
    <div className="bg-primary py-8 overflow-hidden relative">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-16 pr-16"
        >
          {[...LOGOS, ...LOGOS, ...LOGOS].map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-white/80 font-bold uppercase tracking-widest text-sm">
              <span className="w-6 h-6">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Overlays for fade effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent z-10" />
    </div>
  );
};
