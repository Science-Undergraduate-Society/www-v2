'use client'

import { useState } from 'react'
import styles from './CollapsiblePanel.module.css'

type CollapsiblePanelProps = {
  title: string;
  titleClassName?: string;
  panelClassName?: string;
  children: React.ReactNode;
  className?: string;
}

export default function CollapsiblePanel({ title, titleClassName, panelClassName, children, className }: CollapsiblePanelProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={[styles.collapsiblePanel, className].filter(Boolean).join(' ')}>
      <button 
        className={[styles.title, titleClassName].filter(Boolean).join(' ')} 
        onClick={() => setIsOpen(state => !state)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg 
          className={`${styles.chevron} ${isOpen ? styles.open : ''}`} 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div className={`${styles.panel} ${isOpen ? styles.open : ''}`}>
        <div className={panelClassName}>{children}</div>
      </div>
    </div>
  )
}
