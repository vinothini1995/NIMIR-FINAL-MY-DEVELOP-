import React, { useState } from 'react';
import { AppBar, Toolbar, Menu, MenuItem, Box, IconButton } from '@mui/material';
import { Menu as MenuIcon, ArrowDropDown } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';
import logo from '../images/logo-main1.jpg';

// Styled components using @mui/system
const HeaderContainer = styled(AppBar)(({ theme }) => ({
  background: 'white',
  zIndex: 1000, // Ensure header stays above other content
}));

const NavLinks = styled(Box)(({ theme, mobileMenuOpen }) => ({
  display: 'flex',
  marginLeft: 'auto',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: mobileMenuOpen ? 'block' : 'none',
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: '60px',
    left: '0',
    zIndex: 999, // Ensure nav links stay above the banner
    '& .MuiMenu-paper': {
      width: '100%', // Ensure dropdown takes full width on mobile
      margin: 0, // Remove default margin
    },
  },
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: '#2d87ff',
  textDecoration: 'none',
  margin: '10px',
  fontSize: '16px',
  '&.active': {
    fontWeight: 'bold',
  },
  '&:hover': {
    color: '#eeb624',
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
    margin: '10px 0',
    padding: '10px',
    textAlign: 'center',
    fontSize: '18px',
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
}));

const LogoImage = styled('div')(({ theme }) => ({
  '& img': {
    height: '70px',
    marginRight: '10px',
  },
}));

const LogoText = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingLeft: '10px',
  borderLeft: '5px solid #eeb624', // Apply the border-left
  color: '#eeb624',
  fontSize: '12px',
  lineHeight: 1.5,
  fontWeight: 'bold',
}));

const MobileMenuIcon = styled(MenuIcon)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    color: 'white',
    backgroundColor: '#eeb624', // Apply background color to mobile menu icon
    borderRadius: '50%', // Optional: make it round
    padding: '5px', // Add padding for better appearance
    marginLeft: 'auto',
  },
}));

const DropdownButton = styled(IconButton)(({ theme }) => ({
  color: '#2d87ff',
  background: 'white',
  padding: 0,
}));

const DropdownMenu = styled(Menu)(({ theme }) => ({
  '& .MuiMenu-paper': {
    width: '320px',
    
    [theme.breakpoints.down('md')]: {
      width: '100%', // Ensure dropdown takes full width on mobile
    },
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menus = [
    { title: 'Home', path: '/', dropdown: false },
    { title: 'About', path: '/about', dropdown: false },
     { title: 'Services', path: '/services', dropdown: true, options: [
      { title: 'Enterprise AI Consulting Services', path: '/services/EAI' },
      { title: 'Machine Learning Solutions', path: '/services/MLS' },
      { title: 'Generative AI Services', path: '/services/GAS' },
      { title: 'Computer Vision Services', path: '/services/CVS' },
      { title: 'AI Chatbot Development', path: '/services/ACD' },
      { title: 'OCR Services', path: '/services/OCR' },
      { title: 'Cybersecurity', path: '/services/CS' },
      { title: 'Cloud Business Transformation', path: '/services/CBT' },
      { title: 'Data Strategy', path: '/services/DS' },
    ]},
    { title: 'Expertise', path: '/expertise', dropdown: true, options: [
      { title: 'Artifical Intelligence & Machine Learning', path: '/expertise/ExpertiseAIML' },
      { title: 'Generative AI ', path: '/expertise/ExpertiseGAI' }
    ]},
    { title: 'Case Study', path: '/casestudy', dropdown: true, options: [
      { title: 'InnovationStreet', path: '/casestudy/InnovationStreet' },
      { title: 'CloudNative', path: '/casestudy/CloudNative' },
      { title: 'Empower Innovation', path: '/casestudy/Empower' },
      { title: 'Unlocking Enterprise Success', path: '/casestudy/Unlocking' },
      { title: 'Cybersecurity', path: '/casestudy/CasestudyCS' },
      { title: 'Architecting Excellence', path: '/casestudy/Architech' }
    ]},
    { title: 'Whitepapers', path: '/whitepapers', dropdown: false, options: [
      { title: 'Sub whitepapers 1', path: '/service/whitepapers1' },
      { title: 'Sub whitepapers2 2', path: '/service/whitepapers2' }
    ]},
    { title: 'Careers', path: '/careers', dropdown: false },
    { title: 'Connect Now', path: '/connectnow', dropdown: false }
  ];

  return (
    <HeaderContainer position="static">
      <Toolbar>
        <LogoContainer>
          <LogoImage>
            <img src={logo} alt="Logo" />
          </LogoImage>
          <LogoText>
            <div>Arise</div>
            <div>Awake</div>
            <div>NonStop</div>
          </LogoText>
        </LogoContainer>
        <IconButton onClick={toggleMobileMenu} className="MenuIcon">
          <MobileMenuIcon />
        </IconButton>
        <NavLinks mobileMenuOpen={mobileMenuOpen}>
          {menus.map((menu, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
              <StyledNavLink to={menu.path}>
                {menu.title}
              </StyledNavLink>
              {menu.dropdown && (
                <>
                  <DropdownButton onClick={(e) => handleClick(e, menu.title)}>
                    <ArrowDropDown />
                  </DropdownButton>
                  <DropdownMenu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && currentMenu === menu.title}
                    onClose={handleClose}
                  >
                    {menu.options.map((option, idx) => (
                      <MenuItem
                        key={idx}
                        onClick={handleClose}
                        component={NavLink}
                        to={option.path}
                      >
                        {option.title}
                      </MenuItem>
                    ))}
                  </DropdownMenu>
                </>
              )}
            </Box>
          ))}
        </NavLinks>
      </Toolbar>
    </HeaderContainer>
  );
};

export default Header;
