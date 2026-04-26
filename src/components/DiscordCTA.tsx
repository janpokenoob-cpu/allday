import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const DiscordCTA = () => {
  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[40px] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-500/20"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 blur-3xl rounded-full translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              KLAAR OM TE STARTEN?
            </h2>
            <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto font-medium">
              Word onderdeel van de gezelligste en meest actieve Nederlandse Clash of Clans community. 
              Onze Discord is het hart van de clan.
            </p>
            <a 
              href="https://discord.gg/EXnHWuPx78" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-indigo-700 hover:bg-indigo-50 px-12 py-5 rounded-full font-black text-xl transition-all transform hover:scale-105 shadow-xl"
            >
              <MessageSquare size={28} />
              JOIN ONZE DISCORD
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscordCTA;
