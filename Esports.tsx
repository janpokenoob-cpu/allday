import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, TrendingUp } from 'lucide-react';

const Esports = () => {
  return (
    <section id="esports" className="py-24 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-zinc-900/40 border border-red-500/20 rounded-[40px] p-8 md:p-16 overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 font-bold text-sm mb-6 border border-red-500/20">
                <Trophy size={16} />
                ELITE COMPETITIE
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                ALLDAY <span className="text-red-500">ESPORTS</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Ons esports team vertegenwoordigt Allday op het hoogste niveau. 
                Met een focus op strategie, coördinatie en constante groei, streven we 
                naar de top van de Nederlandse en internationale competities.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-red-500/20 p-2 rounded-lg h-fit text-red-500">
                    <Target size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Ambitieus</h4>
                    <p className="text-gray-400">We nemen alleen genoegen met de beste resultaten.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-red-500/20 p-2 rounded-lg h-fit text-red-500">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Groei</h4>
                    <p className="text-gray-400">Intensieve trainingen en strategie-sessies.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center gap-8"
            >
              <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full"></div>
              <img 
                src="/images/shield-allday-esports.png" 
                alt="Allday Esports Shield" 
                className="w-full max-w-[280px] relative z-10 drop-shadow-[0_0_30px_rgba(239,68,68,0.3)]" 
              />
              <div className="bg-black/60 backdrop-blur-md border border-zinc-800 p-6 rounded-2xl relative z-10 flex items-center gap-6">
                <img src="/logo.png" alt="Allday Logo" className="h-16" />
                <div className="h-12 w-px bg-zinc-800"></div>
                <div className="text-left">
                  <p className="text-red-500 font-black text-sm uppercase tracking-widest">OFFICIAL PARTNER</p>
                  <p className="text-white font-bold">ALLDAY COMMUNITY</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Esports;
