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