import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Allday Logo" className="h-10" />
            <span className="text-white font-bold text-xl tracking-tighter">ALLDAY</span>
          </div>

          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ALLDAY Community. Alle rechten voorbehouden.
          </div>

          <div className="flex gap-6">
            <a href="https://discord.gg/EXnHWuPx78" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Discord</a>
            <a href="#clans" className="text-gray-400 hover:text-white transition-colors">Clans</a>
            <a href="#esports" className="text-gray-400 hover:text-white transition-colors">Esports</a>
          </div>
        </div>
        
        <div className="mt-12 text-center text-zinc-700 text-xs max-w-2xl mx-auto">
          Dit materiaal is niet-officieel en wordt niet ondersteund door Supercell. Voor meer informatie zie Supercell's Fan Content Policy: <a href="https://supercell.com/en/fan-content-policy/" target="_blank" rel="noopener noreferrer" className="underline">www.supercell.com/fan-content-policy</a>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
