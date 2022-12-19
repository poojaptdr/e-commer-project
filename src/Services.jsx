import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useGlobalContext } from './Context'
import { Button } from './styles/Button'

const Services = () => {

  const {services} = useGlobalContext()
  console.log(services)

  return (
    <Wrapper className='section'>
        <h2 className='common-heading'>Our Services</h2>
        <div className="container">
          {services.map((curElmt)=>{
            const{id, title, body} = curElmt;
            return(
              <div key={id} className='card'>
               <h4>{title}</h4>
               <p>{body}</p>
               <NavLink to='/service'>
                <Button>Read More</Button>
               </NavLink>
              </div>
            )
          })}
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 4rem 0;
background-color: ${({theme})=> theme.colors.bg};

.container{
  max-width: 120rem;
}

.card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 2rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-transform: capitalize
}

`;

export default Services