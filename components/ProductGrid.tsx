'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Star, Filter, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { Product, useCart } from '@/lib/store';
import { cn } from '@/lib/utils';

const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Junior Optic Shield', price: 49, age_group: 'Toddlers', color: 'Crystal Clear', image: '/images/prod_grey.png' },
  { id: '2', name: 'Elite Vision Goggles', price: 89, age_group: 'Teens', color: 'Frost Silver', image: '/images/prod_red.png' },
  { id: '3', name: 'Mish Kids Spec', price: 59, age_group: 'Kids', color: 'Soft Navy', image: '/images/lifestyle_boy_blue.png' },
  { id: '4', name: 'Optix Goggle Pro', price: 95, age_group: 'Teens', color: 'Matte Black', image: '/images/prod_4.png' },
  { id: '5', name: 'Bambino Protect', price: 45, age_group: 'Toddlers', color: 'Pastel Blue', image: '/images/prod_5.png' },
  { id: '6', name: 'SmartSpec X', price: 55, age_group: 'Kids', color: 'Berry Red', image: '/images/prod_6.png' },
];

export const ProductGrid = () => {
  const [filter, setFilter] = useState<'All' | 'Toddlers' | 'Kids' | 'Teens'>('All');
  const addItem = useCart((state) => state.addItem);

  const filtered = filter === 'All' ? MOCK_PRODUCTS : MOCK_PRODUCTS.filter(p => p.age_group === filter);

  return (
    <section id="shop" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold tracking-tight text-foreground">
                Mish<span className="text-primary">Optix</span>
              </span>
            </div>
            <p className="text-foreground/60">Premium protection for every stage of childhood.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['All', 'Toddlers', 'Kids', 'Teens'].map((grp) => (
              <button
                key={grp}
                onClick={() => setFilter(grp as any)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-semibold transition-all",
                  filter === grp ? "bg-primary text-white shadow-lg" : "bg-white hover:bg-primary/5 text-foreground/70"
                )}
              >
                {grp}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group glass p-4 rounded-[2rem] hover:shadow-2xl hover:shadow-primary/10 transition-all border-none"
              >
                <div className="relative aspect-square rounded-[1.5rem] overflow-hidden mb-6">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {product.age_group}
                  </div>
                </div>

                <div className="px-2">
                  <div className="flex items-center gap-1 text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                    <span className="text-[10px] text-foreground/40 ml-1">(4.9/5)</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                  <p className="text-foreground/40 text-sm mb-4">{product.color}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <button 
                      onClick={() => addItem(product)}
                      className="p-3 bg-foreground text-white rounded-2xl hover:bg-primary transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
