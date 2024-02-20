import React from 'react'
import styled from 'styled-components';
import Card from './Card';
import { MdOutlineAutoGraph } from 'react-icons/md'

const Service = styled.div`
display: flex;
justify-content: space-between;
align-items: center;


padding: 40px;
min-height: 100vh;
`
const Wrapper = styled.div`
flex: 1;
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
`
const Heading = styled.h1`
font-size: 20px;
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
font-size: 30px;
color:black;
font-family: 'Roboto', sans-serif;
font-weight: 900;

`
const CW = styled.div`
flex: 2;
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 60px;

margin-top: 100px;

`
const Span = styled.span`
font-size: 30px;
background-image: linear-gradient(
    to bottom left,
    #05396c,#05396d
  );
  border-radius: 50%;
 padding: 10px;
color: white;
display: flex;
justify-content: center;
align-items: center;
`
const Span2 = styled.span`
background: linear-gradient(
    to bottom left,
    #05396c,#05396d
  );
  -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
`
const Text = styled.p`
font-size: 15px;
letter-spacing: 1px;
width: 100%;
color: #717f8a;
font-family: 'Chakra Petch', sans-serif;
`


const Services = () => {
  return (
    <div>
      <Service  id='services'>
        <Wrapper>
          <Heading><Span><MdOutlineAutoGraph /></Span>Our Services</Heading>
          <Desc>
          Join the
          <Span2> Digital Wave:</Span2> Tap into New Markets and Drive Growth!
          </Desc>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </Text>
        </Wrapper>
        <CW>

          <Card />
          <Card />
          <Card />
          <Card />
        </CW>
      </Service>
    </div>
  )
}

export default Services
