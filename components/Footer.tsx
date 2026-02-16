
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Chris Maricle. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6 text-slate-400 text-xs uppercase tracking-widest font-semibold">
          <span>Cybersecurity</span>
          <span>•</span>
          <span>Networking</span>
          <span>•</span>
          <span>Cloud Infrastructure</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
