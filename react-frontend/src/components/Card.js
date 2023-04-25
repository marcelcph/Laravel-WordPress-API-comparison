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
