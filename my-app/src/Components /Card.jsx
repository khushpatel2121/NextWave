import React from 'react';
import styled from 'styled-components';
// import Social from "../assets/social.png";
import {GoMegaphone} from "react-icons/go";
import {AiOutlineCheckCircle} from 'react-icons/ai';
import Atropos from "atropos/react";
// import "atropos/atropos.css";

const Img = styled.img`
height: 70px;
width: 70px;
background-color:#16f5bb;
border-radius: 50%;
object-fit: cover;
`
const Button = styled.button`
width: fit-content;
border: none;
padding: 5px;
background-color: transparent;
color:#05396c;


&:hover{
 border-bottom: #eee 2px solid ;
};

cursor: pointer;
margin-bottom: 10px;
&:disabled{
color: #16f5bb;
background-color: #eee;
cursor: not-allowed;
}

`

const Span = styled.span`
font-size: 50px;
background-color:#05396c ;
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
color: white;
border-radius: 50%;
width: 80px;
margin-top: -40px;
margin-left: 20px;
-webkit-box-shadow: 1px 1px 23px 4px rgba(194,194,194,1);
-moz-box-shadow: 1px 1px 23px 4px rgba(194,194,194,1);
box-shadow: 1px 1px 23px 4px rgba(194,194,194,1);
`
const Heading = styled.h1`
font-family: 'Chakra Petch', sans-serif;
font-size: 25px;
`
const Desc = styled.p`
font-size: 15px;
letter-spacing: 1px;
width: 100%;
color: #717f8a;
`
const Details = styled.div`

display: flex;
flex-direction: column;
padding: 30px;
justify-content: center;
gap: 20px;
/* align-items: center; */
text-align: start;

`

const Container = styled.div`
/* background-color: #FEFBF6; */
/* background-color: #ecf8f9; */
/* background-color: aliceblue; */
/* background-color:#5CDB95 ; */
background-color:white;
/* background-color: #05396c; */
/* background-color: #0A4D68; */
/* justify-content: center; */
/* transition: background-image 3s; */
/* /* transition: background-image 4s ; */
/* padding: 20px; */
/* background-image: linear-gradient(to top right,#16f5bb,#5CDB95); */
height:260px;
width: 380px;
display: flex;
flex-direction: column;

-webkit-box-shadow: 1px 1px 23px 4px rgba(194,194,194,1);
-moz-box-shadow: 1px 1px 23px 4px rgba(194,194,194,1);
box-shadow: 1px 1px 23px 4px rgba(194,194,194,1);
position: relative;
transition: opacity 2s linear;
border-radius:15px ;
font-family: 'Roboto', sans-serif;
justify-content: space-between;
z-index: 1;

&::before{
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* background-image: linear-gradient(to bottom right, #ADD8E6, #05396c); */
  background-color: #05396c;


  z-index: -1;
  transition: opacity 0.5s linear;
  opacity: 0;
  border-radius:15px ;
}


&:hover::before{
  opacity: 1;
}

&:hover ${Desc}{
  color: white;
}

&:hover ${Span}{
  
  background-color:white;
  color: #05396c;
}

&:hover ${Heading}{
  color: white;
}

&:hover ${Button}{
  color: white;
}
`

const Wrapper = styled.div`

`





const Card = () => {
  return (
    <div>
      <Container>
       <Wrapper>
       {/* <Atropos
       activeOffset={40}
        shadowScale={1.05}
        onEnter={() => console.log('Enter')}
        onLeave={() => console.log('Leave')}
        onRotate={(x, y) => console.log('Rotate', x, y)}
       > */}

          <Span>
          <GoMegaphone/>
          </Span>
           <Details>
              <Heading>Social Media Marketing</Heading>
              <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. 
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              </Desc>
             <Button>Learn More</Button>
           </Details>
       {/* </Atropos> */}
       </Wrapper>
      </Container>
    </div>
  )
}

export default Card
