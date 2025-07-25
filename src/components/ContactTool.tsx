import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Paper from '@mui/material/Paper';
import { SectionTitle, Image } from './CommonParts';
import FaceBookImage from '../media/FaceBook.png';
import InstagramImage from '../media/Instagram.jpeg';
import XImage from '../media/X.jpg';
import GitHubImage from '../media/GitHub.png';
import YoutubeImage from '../media/Youtube.png';
import { Button } from '@mui/material';

// AboutSectionにはPropsがないため、空のインターフェースを定義
interface AboutSectionProps {
  twitterUrl?: string;
  instagramUrl?: string;
  faceBookUrl?: string;
  gitHubUrl?: string;
  youtubeUrl?: string;
}

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
  const openUrl = (event: any, url?: string) =>{ 
              // フォームのデフォルト動作（ページ再読み込み）を阻止する
              event.preventDefault();
              window.open(url, "_blank");
              }
  return (
    <SectionWrapper
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <SectionTitle variants={itemVariants}>SNS</SectionTitle>
      <Paper sx={{padding: 2}} elevation={3}>
        { props.faceBookUrl ? <Button sx={{width: 100}} onClick={(event) => openUrl(event, props.faceBookUrl)}><Image src={FaceBookImage} /></Button> : null }
        { props.instagramUrl ? <Button sx={{width: 100}} onClick={(event) => openUrl(event, props.instagramUrl)}><Image src={InstagramImage} /></Button> : null }
        { props.twitterUrl ? <Button sx={{width: 100}} onClick={(event) => openUrl(event, props.twitterUrl)}><Image src={XImage} /></Button> : null }
        { props.youtubeUrl ? <Button sx={{width: 100}} onClick={(event) => openUrl(event, props.youtubeUrl)}><Image src={YoutubeImage} /></Button> : null }
        { props.gitHubUrl ? <Button sx={{width: 100}} onClick={(event) => openUrl(event, props.gitHubUrl)}><Image src={GitHubImage} /></Button> : null }
      </Paper>
    </SectionWrapper>
  );
}

export default AboutSection;