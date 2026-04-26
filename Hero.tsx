import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Subtle radial gradient for depth instead of image */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-yellow-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-yellow-500/20 blur-[100px] rounded-full"></div>
            <img 
              src="/logo.png" 
              alt="Allday Logo" 
              className="w-72 md:w-[600px] relative z-10 drop-shadow-[0_0_30px_rgba(234,179,8,0.2)]" 
            />
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter">
            JOIN <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 uppercase">Allday</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            De ultieme Nederlandse Clash of Clans community. Sociaal, actief en competitief. 
            Samen bouwen we sterke clans en een elite esports team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#clans" 
              className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-4 rounded-full font-black text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.4)] flex items-center justify-center gap-2"
            >
              <Shield size={20} />
              BEKIJK ONZE CLANS
            </a>
            <a 
              href="https://discord.gg/EXnHWuPx78" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-10 py-4 rounded-full font-bold text-lg border border-white/20 transition-all"
            >
              JOIN DISCORD
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="animate-bounce">
            <ChevronDown className="text-yellow-500 w-8 h-8" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
