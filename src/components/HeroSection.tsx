import React from 'react';
 import styled from 'styled-components';
 import { motion, Variants } from 'framer-motion'; // Variantsをインポート
 import { Image, YoutubeEmbed } from './CommonParts';
 interface HeroSectionProps {
  imageUrl?: string;
  youtubeVideoId?: string;
  name: string;
  title: string;
  age: number;
  gender: string;
  experience: string;
 }
 
 const HeroWrapper = styled(motion.section)`
  display: flex;
  min-height: 50vh;
  background: linear-gradient(135deg, #6dd5ed, #2193b0);
  color: white;
  padding: 40px;
  align-items: center;
  max-width: 900px;
  margin: auto;
 
  @media (max-width: 1024px) {
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  text-align: center;
  }
 `;
 
 const InfoContainer = styled(motion.div)`
  flex: 1;
  padding-right: 40px;
 
  @media (max-width: 1024px) {
  padding-right: 0;
  margin-bottom: 30px;
  }
 `;
 
 const Title = styled(motion.h1)`
  font-size: 3.5em;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
 `;
 
 const Subtitle = styled(motion.p)`
  font-size: 1.5em;
  max-width: 600px;
  line-height: 1.8;
  margin-bottom: 30px;
 `;
 
 const InfoSectionWrapper = styled(motion.div)`
  margin-top: 20px;
 `;
 
 const InfoItem = styled(motion.p)`
  font-size: 1.1em;
  margin-bottom: 10px;
  opacity: 0.8;
 `;
 
 const MediaContainer = styled(motion.div)`
  flex-shrink: 0;
  width: 400px;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
 
  @media (max-width: 1024px) {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  }
 
  @media (max-width: 768px) {
  width: 250px;
  }
 `;
 
 // Variants型を明示的に指定
 const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
 };
 
 // Variants型を明示的に指定
 const mediaVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "backOut" } },
 };
 
 function HeroSection({ imageUrl, youtubeVideoId, name, title, age, gender, experience }: HeroSectionProps) {
  return (
  <HeroWrapper
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  >
  <InfoContainer>
  <Title variants={textVariants} initial="hidden" animate="visible">
  {name}
  </Title>
  <Subtitle variants={textVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
  {title}
  </Subtitle>
  <InfoSectionWrapper>
  <InfoItem variants={textVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
  年齢: {age}歳
  </InfoItem>
  <InfoItem variants={textVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }}>
  性別: {gender}
  </InfoItem>
  <InfoItem variants={textVariants} initial="hidden" animate="visible" transition={{ delay: 0.6 }}>
  経歴: {experience}
  </InfoItem>
  </InfoSectionWrapper>
  </InfoContainer>
 
  <MediaContainer variants={mediaVariants} initial="hidden" animate="visible">
  {imageUrl ? (
  <Image src={imageUrl} alt={name} />
  ) : youtubeVideoId ? (
  <YoutubeEmbed
  src={`https://www.youtube.com/embed/${youtubeVideoId}`} // YouTubeの埋め込みURLを修正
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  />
  ) : (
  <div style={{ backgroundColor: '#333', color: '#fff', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  No Media Provided
  </div>
  )}
  </MediaContainer>
  </HeroWrapper>
  );
 }
 
 export default HeroSection;