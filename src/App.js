import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Loader from './Loader';
import UnsplashImage from './UnsplashImage';
import styled, { createGlobalStyle } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

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
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com/";
    const accessKeyUnsplash = process.env.REACT_APP_ACCESS_KEY_UNSPLASH;
    const count = 10;
    axios.get(`${apiRoot}/photos/random?client_id=${accessKeyUnsplash}&count=${count}`)
      .then(res => {
        console.log(res.data);
        setImages([...images, ...res.data]);
      });
  };

  return (
    <div>
      <Header />
      <GlobalStyle />

      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImages>
          {images.map((image, index) => (
            <UnsplashImage url={image.urls.thumb} key={`${image.id}${index}`} />
          ))}
        </WrapperImages>
      </InfiniteScroll>
    </div>
  );
}

export default App;
