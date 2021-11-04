import React from 'react';
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
    return (
      <>
          <Nav>
            <NavbarContainer>
              <NavLogo to='/'> V </NavLogo>
              <MobileIcon onClick={toggle}>
               <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks to="omen">Omen</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="cypher">Cypher</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="reyna">Reyna</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="signup">Sign Up</NavLinks>
                </NavItem>
              </NavMenu>
              <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
              </NavBtn>
            </NavbarContainer>
          </Nav>
      </>
    );
}

export default Navbar
