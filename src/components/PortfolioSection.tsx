import React, { ReactElement, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';
import { Image, YoutubeEmbed } from './CommonParts';
import Portfolio2 from '../media/Portfolio2.png';
import Portfolio4 from '../media/Portfolio4.png';

interface PortfolioSectionProps {}

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 5px 30px rgba(109, 213, 237, 0.2);
  }
  50% {
    box-shadow: 0 5px 50px rgba(109, 213, 237, 0.4);
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

const PortfolioGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PortfolioCard = styled(motion.div)<{ isHovered: boolean }>`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(109, 213, 237, 0.3);
  position: relative;
  transition: all 0.4s ease;

  ${props => props.isHovered && css`
    animation: ${glowPulse} 2s ease-in-out infinite;
    transform: translateY(-10px);
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
      rgba(255, 255, 255, 0.05),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }
`;

const CardImageWrapper = styled(motion.div)`
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(15, 12, 41, 0.9) 100%);
    pointer-events: none;
  }
`;

const CardImage = styled(Image)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${PortfolioCard}:hover & {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  padding: 25px;
  text-align: left;
`;

const CardTitle = styled.h3`
  font-size: 1.4em;
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

const CardDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95em;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const TechTag = styled(motion.span)`
  background: linear-gradient(135deg, rgba(109, 213, 237, 0.2), rgba(33, 147, 176, 0.2));
  color: #6dd5ed;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85em;
  border: 1px solid rgba(109, 213, 237, 0.3);
`;

const ActionButton = styled(motion.button)`
  padding: 12px 30px;
  background: linear-gradient(135deg, #6dd5ed, #2193b0);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

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

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(109, 213, 237, 0.4);
  }
`;

const VideoWrapper = styled(motion.div)`
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 20px;
  border: 2px solid rgba(109, 213, 237, 0.3);
`;

const StyledTitle = styled(motion.h2)`
  font-size: 2.5em;
  margin-bottom: 20px;
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

interface PortfolioItemProps {
  title: string;
  description?: string;
  techStack?: string[];
  imageUrl?: string;
  youtubeUrl?: string;
  linkUrl?: string;
  buttonText?: string;
  credentials?: { email: string; password: string };
  index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  description,
  techStack,
  imageUrl,
  youtubeUrl,
  linkUrl,
  buttonText,
  credentials,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (linkUrl) {
      window.open(linkUrl, "_blank");
    }
  };

  return (
    <PortfolioCard
      isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      {imageUrl && (
        <CardImageWrapper>
          <CardImage src={imageUrl} alt={title} />
        </CardImageWrapper>
      )}
      {youtubeUrl && (
        <VideoWrapper
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <YoutubeEmbed
            src={youtubeUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoWrapper>
      )}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        {techStack && (
          <TechStack>
            {techStack.map((tech, i) => (
              <TechTag
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + i * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </TechTag>
            ))}
          </TechStack>
        )}
        {credentials && (
          <CardDescription style={{ fontSize: '0.9em', color: 'rgba(255,255,255,0.6)' }}>
            Email: {credentials.email}<br />
            Password: {credentials.password}
          </CardDescription>
        )}
        {linkUrl && (
          <ActionButton
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonText || '詳細を見る'} →
          </ActionButton>
        )}
      </CardContent>
    </PortfolioCard>
  );
};

const portfolioItems: PortfolioItemProps[] = [
  {
    title: "GitHub",
    description: "私のGitHubプロフィール。オープンソースプロジェクトやサンプルコードを公開しています。",
    techStack: ["Git", "GitHub", "Open Source"],
    linkUrl: "https://github.com/miyoshiakira",
    buttonText: "GitHub を見る",
    index: 0
  },
  {
    title: "生産管理システム プロトタイプ",
    description: "ノーコードツールBubbleを使用して構築した生産管理システムのプロトタイプ。",
    techStack: ["Bubble", "NoCode", "WebApp"],
    imageUrl: Portfolio2,
    linkUrl: "https://inventorysystem-78695.bubbleapps.io/version-test",
    buttonText: "起動する",
    credentials: { email: "test@gmail.com", password: "test" },
    index: 1
  },
  {
    title: "英単語テスト Webアプリケーション",
    description: "React + TypeScriptで構築した英単語学習アプリ。",
    techStack: ["React", "TypeScript", "CSS"],
    imageUrl: Portfolio4,
    linkUrl: "https://miyoshiakira.github.io/word-test-front",
    buttonText: "起動する",
    index: 2
  },
  {
    title: "自作ゲーム InfiniteDungeon",
    description: "Unityで開発したローグライクダンジョンゲーム。",
    techStack: ["Unity", "C#", "GameDev"],
    youtubeUrl: "https://www.youtube.com/embed/yHEGVRFPii0?si=yxoQTykCEFzLSwUX",
    index: 3
  },
  {
    title: "お天気情報API連携Webページ",
    description: "OpenWeather APIと連携したお天気情報表示アプリケーション。",
    techStack: ["React", "API", "Vercel"],
    linkUrl: "https://weather-app-eight-cyan-55.vercel.app/",
    buttonText: "起動する",
    index: 4
  }
];

function PortfolioSection(props: PortfolioSectionProps): ReactElement {
  return (
    <SectionWrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <StyledTitle
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        ポートフォリオ
      </StyledTitle>
      <PortfolioGrid>
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </PortfolioGrid>
    </SectionWrapper>
  );
}

export default PortfolioSection;
