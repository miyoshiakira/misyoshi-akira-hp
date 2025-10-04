import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import PortfolioSection from './components/PortfolioSection';
import GlobalStyles from './GlobalStyles'; // グローバルスタイル
import MiyoshiAkira from './media/MiyoshiAkira.jpg';
import ContactTool from './components/ContactTool';

//めもだよーん
//const test = styled(motion.div)`
//  test: 'test', test;
//  test: #test;
//`;

const AppContainer = styled(motion.div)`
  font-family: 'Arial', sans-serif;
  color: #333;
`;
const experience = [
    { name: 'ヒアリング', icon: '👂' },
    { name: 'アーキテクチャ', icon: '🎮' },
    { name: '要件定義', icon: '💡' },
    { name: '設計', icon: '📝' },
    { name: '製造', icon: '🔧' },
    { name: 'テスト', icon: '☢' },
    { name: '運用・保守', icon: '🧱' },
    { name: 'チーム開発', icon: '👨‍👩‍👧‍👦' },
]
const backSkills = [
    { name: 'C#', icon: '💻' },
    { name: 'Java', icon: '☕' },
    { name: 'Python', icon: '⚙' },
    { name: 'PHP', icon: '🍰' },
  ];

  const frontSkills = [
    { name: 'React', icon: '⚛️' },
    { name: 'Vue.js', icon: 'ⓥ' },
    { name: 'TypeScript', icon: 'ʦ' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'Node.js', icon: 'Ⓝ' },
    { name: 'HTML5', icon: '📃' },
    { name: 'cshtml', icon: '📚' },
    { name: 'CSS3', icon: '🎨' },
  ];

  const databaseSkills = [
    { name: 'OracleDB', icon: '🟥' },
    { name: 'PL/SQL', icon: '⚡' },
    { name: 'T-SQL', icon: '🖥' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'SQLite', icon: '🔶' },
  ];

  const cloudSkills = [
    { name: 'AWS', icon: '☁' },
    { name: 'Azure', icon: '🌩' },
    { name: 'Cloud Flare', icon: '🌤' },
  ];
  
  const toolSkills = [
    { name: 'Git', icon: '🌳' },
    { name: 'SVN', icon: '🐢' },
    { name: 'IIS', icon: '🌎' },
    { name: 'shell', icon: '▢' },
  ];
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
      <ContactTool 
        twitterUrl='https://x.com/MiyoshiAkiraIT'
        faceBookUrl='https://www.facebook.com/profile.php?id=61578676293967'
        instagramUrl='https://www.instagram.com/miyoshi.akira1997/'
        youtubeUrl='https://www.youtube.com/@AkiraMiyoshi1997'
        gitHubUrl='https://github.com/miyoshiakira'
       />
      <AboutSection />
      <PortfolioSection />
      <SkillsSection title='工程' skills={experience}/>
      <SkillsSection title='バックエンド' skills={backSkills}/>
      <SkillsSection title='フロントエンド' skills={frontSkills}/>
      <SkillsSection title='データベース' skills={databaseSkills}/>
      <SkillsSection title='クラウド' skills={cloudSkills}/>
      <SkillsSection title='その他' skills={toolSkills}/>
      <ContactSection />
    </AppContainer>
  );
}

export default App;