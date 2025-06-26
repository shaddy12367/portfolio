import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 100px 2rem;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #b0b0b0;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled(motion.div)`
  color: #ffffff;
`;

const AboutTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #ffffff;
`;

const AboutDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #b0b0b0;
  margin-bottom: 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #667eea;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
  }
`;

const StatIcon = styled.div`
  font-size: 2.5rem;
  color: #667eea;
  margin-bottom: 1rem;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #b0b0b0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SkillsPreview = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const SkillTag = styled(motion.span)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  display: inline-block;
`;

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    { icon: <FaCode />, number: '50+', label: 'Projects Completed' },
    { icon: <FaLightbulb />, number: '3+', label: 'Years Experience' },
    { icon: <FaRocket />, number: '100%', label: 'Client Satisfaction' },
    { icon: <FaUsers />, number: '20+', label: 'Happy Clients' }
  ];

  const skills = ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'Styled Components', 'Git'];

  return (
    <AboutSection id="about" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Passionate frontend developer with a love for creating exceptional user experiences
        </SectionSubtitle>

        <ContentGrid>
          <AboutText
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AboutTitle>Turning Ideas Into Reality</AboutTitle>
            <AboutDescription>
              I'm a dedicated frontend developer with over 3 years of experience crafting 
              beautiful and functional web applications. My journey in web development 
              started with a curiosity about how websites work, which quickly evolved into 
              a passion for creating exceptional digital experiences.
            </AboutDescription>
            <AboutDescription>
              I specialize in React, TypeScript, and modern web technologies, always 
              staying up-to-date with the latest trends and best practices. My approach 
              combines technical expertise with creative problem-solving to deliver 
              solutions that not only work flawlessly but also provide an outstanding 
              user experience.
            </AboutDescription>
            <AboutDescription>
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </AboutDescription>

            <SkillsPreview
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {skills.map((skill, index) => (
                <SkillTag
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </SkillTag>
              ))}
            </SkillsPreview>
          </AboutText>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <StatIcon>{stat.icon}</StatIcon>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </motion.div>
        </ContentGrid>
      </Container>
    </AboutSection>
  );
};

export default About; 