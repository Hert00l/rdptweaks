import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Star, Menu, X, ChevronDown, ChevronUp, MessageSquare, FileSearch, Palette, Code, CheckCircle, Rocket, Flame } from 'lucide-react';
import { Footer } from './Footer';

const reviews = [
  {
    id: 1,
    name: "Alex M.",
    text: "Amazing performance boost! My system runs like new.",
    rating: 5,
    location: "United States"
  },
  {
    id: 2,
    name: "Sarah K.",
    text: "Best optimization tool ever! Noticed immediate improvements.",
    rating: 5,
    location: "Canada"
  },
  {
    id: 3,
    name: "Michael R.",
    text: "Worth every penny! The premium features are incredible.",
    rating: 5,
    location: "UK"
  },
  {
    id: 4,
    name: "David L.",
    text: "Fantastic results! My games run smoother than ever.",
    rating: 5,
    location: "Australia"
  }
];

function ReviewCard({ review }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ 
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      className="bg-gradient-to-r from-red-500/10 to-transparent p-6 rounded-xl backdrop-blur-sm"
    >
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">{review.name}</h3>
          <span className="text-sm text-gray-400">{review.location}</span>
        </div>
        <p className="text-gray-300 text-lg">{review.text}</p>
        <div className="flex text-red-500">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Reviews() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
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
        {/* Reviews Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-xl text-gray-400">Join thousands of satisfied users</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Reviews Column 1 */}
              <div className="h-[400px] relative overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={currentReviewIndex}
                    className="absolute inset-0"
                  >
                    <ReviewCard review={reviews[currentReviewIndex]} />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
              </div>

              {/* Reviews Column 2 */}
              <div className="h-[400px] relative overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={currentReviewIndex}
                    className="absolute inset-0"
                  >
                    <ReviewCard review={reviews[(currentReviewIndex + 2) % reviews.length]} />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <motion.div 
                className="flex gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {reviews.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentReviewIndex ? 'bg-red-500 w-6' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Reviews;
