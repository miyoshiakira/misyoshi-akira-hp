import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, Variants } from 'framer-motion';
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

// パーティクルアニメーション
const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0) translateX(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) translateX(50px) rotate(720deg);
    opacity: 0;
  }
`;

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(109, 213, 237, 0.3),
                0 0 40px rgba(33, 147, 176, 0.2),
                0 0 60px rgba(33, 147, 176, 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(109, 213, 237, 0.5),
                0 0 80px rgba(33, 147, 176, 0.3),
                0 0 120px rgba(33, 147, 176, 0.2);
  }
`;

const textGlow = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
                 0 0 20px rgba(109, 213, 237, 0.3),
                 0 0 30px rgba(33, 147, 176, 0.2);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
                 0 0 40px rgba(109, 213, 237, 0.5),
                 0 0 60px rgba(33, 147, 176, 0.3);
  }
`;

const borderGlow = keyframes`
  0%, 100% {
    border-color: rgba(109, 213, 237, 0.5);
  }
  50% {
    border-color: rgba(109, 213, 237, 1);
  }
`;

const HeroWrapper = styled(motion.section)`
  position: relative;
  display: flex;
  min-height: 70vh;
  background: linear-gradient(135deg, #1e1a3a 0%, #2d2755 50%, #252142 100%);
  color: white;
  padding: 60px 40px;
  align-items: center;
  max-width: 1100px;
  margin: 20px auto;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid rgba(109, 213, 237, 0.4);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  animation: ${borderGlow} 3s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(109, 213, 237, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(33, 147, 176, 0.15) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    padding: 40px 20px;
    text-align: center;
  }
`;

const Particle = styled.div<{ delay: number; left: number; size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: linear-gradient(135deg, #6dd5ed, #2193b0);
  border-radius: 50%;
  left: ${props => props.left}%;
  bottom: -20px;
  animation: ${floatAnimation} ${props => 8 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  pointer-events: none;
  opacity: 0;
`;

const ParticlesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const InfoContainer = styled(motion.div)`
  flex: 1;
  padding-right: 40px;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    padding-right: 0;
    margin-bottom: 30px;
  }
`;

const InfoSectionWrapper = styled(motion.div)`
  margin-top: 30px;
`;

const InfoItem = styled(motion.p)`
  font-size: 1.2em;
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '▸';
    color: #6dd5ed;
  }

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const MediaContainer = styled(motion.div)`
  flex-shrink: 0;
  width: 400px;
  height: auto;
  border-radius: 15px;
  overflow: hidden;
  animation: ${glowPulse} 3s ease-in-out infinite;
  position: relative;
  z-index: 1;
  border: 3px solid rgba(109, 213, 237, 0.5);

  @media (max-width: 1024px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    width: 250px;
  }
`;

const AnimatedTitle = styled(motion.h1)`
  font-size: 3em;
  margin-bottom: 15px;
  animation: ${textGlow} 2s ease-in-out infinite;
  background: linear-gradient(90deg, #fff, #6dd5ed, #fff);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const AnimatedSubtitle = styled(motion.p)`
  font-size: 1.8em;
  color: #6dd5ed;
  margin-bottom: 20px;
  font-weight: 300;
  letter-spacing: 3px;
`;

const TypewriterText = styled.span<{ showCursor: boolean }>`
  border-right: ${props => props.showCursor ? '3px solid #6dd5ed' : 'none'};
  padding-right: 5px;
  animation: ${props => props.showCursor ? 'blink 0.7s infinite' : 'none'};

  @keyframes blink {
    0%, 50% { border-color: #6dd5ed; }
    51%, 100% { border-color: transparent; }
  }
`;

// タイピングエフェクト用のカスタムフック
const useTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayText, isComplete };
};

// Variants型を明示的に指定
const mediaVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { duration: 1, ease: "backOut" }
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.8 + i * 0.15, duration: 0.5 }
  }),
};

// パーティクルを生成
const generateParticles = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    left: Math.random() * 100,
    size: Math.random() * 8 + 3,
  }));
};

function HeroSection({ imageUrl, youtubeVideoId, name, title, age, gender, experience }: HeroSectionProps) {
  const { displayText: typedName, isComplete: nameComplete } = useTypewriter(name, 120);
  const particles = generateParticles();

  return (
    <HeroWrapper
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <ParticlesContainer>
        {particles.map(particle => (
          <Particle
            key={particle.id}
            delay={particle.delay}
            left={particle.left}
            size={particle.size}
          />
        ))}
      </ParticlesContainer>

      <InfoContainer>
        <AnimatedTitle
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TypewriterText showCursor={!nameComplete}>
            {typedName}
          </TypewriterText>
        </AnimatedTitle>

        <AnimatedSubtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {title}
        </AnimatedSubtitle>

        <InfoSectionWrapper>
          <InfoItem
            custom={0}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            年齢: {age}歳
          </InfoItem>
          <InfoItem
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            性別: {gender}
          </InfoItem>
          <InfoItem
            custom={2}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            経歴: {experience}
          </InfoItem>
        </InfoSectionWrapper>
      </InfoContainer>

      <MediaContainer
        variants={mediaVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.02, rotateY: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {imageUrl ? (
          <Image src={imageUrl} alt={name} />
        ) : youtubeVideoId ? (
          <YoutubeEmbed
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
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
