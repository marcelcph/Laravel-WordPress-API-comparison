import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://bnopone.dk/wordpress/wp-json/wp/v2/posts')
      .then((res) => setPosts(res.data));
  }, []);

  const removePrisParagraph = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const prisElement = doc.getElementById('pris');

    if (prisElement) {
      prisElement.remove();
    }

    return doc.body.innerHTML;
  };

  const extractPriceFromPrisParagraph = (html) => {
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const prisElement = doc.getElementById('pris');

    if (prisElement) {
      const prisText = prisElement.textContent.trim();
      const price = parseInt(prisText, 10);
      return price;
    }
  
    return null;
  };

  const postCards = posts.map((post) => {
    const contentWithoutPris = removePrisParagraph(post.content.rendered);
    const price = extractPriceFromPrisParagraph(post.content.rendered);

    return (
      <div key={post.id} className="card card-compact w-72 bg-base-500 shadow-xl">
        <div className="card-body rounded-lg shadow-lg h-full">
          <div className="p-4 h-full">
            <h2 className="card-title text-lg font-bold max-h-20">{post.title.rendered}</h2>
            <div
              className="text-white text-base mt-2"
              dangerouslySetInnerHTML={{ __html: contentWithoutPris }}
            />
            <div className="price mt-4">{price}</div>
            {console.log(typeof price)}
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="flex flex-wrap justify-center m-6">{postCards}</div>
    </>
  );
};

export default Card;