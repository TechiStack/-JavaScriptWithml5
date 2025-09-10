import { useState, useEffect } from 'react';
import styles from './SidePreviewPanel.module.css';

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
    <aside className={`${styles.panel} ${open ? '' : styles.collapsed}`}>
      <button
        aria-label="Toggle side panel"
        className={styles.toggle}
        onClick={() => setOpen(!open)}
      >
        {open ? '›' : '‹'}
      </button>
      {open && (
        <div className={styles.inner}>
          <div className={styles.logoWrap}>
            <img
              src="https://cirronex.com/wp-content/uploads/2024/11/CIRRONEX.svg"
              alt="Cirronex"
              className={styles.logo}
            />
          </div>
          <nav className={styles.tabs}>
            {['breakpoints', 'theme', 'grid', 'a11y', 'notes'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={active === tab ? styles.active : ''}
              >
                {tab}
              </button>
            ))}
          </nav>
          <div className={styles.content}>
            {active === 'breakpoints' && <p>Viewport width: {viewport}px</p>}
            {active === 'theme' && <p>Theme switch coming soon.</p>}
            {active === 'grid' && <p>Grid overlay coming soon.</p>}
            {active === 'a11y' && <p>Contrast checker coming soon.</p>}
            {active === 'notes' && (
              <textarea
                className={styles.textarea}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Notes"
              />
            )}
          </div>
        </div>
      )}
    </aside>
  );
}
