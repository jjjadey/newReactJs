import React from 'react';
import styled from 'styled-components';

const Heading = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: 'Oswald',sans-serif;
  margin-bottom: 1em;
`;

const Header = () => {
  return (
    <Heading>
      <H1>Infinite Scroll Image Gallery</H1>
      <p>Using React and Unsplash</p>
    </Heading>
  )
}

export default Header