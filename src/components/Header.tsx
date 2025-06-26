import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 2rem;
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
  }
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #667eea;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: scrolled ? 'rgba(10, 10, 10, 0.98)' : 'rgba(10, 10, 10, 0.95)',
        boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.3)' : 'none'
      }}
    >
      <Nav>
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shahid Zahoor
        </Logo>

        <NavLinks isOpen={isOpen}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </NavLinks>

        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 