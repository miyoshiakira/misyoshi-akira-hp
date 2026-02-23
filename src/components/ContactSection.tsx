import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SubmitButton } from './CommonParts';

interface ContactSectionProps {}

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
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(109, 213, 237, 0.3);
  text-align: left;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(109, 213, 237, 0.5);
    box-shadow: 0 10px 40px rgba(109, 213, 237, 0.15);
  }
`;

const FormGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 600;
  color: #6dd5ed;
  font-size: 0.95em;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Input = styled(motion.input)`
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(109, 213, 237, 0.3);
  border-radius: 12px;
  font-size: 1em;
  color: #fff;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    border-color: #6dd5ed;
    background: rgba(109, 213, 237, 0.1);
    box-shadow: 0 0 20px rgba(109, 213, 237, 0.2);
  }
`;

const TextArea = styled(motion.textarea)`
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(109, 213, 237, 0.3);
  border-radius: 12px;
  font-size: 1em;
  color: #fff;
  min-height: 150px;
  resize: vertical;
  outline: none;
  transition: all 0.3s ease;
  font-family: inherit;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    border-color: #6dd5ed;
    background: rgba(109, 213, 237, 0.1);
    box-shadow: 0 0 20px rgba(109, 213, 237, 0.2);
  }
`;

const ButtonWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const FooterText = styled(motion.p)`
  margin-top: 40px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9em;
`;

function ContactSection(_props: ContactSectionProps) {
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

    const recipientEmail = 'miyoshi.akira1997@gmail.com';
    const subject = encodeURIComponent(`ウェブサイトからのお問い合わせ: 【${formData.name}】`);
    const body = encodeURIComponent(
      `${formData.name} さんからのお問い合わせ \n` +
      `---------------------------------------` +
      `\n${formData.message}`
    );

    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <SectionWrapper
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        お問い合わせ
      </SectionTitle>

      <ContactForm
        onSubmit={handleSubmit}
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <FormGroup variants={itemVariants}>
          <Label htmlFor="name">お名前</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
                        required
            placeholder="山田 太郎"
            whileFocus={{ scale: 1.01 }}
          />
        </FormGroup>

        <FormGroup variants={itemVariants}>
          <Label htmlFor="message">メッセージ</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
                        required
            placeholder="お問い合わせ内容をご記入ください..."
            whileFocus={{ scale: 1.01 }}
          />
        </FormGroup>

        <ButtonWrapper variants={itemVariants}>
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(109, 213, 237, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            メールで問い合わせる
          </SubmitButton>
        </ButtonWrapper>
      </ContactForm>

      <FooterText
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        © 2024 Miyoshi Akira. All rights reserved.
      </FooterText>
    </SectionWrapper>
  );
}

export default ContactSection;
