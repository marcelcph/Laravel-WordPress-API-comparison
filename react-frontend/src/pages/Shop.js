import React from "react";
import Card from "../components/Card.js";

function Shop() {
  return (
    <>
      <div className="container">
        <div className="bg-base-200 p-12">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src="https://images.unsplash.com/photo-1610022065010-5b4a4db9273e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1586&q=80" 
                className="max-w-xl rounded-lg shadow-2xl" alt="hero-shop" />
              <div className="col-4">
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <div className="py-6">
                  <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda .</p>
                  <p>excepturi exercitationem quasi In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-36 my-24">
          <h1 className="font-bold text-5xl text-center mb-20">Product list of Sneakers</h1>
          <Card />
        </div>
      </div>
    </>
  );
}

export default Shop;
