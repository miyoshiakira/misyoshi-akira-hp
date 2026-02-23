import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 10px rgba(109, 213, 237, 0.5),
                0 0 20px rgba(33, 147, 176, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(109, 213, 237, 0.8),
                0 0 40px rgba(33, 147, 176, 0.5);
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const YoutubeEmbed = styled.iframe`
  display: block;
  border: none;
  width: 100%;
  height: 300px;
  border-radius: 10px;
`;

export const SubmitButton = styled(motion.button)`
  padding: 15px 35px;
  background: linear-gradient(135deg, #6dd5ed, #2193b0);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(109, 213, 237, 0.4);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: ${shimmer} 2s infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 52px;
    background: linear-gradient(135deg, #6dd5ed, #2193b0, #6dd5ed);
    background-size: 200% 200%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
    animation: ${shimmer} 3s linear infinite;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(109, 213, 237, 0.6);
  }

  &:hover::after {
    opacity: 1;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 2.5em;
  margin-bottom: 50px;
  color: #fff;
  position: relative;
  display: inline-block;
  text-shadow: 0 0 20px rgba(109, 213, 237, 0.3);

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
    animation: ${shimmer} 2s linear infinite;
    background-size: 200% auto;
  }
`;

export const Title = styled(motion.h1)`
  font-size: 3em;
  margin-bottom: 15px;
  background: linear-gradient(90deg, #fff, #6dd5ed, #fff);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 3s linear infinite;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const Subtitle = styled(motion.p)`
  font-size: 1.5em;
  max-width: 600px;
  line-height: 1.8;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.9);
`;

export const GlassCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(109, 213, 237, 0.3);
  padding: 30px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(109, 213, 237, 0.6);
    box-shadow: 0 10px 40px rgba(109, 213, 237, 0.2);
    transform: translateY(-5px);
  }
`;

export const NeonText = styled(motion.span)`
  color: #6dd5ed;
  text-shadow: 0 0 10px rgba(109, 213, 237, 0.5),
               0 0 20px rgba(109, 213, 237, 0.3),
               0 0 30px rgba(109, 213, 237, 0.2);
`;

export const GlowingBorder = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  padding: 2px;
  background: linear-gradient(135deg, rgba(109, 213, 237, 0.5), rgba(33, 147, 176, 0.5));
  animation: ${glowPulse} 3s ease-in-out infinite;

  & > * {
    background: rgba(15, 12, 41, 0.95);
    border-radius: 18px;
  }
`;
