import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// ContactSectionにPropsがないため、空のインターフェースを定義
interface ContactSectionProps {}

const SectionWrapper = styled(motion.section)`
  padding: 80px 20px;
  background-color: #eef4f7;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
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

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
`;

const Input = styled(motion.input)`
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #2193b0;
    box-shadow: 0 0 0 3px rgba(33, 147, 176, 0.3);
  }
`;

const TextArea = styled(motion.textarea)`
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  min-height: 120px;
  resize: vertical;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #2193b0;
    box-shadow: 0 0 0 3px rgba(33, 147, 176, 0.3);
  }
`;

const SubmitButton = styled(motion.button)`
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

const SocialLinks = styled(motion.div)`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const SocialIconLink = styled(motion.a)`
  font-size: 2.5em;
  color: #555;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #2193b0;
    transform: translateY(-5px) scale(1.1);
  }
`;

function ContactSection({}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const recipientEmail = 'miyoshi.akira1997@gmail.com'; // ここにあなたのメールアドレスを設定

    // 件名と本文をエンコード
    const subject = encodeURIComponent(`ウェブサイトからのお問い合わせ: 【${formData.name}】`);
    const body = encodeURIComponent(
      `${formData.name} さんからのお問い合わせ \n` +
      `---------------------------------------` +
      `\n${formData.message}`
    );

    // mailto: リンクを構築
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // 新しいウィンドウ/タブでmailtoリンクを開く
    // または、現在のウィンドウで開く場合は window.location.href = mailtoLink;
    window.open(mailtoLink, '_blank');

    // フォームをクリア（オプション）
    setFormData({ name: '', email: '', message: '' });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <SectionWrapper
      id="contact" // ヒーローセクションからのリンクターゲット
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <SectionTitle variants={itemVariants}>お問い合わせ</SectionTitle>
      <ContactForm onSubmit={handleSubmit} variants={itemVariants}>
        <FormGroup>
          <Label htmlFor="name">お名前</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">メッセージ</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
          />
        </FormGroup>
        <SubmitButton type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          メールで問い合わせる
        </SubmitButton>
      </ContactForm>

      <SocialLinks variants={itemVariants}>
        <SocialIconLink href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
          <i className="fab fa-github"></i> {/* Font Awesome などのアイコンライブラリを想定 */}
        </SocialIconLink>
        <SocialIconLink href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
          <i className="fab fa-linkedin"></i>
        </SocialIconLink>
        <SocialIconLink href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
          <i className="fab fa-twitter"></i>
        </SocialIconLink>
      </SocialLinks>
    </SectionWrapper>
  );
}

export default ContactSection;