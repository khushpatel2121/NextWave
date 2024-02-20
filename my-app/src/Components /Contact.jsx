import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import Fade from 'react-reveal/Fade';

const Wrapper1 = styled.div`

`


const Conatiner = styled.div`
position:fixed;
right: 30px;
bottom: 30px;
background-color: blue;
height: 50vh;
width: 30vh;
z-index:9999;
border: 2px solid #05396c;
border-top-right-radius:30px;
border-top-left-radius:30px;
background-color: rgba(92, 219, 149, 0.8);
display:${({isOpen})=>(isOpen ? "flex" : "none")};
transition: display 0.5s ease;
flex-direction: column;

`
const Heading = styled.div`
border-top-right-radius:27px;
border-top-left-radius:27px;
background-color:#05396c ;
height: 80px;
width: 100%;
border-bottom: 2px solid #05396c;
display: flex;
justify-content: center;
align-items: center;
`
const Logo = styled.h1`
color: #5CDB95;
font-family: 'Oswald', sans-serif;;
font-size: 30px;    
font-weight: 700;
/* border: 5px solid #05396c; */


`


const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 100%;
padding: 20px;

`
const Title = styled.h1`

`
const Details = styled.div`
display: flex;
flex-direction: column;
gap: 20px;

`
const ContactItem = styled.div`
display: flex;
align-items: center;
font-size:14px;
color: #05396c;
gap: 5px;
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
const RLink = styled(Link)`
text-decoration: none;
color: inherit;
`

const Contac = ({isOpen,toggle}) => {
  return (
    <div>
   <Wrapper1>

    <Conatiner isOpen={isOpen} onClick={toggle}>
    <Fade bottom>
       <Heading>
             <Logo>
                Contact Us
             </Logo>
       </Heading>
         <Wrapper>
         <Details>

               <ContactItem>
                  <PhoneIcon/> +91 1234567890
               </ContactItem>
               <ContactItem>
                  <MailOutlineIcon/> nextwavedigital@gmail.com
               </ContactItem>
               <ContactItem>
                  <FmdGoodOutlinedIcon/> 
                  
                  804 Golden Triangle Complex,Sardar Patel Stadium Rd, Chaitanya Nagar, Navrangpura, Ahmedabad, Gujarat 380014
               </ContactItem>
         </Details>
               <SocialContainer>
<RLink to="/" >
<SocialIcon bg="3B5999">
        <InstagramIcon/>
    </SocialIcon>
</RLink>
<RLink to="/" >

    <SocialIcon bg="E4405F">
        <FacebookIcon/>
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
         </Wrapper>
         
    </Fade>
    </Conatiner>
   </Wrapper1>
    </div>
  )
}

export default Contac



