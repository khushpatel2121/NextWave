import React from 'react'
import styled from 'styled-components';
import {GrContactInfo} from 'react-icons/gr';
import Digital from "/Users/khushpatel/Desktop/commited/NextWave/my-app/src/assets/undraw_team_collaboration_re_ow29.svg"


const Container = styled.div`
padding: 50px 0px 0px 0px;
`
const Wrapper = styled.div`
display: flex;
height: 80vh;
padding: 50px 50px 0px 50px;

`


const Left = styled.div`
flex: 1;
padding:30px;
display: flex;
flex-direction: column;
gap: 30px;
;
`
const Heading = styled.h1`
font-size: 35px;
/* color: #05396c; */
background: linear-gradient(
    to bottom left,
    #05396c,#05396d
  );
-webkit-text-fill-color: transparent;
 -webkit-background-clip: text;
font-family: 'Roboto', sans-serif;
padding-bottom: 10px;
display: flex;

align-items: center;
gap: 20px;

`
const Desc = styled.p`
font-size: 16px;
letter-spacing: 2px;
word-spacing: 2px;
line-height: 1.5;
width: 100%;
/* color: #717f8a; */
font-family: 'Chakra Petch', sans-serif;
`
const Button = styled.button`
list-style: none;
color: white;
/* font-family: 'Mogra', cursive; */
font-family: 'Chakra Petch', sans-serif;
font-size: 16px;
border: 3px solid #05396c;
padding: 10px;
background-color: #05396d;
transform: skew(-14deg);
transition: background-color .2s ease-in;
cursor: pointer;
font-weight: 900;
width: fit-content;
`


const Span = styled.span`
color: #05396c;
font-family: 'Oswald', sans-serif;;
font-size: 38px;    
font-weight: 700;
/* border: 5px solid #05396c; */
padding: 5px 10px 5px 10px;


`
const Span2 = styled.span`
background: linear-gradient(
    to bottom left,
    #05396c,#05396d
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: 900;
    `
    const Desc2 = styled.p`
    font-size:18px;
    color:#05396c;
    font-family: 'Roboto', sans-serif;
    
    `
    const Right = styled.div`
    flex: 1;

    `
    const Img = styled.img`
    height: 100%;
    width: 100%;
    `


const About = ({toggle}) => {
  return (
    <div>
      <Container id='about'>
        <Wrapper>
            <Left>
              <Heading>ABOUT US</Heading>
              <Desc2>
               We  help every business to <Span2>GO ONLINE</Span2> and <Span2>GROW ONLINE</Span2>.
              </Desc2>
              <Desc>
              At <Span>
                NextWave
              </Span>, we are passionate about helping businesses thrive in the digital landscape. We understand the ever-evolving nature of the online world and aim to equip our clients with effective strategies and solutions to maximize their online presence, drive targeted traffic, and achieve their business goals.

Our team of experienced digital marketers, creative designers, and tech-savvy professionals work collaboratively to deliver customized digital marketing campaigns that cater to the unique needs of each client. We pride ourselves on staying at the forefront of industry trends and utilizing the latest tools and techniques to provide innovative and results-driven solutions.
              </Desc>
            
              <Button
              onClick={toggle}
              >Contact Us</Button>
            </Left>
            <Right>
              <Img
                src={Digital}
                alt="Digital"
              />
            </Right>

        </Wrapper>
      </Container>
    </div>
  )
}

export default About
