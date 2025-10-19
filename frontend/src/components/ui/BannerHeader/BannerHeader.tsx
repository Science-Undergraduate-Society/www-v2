import styles from './BannerHeader.module.css'

type BannerHeaderProps = {
  children: React.ReactNode;
  className?: string;
}

export default function BannerHeader({ children, className }: BannerHeaderProps) {
  return (
    <section className={`${styles.bannerHeader} ${className}`}>
      {children}
    </section>
  )
}
