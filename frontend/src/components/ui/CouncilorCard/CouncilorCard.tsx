import { Councilor } from '@/lib/types'
import Image from 'next/image'
import styles from './CouncilorCard.module.css'

type CouncilorCardProps = {
  councilor: Councilor
  className?: string;
}

export default function CouncilorCard({ councilor, className }: CouncilorCardProps) {
  return (
    <div
      className={[styles.councilorCard, className].filter(Boolean).join(' ')}
      style={{ height: '300px' }}
    >
      {councilor.image && (
        <Image
          src={councilor.image}
          alt={councilor.name}
          fill
          style={{ objectFit: 'cover', borderRadius: '10px' }}
          sizes="250px"
          className={styles.bgImage}
        />
      )}
      <div className={styles.details}>
        <h1 className={styles.name}>{councilor.name}</h1>
        <h2 className={styles.role}>{councilor.role}</h2>
      </div>
      {councilor.email &&
        <a href={`mailto:${councilor.email}`} className={styles.emailWrapper}>
          <Image src="/assets/footer-icons/email.svg" alt={councilor.email} width={32} height={32} className={styles.email} />
        </a>
      }
    </div>
  )
}
