import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Image } from './CommonParts';
import FaceBookImage from '../media/FaceBook.png';
import InstagramImage from '../media/Instagram.jpeg';
import XImage from '../media/X.jpg';
import GitHubImage from '../media/GitHub.png';
import YoutubeImage from '../media/Youtube.png';

interface ContactToolProps {
  twitterUrl?: string;
  instagramUrl?: string;
  faceBookUrl?: string;
  gitHubUrl?: string;
  youtubeUrl?: string;
}

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(109, 213, 237, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(109, 213, 237, 0.6);
  }
`;

const SectionWrapper = styled(motion.section)`
  padding: 60px 20px;
  background: linear-gradient(180deg, rgba(30, 26, 58, 0.98) 0%, rgba(45, 39, 85, 0.98) 100%);
  text-align: center;
  max-width: 1100px;
  margin: 20px auto;
  border-radius: 20px;
  border: 1px solid rgba(109, 213, 237, 0.35);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(109, 213, 237, 0.6), transparent);
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5em;
  margin-bottom: 40px;
  color: #fff;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -15px;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #6dd5ed, #2193b0);
    border-radius: 2px;
  }
`;

const IconsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 20px;
`;

const IconWrapper = styled(motion.button)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(109, 213, 237, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(109, 213, 237, 0.3), rgba(33, 147, 176, 0.3));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    animation: ${pulseGlow} 1.5s ease-in-out infinite;
    border-color: #6dd5ed;
    transform: scale(1.1);
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const IconLabel = styled(motion.span)`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  color: #6dd5ed;
  font-size: 0.85em;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${IconWrapper}:hover & {
    opacity: 1;
  }
`;

const IconContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface SocialIconProps {
  url: string;
  image: string;
  label: string;
  index: number;
}

const SocialIcon: React.FC<SocialIconProps> = ({ url, image, label, index }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, "_blank");
  };

  return (
    <IconContainer
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }}
    >
      <IconWrapper
        onClick={handleClick}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9, rotate: 10 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image src={image} alt={label} style={{ width: 50, height: 50, borderRadius: '50%' }} />
        <IconLabel>{label}</IconLabel>
      </IconWrapper>
    </IconContainer>
  );
};

const socialLinks = [
  { key: 'facebook', image: FaceBookImage, label: 'Facebook' },
  { key: 'instagram', image: InstagramImage, label: 'Instagram' },
  { key: 'twitter', image: XImage, label: 'X (Twitter)' },
  { key: 'youtube', image: YoutubeImage, label: 'YouTube' },
  { key: 'github', image: GitHubImage, label: 'GitHub' },
];

function ContactTool(props: ContactToolProps): ReactElement {
  const urls: { [key: string]: string | undefined } = {
    facebook: props.faceBookUrl,
    instagram: props.instagramUrl,
    twitter: props.twitterUrl,
    youtube: props.youtubeUrl,
    github: props.gitHubUrl,
  };

  const availableLinks = socialLinks.filter(link => urls[link.key]);

  return (
    <SectionWrapper
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        SNS
      </SectionTitle>
      <IconsContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {availableLinks.map((link, index) => (
          <SocialIcon
            key={link.key}
            url={urls[link.key]!}
            image={link.image}
            label={link.label}
            index={index}
          />
        ))}
      </IconsContainer>
    </SectionWrapper>
  );
}

export default ContactTool;
