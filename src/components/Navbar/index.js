import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { 
  Nav, 
  NavbarContainer,
  NavLogo, 
  MobileIcon,
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink,

} from './NavbarElements';


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

    return (
      <>
          <Nav scrollNav={scrollNav}>
            <NavbarContainer>
              <NavLogo to='/' onClick={toggleHome}>Agentes V </NavLogo>
              <MobileIcon onClick={toggle}>
               <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks 
                    to="top"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    activeClass="active"
                  >
                    Top
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks 
                    to="mais"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    activeClass="active"
                  >
                    Mais
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks 
                    to=""
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    activeClass="active"
                  >
                    Reyna
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks 
                    to="signup"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    activeClass="active"
                  >
                    Sign Up
                  </NavLinks>
                </NavItem>
              </NavMenu>
              <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
              </NavBtn>
            </NavbarContainer>
          </Nav>
      </>
    );
}

export default Navbar
