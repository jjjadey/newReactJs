import React from 'react'

const Home = () => {
  return (
    <div className="home-container">
      <>
        <h2>New Arrivals</h2>
        <div className="products">
          <div className="product">
            <h3>product name</h3>
            img
            {/* <img /> */}
            <div className="details">
              <span>description</span>
              <span className="price">10</span>
            </div>
            <button > Add To Cart </button>
          </div>
        </div>
      </>

    </div>
  );
}

export default Home