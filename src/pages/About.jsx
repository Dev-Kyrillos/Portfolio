import React from 'react'

export default function About(){
  return (
    <div className="container section">
      <h2>About</h2>
      <p className="small">I'm Kyrillos Rafaat — a Front‑End Developer who enjoys building polished UIs and fast SPAs.
        My toolkit includes Angular, TypeScript, and Bootstrap, plus a love for clean CSS and accessible components.</p>
      <div className="grid" style={{marginTop:12}}>
        <div className="card"><img className="thumb" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" alt="workspace"/><div className="pad"><b>UI Engineering</b><p className="small">Components, routing, state, and animations with a focus on performance and simplicity.</p></div></div>
        <div className="card"><img className="thumb" src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&auto=format&fit=crop" alt="testing"/><div className="pad"><b>APIs & Data</b><p className="small">REST integrations with async/await patterns and graceful loading states.</p></div></div>
        <div className="card"><img className="thumb" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop" alt="delivery"/><div className="pad"><b>Delivery</b><p className="small">Version control, clean structure, and frictionless deploys (Vercel / GitHub Pages).</p></div></div>
      </div>
    </div>
  )
}
