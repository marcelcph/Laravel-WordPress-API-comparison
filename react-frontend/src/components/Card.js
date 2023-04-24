import { useEffect, useState } from "react";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";


const api = new WooCommerceRestApi({
  url: "https://bnopone.dk/wordpress/",
  consumerKey: "ck_bc6eafe5f2451144acc724fb7edc886420eeeb2d",
  consumerSecret: "cs_5c6987b6438dcb1eba5fbbf0c54d4d2bfa572a1b",
  version: "wc/v3",
});

function Card() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProducts();
  }, []);

  let fetchProducts = () => {
    api
      .get("products", {
        per_page: 20,
      })
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("API error:", error);
        setLoading(false); 
      });

  };
    if (loading) {
      return <div>Loading...</div>;
    }
  return (
    <>
    <div className="grid grid-cols-4 gap-4">
    {products.map((product) => {
      return (
     <div key={product.id} className="card card-compact w-72 bg-base-500 shadow-xl">
      <div className="card-body rounded-lg shadow-lg h-full">
        <div className="p-4 h-full">
          <div className="my-4">
            <img src={product.images[0]?.src} alt={product.name} />
            <h2 className="card-title text-lg font-bold max-h-20">{product.name}</h2>
            <p>{product.description.replace(/<\/?p>/g, '')}</p>
            <p>{product.price} DKK</p>
            
            
          </div>
        </div>
      </div>
    </div>
      );
    })}
    </div>
    </>
  );
}
export default Card






/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Card = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://bnopone.dk/wordpress/wp-json/wp/v2/posts')
      .then((res) => setPosts(res.data));
  }, []);

  const postCards = posts.map((post) => (
    <div key={post.id} className="card card-compact w-72 bg-base-500 shadow-xl">
      <div className="card-body rounded-lg shadow-lg h-full">
        <div className="p-4 h-full">
          <div className="my-4">
            <h2 className="card-title text-lg font-bold max-h-20">{post.title.rendered}</h2>
            <div
              className="text-white text-base mt-2"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        </div>
      </div>
    </div>
  ));





  return (
    <>
      <div className="flex flex-wrap justify-center m-6 ">{postCards}</div>
      
    </>
  );
}

export default Card;
*/