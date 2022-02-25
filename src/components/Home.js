import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
// import { useSelector } from 'react-redux';
import { useGetAllProductsQuery } from '../features/productApi';

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log(data, error, isLoading);

  // const { items, status } = useSelector(state => state.products);
  // console.log('>> slice', items, status);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  return (
    <div className="home-container">
      {isLoading ?
        <p>Loading..</p> : error ?
          <p>{error.status} | {error.error}</p> :
          <>
            <h2>New Arrivals</h2>
            <div className="products">
              {data?.map(product => (
                <div key={product.id} className="product">
                  <h3>{product.name}</h3>
                  <img src={product.image} alt="" />
                  <div className="details">
                    <span>{product.desc}</span>
                    <span className="price">${product.price}</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)} > Add To Cart </button>
                </div>
              ))}
            </div>
          </>
      }
    </div>
  );
}

export default Home