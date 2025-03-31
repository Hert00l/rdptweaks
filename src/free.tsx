import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Zap, Flame, Shield, Menu, Cpu, Network, MemoryStick as Memory, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Footer } from './Footer';


  
export const Free = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="bg-black text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/40 via-black to-black">
  <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-lg border-b border-red-600/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <img src="https://sigmawire.net/i/03/xLiVze.png" alt="RDP Tweaks Logo" className="h-20" />
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-red-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex items-center space-x-10">
              <Link to="/" className="text-lg text-white hover:text-red-600 transition-colors">Back</Link>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden py-4"
              >
                <div className="flex flex-col space-y-4">
                  <Link to="/" className="text-white hover:text-red-600 transition-colors">Back</Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      
      <div className="pt-40">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-24"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Flame className="w-12 h-12 text-red-500" />
              <h1 className="text-5xl md:text-6xl font-bold">Free Package</h1>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Advanced optimization suite designed for gamers and power users who demand superior performance and reliability.
            </p>
            <div className="mt-8 flex justify-center items-baseline gap-2">
              <span className="text-5xl font-bold">$00.00</span>
              <span className="text-gray-400">one-time payment</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {[
              { icon: Shield, title: "Safe & Secure", description: "Creates automatic restore points before making any system changes" },
              { icon: Clock, title: "Quick Setup", description: "Get up and running with optimized settings in under 5 minutes" },
              { icon: Cpu, title: "Resource Efficient", description: "Minimal impact on system resources while running" }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-red-500/10 rounded-xl blur-lg group-hover:bg-red-500/20 transition-all duration-500"></div>
                <div className="relative border border-white/10 rounded-xl p-6 backdrop-blur-sm group-hover:border-red-500/50 transition-all duration-500">
                  <item.icon className="w-8 h-8 text-red-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Network className="w-8 h-8 text-red-500" />
                Core Features
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Advanced GPU Optimization</h3>
                    <p className="text-gray-400">Fine-tune your graphics card settings for maximum FPS and minimal latency in games. Includes:</p>
                    <ul className="mt-2 space-y-2 text-gray-400">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        <span>NVIDIA & AMD optimization presets</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        <span>Dynamic shader cache management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        <span>Game-specific performance profiles</span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="sticky top-24">
                <div className="absolute inset-0 bg-red-500/20 rounded-2xl blur-xl"></div>
                <div className="relative border border-white/10 rounded-xl p-8 backdrop-blur-sm">
                  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <Memory className="w-8 h-8 text-red-500" />
                    Free vs Ultimate
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div>
                        <span className="font-medium block">Custom Optimization Profiles</span>
                        <span className="text-sm text-gray-400">Create and save game-specific settings</span>
                      </div>
                      <X className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                    <h3 className="font-semibold mb-2">Why Upgrade to Ultimate?</h3>
                    <p className="text-sm text-gray-400">Get access to advanced features, priority support, and detailed performance analytics for the ultimate optimization experience.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center gap-6 max-w-xl mx-auto text-center mb-16"
          >
            <h2 className="text-2xl font-bold">Ready to optimize your system?</h2>
            <p className="text-gray-400">Get started with our Free package and experience the difference in your system's performance.</p>

            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <Link
                to="/"
                className="px-8 py-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Back to Packages
              </Link>
              <button className="px-8 py-4 bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
                Get Free Package
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
