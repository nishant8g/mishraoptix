import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WhyBlueCut } from '@/components/WhyBlueCut';
import { ProductGrid } from '@/components/ProductGrid';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { About } from '@/components/About';
import { DigitalWellness } from '@/components/DigitalWellness';
import { Marquee } from '@/components/Marquee';
import { NewsletterPopup } from '@/components/NewsletterPopup';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Globe, Share2, MessageCircle, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <Hero />
      <Marquee />
      <WhyBlueCut />
      <About />
      <DigitalWellness />
      <BeforeAfterSlider />
      <ProductGrid />
      <NewsletterPopup />
      
      {/* Testimonials Placeholder */}
      <section id="reviews" className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Loved by <span className="text-primary">Parents</span> Globally</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
             {[1,2,3].map(i => (
               <div key={i} className="glass p-8 rounded-3xl">
                 <div className="flex gap-1 text-yellow-400 mb-4">
                   {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
                 </div>
                 <p className="text-foreground/70 mb-6 italic">
                   "The transition was seamless. My daughter no longer complains of headaches after her online classes. Plus, she looks adorable!"
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20" />
                    <div>
                      <p className="font-bold">Sarah M.</p>
                      <p className="text-xs text-foreground/40">Verified Parent</p>
                    </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const Footer = () => (
  <footer className="bg-white border-t border-border py-16">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-8 h-8 text-primary stroke-[3]" />
              <span className="text-3xl font-extrabold tracking-tight text-foreground">
                Mish<span className="text-primary">Optix</span>
              </span>
            </div>
        <p className="text-foreground/50 text-sm leading-relaxed">
          Premium blue-light protection for the next generation of digital creators.
        </p>
      </div>
      
      <div>
        <h4 className="font-bold mb-6">Shop</h4>
        <ul className="space-y-4 text-sm text-foreground/60">
          <li>Toddlers (2-5)</li>
          <li>Kids (6-10)</li>
          <li>Teens (11-14)</li>
          <li>Gift Cards</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6">Resources</h4>
        <ul className="space-y-4 text-sm text-foreground/60">
          <li>Science & Lens Tech</li>
          <li>Digital Eye Strain</li>
          <li>Doctor Recommendations</li>
          <li>Sizing Guide</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6">Follow Us</h4>
        <div className="flex gap-4">
          <Globe className="w-6 h-6 text-foreground/40 hover:text-primary cursor-pointer transition-colors" />
          <Share2 className="w-6 h-6 text-foreground/40 hover:text-primary cursor-pointer transition-colors" />
          <MessageCircle className="w-6 h-6 text-foreground/40 hover:text-primary cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-foreground/40">
      <p>© 2026 MishOptix Eyewear. All rights reserved.</p>
      <div className="flex gap-8">
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
        <span>Refund Policy</span>
      </div>
    </div>
  </footer>
);
