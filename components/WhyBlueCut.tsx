'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Monitor, ShieldAlert, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export const WhyBlueCut = () => {
  return (
    <section id="why-bluecut?" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShieldCheck className="w-8 h-8 text-primary stroke-[3]" />
            <span className="text-3xl font-extrabold tracking-tight text-foreground">
              Mish<span className="text-primary">Optix</span>
            </span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            The Science of <span className="text-primary">Protection</span>
          </motion.h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Children under 14 have more transparent lenses, meaning blue light reaches their retinas more easily. 
            MishOptix blocks 99.9% of harmful digital rays.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden glass p-4"
          >
            <Image 
              src="/images/problem_child.png" 
              alt="Child using smartphone without eye protection" 
              width={600} 
              height={400}
              className="rounded-2xl shadow-inner w-full h-auto"
            />
            {/* Animated Ray Overlay */}
            <motion.div 
              animate={{ x: [-100, 400], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-0 w-32 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent blur-sm transform -rotate-12"
            />
          </motion.div>

          <div className="space-y-8">
            <FeatureCard 
              icon={<ShieldAlert className="text-red-400" />}
              title="HEV Blue Light"
              description="High Energy Visible light from tablets and phones can disrupt circadian rhythms and sleep."
            />
            <FeatureCard 
              icon={<Eye className="text-primary" />}
              title="Crystal Clear Vision"
              description="Our lenses use advanced pigment technology instead of a yellow tint, keeping colors natural."
            />
            <FeatureCard 
              icon={<Zap className="text-secondary" />}
              title="Reduced Fatigue"
              description="Eliminate digital eye strain (CVS) and keep them focused for homework and creative play."
            />
          </div>
        </div>
      </div>

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div 
    whileHover={{ x: 10 }}
    className="flex gap-6 p-6 rounded-2xl hover:bg-muted transition-all cursor-default group"
  >
    <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:shadow-md transition-all">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-xl mb-1">{title}</h3>
      <p className="text-foreground/60 leading-relaxed text-sm">{description}</p>
    </div>
  </motion.div>
);
