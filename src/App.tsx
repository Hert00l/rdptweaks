import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Star, Menu, X, ChevronDown, ChevronUp, MessageSquare, FileSearch, Palette, Code, CheckCircle, Rocket, Flame } from 'lucide-react';
import { Footer } from './Footer';
import { Reviews } from './Reviews';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const timelineSteps = [
    {
      icon: MessageSquare,
      title: 'Initial Scan',
      description: 'We analyze your system to identify performance bottlenecks.',
    },
    {
      icon: FileSearch,
      title: 'Optimization Planning',
      description: 'Create a customized optimization strategy for your PC.',
    },
    {
      icon: Palette,
      title: 'System Tweaks',
      description: 'Apply professional tweaks to enhance system performance.',
    },
    {
      icon: Code,
      title: 'Registry Optimization',
      description: 'Optimize Windows registry for maximum efficiency.',
    },
    {
      icon: CheckCircle,
      title: 'Performance Testing',
      description: 'Verify improvements through comprehensive testing.',
    },
    {
      icon: Rocket,
      title: 'Continuous Monitoring',
      description: 'Monitor and maintain optimal system performance.',
    },
  ];

  const faqs = [
    {
      q: "What is RDP Tweaks?",
      a: "RDP Tweaks is a powerful optimization tool designed to enhance your PC's performance, particularly for gaming and high-performance tasks."
    },
    {
      q: "How does it work?",
      a: "RDP Tweaks uses advanced algorithms to analyze your system and apply optimizations that improve performance without compromising stability."
    },
    {
      q: "Is it safe to use?",
      a: "Yes, RDP Tweaks is completely safe. We create automatic restore points before making any system changes, allowing you to revert if needed."
    },
    {
      q: "What's the difference between Free and Premium?",
      a: "The Premium version includes advanced optimizations, priority support, and automatic updates, while the Free version offers basic optimizations and community support."
    },
    {
      q: "How do I install RDP Tweaks?",
      a: "Simply download the installer from our website and follow the setup wizard. The process takes less than 5 minutes."
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        <motion.div
          animate={{ 
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Flame size={64} className="text-red-600" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Global Background */}
      <div className="fixed inset-0 z-0">
        <div className="min-h-screen bg-black text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/40 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.05)_0%,_transparent_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-lg border-b border-red-600/20">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-20">
      <a href="https://sigmawire.net/i/03/xLiVze.png">
        <img src="https://sigmawire.net/i/03/xLiVze.png" alt="RDP Tweaks Logo" className="h-24" />
      </a>
      
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white hover:text-red-600 transition-colors"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="hidden md:flex items-center space-x-10">
        <button onClick={() => scrollToSection('home')} className="text-lg text-white hover:text-red-600 transition-colors">Home</button>
        <button onClick={() => scrollToSection('features')} className="text-lg text-white hover:text-red-600 transition-colors">Features</button>
        <button onClick={() => scrollToSection('download')} className="text-lg text-white hover:text-red-600 transition-colors">Download</button>
        <button onClick={() => scrollToSection('faq')} className="text-lg text-white hover:text-red-600 transition-colors">FAQ</button>
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
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-red-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('features')} className="text-white hover:text-red-600 transition-colors">Features</button>
            <button onClick={() => scrollToSection('download')} className="text-white hover:text-red-600 transition-colors">Download</button>
            <button onClick={() => scrollToSection('faq')} className="text-white hover:text-red-600 transition-colors">FAQ</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen relative flex items-center justify-center">
          <div className="container mx-auto px-4 pt-32">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                  Your PC <span className="text-red-600">Performance</span> Matters
                </h1>
                <p className="text-xl text-gray-400 mb-12 font-light">
                  Enhance Your Gaming Experience with Professional Optimizations
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-red-600 rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center gap-2 mx-auto"
                >
                  <Download size={20} />
                  Download Now
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mt-20 relative group max-w-2xl mx-auto"
              >
                <div className="absolute inset-0 bg-red-500/30 rounded-xl blur-2xl group-hover:bg-red-500/50 transition-all duration-500" />
                <img
                  src="https://sigmawire.net/i/03/MX3QOP.png"
                  alt="Gaming Setup Preview"
                  className="relative rounded-xl border border-red-500/20 group-hover:border-red-500/50 transition-all duration-500 transform group-hover:scale-[1.02]"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Timeline Section */}
        <section id="features" ref={ref} className="py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                Optimization <span className="text-red-600">Process</span>
              </h2>
              <p className="text-xl text-gray-400">
                Our streamlined approach to enhance your system performance
              </p>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ height: 0 }}
                animate={inView ? { height: "100%" } : { height: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-red-600 via-red-500 to-transparent rounded-full"
              />
              
              <div className="space-y-16">
                {timelineSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-b from-red-950/50 to-black/50 p-6 rounded-xl border border-red-500/20 backdrop-blur-sm"
                      >
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                      </motion.div>
                    </div>
                    
                    <motion.div
                      className="relative z-10"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center shadow-lg">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                    
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Choose Your Plan</h2>
            
            <div className="flex flex-col items-center mb-16">
              <div 
                className={`toggle-switch ${isPremium ? 'premium' : ''}`}
                onClick={() => setIsPremium(!isPremium)}
              >
                <span className={`toggle-text free ${!isPremium ? 'text-white' : 'text-gray-500'}`}>
                  Free
                </span>
                <span className={`toggle-text premium ${isPremium ? 'text-white' : 'text-gray-500'}`}>
                  Premium
                </span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
              <motion.div
                animate={{
                  scale: !isPremium ? 1 : 0.95,
                  opacity: !isPremium ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
                className={`card-glow bg-gradient-to-b from-red-950/50 to-black/50 p-8 rounded-xl backdrop-blur-sm w-full max-w-md ${
                  !isPremium ? 'border-red-500/50' : 'border-red-500/20'
                } ${isPremium ? 'pointer-events-none' : ''}`}
              >
                <h3 className="text-2xl font-bold mb-4">Free Version</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <Star className="text-red-500" />
                    Basic Optimizations
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="text-red-500" />
                    Community Support
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="text-red-500" />
                    Manual Updates
                  </li>
                </ul>
                <motion.button
                  whileHover={!isPremium ? { scale: 1.02 } : {}}
                  whileTap={!isPremium ? { scale: 0.98 } : {}}
                  className={`w-full py-4 bg-red-600 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    isPremium ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
                  }`}
                >
                  <Download size={20} />
                  Download Free
                </motion.button>
                <a 
                  href="/free"
                  className={`mt-4 block text-center border-2 border-red-500 text-red-500 py-2 rounded-lg ${
                    isPremium ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-500 hover:text-white'
                  } transition-all`}
                >
                  Learn More
                </a>
              </motion.div>

              <motion.div
                animate={{
                  scale: isPremium ? 1 : 0.95,
                  opacity: isPremium ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
                className={`card-glow bg-gradient-to-b from-red-950/50 to-black/50 p-8 rounded-xl backdrop-blur-sm w-full max-w-md ${
                  isPremium ? 'border-red-500/50' : 'border-red-500/20'
                } ${!isPremium ? 'pointer-events-none' : ''}`}
              >
                <h3 className="text-2xl font-bold mb-4">Premium Version</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <Star className="text-red-500" />
                    Advanced Optimizations
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="text-red-500" />
                    Priority Support
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="text-red-500" />
                    Automatic Updates
                  </li>
                </ul>
                <motion.button
                  whileHover={isPremium ? { scale: 1.02 } : {}}
                  whileTap={isPremium ? { scale: 0.98 } : {}}
                  className={`w-full py-4 bg-red-600 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    !isPremium ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
                  }`}
                >
                  <Download size={20} />
                  Get Premium
                </motion.button>
                <a 
                  href="/premium"
                  className={`mt-4 block text-center border-2 border-red-500 text-red-500 py-2 rounded-lg ${
                    !isPremium ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-500 hover:text-white'
                  } transition-all`}
                >
                  Learn More
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      <Reviews />
        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">FAQ</h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-b from-red-950/50 to-black/50 rounded-xl border border-red-500/20 overflow-hidden backdrop-blur-sm"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-4 flex items-center justify-between"
                  >
                    <span className="font-medium">{faq.q}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="text-red-500" />
                    ) : (
                      <ChevronDown className="text-red-500" />
                    )}
                  </button>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 text-gray-400">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;
