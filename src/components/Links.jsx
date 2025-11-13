import React from "react";
import "./Links.css";

/* Replace hrefs with your real profile URLs */
const LINKS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aarohidixit/", svg: "linkedin" },
  { name: "Inframe HackBook", href: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7360740415660023809", svg: "linkedin" },
   { name: "Stage & Sense", href: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7393766365502988288", svg: "linkedin" },
  { name: "GitHub", href: "https://github.com/aarohidixit31", svg: "github" },
  { name: "Instagram {aarohi.inframe}", href: "https://www.instagram.com/aarohi.inframe/", svg: "instagram" },
    { name: "Instagram {aarohi.speaks}", href: "https://www.instagram.com/aarohi.speaks/", svg: "instagram" },
  { name: "YouTube {aarohi.inframe}", href: "https://www.youtube.com/@aarohi.inframe", svg: "youtube" },
  { name: "YouTube {aarohi.speaks}", href: "https://www.youtube.com/@aarohi.speaks", svg: "youtube" },
  { name: "Medium", href: "https://medium.com/@aarohiinframe", svg: "medium" },
  // { name: "Email", href: "mailto:aarohidixit2831@gmail.com", svg: "mail" },
];

function Icon({type}) {
  switch(type){
    case "linkedin": return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0zM8 8h4.7v2h.1c.7-1.2 2.4-2.6 4.9-2.6 5.2 0 6.2 3.5 6.2 8V22h-5v-6.6c0-1.6 0-3.8-2.3-3.8-2.3 0-2.7 1.8-2.7 3.6V22H8V8z"/></svg>;
    case "github": return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.58 0-.29-.01-1.07-.016-2.1-3.338.73-4.042-1.61-4.042-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.09-.75.083-.73.083-.73 1.205.084 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.995.107-.774.42-1.3.76-1.6-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.3-.535-1.52.117-3.17 0 0 1.01-.323 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.405 2.29-1.554 3.297-1.23 3.297-1.23.653 1.65.243 2.87.12 3.17.77.84 1.232 1.91 1.232 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.815 1.094.815 2.21 0 1.596-.014 2.885-.014 3.276 0 .315.216.694.825.576C20.565 21.796 24 17.296 24 12c0-6.63-5.37-12-12-12z"/></svg>;
    case "instagram": return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"/></svg>;
    case "youtube": return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23.5 7.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C16.6 3.5 12 3.5 12 3.5s-4.6 0-8.6.4c-.4 0-1.4.1-2.1 1C.7 5.6.5 7.2.5 7.2S0 9.1 0 11v2c0 1.9.5 3.8.5 3.8s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.7.4 7.7.4s4.6 0 8.6-.4c.4 0 1.4-.1 2.1-1 .6-.7.8-2.3.8-2.3S24 13.9 24 12v-2c0-1.9-.5-3.8-.5-3.8zM9.8 15.1V8.9l6.1 3.1-6.1 3.1z"/></svg>;
    case "medium": return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M2 6.5v11l6.2-5.5L2 6.5zm8.7 0v11h3.2v-11h-3.2zm6.1 0L24 12v-5.5L16.8 6.5z"/></svg>;
    case "mail": return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M2 4h20v16H2zM4 6v.5l8 5 8-5V6H4z"/></svg>;
    default: return null;
  }
}

export default function Links(){
  return (
    <section id="links">
      <div className="container">
        <h2 className="section-title">My Links</h2>
        <p className="section-sub">Click any icon to open my profiles - I update these regularly.</p>

        <div className="links-grid">
          {LINKS.map(l => (
            <a key={l.name} className="link-card" href={l.href} target="_blank" rel="noreferrer">
              <div className="icon-wrap" aria-hidden="true"><Icon type={l.svg} /></div>
              <div className="link-info">
                <div className="link-name">{l.name}</div>
                <div className="link-action">Open</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
