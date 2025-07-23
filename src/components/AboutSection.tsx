import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// AboutSectionにはPropsがないため、空のインターフェースを定義
interface AboutSectionProps {}

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

function AboutSection(props: AboutSectionProps): ReactElement {
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
      <SectionTitle variants={itemVariants}>私について</SectionTitle>
      <Paragraph variants={itemVariants}>
          <span style={{fontSize: 28}}><b>職務経歴 (22歳から25歳)</b></span>
          <Paper sx={{padding: 2}} elevation={24}>
            <div><p style={{textAlign: 'start',fontSize: 20}}><b>教育業界 中規模 Webアプリケーション新規開発</b></p></div>
            <br/>PGとして配属
            <br/>ASP .NET / C# / Azure を駆使して30画面を設計・製造・テスト
            <br/>一部テーブル設計・サーバー構築・バッチ開発も担当し、本番リリースした。
          </Paper>
          <br/>
          <Paper sx={{padding: 2}} elevation={24}>
            <div><p style={{textAlign: 'start',fontSize: 20}}><b>教育業界 某大手企業 パッケージ製品</b></p></div>
            <br/>PGとして配属
            <br/>Vue.js / C# を駆使して大規模改修し、20画面以上を製造・テスト
          </Paper>
          <br/>
          <Paper sx={{padding: 2}} elevation={24}>
            <div><p style={{textAlign: 'start',fontSize: 20}}><b>保険業界 某大手企業 給与管理システム改修</b></p></div>
            <br/>PGとして配属
            <br/>ASP .NET / C# を駆使し、プライベートカスタムパッケージを利用。
            <br/>全体リファクタリングして28人日と想定された工数を7人日で納品
          </Paper>
          <br/>
      </Paragraph>
    </SectionWrapper>
  );
}

export default AboutSection;