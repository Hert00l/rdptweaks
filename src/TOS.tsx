import { Link } from 'react-router-dom';
import { marked } from 'marked';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Star, FileText, ChevronLeft, Menu, X, ChevronDown, ChevronUp, MessageSquare, FileSearch, Palette, Code, CheckCircle, Rocket, Flame } from 'lucide-react';
import { Footer } from './Footer';

const termsMarkdown = `# RDP Tweaks Terms of Service

## 1. Acceptance of Terms

By downloading, installing, or using RDP Tweaks ("the Software"), you agree to be bound by these Terms of Service.

## 2. License

RDP Tweaks grants you a personal, non-exclusive, non-transferable license to use the Software.

## 3. Restrictions

You may not:
- Modify, reverse engineer, or decompile the Software
- Use the Software for illegal purposes
- Distribute or sell the Software

## 4. Disclaimer

The Software is provided "as is" without warranty of any kind.

## 5. Limitation of Liability

We shall not be liable for any damages arising from the use of the Software.`;

const privacyMarkdown = `# Privacy Policy

## 1. Data Collection

We collect minimal data necessary for the operation of RDP Tweaks.

## 2. Data Usage

Your data is used solely for:
- Providing optimization services
- Improving user experience
- Technical support

## 3. Data Protection

We implement security measures to protect your data.

## 4. Third Parties

We do not sell or share your data with third parties.`;

const refundMarkdown = `# Refund Policy

## 1. Free Version

The free version comes with no monetary commitment.

## 2. Premium Version

- 14-day money-back guarantee
- No questions asked
- Full refund for technical issues

## 3. Process

Contact support with your order details for refund processing.`;

interface TermsCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

function TermsCard({ title, description, onClick }: TermsCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-black/50 p-8 rounded-lg shadow-lg shadow-red-500/10 hover:shadow-red-500/20 
                 transition-all duration-300 transform hover:scale-105 text-left group w-96 h-56
                 border border-red-500/10 hover:border-red-500/30 flex flex-col justify-center"
    >
      <div className="flex items-center justify-between mb-4">
        <FileText className="w-10 h-10 text-red-400 group-hover:text-red-300 transition-colors" />
      </div>
      <h2 className="text-2xl font-semibold mb-2 text-red-300 group-hover:text-red-200">{title}</h2>
      <p className="text-gray-400 group-hover:text-gray-300">{description}</p>
    </button>
  );
}

export const TOS = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
  const [selectedPolicy, setSelectedPolicy] = useState<string | null>(null);

  const handleSelect = (policy: string) => setSelectedPolicy(policy);
  const handleClose = () => setSelectedPolicy(null);

  const terms = marked(termsMarkdown);
  const privacy = marked(privacyMarkdown);
  const refund = marked(refundMarkdown);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.05)_0%,_transparent_100%)]" />
      </div>

      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-lg border-b border-red-600/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-2xl font-bold text-red-600">RDP Tweaks</Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center pt-40 pb-20">
        <h1 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
          Legal Information
        </h1>
        <div className="flex flex-wrap justify-center gap-12 max-w-5xl">
          <TermsCard 
            title="Terms of Use" 
            description="Our terms and conditions for using RDP Tweaks." 
            onClick={() => handleSelect('terms')} 
          />
          <TermsCard 
            title="Privacy Policy" 
            description="How we handle and protect your information." 
            onClick={() => handleSelect('privacy')} 
          />
          <TermsCard 
            title="Refund Policy" 
            description="Our money-back guarantee and refund terms." 
            onClick={() => handleSelect('refund')} 
          />
        </div>
      </div>

      {selectedPolicy && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/80">
          <div className="bg-black rounded-lg shadow-2xl shadow-red-500/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-slide-up border border-red-500/20">
            <div className="sticky top-0 bg-black p-4 flex items-center justify-between border-b border-red-500/20">
              <button onClick={handleClose} className="p-2 hover:bg-red-500/20 rounded-full transition-colors text-red-400 hover:text-red-300">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <h2 className="text-xl font-bold text-red-300">
                {selectedPolicy === 'terms' && 'Terms of Use'}
                {selectedPolicy === 'privacy' && 'Privacy Policy'}
                {selectedPolicy === 'refund' && 'Refund Policy'}
              </h2>
              <button onClick={handleClose} className="p-2 hover:bg-red-500/20 rounded-full transition-colors text-red-400 hover:text-red-300">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 prose prose-invert prose-red max-w-none">
              {selectedPolicy === 'terms' && <div dangerouslySetInnerHTML={{ __html: terms }} />}
              {selectedPolicy === 'privacy' && <div dangerouslySetInnerHTML={{ __html: privacy }} />}
              {selectedPolicy === 'refund' && <div dangerouslySetInnerHTML={{ __html: refund }} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
