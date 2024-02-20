import { useState } from 'react'
import Services from '../Components /Services'
import Home from './Home'

import Portfolio from '../Components /Portfolio'
// import Pricing from './pages/'
import About from './About'
import Testimonail from '../Components /Testimonials/Testimonail'
// import Footer from '../Components /footer';
import Contac from '../Components /Contact'
import Navbar from "../Components /Navbar"
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;



`

function Main() {

  
 

  return (
    <>
    <Container>

      <Home/>
      {/* <Navbar /> */}
     
      {/* <Contac /> */}
    </Container>
    </>

  )
}

export default Main

