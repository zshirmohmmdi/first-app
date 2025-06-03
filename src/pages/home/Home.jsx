import React, { useState } from 'react';
import BlogPost from '../../components/blogpost/BlogPost';

function Home() {
  const [posts, setPosts] = useState([
    {
      title: "Welcome to My Blog",
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      author: "Zahra Shirmohammadi",
      content: "This is my first blog post. I'm excited to share my thoughts and experiences with you. Stay tuned for more interesting content!"
    },
    {
      title: "Getting Started with React",
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      author: "Zahra Shirmohammadi",
      content: "React is a powerful JavaScript library for building user interfaces. In this post, we'll explore the basics of React and how to start your first project."
    },
    {
      title: "10 Essential Web Development Tools for 2025",
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      author: "Zahra Shirmohammadi",
      content: "Discover the most important tools that every web developer should have in their toolkit this year. From code editors to browser extensions, we'll explore how these tools can boost your productivity and help you write better code. Whether you're a beginner or an experienced developer, these tools will make your development process smoother and more efficient."
    }
  ]);

  return (
    <div>
      {posts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          date={post.date}
          author={post.author}
          content={post.content}
        />
     ))}
    </div>
  );
}

export default Home; 