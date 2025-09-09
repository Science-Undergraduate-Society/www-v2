import { tutors } from "@/data/tutors"
import BlueButton from '@/components/ui/BlueButton/BlueButton'
import TutorCard from '@/components/ui/TutorCard/TutorCard'
import styles from './dropInTutoring.module.css'

export default function DropInTutoring() {
    return (
        <div className={styles.dropInTutoring}>
            <section className="page-banner-header">
                <h1>Drop-In Tutoring</h1>
                <h2>Free online and in-person tutoring sessions led by upper-year science students. Sign-up or drop-in today.</h2>
            </section>
            <section className={styles.buttons}>
                <BlueButton
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdYp_R2zjCXjJt6QllqJlAp-e93V92bcnHcdqnoZBnAu9wB_Q/viewform"
                    className={styles.button}
                >
                    Sign-Up Form
                </BlueButton>
                <BlueButton
                    href="https://ubc.ca1.qualtrics.com/jfe/form/SV_819lrEKFVQYxxwW"
                    className={styles.button}
                >
                    Session Feedback Form
                </BlueButton>
                <BlueButton
                    href="https://ubc.ca1.qualtrics.com/jfe/form/SV_42Pc5f3nlXgEch8"
                    className={styles.button}
                >
                    Request a Course
                </BlueButton>
                <BlueButton
                    href="https://ubc.ca1.qualtrics.com/jfe/form/SV_08p8gd08sSBVuWq"
                    className={styles.button}
                >
                    Apply to be a Tutor
                </BlueButton>
            </section>
            <section className={styles.schedule}>
                <h1 className={styles.header}>Check out our Monthly Schedule!</h1>
            </section>
            <section className={styles.tutors}>
                <h1 className={styles.header}>Meet Our Tutors:</h1>
                <div className={styles.cards}>
                    {tutors.map(tutor => (
                        <TutorCard
                            key={tutor.name}
                            tutor={tutor}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}