import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PROJECTS } from '../projects'

export default function Home(){
  const nav = useNavigate()
  const top3 = PROJECTS.slice(0,3)
  return (
    <div className="container">
      <section className="hero">
        <div>
          <h1 className="title">Hi, I’m Kyrillos — I build clean, fast front‑ends.</h1>
          <p>I love shipping crisp UI and smooth interactions. Below are a few featured projects.
          Check the full list, and feel free to reach out.</p>
          <div className="cta">
            <button className="btn primary" onClick={()=>nav('/projects')}>View Projects</button>
            <button className="btn" onClick={()=>nav('/contact')}>Contact Me</button>
          </div>
          <div className="badges" style={{marginTop:12}}>
            <span className="kbd">Angular 16</span>
            <span className="kbd">TypeScript</span>
            <span className="kbd">Bootstrap</span>
            <span className="kbd">ES6+</span>
          </div>
        </div>
        <img className="thumb" style={{borderRadius:16, maxWidth:'100%', height:'auto', width:'100%', objectFit:'cover'}} src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop" alt="code" />
      </section>

      <section className="section">
        <h2>Featured</h2>
        <div className="grid">
          {top3.map((p,idx)=> (
            <article className="card" key={idx}>
              <img className="thumb" src={p.cover} alt={p.title} />
              <div className="pad">
                <div className="small">{p.year}</div>
                <h3 style={{margin:'6px 0'}}>{p.title}</h3>
                <p className="small">{p.summary}</p>
                <div className="stack">{p.stack.map((s,i)=>(<span key={i} className="tag">{s}</span>))}</div>
                <div className="links">
                  <a className="linkbtn" href={p.live} target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
