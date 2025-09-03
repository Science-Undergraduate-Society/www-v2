import type { Tutor } from "@/lib/types";
import styles from './TutorCard.module.css'

export default function TutorCard({ tutor }: { tutor: Tutor }) {
  return (
    <div className={styles.tutorCard}>
      <div className={styles.info}>
        <h1 className={styles.name}>{tutor.name}</h1>
        <p className={styles.courses}>Courses: {tutor.courses}</p>
        <p className={styles.description}>{tutor.description}</p>
      </div>
      <img src={tutor.image} alt={tutor.name} className={styles.image} />
    </div>
  )
}
