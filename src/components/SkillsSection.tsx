import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// SkillsSectionにPropsがないため、空のインターフェースを定義
interface SkillsSectionProps {}

const SectionWrapper = styled(motion.section)`
  padding: 80px 20px;
  background-color: #f9f9f9;
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

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

const SkillCard = styled(motion.div)`
  background-color: white;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

const SkillIcon = styled.div`
  font-size: 3.5em;
  color: #2193b0;
  margin-bottom: 15px;
`;

const SkillName = styled.h3`
  font-size: 1.4em;
  color: #333;
`;

function SkillsSection(props: SkillsSectionProps): ReactElement {
  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: 'ʦ' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'Node.js', icon: 'Ⓝ' },
    { name: 'HTML5', icon: '℻' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Styled Components', icon: '💅' },
    { name: 'Framer Motion', icon: '✨' },
    { name: 'Git', icon: '⑂' },
    { name: 'REST APIs', icon: '📡' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.1
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
      <SectionTitle variants={itemVariants}>私のスキル</SectionTitle>
      <SkillsGrid variants={sectionVariants}>
        {skills.map((skill, index) => (
          <SkillCard key={index} variants={itemVariants}>
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SectionWrapper>
  );
}

export default SkillsSection;