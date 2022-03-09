import React, { useEffect, useState } from 'react';
import Header from './Header';
import Loader from './Loader';
import styled, { createGlobalStyle } from 'styled-components';

import axios from 'axios';
import UnsplashImage from './UnsplashImage';

//styles
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: sans-serif;
  }
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
  grid-auto-rows: 300px;
`;


function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiRoot = "https://api.unsplash.com/";
    const accessKeyUnsplash = process.env.REACT_APP_ACCESS_KEY_UNSPLASH;
    const count = 10;
    axios.get(`${apiRoot}/photos/random?client_id=${accessKeyUnsplash}&count=${count}`)
      .then(res => {
        setImages([...images, ...res.data]);
      });

    console.log(images)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <GlobalStyle />
      <Loader />
      <WrapperImages>
        {images.map((image, index) => (
          <UnsplashImage url={image.urls.thumb} key={`${image.id}${index}`} />
        ))}
      </WrapperImages>

    </div>
  );
}

export default App;
