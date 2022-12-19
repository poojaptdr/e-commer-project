import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from './Context';
import HeroSection from './HeroSection';
import { Button } from './styles/Button';

const About = () => {

//   const data = {
//     name: 'pooja patidar',
//     image: './images/about.svg'
// }

const { updateAboutPage} = useGlobalContext()

useEffect(()=>updateAboutPage(), [])

  return <HeroSection />

}
export default About