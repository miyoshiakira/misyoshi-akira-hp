import React, { ReactElement, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';

interface SkillsSectionProps {
  title?: string;
  skills?: Array<any>;
}

const glowAnimation = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px rgba(109, 213, 237, 0.3),
                0 0 10px rgba(33, 147, 176, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(109, 213, 237, 0.5),
                0 0 40px rgba(33, 147, 176, 0.3);
  }
`;

const iconFloat = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SectionWrapper = styled(motion.section)`
  padding: 80px 20px;
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
  margin-bottom: 50px;
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
    animation: ${shimmer} 2s linear infinite;
    background-size: 200% auto;
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 40px;
  perspective: 1000px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
  }
`;

const SkillCardWrapper = styled(motion.div)`
  perspective: 1000px;
`;

const SkillCard = styled(motion.div)<{ isHovered: boolean }>`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(10px);
  padding: 40px 25px;
  border-radius: 20px;
  text-align: center;
  border: 1px solid rgba(109, 213, 237, 0.3);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: all 0.3s ease;

  ${props => props.isHovered && css`
    animation: ${glowAnimation} 1.5s ease-in-out infinite;
  `}

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
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, rgba(109, 213, 237, 0.5), rgba(33, 147, 176, 0.5));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const SkillIcon = styled(motion.div)<{ isHovered: boolean }>`
  font-size: 4em;
  margin-bottom: 20px;
  filter: drop-shadow(0 0 10px rgba(109, 213, 237, 0.5));
  ${props => props.isHovered && css`
    animation: ${iconFloat} 2s ease-in-out infinite;
  `}
`;

const SkillName = styled.h3`
  font-size: 1.3em;
  color: #fff;
  font-weight: 500;
  text-shadow: 0 0 10px rgba(109, 213, 237, 0.3);
`;

const SkillLevel = styled(motion.div)`
  margin-top: 15px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
`;

const SkillLevelFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #6dd5ed, #2193b0);
  border-radius: 2px;
`;

interface SkillCardComponentProps {
  skill: { icon: string; name: string };
  index: number;
}

const SkillCardComponent: React.FC<SkillCardComponentProps> = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = (y - centerY) / 10;
    const rotateYValue = (centerX - x) / 10;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <SkillCardWrapper
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <SkillCard
        isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.05 : 1})`,
        }}
        whileHover={{ z: 50 }}
      >
        <SkillIcon isHovered={isHovered}>{skill.icon}</SkillIcon>
        <SkillName>{skill.name}</SkillName>
        <SkillLevel>
          <SkillLevelFill
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
          />
        </SkillLevel>
      </SkillCard>
    </SkillCardWrapper>
  );
};

function SkillsSection(props: SkillsSectionProps): ReactElement {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
  };

  return (
    <SectionWrapper
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <SectionTitle
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {props.title}
      </SectionTitle>
      <SkillsGrid>
        {props.skills?.map((skill, index) => (
          <SkillCardComponent key={index} skill={skill} index={index} />
        ))}
      </SkillsGrid>
    </SectionWrapper>
  );
}

export default SkillsSection;
