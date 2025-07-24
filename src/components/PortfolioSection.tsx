import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Paper from '@mui/material/Paper';
import { Image, YoutubeEmbed } from './CommonParts';
import { SubmitButton } from './CommonParts';
import Portfolio2 from '../media/Portfolio2.png';
import Portfolio4 from '../media/Portfolio4.png';
// PortfolioSectionにはPropsがないため、空のインターフェースを定義
interface PortfolioSectionProps {}

const SectionWrapper = styled(motion.section)`
  padding: 80px 20px;
  background-color: #fff;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  border-bottom: 1px solid #eee;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3em;
  margin-bottom: 40px;
  color: #2c3e50;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: #2193b0;
    border-radius: 2px;
  }
`;

const Paragraph = styled(motion.div)`
  font-size: 1.1em;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: left;
`;

function PortfolioSection(props: PortfolioSectionProps): ReactElement {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <SectionWrapper
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <SectionTitle variants={itemVariants}>ポートフォリオ</SectionTitle>
      <Paragraph variants={itemVariants}>
          <Paper sx={{padding: 2}} elevation={24}>
            <div><p style={{textAlign: 'start',fontSize: 20}}><b>GitHub</b></p></div>
            <br/>
            <form onSubmit={(event) =>{ 
              // フォームのデフォルト動作（ページ再読み込み）を阻止する
              event.preventDefault();
              window.open("https://github.com/miyoshiakira", "_blank");
              }}>
                    <SubmitButton type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      GitHub →
                    </SubmitButton>
            </form>
          </Paper>
          <br/>
          <Paper sx={{padding: 2}} elevation={24}>
            <div><p style={{textAlign: 'start',fontSize: 20}}><b>生産管理システム プロトタイプ</b></p></div>
            <br/>
            <form onSubmit={(event) =>{ 
              // フォームのデフォルト動作（ページ再読み込み）を阻止する
              event.preventDefault();
              window.open("https://inventorysystem-78695.bubbleapps.io/version-test", "_blank");
              }}>
                  <Paper elevation={3}><Image src={Portfolio2} /></Paper>
                  <br/>
                    <p style={{textAlign: 'start',fontSize: 14}}>メールアドレス：test@gmail.com</p>
                    <p style={{textAlign: 'start',fontSize: 14}}>パスワード　　：test</p>
                  <br/>
                  <SubmitButton type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    起動する →
                  </SubmitButton>
                  <br/>
            </form>
          </Paper>
          <br/>
          <Paper sx={{padding: 2}} elevation={24}>
            <div><p style={{textAlign: 'start',fontSize: 20}}><b>英単語テスト Webアプリケーション</b></p></div>
            <br/>
            <form onSubmit={(event) =>{ 
              // フォームのデフォルト動作（ページ再読み込み）を阻止する
              event.preventDefault();
              window.open("https://miyoshiakira.github.io/word-test-front", "_blank");
              }}>
                  <Paper elevation={3}><Image src={Portfolio4} /></Paper>
                  <br/>
                  <SubmitButton type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    起動する →
                  </SubmitButton>
                  <br/>
            </form>
          </Paper>
          <br/>
          <Paper sx={{padding: 2}} elevation={24}>
            <div><p style={{textAlign: 'start',fontSize: 20}}><b>自作ゲーム InfiniteDungeon</b></p></div>
            <br/>
            <Paper elevation={10}>
              <YoutubeEmbed
              src={`https://www.youtube.com/embed/yHEGVRFPii0?si=yxoQTykCEFzLSwUX`} // YouTubeの埋め込みURLを修正
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              />
            </Paper>
          </Paper>
          <br/>
      </Paragraph>
    </SectionWrapper>
  );
}

export default PortfolioSection;