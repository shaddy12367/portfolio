import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const ExperienceSection = styled.section`
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  width: 100%;

  &:nth-child(odd) {
    .timeline-content {
      margin-left: 0;
      margin-right: 50%;

      @media (max-width: 768px) {
        margin-left: 50px;
        margin-right: 0;
      }
    }

    .timeline-dot {
      left: 50%;
      transform: translateX(-50%);

      @media (max-width: 768px) {
        left: 20px;
        transform: translateX(-50%);
      }
    }
  }

  &:nth-child(even) {
    .timeline-content {
      margin-left: 50%;
      margin-right: 0;

      @media (max-width: 768px) {
        margin-left: 50px;
        margin-right: 0;
      }
    }

    .timeline-dot {
      left: 50%;
      transform: translateX(-50%);

      @media (max-width: 768px) {
        left: 20px;
        transform: translateX(-50%);
      }
    }
  }
`;

const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #667eea;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  border: 4px solid #0a0a0a;
  z-index: 2;
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const CompanyName = styled.h4`
  font-size: 1.1rem;
  color: #667eea;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const JobMeta = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #b0b0b0;
  font-size: 0.9rem;
`;

const JobDescription = styled.p`
  color: #b0b0b0;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const JobAchievements = styled.ul`
  color: #b0b0b0;
  line-height: 1.6;
  padding-left: 1.5rem;
`;

const JobAchievement = styled.li`
  margin-bottom: 0.5rem;
`;

const Technologies = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
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

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const experiences = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing best practices for scalable React applications.',
      achievements: [
        'Led development of 5+ major client projects with 100% client satisfaction',
        'Reduced application load time by 40% through optimization techniques',
        'Mentored 3 junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Redux', 'Tailwind CSS', 'Jest']
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Digital Innovations Inc.',
      location: 'New York, NY',
      period: '2021 - 2022',
      description: 'Developed responsive web applications and collaborated with design and backend teams to deliver high-quality user experiences.',
      achievements: [
        'Built 10+ responsive web applications for various clients',
        'Collaborated with UX/UI designers to implement pixel-perfect designs',
        'Integrated REST APIs and implemented state management solutions',
        'Participated in agile development processes and sprint planning'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Git', 'REST APIs']
    },
    {
      id: 3,
      title: 'Junior Frontend Developer',
      company: 'StartupHub',
      location: 'San Francisco, CA',
      period: '2020 - 2021',
      description: 'Started my professional journey in web development, learning modern frameworks and contributing to various projects.',
      achievements: [
        'Developed 3 complete web applications from concept to deployment',
        'Learned modern JavaScript frameworks and development tools',
        'Contributed to open-source projects and community discussions',
        'Attended conferences and workshops to stay updated with industry trends'
      ],
      technologies: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Bootstrap', 'Git']
    }
  ];

  return (
    <ExperienceSection id="experience" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My professional journey and career progression
        </SectionSubtitle>

        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              <TimelineDot className="timeline-dot" />
              <TimelineContent className="timeline-content">
                <JobTitle>{experience.title}</JobTitle>
                <CompanyName>
                  <FaBriefcase />
                  {experience.company}
                </CompanyName>
                
                <JobMeta>
                  <MetaItem>
                    <FaCalendarAlt />
                    {experience.period}
                  </MetaItem>
                  <MetaItem>
                    <FaMapMarkerAlt />
                    {experience.location}
                  </MetaItem>
                </JobMeta>
                
                <JobDescription>{experience.description}</JobDescription>
                
                <JobAchievements>
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <JobAchievement key={achievementIndex}>
                      {achievement}
                    </JobAchievement>
                  ))}
                </JobAchievements>
                
                <Technologies>
                  {experience.technologies.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </Technologies>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience; 