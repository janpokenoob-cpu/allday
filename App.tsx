import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ClanOverview from './components/ClanOverview';
import Esports from './components/Esports';
import DiscordCTA from './components/DiscordCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-yellow-500/30 selection:text-yellow-500">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ClanOverview />
        <Esports />
        <DiscordCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
