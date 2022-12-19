import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './styles/Button';

const Error = () => {
  return (
    <Wrapper>
      <img src='https://media.istockphoto.com/id/155597883/photo/error-message.jpg?b=1&s=612x612&w=0&k=20&c=yw0iS_sJGAdLz2XGo1kM6Rkxx7qPiQ148tEva9Or7K0=' />
      <NavLink to='/'>
      <Button className='btn'>Go Back</Button>
      </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
 padding: 9rem;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 .btn{
    font-size: 1rem;
    margin-top: 2rem;
 }
`;

export default Error
