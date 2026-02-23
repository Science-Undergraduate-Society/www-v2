import { Councilor } from '@/lib/types'
import styles from './CouncilorCard.module.css'

type CouncilorCardProps = {
  councilor: Councilor
  className?: string;
}

export default function CouncilorCard({ councilor, className }: CouncilorCardProps) {
  return (
    <div
      className={`${styles.councilorCard} ${className}`}
      style={councilor.image ? { backgroundImage: `url(${councilor.image})`, height: '300px' } : undefined}
    >
      <div className={styles.details}>
        <h1 className={styles.name}>{councilor.name}</h1>
        <h2 className={styles.role}>{councilor.role}</h2>
      </div>
      {councilor.email &&
        <a href={`mailto:${councilor.email}`}>
          <img src="/assets/footer-icons/email.svg" alt={councilor.email} className={styles.email} />
        </a>
      }
    </div>
  )
}
