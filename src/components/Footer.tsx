import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 flex items-center justify-center gap-2 text-sm">
          © {new Date().getFullYear()} Umar Qazi. Built with 
          <Heart className="w-4 h-4 text-red-500 fill-red-500" /> 
           using React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
