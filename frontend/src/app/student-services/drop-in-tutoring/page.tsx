import BannerHeader from '@/components/ui/BannerHeader/BannerHeader'
import BannerSection from '@/components/ui/BannerSection/BannerSection'
import FrostedCard from '@/components/ui/FrostedCard/FrostedCard'
import BlueButton from '@/components/ui/BlueButton/BlueButton'
import styles from './dropInTutoring.module.css'
import Image from 'next/image'
import Tutors from '@/components/ui/Tutors/Tutors'


export default function DropInTutoring() {
    return (
        <div className={styles.dropInTutoring}>
            <BannerHeader>
                <h1>SUS Tutoring</h1>
                <h3>Free online and in-person tutoring sessions led by upper-year science students. Sign-up or drop-in today.</h3>
            </BannerHeader>
            <section>
                <FrostedCard className={styles.survivalGuide}>
                    <p>
                        Struggling with a tough science course?
                        The SUS Academic Tutoring Working Group is here to help!
                        To ease the transition from high school to university, we provide free tutoring sessions for popular first and second-year Science courses.
                        Tutoring sessions are offered through <b>both in-person drop-in sessions and online appointment-based sessions.</b>
                    </p>
                    <br />
                    <strong>Check out the 2026-2027 Survival Guide for tips on how to transition into your life at UBC!</strong>
                    <br />
                    <a href="/assets/guides/SCIENCE%20SURVIVAL%20GUIDE%202026-27.pdf" target="_blank">View Survival Guide</a>
                </FrostedCard>
            </section>
            <section className={styles.weeklyDropIns}>
                <h1>Weekly Drop-Ins</h1>
                <p>Join us for weekly sessions! Drop by to work on practice questions and get your questions answered by experienced tutors!</p>
                <FrostedCard className={styles.card}>
                    <h2>Monday: 4-6 PM at at Abdul Ladha Science Student Center (ALSC 104)</h2>
                    <p>Courses: CHEM 121/123/223, BIOL 112/121/200, PHYS100/131/117/118, MATH 100/101/200/221, DSCI 100, MICB 211</p>
                </FrostedCard>
                <FrostedCard className={styles.card}>
                    <h2>Tuesday: 5-6 PM at Abdul Ladha Science Student Center (ALSC 104)</h2>
                    <p>Courses: CHEM 121/123/223, BIOL 121/112 PHYS 131, MATH 100/101, CPSC 110/121/210, DSCI 100</p>
                </FrostedCard>
            </section>
            <section className={styles.appointmentBased}>
                <h1>Appointment-based</h1>
                <p>Want personalized support? You can book a 1-on-1 tutoring session with an experienced tutor following these instructions:</p>
                <FrostedCard className={styles.card}>
                    <ol>
                        <li>Click on the Koalendar profile link for the tutor you would like to book a session with.</li>
                        <li>Pick a time from the availability listed.</li>
                        <li>Fill out your name and email, and a Google Meet link will automatically be sent to your email with the schedule&apos;s date and time. </li>
                    </ol>
                </FrostedCard>
                <b>Note: Please put the course you are booking a session for in brackets in addition to your name.</b>
                <p>
                    “If you decide to reschedule or cancel a session, please email your tutor at least 
                    24 hours in advance at least 24 hours in advance. If you are running late, please
                    also let your tutor know. If you do not show up within 5 minutes of your scheduled
                    appointment and have not notified the tutor in advance about being late, you will be deemed a no-show”
                    <br /><br />
                    If you have any questions, please feel free to contact us at
                    &nbsp;<a href="mailto:tutoringdirector@sus.ubc.ca">tutoringdirector@sus.ubc.ca</a>
                    ! We look forward to seeing you at our sessions :)
                </p>
            </section>
            <BannerSection className={styles.book}>
                <h1>Book An Appointment</h1>
                <Tutors />
            </BannerSection>
            <section className={styles.examReviewSessions}>
                <h1>Exam Review Sessions</h1>
                <p>Select first-year Science courses will be having midterm and final review sessions. Stay tuned on our SUS Instagram and website to learn more!</p>
                <a href="https://www.instagram.com/susubc">
                    <Image src="/assets/icons/instagram.svg" alt="Instagram" width={75} height={75} />
                </a>
            </section>
            <section className={styles.mailingList}>
                <h1>Mailing List</h1>
                <p>Be the first to know about tutoring events and absences</p>
                <BlueButton
                    href="https://forms.gle/P2WVR5nhX7aZbE8v5"
                    className={styles.button}
                >
                    Tutoring Feedback Form
                </BlueButton>
            </section>
            <section className={styles.studentFeedbackForm}>
                <h1>Student Feedback Form</h1>
                <p>Do you have any feedback or suggestions to the SUS Tutoring team? Please let us know using this form.</p>
                <BlueButton
                    href="https://forms.gle/EDEdBSof8qF4wPiy9"
                    className={styles.button}
                >
                    Tutoring Feedback Form
                </BlueButton>
            </section>
            
        </div>
    )
}