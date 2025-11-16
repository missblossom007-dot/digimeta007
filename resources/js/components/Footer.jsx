import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">DigiMeta007</h3>
            <p className="text-slate-400">
              Licensed Digital Innovation Company
            </p>
            <p className="text-slate-400 mt-2">
              Digital Marketing • Web Development • Business Automation
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>📱 WhatsApp: 082141733187</li>
              <li>📧 Email: info@digimeta007.com</li>
              <li>🌐 Website: digimeta007.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} DigiMeta007. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
