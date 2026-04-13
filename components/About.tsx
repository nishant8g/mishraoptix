'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Lightbulb, ShieldCheck } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
               <img 
                 src="/images/about_vision.png" 
                 alt="Caring for children's eyes" 
                 className="w-full h-auto"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Mission Badge */}
            <div className="absolute -bottom-8 -right-8 glass p-8 rounded-[2.5rem] shadow-2xl max-w-[280px] border-primary/20">
               <Target className="w-10 h-10 text-primary mb-4" />
               <h4 className="text-xl font-extrabold mb-2">Our Motto</h4>
               <p className="text-sm text-foreground/60 italic leading-relaxed">
                 "Protecting the windows to their souls, so they can conquer the digital world."
               </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span>Our Story & Mission</span>
            </div>
            <h2 className="text-5xl font-extrabold mb-8 leading-[1.1]">
              Why We Started <br />
              <span className="text-primary text-6xl">MishOptix</span>
            </h2>
            
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <ShieldCheck className="text-red-500 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-foreground">The Crisis</h3>
                </div>
                <p className="text-foreground/60 leading-relaxed pl-16">
                  Today's children spend an average of 7+ hours on screens. Their developing eyes have clear lenses that allow <span className="text-red-500 font-bold">100% of blue light</span> to reach the retina, causing irreversible strain, headaches, and sleep disruption.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Lightbulb className="text-blue-500 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-foreground">Our Solution</h3>
                </div>
                <p className="text-foreground/60 leading-relaxed pl-16">
                  We spent 18 months engineering the <span className="text-primary font-bold">Nanolens™ Technology</span>. Unlike cheap alternatives that just tint the world yellow, MishOptix targets the specific 415-455nm HEV spectrum, keeping eyes safe while maintaining true-to-life colors.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                    <Heart className="text-green-500 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-foreground">The Goal</h3>
                </div>
                <p className="text-foreground/60 leading-relaxed pl-16">
                  Our goal is simple: ensure that the next generation of doctors, engineers, and creators can use technology without sacrificing their most precious sense—their sight.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
