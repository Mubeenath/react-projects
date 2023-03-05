import React, { useEffect, useState } from 'react'

function EffectData() {
    const [posts, setPosts] = useState([]);

    useEffect (() =>{fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => setPosts(posts.splice(0,5)))
},[])
  return (
    <div>
        <h2>Fetching an API data </h2>
        {posts.map((post) =>
        <div key={post.id}>
         <h1>{post.title}</h1>
         </div>
         )};
      
    </div>
  )
}

export default EffectData
