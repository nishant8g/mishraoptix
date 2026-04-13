'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Moon, Clock, Sun, Smartphone, UserCheck } from 'lucide-react';

const TIPS = [
  {
    icon: <Clock className="text-primary" />,
    title: "20-20-20 Rule",
    description: "Every 20 minutes, have them look at something 20 feet away for 20 seconds."
  },
  {
    icon: <Moon className="text-secondary" />,
    title: "Night Mode",
    description: "Switch devices to 'Night Shift' 2 hours before bedtime to maintain natural sleep cycles."
  },
  {
    icon: <Sun className="text-orange-400" />,
    title: "Outdoor Play",
    description: "Natural sunlight is essential for eye development. Aim for at least 1 hour daily."
  },
  {
    icon: <Smartphone className="text-accent" />,
    title: "Screen Distance",
    description: "Maintain 'Harmon's Distance'—at least 15-20 inches from the eyes."
  }
];

export const DigitalWellness = () => {
  return (
    <section className="py-24 bg-[#fdfbff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-6">
              <BookOpen className="w-4 h-4" />
              <span>MishOptix Parent Guide</span>
            </div>
            <h2 className="text-4xl font-extrabold mb-6 leading-tight">
              Beyond the Lens: <br />
              <span className="text-primary">Digital Wellness</span> for Kids
            </h2>
            <p className="text-foreground/60 mb-8 leading-relaxed">
              Eye protection is a holistic journey. We don't just provide the best blue-light glasses; we empower parents with the knowledge to protect their children's vision in a screen-first world.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="p-6 rounded-3xl bg-white border border-border shadow-sm">
                  <UserCheck className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-bold mb-2">Doctor Backed</h4>
                  <p className="text-xs text-foreground/50">Our tips are curated by pediatric ophthalmologists.</p>
               </div>
               <div className="p-6 rounded-3xl bg-primary text-white shadow-xl shadow-primary/20">
                  <h4 className="font-bold mb-2">Join our Club</h4>
                  <p className="text-xs text-white/80 mb-4">Get monthly vision health updates for your child.</p>
                  <button className="text-xs font-bold underline decoration-white/40 hover:decoration-white">Sign Up Free</button>
               </div>
            </div>
          </motion.div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
             {TIPS.map((tip, index) => (
               <motion.div 
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.1 }}
                 viewport={{ once: true }}
                 className="p-8 rounded-3xl glass hover:shadow-xl transition-all"
               >
                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-inner mb-6">
                    {tip.icon}
                 </div>
                 <h3 className="font-extrabold text-lg mb-2">{tip.title}</h3>
                 <p className="text-sm text-foreground/50 leading-relaxed">{tip.description}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};
