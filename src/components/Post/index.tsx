import React from 'react';

import "./index.css";

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img src="https://techcrunch.com/wp-content/uploads/2023/10/23andme-leaked-data-breach.jpg?w=850&h=492&crop=1" alt="entryImage" />
      </div>
      <div className="texts">
        <h2>Hackers advertised 23andMe stolen data two months ago</h2>
        <p className="info">
          <a href="#!" className="author">Jo</a>
          <time>2023-01-06 16:45</time>
        </p>
        <p className='summary'>Genetic testing company 23andMe has been investigating a security incident after hackers advertised a trove of alleged stolen user data on a hacking forum last week. But the alleged stolen data may have been circulating for much longer than first known.</p>
      </div>
    </div>
  )
}

export default Post;