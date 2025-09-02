import styles from './FrostedCard.module.css'

type FrostedCardProps = {
  children: React.ReactNode
  className?: string
}

export default function FrostedCard({ children, className }: FrostedCardProps) {
  return (
    <div className={`${styles.frostedCard} ${className}`}>
      {children}
    </div>
  )
}
