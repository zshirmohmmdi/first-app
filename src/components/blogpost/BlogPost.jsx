import React from 'react';
import './BlogPost.css';

function BlogPost({title,author,date,content}) {
  return (
    <article className="blog-post">
      <h2 className="post-title">{title}</h2>
      <div className="post-content">
        {content}
      </div>
      <div className="post-meta">
        <span className="post-author">By {author}</span>
        <span className="post-date">{date}</span>
      </div> 
    </article>
  );
}

export default BlogPost; 