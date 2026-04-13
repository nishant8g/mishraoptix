'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Sparkles, CheckCircle2 } from 'lucide-react';

export const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const timer = setTimeout(() => {
      const shown = localStorage.getItem('mishoptix-newsletter-shown');
      if (!shown) {
        setIsVisible(true);
      }
    }, 5000); // Show after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('mishoptix-newsletter-shown', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTimeout(handleDismiss, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white rounded-[3rem] overflow-hidden max-w-2xl w-full shadow-2xl flex flex-col md:flex-row"
          >
            <button 
              onClick={handleDismiss}
              className="absolute top-6 right-6 p-2 hover:bg-muted rounded-full z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="md:w-1/2 relative bg-primary p-12 flex flex-col justify-center text-white">
               <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/2 -left-1/2 w-full h-full border-[40px] border-white rounded-full"
                  />
               </div>
               <Sparkles className="w-12 h-12 mb-6 text-white" />
               <h2 className="text-4xl font-extrabold mb-4 leading-tight">10% OFF <br />YOUR FIRST ORDER</h2>
               <p className="text-white/80 text-sm">Join the MishOptix family and protect their digital future starting today.</p>
            </div>

            <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Check Your Inbox!</h3>
                  <p className="text-foreground/60 text-sm">Your discount code is on its way.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-foreground/70">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                      <input 
                        type="email"
                        required
                        placeholder="parent@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-6 py-4 bg-muted rounded-2xl border-none focus:ring-2 focus:ring-primary transition-all outline-none"
                      />
                    </div>
                  </div>
                  <button 
                    disabled={status === 'submitting'}
                    className="w-full bg-foreground text-white py-4 rounded-2xl font-extrabold hover:bg-primary transition-colors disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Signing Up...' : 'Unlock 10% Discount'}
                  </button>
                  <p className="text-[10px] text-center text-foreground/40 leading-relaxed">
                    By signing up, you agree to receive marketing emails. You can unsubscribe at any time.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
