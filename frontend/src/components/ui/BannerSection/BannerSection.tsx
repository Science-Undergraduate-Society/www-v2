import styles from './BannerSection.module.css'

type BannerSectionProps = {
  children: React.ReactNode;
  className?: string;
}

export default function BannerSection({ children, className }: BannerSectionProps) {
  return (
    <section className={`${styles.bannerSection} ${className}`}>
      {children}
    </section>
  )
}
