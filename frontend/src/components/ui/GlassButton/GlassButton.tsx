import styles from './GlassButton.module.css'

type GlassButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function GlassButton({ children, className, href }: GlassButtonProps) {
  return (
    <a href={href} target="_blank" className={`${styles.glassButton} ${className}`}>
      {children}
    </a>
  )
}
