import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { animateScroll as scroll } from 'react-scroll';



const Container = styled.div`
display: flex;
/* background-color: #05396c; */
padding: 20px 60px 20px 60px;
`
const Left = styled.div`
flex: 1;
padding: 20px;
flex-direction: column;
display: flex;
gap: 20px;
`
const Logo =styled.h1`
font-size: 50px;
color: white;
font-family: 'Oswald', sans-serif;

`
const Desc =styled.p`
font-size: 20px;
margin: 20px 0px;
text-align: left;
width: 80%;
/* font-family: 'Roboto', sans-serif; */
font-family: 'Chakra Petch', sans-serif;
color: white;
`
const SocialContainer = styled.div`
display: flex;
gap: 10px;
`
const SocialIcon =styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
color: white;
background-color: #${(props)=>props.bg};
align-items: center;
justify-content: center;
cursor: pointer;
`

const Center =styled.div`
flex:1;
padding: 20px;
display: flex;
justify-content:space-between;
padding: 10px 80px 10px 30px;
align-self: center;
`
const Title = styled.h2`
margin-bottom: 20px;
font-family: 'Roboto', sans-serif;
`
const List = styled.ul`
display: flex;
flex-wrap: wrap;
flex-direction: column;
gap: 10px;
margin: 0;
padding: 0;
list-style: none;
`
const ListItem =styled.li`
 margin-bottom: 10px;
 font-family: 'Roboto', sans-serif;
 color: #05396c;
 cursor: pointer;
 `
 const Right = styled.div`
 flex: 1;
 padding: 20px;

 `

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const RLink = styled(Link)`
text-decoration: none;
color: inherit;
`

const Footer = () => {

  const toggleHome = ()=>{
    scroll.scrollToTop();
}
  return (
<Container>
    <Left>

<RLink to="/" >
{/* <Logo onClick={toggleHome}>

    NextWave
</Logo> */}
</RLink>

{/* <Desc>
There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
</Desc> */}

<SocialContainer>
<RLink to="/" >
<SocialIcon bg="3B5999">
<FacebookIcon/>
    </SocialIcon>
</RLink>
<RLink to="/" >

    <SocialIcon bg="E4405F">
    <InstagramIcon/>
       
        </SocialIcon>
</RLink>
<RLink to="/">

        <SocialIcon bg="55ACEE">
        <TwitterIcon/>
        </SocialIcon>
</RLink>
<RLink to="/" >

        <SocialIcon bg="E60023">
        <PinterestIcon/>
        </SocialIcon>
</RLink>
</SocialContainer>
    </Left>
    {/* <Center> */}
{/* <List> */}
{/* <Title>Services</Title>
          <ListItem>Web development</ListItem>
          <ListItem>Digital Marketing</ListItem>
          <ListItem>Social Media Marketing</ListItem>
          <ListItem>Strategy Consulting</ListItem>
        </List>
<List>
        <Title>Legal</Title>
          <ListItem>Terms & Condition</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Copy Rights</ListItem>
          <ListItem>Contact</ListItem>
        </List>
        <List>
        <Title>Resources</Title>
          <ListItem>Pricing</ListItem>
          <ListItem>Blog</ListItem>
    
        </List> */}
    {/* </Center> */}
    {/* <Right>
    
    </Right>
     */}
</Container>

)
}

export default Footer
