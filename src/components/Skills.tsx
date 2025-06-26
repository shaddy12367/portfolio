import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, 
  FaDocker, FaAws, FaDatabase, FaMobile, FaDesktop 
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiRedux } from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 100px 2rem;
  background: #0a0a0a;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #667eea;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CategoryIcon = styled.div`
  color: #667eea;
  font-size: 1.5rem;
`;

const SkillItem = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  color: #ffffff;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillIcon = styled.div`
  color: #667eea;
  font-size: 1rem;
`;

const SkillPercentage = styled.span`
  color: #667eea;
  font-weight: 600;
  font-size: 0.9rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
`;

const TechnologiesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 3rem;
`;

const TechCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: #667eea;
    box-shadow: 0 5px 20px rgba(102, 126, 234, 0.2);
  }
`;

const TechIcon = styled.div`
  font-size: 2.5rem;
  color: #667eea;
  margin-bottom: 1rem;
`;

const TechName = styled.div`
  color: #ffffff;
  font-weight: 500;
  font-size: 0.9rem;
`;

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaDesktop />,
      skills: [
        { name: 'React', icon: <FaReact />, percentage: 95 },
        { name: 'TypeScript', icon: <SiTypescript />, percentage: 90 },
        { name: 'JavaScript', icon: <FaJs />, percentage: 95 },
        { name: 'Next.js', icon: <SiNextdotjs />, percentage: 85 },
        { name: 'HTML5', icon: <FaHtml5 />, percentage: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, percentage: 90 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, percentage: 85 },
        { name: 'Redux', icon: <SiRedux />, percentage: 80 }
      ]
    },
    {
      title: 'Backend & Database',
      icon: <FaDatabase />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, percentage: 80 },
        { name: 'MongoDB', icon: <SiMongodb />, percentage: 75 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, percentage: 70 }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: <FaGitAlt />,
      skills: [
        { name: 'Git', icon: <FaGitAlt />, percentage: 90 },
        { name: 'Docker', icon: <FaDocker />, percentage: 70 },
        { name: 'AWS', icon: <FaAws />, percentage: 65 }
      ]
    }
  ];

  const technologies = [
    { name: 'React', icon: <FaReact /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'AWS', icon: <FaAws /> }
  ];

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My technical expertise and proficiency levels
        </SectionSubtitle>

        <SkillsGrid>
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.2 }}
            >
              <CategoryTitle>
                <CategoryIcon>{category.icon}</CategoryIcon>
                {category.title}
              </CategoryTitle>
              
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skill.name}>
                  <SkillHeader>
                    <SkillName>
                      <SkillIcon>{skill.icon}</SkillIcon>
                      {skill.name}
                    </SkillName>
                    <SkillPercentage>{skill.percentage}%</SkillPercentage>
                  </SkillHeader>
                  <ProgressBar>
                    <ProgressFill
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + skillIndex * 0.1 }}
                    />
                  </ProgressBar>
                </SkillItem>
              ))}
            </SkillCategory>
          ))}
        </SkillsGrid>

        <TechnologiesGrid
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {technologies.map((tech, index) => (
            <TechCard
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <TechIcon>{tech.icon}</TechIcon>
              <TechName>{tech.name}</TechName>
            </TechCard>
          ))}
        </TechnologiesGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 