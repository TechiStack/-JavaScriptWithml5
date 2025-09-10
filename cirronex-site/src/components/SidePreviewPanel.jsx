import { useState, useEffect } from 'react';

export default function SidePreviewPanel() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState('breakpoints');
  const [viewport, setViewport] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const handler = () => setViewport(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <aside style={{position:'fixed',top:0,right:0,bottom:0,width:open?300:40,background:'#fff',borderLeft:'1px solid #ccc',transition:'width 0.3s',zIndex:1000}}>
      <button aria-label="Toggle side panel" onClick={() => setOpen(!open)} style={{position:'absolute',left:-40,top:16}}>{open?'\u203A':'\u2039'}</button>
      {open && (
        <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
          <div style={{padding:'8px',textAlign:'center'}}>
            <img src="https://cirronex.com/wp-content/uploads/2024/11/CIRRONEX.svg" alt="Cirronex" style={{height:40}} />
          </div>
          <nav style={{display:'flex',borderBottom:'1px solid #ccc'}}>
            {['breakpoints','theme','grid','a11y','notes'].map(tab => (
              <button key={tab} onClick={() => setActive(tab)} style={{flex:1,padding:8,background:active===tab?'#eee':'transparent'}}>{tab}</button>
            ))}
          </nav>
          <div style={{flex:1,overflow:'auto',padding:16}}>
            {active==='breakpoints' && <p>Viewport width: {viewport}px</p>}
            {active==='theme' && <p>Theme switch coming soon.</p>}
            {active==='grid' && <p>Grid overlay coming soon.</p>}
            {active==='a11y' && <p>Contrast checker coming soon.</p>}
            {active==='notes' && <textarea style={{width:'100%',height:'100%'}} value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Notes" />}
          </div>
        </div>
      )}
    </aside>
  );
}
