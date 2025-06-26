import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiRedux } from 'react-icons/si';
import { Tilt } from 'react-tilt';

const ProjectsSection = styled.section`
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

const FilterButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.active ? '#667eea' : 'rgba(255, 255, 255, 0.2)'};
  background: ${props => props.active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent'};
  color: ${props => props.active ? '#ffffff' : '#b0b0b0'};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    border-color: #667eea;
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: #667eea;
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #b0b0b0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectTech = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const TechTag = styled.span`
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
`;

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: '🛒',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'Stripe'],
      github: 'https://github.com/shahidzahoor/ecommerce',
      live: 'https://ecommerce-demo.com',
      techIcons: [<FaReact />, <FaJs />, <SiMongodb />, <SiRedux />]
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '📋',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/shahidzahoor/task-manager',
      live: 'https://task-manager-demo.com',
      techIcons: [<FaReact />, <SiTypescript />, <SiTailwindcss />]
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my work and skills with smooth animations and interactive elements.',
      image: '🎨',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Styled Components', 'Framer Motion'],
      github: 'https://github.com/shahidzahoor/portfolio',
      live: 'https://shahidzahoor.dev',
      techIcons: [<FaReact />, <SiTypescript />]
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '🌤️',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com/shahidzahoor/weather-app',
      live: 'https://weather-demo.com',
      techIcons: [<FaReact />, <SiTypescript />]
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A content management system for blogs with markdown support, SEO optimization, and admin dashboard.',
      image: '📝',
      category: 'fullstack',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/shahidzahoor/blog-platform',
      live: 'https://blog-demo.com',
      techIcons: [<SiNextdotjs />, <SiTypescript />, <SiMongodb />]
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing multiple social media accounts with analytics and scheduling features.',
      image: '📊',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redux'],
      github: 'https://github.com/shahidzahoor/social-dashboard',
      live: 'https://social-dashboard-demo.com',
      techIcons: [<FaReact />, <FaJs />, <SiRedux />]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <ProjectsSection id="projects" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A showcase of my recent work and technical expertise
        </SectionSubtitle>

        <FilterButtons
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category) => (
            <FilterButton
              key={category.id}
              active={filter === category.id}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </FilterButton>
          ))}
        </FilterButtons>

        <ProjectsGrid>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <Tilt key={project.id} options={{ max: 15, scale: 1.05 }}>
                <ProjectCard
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  exit={{ opacity: 0, y: -30 }}
                >
                  <ProjectImage>
                    <span>{project.image}</span>
                  </ProjectImage>
                  
                  <ProjectContent>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    
                    <ProjectTech>
                      {project.technologies.map((tech) => (
                        <TechTag key={tech}>{tech}</TechTag>
                      ))}
                    </ProjectTech>
                    
                    <ProjectLinks>
                      <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        Code
                      </ProjectLink>
                      <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                        Live Demo
                      </ProjectLink>
                    </ProjectLinks>
                  </ProjectContent>
                </ProjectCard>
              </Tilt>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 