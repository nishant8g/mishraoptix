'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Ghost, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block mb-8"
        >
          <div className="text-[12rem] font-extrabold text-primary/10 select-none">404</div>
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Ghost className="w-24 h-24 text-primary" />
          </motion.div>
        </motion.div>

        <h1 className="text-4xl font-extrabold mb-4">Vision Lost?</h1>
        <p className="text-foreground/60 mb-12 leading-relaxed">
          It looks like the page you're looking for has disappeared into the digital blue rays. Let's get you back to safe territory.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:scale-[1.05] transition-transform shadow-xl shadow-primary/20"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-muted text-foreground rounded-2xl font-bold hover:bg-muted/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex justify-center gap-8">
           <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-1">Support</p>
              <p className="text-sm font-medium">help@mishoptix.com</p>
           </div>
           <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-1">Status</p>
              <p className="text-sm font-medium text-green-500">Systems Operational</p>
           </div>
        </div>
      </div>
    </div>
  );
}
