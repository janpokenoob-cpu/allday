import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Shield, MessageSquare, ExternalLink, Zap } from 'lucide-react';

export const clans = [
  {
    name: 'Allday',
    tag: '#28820QQRY',
    link: 'https://link.clashofclans.com/en?action=OpenClanProfile&tag=28820QQRY',
    image: 'https://i.imgur.com/rdVzyQB.png',
    description: 'Onze main clan. Focus op high-level gameplay en actieve deelname.',
    type: 'Main Clan'
  },
  {
    name: 'Allday 2',
    tag: '#2LL8V20Q8',
    link: 'https://link.clashofclans.com/en?action=OpenClanProfile&tag=2LL8V20Q8',
    image: 'https://i.imgur.com/yCjXFuH.png',
    description: 'De plek voor groei en gezelligheid. Ideaal voor semi-competitieve spelers.',
    type: 'Development'
  },
  {
    name: 'Allday Esports',
    tag: '#2RQLJJ8R0',
    link: 'https://link.clashofclans.com/en?action=OpenClanProfile&tag=2RQLJJ8R0',
    image: 'https://i.imgur.com/U8K3yJ2.png',
    description: 'Het hoogste niveau. Alleen voor de meest ambitieuze competitieve spelers.',
    type: 'Esports'
  }
];

export const features = [
  {
    icon: <Users className="w-6 h-6 text-yellow-500" />,
    title: 'Sociaal & Actief',
    description: 'Een hechte groep Nederlandstalige spelers die elkaar altijd helpen met donaties en advies.'
  },
  {
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    title: 'Semi-Competitief',
    description: 'We strijden voor de winst in Clan Wars en CWL, met een gezonde balans tussen fun en prestatie.'
  },
  {
    icon: <Shield className="w-6 h-6 text-yellow-500" />,
    title: 'Sterke Community',
    description: 'Meer dan alleen een clan. We bouwen samen aan een community waar iedereen zich thuis voelt.'
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    title: 'Esports Team',
    description: 'Voor de topspelers bieden we een platform om op het hoogste niveau te presteren.'
  }
];
