'use client'
import { useState } from 'react'
export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#0a0a0a',color:'#fff',fontFamily:'system-ui'}}>
      <div style={{textAlign:'center',padding:'3rem',background:'#111',borderRadius:16,border:'1px solid #222'}}>
        <h1 style={{fontSize:'2rem',marginBottom:'1rem'}}>Next.js Deploy Test</h1>
        <p style={{color:'#888',marginBottom:'1.5rem'}}>Server-rendered + client hydration working!</p>
        <button onClick={() => setCount(c => c + 1)} style={{background:'#ef4444',color:'#fff',border:'none',padding:'12px 28px',borderRadius:8,fontSize:'1rem',cursor:'pointer'}}>
          Count: {count}
        </button>
        <p style={{color:'#666',marginTop:'1rem',fontSize:'0.875rem'}}>Built with Next.js 14 + Standalone output</p>
      </div>
    </div>
  )
}
