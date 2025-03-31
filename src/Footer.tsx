import { Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray/50 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold">RdpTweaks</span>
            </div>
            <p className="text-gray-400">
              Advanced system optimization tools for gamers and power users.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/free" className="hover:text-white transition-colors">Free Package</Link></li>
              <li><Link to="/premium" className="hover:text-white transition-colors">Premium Package</Link></li>
              <li><Link to="/download" className="hover:text-white transition-colors">coming soon</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/tos" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/tos" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/tos" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2025 RdpTweaks. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://discord.gg/rdptweaks" className="text-gray-400 hover:text-white transition-colors">Discord</a>
            <a href="https://youtube.com/rdptweaks" className="text-gray-400 hover:text-white transition-colors">Youtube</a>
          </div>
          <div className="flex items-center gap-4">
            <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/pp-acceptance-small.png" alt="PayPal" className="h-6" />
            <img src="https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png" alt="Stripe" className="h-6" />
            <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="Crypto" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};