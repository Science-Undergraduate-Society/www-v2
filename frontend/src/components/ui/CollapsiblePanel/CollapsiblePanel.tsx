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
    <div className={`${styles.collapsiblePanel} ${className}`}>
      <h1 className={`${styles.title} ${titleClassName}`} onClick={() => setIsOpen(state => !state)}>{title}</h1>
      <div className={`${styles.panel} ${isOpen ? styles.open : ''}`}>
        <div className={panelClassName}>{children}</div>
      </div>
    </div>
  )
}
