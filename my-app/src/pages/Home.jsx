import React from 'react'
import styled from "styled-components"
import Navbar from '../Components /Navbar'
import Ads from "../assets/undraw_social_influencer_re_beim.svg"
import ScrollAnimation from '../assets/200w.gif';
import Contac from '../Components /Contact';
import { useState } from 'react';
import Services from '../Components /Services';
import About from './About';
import Footer from '../Components /footer';
import Portfolio from '../Components /Portfolio';
import Testimonail from '../Components /Testimonials/Testimonail';
import TopButton from '../Components /TopButton';
const Container = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background-color:white;  
user-select: none;
`
const Wrapper = styled.div`
display: flex;
position: relative;
justify-content: center;
align-items: center;
padding-top:100px ;
`
const Left = styled.div`
flex: 2;`

const Details = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
justify-content: center;
gap: 20px;

/* align-items: center; */
`

const Heading = styled.h1`
z-index: 99;
font-family: 'Roboto', sans-serif;
font-size: 50px;
color: grey;
font-weight: 900;
margin-left: 100px;
`
const Span = styled.span`
      
color:#05396c;
`

const Quote = styled.p`
font-size: 20px;
margin-left: 100px;
font-family: 'Roboto', sans-serif;
color:black;
font-weight: 500;
`

const Desc = styled.p`
z-index: 99;
font-family: 'Roboto', sans-serif;
font-size: 13px;
color: black;

margin-left: 100px;
`

const Right = styled.div`
flex: 1;
`
const Image = styled.img`
height: 60vh;
width: 40vw;
padding: 30px;
margin-right: 50px;

`
// const Scroll = styled.div`
// width: 100%;
// display: flex;
// align-items: center;
// justify-content: center;
// flex-direction: column;
// color: white;
// `
const Img = styled.img`
height: 50px;
`
const Home = () => {

 const [isOpen, setOpen] = useState(false);

 const toggle =()=>{
   setOpen(!isOpen)
   console.log(isOpen)
 }


  return (
   <>
    
    <Container id='home'>
    <Navbar toggle={toggle}/>
    <Wrapper>
   <Left>
<Details>
<Quote>
Get Your Business Online
</Quote>
<Heading>
<Span>
Digitalize Your Business:
</Span>
   Connect, Engage, and Succeed Online!
</Heading>

<Desc>
At <Span>
    NextWave
</Span>, we are passionate about helping businesses thrive and succeed in the digital world. As a leading digital marketing agency, we specialize in providing comprehensive and results-driven strategies that drive brand growth, enhance online visibility, and maximize ROI
</Desc>
</Details>
   </Left>
<Right>
<Image src={Ads}/>
</Right>
    </Wrapper>
    {/* <Scroll>
    Scroll Down
      <Img src={ScrollAnimation} alt=""/>
    </Scroll> */}
    </Container>
    <Contac isOpen={isOpen} toggle={toggle}/>
    <Services/>
      {/* <Portfolio/> */}
     
      <About isOpen={isOpen} toggle={toggle}/>
      <Footer isOpen={isOpen} toggle={toggle}/>
      <TopButton/>
   </>
  )
}

export default Home
