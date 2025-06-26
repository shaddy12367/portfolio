import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #0a0a0a;
  padding: 3rem 2rem 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  color: #ffffff;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #667eea;
`;

const FooterText = styled.p`
  color: #b0b0b0;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterLink = styled(Link)`
  color: #b0b0b0;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #667eea;
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: #667eea;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
  color: #b0b0b0;
`;

const Copyright = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

const HeartIcon = styled(FaHeart)`
  color: #e74c3c;
  animation: heartbeat 1.5s ease-in-out infinite;

  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' }
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/shahidzahoor', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/shahid-zahoor-522219310/', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://x.com/KrShaheen', label: 'Twitter' }
  ];

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <FooterTitle>Shahid Zahoor</FooterTitle>
            <FooterText>
              A passionate frontend developer dedicated to creating beautiful, 
              functional, and user-friendly web applications. Let's build 
              something amazing together!
            </FooterText>
            <SocialLinks>
              {socialLinks.map((social, index) => (
                <SocialLink
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </SocialLink>
              ))}
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              {quickLinks.map((link) => (
                <FooterLink
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  {link.name}
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Contact Info</FooterTitle>
            <FooterText>
              <strong>Email:</strong><br />
              shahidzahoor5224@gmail.com
            </FooterText>
            <FooterText>
              <strong>Location:</strong><br />
              kashmir, india
            </FooterText>
            <FooterText>
              <strong>Available for:</strong><br />
              Freelance & Full-time opportunities
            </FooterText>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Skills & Technologies</FooterTitle>
            <FooterText>
              React • TypeScript • JavaScript • Next.js • Node.js • 
              MongoDB • Tailwind CSS • Styled Components • Git • Docker
            </FooterText>
            <FooterText>
              Always learning and exploring new technologies to stay 
              current with industry trends and best practices.
            </FooterText>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © {currentYear} Shahid Zahoor. All rights reserved. Made with{' '}
            <HeartIcon /> in kashmir
          </Copyright>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 