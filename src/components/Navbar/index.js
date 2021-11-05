import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
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
  })
    return (
      <>
          <Nav scrollNav={scrollNav}>
            <NavbarContainer>
              <NavLogo to='/'>Agentes V </NavLogo>
              <MobileIcon onClick={toggle}>
               <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks to="top">Top</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="mais">Mais</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="reyna">Reyna</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="signup">Sign Up</NavLinks>
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
