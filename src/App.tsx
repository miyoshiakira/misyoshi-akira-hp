import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import GlobalStyles from './GlobalStyles'; // グローバルスタイル
import MiyoshiAkira from './media/MiyoshiAkira.jpg';
const AppContainer = styled(motion.div)`
  font-family: 'Arial', sans-serif;
  color: #333;
`;

function App(): ReactElement { // 関数の戻り値の型も明示
  return (
    <AppContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <GlobalStyles />
      <HeroSection 
        title='IT Engineer'
        age={28} 
        gender='男性'
        name='Miyoshi Akira'
        experience='人材系大手IT企業'
        youtubeVideoId='yw-HK-8yeoM?si=xd8OvmgTDlosqnxE'
        imageUrl={MiyoshiAkira}
      />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </AppContainer>
  );
}

export default App;