import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { SectionTitle } from './CommonParts';

interface AboutSectionProps {}

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 5px 20px rgba(109, 213, 237, 0.2);
  }
  50% {
    box-shadow: 0 5px 40px rgba(109, 213, 237, 0.4);
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

const TimelineContainer = styled(motion.div)`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 40px;

  &::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #6dd5ed, #2193b0);
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    padding-left: 30px;

    &::before {
      left: 10px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 40px;
  padding-left: 30px;

  &::before {
    content: '';
    position: absolute;
    left: -32px;
    top: 10px;
    width: 16px;
    height: 16px;
    background: linear-gradient(135deg, #6dd5ed, #2193b0);
    border-radius: 50%;
    border: 3px solid rgba(15, 12, 41, 0.95);
    box-shadow: 0 0 10px rgba(109, 213, 237, 0.5);
  }

  @media (max-width: 768px) {
    padding-left: 20px;

    &::before {
      left: -27px;
      width: 14px;
      height: 14px;
    }
  }
`;

const TimelinePeriod = styled(motion.h3)`
  font-size: 1.5em;
  color: #6dd5ed;
  margin-bottom: 20px;
  text-align: left;
  text-shadow: 0 0 10px rgba(109, 213, 237, 0.3);
`;

const ExperienceCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(109, 213, 237, 0.3);
  padding: 25px;
  text-align: left;
  margin-bottom: 20px;
  transition: all 0.3s ease;

  &:hover {
    animation: ${glowPulse} 2s ease-in-out infinite;
    border-color: rgba(109, 213, 237, 0.6);
    transform: translateX(10px);
  }
`;

const CardTitle = styled.h4`
  font-size: 1.2em;
  color: #fff;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '◆';
    color: #6dd5ed;
    font-size: 0.8em;
  }
`;

const CardContent = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1em;
  line-height: 1.8;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
`;

const TechTag = styled(motion.span)`
  background: linear-gradient(135deg, rgba(109, 213, 237, 0.2), rgba(33, 147, 176, 0.2));
  color: #6dd5ed;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85em;
  border: 1px solid rgba(109, 213, 237, 0.3);
`;

const experienceData = [
  {
    period: "2019年～2022年",
    items: [
      {
        title: "教育業界 中規模 Webアプリケーション新規開発",
        content: "PGとして配属。30画面を設計・製造・テスト。テーブル設計・サーバー構築・バッチ開発も担当。",
        tech: ["ASP .NET", "C#", "Azure"]
      },
      {
        title: "教育業界 某大手企業 パッケージ製品",
        content: "PGとして配属。大規模改修し、20画面以上を製造・テスト。",
        tech: ["Vue.js", "C#"]
      },
      {
        title: "保険業界 某大手企業 給与管理システム改修",
        content: "PGとして配属。全体リファクタリングし短期納品。",
        tech: ["ASP .NET", "C#"]
      }
    ]
  },
  {
    period: "2022年～現在",
    items: [
      {
        title: "人材業界 大規模 Webアプリケーション改修",
        content: "フルスタックエンジニアとして配属。見積もりを除く、要件定義から保守まで、全体領域を担当している。",
        tech: ["React", "C#", "Java", "shell", "AWS", "Oracle DB", "PL/SQL"]
      }
    ]
  }
];

function AboutSection(props: AboutSectionProps): ReactElement {
  return (
    <SectionWrapper
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        職務経歴
      </SectionTitle>

      <TimelineContainer>
        {experienceData.map((period, periodIndex) => (
          <TimelineItem
            key={periodIndex}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: periodIndex * 0.2, duration: 0.6 }}
          >
            <TimelinePeriod>{period.period}</TimelinePeriod>
            {period.items.map((item, itemIndex) => (
              <ExperienceCard
                key={itemIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: periodIndex * 0.2 + itemIndex * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <CardTitle>{item.title}</CardTitle>
                <CardContent>{item.content}</CardContent>
                <TechStack>
                  {item.tech.map((tech, techIndex) => (
                    <TechTag
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: periodIndex * 0.2 + itemIndex * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </TechTag>
                  ))}
                </TechStack>
              </ExperienceCard>
            ))}
          </TimelineItem>
        ))}
      </TimelineContainer>
    </SectionWrapper>
  );
}

export default AboutSection;
