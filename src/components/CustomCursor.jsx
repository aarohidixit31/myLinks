import React, { useEffect } from "react";
import "./CustomCursor.css";

/*
 Custom cursor: inner dot + outer ring that follows mouse.
 Works without external libs.
*/
export default function CustomCursor() {
  useEffect(() => {
    const inner = document.querySelector(".cursor-inner");
    const outer = document.querySelector(".cursor-outer");
    let mX = 0, mY = 0, oX = 0, oY = 0;

    function move(e) {
      mX = e.clientX;
      mY = e.clientY;
      inner.style.transform = `translate(${mX}px, ${mY}px)`;
    }
    function loop() {
      oX += (mX - oX) * 0.12;
      oY += (mY - oY) * 0.12;
      outer.style.transform = `translate(${oX}px, ${oY}px)`;
      requestAnimationFrame(loop);
    }
    function addHover() {
      document.querySelectorAll("a, button, .link-card").forEach(el=>{
        el.addEventListener("mouseenter", ()=> {
          inner.classList.add("cursor-hover");
          outer.classList.add("cursor-hover");
        });
        el.addEventListener("mouseleave", ()=> {
          inner.classList.remove("cursor-hover");
          outer.classList.remove("cursor-hover");
        });
      });
    }

    window.addEventListener("mousemove", move);
    loop();
    addHover();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div className="cursor-inner" aria-hidden="true"></div>
      <div className="cursor-outer" aria-hidden="true"></div>
    </>
  );
}
