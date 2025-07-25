import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
 `;
export const YoutubeEmbed = styled.iframe`
  display: block;
  border: 3px;
  width: -webkit-fill-available;
  height: 500px;
 `;
export const SubmitButton = styled(motion.button)`
  padding: 15px 30px;
  background-color: #2193b0;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #1a7c93;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 2em;
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

 export const Title = styled(motion.h1)`
  font-size: 2em;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
 `;
 
 export const Subtitle = styled(motion.p)`
  font-size: 1.5em;
  max-width: 600px;
  line-height: 1.8;
  margin-bottom: 30px;
 `;