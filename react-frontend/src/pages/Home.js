import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
  <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Shoe'Fix</h1>
      <p className="mb-5 text-2xl font-semibold">Få dine nye sko her på Shoe'Fix. Vi har det bedste katalog til dig!</p>
      <Link to="/shop"><button className="btn btn-primary">Se vores udvalg</button></Link>
    </div>
  </div>
</div>  
    </>
  );
}

export default Home;
