import React from 'react';
import { motion } from 'framer-motion';
import { clans } from '../data/content';
import { ExternalLink, Copy } from 'lucide-react';

const ClanOverview = () => {
  const copyTag = (tag: string) => {
    navigator.clipboard.writeText(tag);
    // Simple toast could be added here
  };

  return (
    <section id="clans" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-4"
          >
            ONZE <span className="text-yellow-500">CLANS</span>
          </motion.h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Kies de clan die het beste bij jouw speelstijl past en sluit je aan bij de community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {clans.map((clan, index) => (
            <motion.div
              key={clan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
              
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col items-center text-center relative z-10 h-full hover:border-yellow-500/30 transition-all">
                <span className="text-yellow-500 text-xs font-black uppercase tracking-widest mb-4 px-3 py-1 bg-yellow-500/10 rounded-full">
                  {clan.type}
                </span>
                
                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">{clan.name}</h3>
                <div className="h-1 w-12 bg-yellow-500 mb-6 rounded-full"></div>
                
                <a 
                  href={clan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mb-8 block transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img src={clan.image} alt={clan.name} className="w-56 h-56 object-contain relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" />
                </a>

                <button 
                  onClick={() => copyTag(clan.tag)}
                  className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-6 group/tag"
                >
                  <span className="font-mono text-lg font-bold tracking-wider">{clan.tag}</span>
                  <Copy size={16} className="opacity-0 group-hover/tag:opacity-100 transition-opacity" />
                </button>

                <p className="text-gray-400 mb-8 flex-grow">
                  {clan.description}
                </p>

                <a 
                  href={clan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-zinc-800 hover:bg-yellow-500 hover:text-black text-white font-bold transition-all flex items-center justify-center gap-2"
                >
                  BEKIJK PROFIEL
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClanOverview;
