import React, { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    setLoading(true)
    setStatus('')
    
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    
    try {
      // Using Formspree for email sending (free service)
      // To set this up:
      // 1. Sign up at https://formspree.io (free account)
      // 2. Create a new form
      // 3. Copy your form endpoint URL (format: https://formspree.io/f/YOUR_FORM_ID)
      // 4. Replace the URL below with your own endpoint
      // Alternative: You can also use EmailJS (https://www.emailjs.com/)
      
      // Try sending as form-data (Formspree prefers this)
      const formDataToSend = new URLSearchParams()
      formDataToSend.append('name', name)
      formDataToSend.append('email', email)
      formDataToSend.append('message', message)
      formDataToSend.append('_subject', `Portfolio Contact from ${name}`)
      
      const response = await fetch('https://formspree.io/f/xjvwgqpn', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formDataToSend,
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setStatus('تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.')
        e.currentTarget.reset()
      } else {
        // Show more specific error message
        const errorMsg = data.error || data.message || 'Failed to send'
        console.error('Formspree error:', errorMsg, data)
        throw new Error(errorMsg)
      }
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى أو التواصل معي مباشرة على dev.kyrollies@gmail.com')
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="container section">
      <h2>Contact</h2>
      <p className="small">Got a project or role in mind? Let's talk.</p>
      <form className="card pad" onSubmit={handleSubmit} style={{maxWidth:640}}>
        <label className="small">Your Name</label>
        <input name="name" required placeholder="Your name" style={input}/>
        <label className="small">Email</label>
        <input name="email" required type="email" placeholder="you@example.com" style={input}/>
        <label className="small">Message</label>
        <textarea name="message" required rows={5} placeholder="How can I help?" style={input}/>
        <button className="btn primary" type="submit" disabled={loading}>
          {loading ? 'جاري الإرسال...' : 'Send'}
        </button>
        {status && <p className="small" style={{marginTop:10,color:status.includes('خطأ') ? '#f87171' : '#86efac'}}>{status}</p>}
        <div style={{marginTop:20, paddingTop:20, borderTop:'1px solid #1f2937'}}>
          <p className="small" style={{marginBottom:12, fontWeight:600}}>Or reach me directly:</p>
          <div style={{display:'flex', gap:16, flexWrap:'wrap', alignItems:'center'}}>
            <a href="mailto:dev.kyrollies@gmail.com" style={{display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text)'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
              </svg>
              <span className="small">dev.kyrollies@gmail.com</span>
            </a>
            <a href="tel:01288686657" style={{display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text)'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="small">01288686657</span>
            </a>
          </div>
        </div>
      </form>
    </div>
  )
}

const input = {margin:'6px 0 12px', padding:'12px 14px', borderRadius:12, border:'1px solid #334155', background:'#0b1220', color:'#e5e7eb'}
