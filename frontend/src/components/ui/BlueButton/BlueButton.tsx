import styles from './BlueButton.module.css'

type BlueButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function BlueButton({ children, className, href }: BlueButtonProps) {
  return (
    <a href={href} target="_blank" className={`${styles.blueButton} ${className}`}>
      {children}
    </a>
  )
}
