import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRouter
} from './SidebarElements';
 

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="omen" onClick={toggle}>Omen</SidebarLink>
                    <SidebarLink to="cypher" onClick={toggle}>Cypher</SidebarLink>
                    <SidebarLink to="reyna" onClick={toggle}>Reyna</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
              <SideBtnWrap>
                    <SidebarRouter to='/signin'>Sign in</SidebarRouter>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
