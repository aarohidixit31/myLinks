import React, { useEffect, useRef } from "react";
import "./Hero.css";

/* Typewriter effect implemented in JS for reliability */
function useTypewriter(text, speed = 80) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let i = 0;
    el.textContent = "";
    const id = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return ref;
}

export default function Hero() {
  const typedRef = useTypewriter("Hey, I'm Aarohi...CSE Student & Tech Creator<3 ", 50);

  return (
    <header className="hero" id="home">
      <div className="bg-glow-1" aria-hidden="true"></div>
      <div className="bg-glow-2" aria-hidden="true"></div>

      <div className="container hero-inner">
        <div className="hero-left">
          <img src="/my.JPG" alt="Aarohi" className="hero-photo" />
        </div>

        <div className="hero-right">
          <h1 className="hero-title"><span ref={typedRef}></span></h1>
          <p className="hero-sub">
            I build clean web experiences, make short tech reels, and enjoy solving interesting problems.
          </p>

          <div className="hero-ctas">
            <a className="btn-primary" href="#links">View My Links</a>
            <a className="btn-ghost" href="#about">About Me</a>
          </div>
        </div>
      </div>
    </header>
  );
}
