import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Paper from '@mui/material/Paper';
import { SectionTitle } from './CommonParts';

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
      <SectionTitle variants={itemVariants}>職務経歴</SectionTitle>
      <Paragraph variants={itemVariants}>
          <span style={{fontSize: 28}}><b>2019年～2022年</b></span>
          <Paper sx={{padding: 2}} elevation={3}>
            <div><p style={{textAlign: 'start',fontSize: 20}}><b>教育業界 中規模 Webアプリケーション新規開発</b></p></div>
            <br/>PGとして配属
            <br/>ASP .NET / C# / Azure 
            <br/>30画面を設計・製造・テスト
            <br/>テーブル設計・サーバー構築・バッチ開発も担当。
          </Paper>
          <br/>
          <Paper sx={{padding: 2}} elevation={3}>
            <div><p style={{textAlign: 'start',fontSize: 20}}><b>教育業界 某大手企業 パッケージ製品</b></p></div>
            <br/>PGとして配属
            <br/>Vue.js / C# 
            <br/>大規模改修し、20画面以上を製造・テスト
          </Paper>
          <br/>
          <Paper sx={{padding: 2}} elevation={3}>
            <div><p style={{textAlign: 'start',fontSize: 20}}><b>保険業界 某大手企業 給与管理システム改修</b></p></div>
            <br/>PGとして配属
            <br/>ASP .NET / C#
            <br/>全体リファクタリングし短期納品
          </Paper>
          <br/>
          <span style={{fontSize: 28}}><b>2022年～現在</b></span>
          <Paper sx={{padding: 2}} elevation={3}>
            <div><p style={{textAlign: 'start',fontSize: 20}}><b>人材業界 大規模 Webアプリケーション改修</b></p></div>
            <br/>フルスタックエンジニアとして配属
            <br/>React / C# / Java / shell / AWS / Oracle DB / PL/SQL
            <br/>見積もりを除く、要件定義から保守まで、全体領域を担当している。
          </Paper>
          <br/>
      </Paragraph>
    </SectionWrapper>
  );
}

export default AboutSection;