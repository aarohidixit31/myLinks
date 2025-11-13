import React from "react";
import "./Footer.css";

export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="container footer-inner">
        <div>Made with <span className="heart">💜</span> by Aarohi Dixit- {year}</div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#links">Links</a>
        </div>
      </div>
    </footer>
  );
}
