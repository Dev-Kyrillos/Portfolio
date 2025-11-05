import React from 'react'
import { PROJECTS } from '../projects'

export default function Projects(){
  return (
    <div className="container section">
      <h2>Projects</h2>
      <div className="grid">
        {PROJECTS.map((p,idx)=>(
          <article className="card" key={idx}>
            <img className="thumb" src={p.cover} alt={p.title} />
            <div className="pad">
              <div className="meta"><span>{p.year}</span><span>{p.stack[0]}</span></div>
              <h3 style={{margin:'8px 0 6px'}}>{p.title}</h3>
              <p className="small">{p.summary}</p>
              <div className="stack">{p.stack.map((s,i)=>(<span key={i} className="tag">{s}</span>))}</div>
              <ul className="small" style={{marginTop:10}}>
                {p.highlights?.map((h,i)=>(<li key={i} style={{marginLeft:14}}>{h}</li>))}
              </ul>
              <div className="links">
                <a className="linkbtn" href={p.live} target="_blank" rel="noreferrer">Live Demo</a>
                {p.repo ? <a className="linkbtn" href={p.repo} target="_blank" rel="noreferrer">Repo</a> : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
