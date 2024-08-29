import React from "react";
import Image from "next/image";
import calender from "../../assets/images/calender.png"
import news1 from "../../assets/images/delivery-1.avif"
import news2 from "../../assets/images/news-1.jpg"
import news3 from "../../assets/images/show-3.avif"

const Blog: React.FC = () => {
  return (
    <section className="blog">
      <div className="blog-title">
      <p>News and Updates</p>
        <h1>Recent Articles</h1>
        </div>
      <div className="blog-container">
        <div className="blog-grid">
          <div className="blog-item">
            <Image src={news1} alt="news-1" />
            <h3>Blog Post One</h3>
            <p>Summary of blog post one.</p>
            <a href="#">Read More...</a>
            <div className="blog-overlay">
              <Image src={calender} alt="calendar" />
              <p>December 24, 2024</p>
            </div>
          </div>
          <div className="blog-item">
            <Image src={news2} alt="news-1" />
            <h3>Blog Post Two</h3>
            <p>Summary of blog post two.</p>
            <a href="#">Read More...</a>
            <div className="blog-overlay">
              <Image src={calender} alt="calendar" />
              <p>December 24, 2024</p>
            </div>
          </div>
          <div className="blog-item">
            <Image src={news3} alt="news-1" />
            <h3>Blog Post Three</h3>
            <p>Summary of blog post three.</p>
            <a href="#">Read More...</a>
            <div className="blog-overlay">
              <Image src={calender} alt="calendar" />
              <p>December 24, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
