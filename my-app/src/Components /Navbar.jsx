
import React from 'react'
import styled from "styled-components"
import {Link as LinkS} from "react-scroll";
import { animateScroll as scroll } from 'react-scroll';

const Container = styled.div`
position:relative;
display: flex;
height: 76px;
width: 100%;
background-color:white;
padding-top:30px ;
`


const Left = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: start;

`
const Logo = styled.div`
color:#05396c;
font-family: 'Oswald', sans-serif;;
font-size: 50px;    
font-weight: 700;
/* border: 5px solid #05396c; */
padding: 5px 10px 5px 10px;
margin-left: 40px;
`

const Right = styled.div`
flex: 2;
display: flex;
justify-content: flex-end;
align-items: center;
`
const Menu = styled.div`
display: flex;
margin-right: 70px;

`
const MenuItem = styled.ul`
display: flex;
gap: 30px;
align-items: center;
`
const MenuListItem = styled.li`
padding: 10px;
border-bottom: 2px solid #05396c;
list-style: none;
color:#05396c;
/* font-family: 'Mogra', cursive; */
font-family: 'Chakra Petch', sans-serif;
font-size: 20px;

transition: color .2s ease-in;
cursor: pointer;

&:hover{
    color: #E2725B;
}
`
const MenuListItemc = styled.li`
list-style: none;
color:white;
/* font-family: 'Mogra', cursive; */
font-family: 'Chakra Petch', sans-serif;
font-size: 20px;
border: 3px solid #05396c;
padding: 10px;
background-color: #05396c;
transform: skew(-14deg);
transition: background-color .2s ease-in;
cursor: pointer;

&:hover{
    
    background-color: #e2725b97;
}
`
const SLink = styled(LinkS)`
text-decoration: none;
color: inherit;
`



const Navbar = ({toggle}) => {
  return (
    <>
    <Container>
        <Left>
          <Logo>
            SociaXpert
          </Logo>
        </Left>
        <Right>
         <Menu>
              <MenuItem>
              <SLink to='services'
              smooth={true} duration={500}
         spy={true}
         exact='true'
         offset={80}
              >

                <MenuListItem>
                   Services
                </MenuListItem>
              </SLink>

              <SLink to='protfolio'
              smooth={true} duration={500}
         spy={true}
         exact='true'
         offset={40}
              >

                <MenuListItem>
                   Portfolio
                </MenuListItem>
              </SLink>

              <SLink 
              
              >

                <MenuListItem>
                   Pricing
                </MenuListItem>
              </SLink>

              <SLink to='about'
              smooth={true} duration={500}
         spy={true}
         exact='true'
         offset={80}
              >

                <MenuListItem>
                    About Us
                </MenuListItem>
              </SLink>
                <MenuListItemc
                onClick={toggle}
                >
                   Contact
                </MenuListItemc>
                
              </MenuItem>
         </Menu>
        </Right>
    </Container>
    </>
  )
}

export default Navbar
