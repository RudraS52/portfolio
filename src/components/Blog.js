import React from 'react';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: "How does one become a great coder/programmer?",
    summary: "Becoming a great coder involves continuous learning, practice, and dedication.",
    image: "https://qph.cf2.quoracdn.net/main-qimg-1309cb40fcd0780fbb1131459e088e34-lq", // need to replace with blog banner
    link: "https://www.quora.com/How-does-one-become-a-great-coder-programmer/answer/Rudra-Singh-1553"
  },
  {
    id: 2,
    title: "A Beginner’s Guide to Models, Views, and Controller Action Methods",
    summary: "Introduction To Model, View, Controller And Types Of Controller Action Methods",
    image: "https://www.c-sharpcorner.com/UploadFile/BlogImages/06052022112602AM/Introduction%20to%20Model%20View%20Controller%20and%20Types%20of%20Controller%20Action%20Method%20in%20ASP%20NET%20MVC%20Core.png",
    link: "https://www.c-sharpcorner.com/blogs/introduction-to-model-view-controller-and-types-of-controller-action"
  },
  {
    id: 3,
    title: "How important is coding fast in a technical interview?",
    summary: "Coding fast in a technical interview is helpful, but clear problem-solving, accuracy,",
    image: "https://qph.cf2.quoracdn.net/main-qimg-3cd7e99d02365ecc1300adf2666ebc4b-lq",
    link: "https://qr.ae/pAzqGw"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <h2>📝 My Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="blog-link">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
