"use client"

import { useState } from 'react'
import styles from './CollapsibleBox.module.css'

type CollapsibleBoxProps = {
  children: React.ReactNode;
  className?: string;
  titleElement?: React.ReactNode;
}

export default function BannerSection({ children, className, titleElement }: CollapsibleBoxProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={`${styles.collapsibleBox} ${isOpen ? styles.open : ''} ${className}`}>
      <div
        className={styles.header}
        onClick={() => setIsOpen(state => !state)}
      >
        {titleElement}
        <div className={styles.collapseButton}>
          <div className={styles.collapseButtonBar} />
          <div className={styles.collapseButtonBar} />
        </div>
      </div>
      {isOpen && children}
    </div>
  )
}
