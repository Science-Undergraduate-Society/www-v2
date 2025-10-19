import BannerHeader from '@/components/ui/BannerHeader/BannerHeader'
import BannerSection from '@/components/ui/BannerSection/BannerSection'
import FrostedCard from '@/components/ui/FrostedCard/FrostedCard'
import BlueButton from '@/components/ui/BlueButton/BlueButton'
import Tutors from '@/components/ui/Tutors/Tutors'
import styles from './dropInTutoring.module.css'

export default function DropInTutoring() {
    return (
        <div className={styles.dropInTutoring}>
            <BannerHeader>
                <h1>Drop-In Tutoring</h1>
                <h2>Free online and in-person tutoring sessions led by upper-year science students. Sign-up or drop-in today.</h2>
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
                    <strong>Check out the 2025 Survival Guide for tips on how to transition into your life at UBC!</strong>
                    <br />
                    <a href="https://drive.google.com/file/d/1L8lPDrr3br4f3HeoBoeRuQkFWJEtnrZy/view">View Survival Guide</a>
                </FrostedCard>
            </section>
            <section className={styles.weeklyDropIns}>
                <h1>Weekly Drop-Ins</h1>
                <p>Join us for weekly sessions! Drop by to work on practice questions and get your questions answered by experienced tutors!</p>
                <FrostedCard className={styles.card}>
                    <h2>Mondays: 4-6 PM at BIOL 1001</h2>
                    <p>Courses: BIOL 112, BIOL 121, CHEM 121, PHYS 131, PHYS 117, CHEM 233, and BIOL 200</p>
                </FrostedCard>
                <FrostedCard className={styles.card}>
                    <h2>Wednesdays: 4-6 PM, Abdul Ladha Science Student Centre, Room 105</h2>
                    <p>Courses: CHEM 203/233, CHEM 121, PHYS 117/118, BIOL 112, BIOL 121</p>
                </FrostedCard>
            </section>
            <section className={styles.appointmentBased}>
                <h1>Appointment-based</h1>
                <p>Want personalized support? You can book a 30 minute 1-on-1 tutoring session with an experienced tutor following these instructions:</p>
                <FrostedCard className={styles.card}>
                    <ol>
                        <li>Click on the Koalendar profile link for the tutor you would like to book a session with.</li>
                        <li>Pick a time from the availability listed.</li>
                        <li>Fill out your name and email, and a Google Meet link will automatically be sent to your email with the schedule's date and time. </li>
                    </ol>
                </FrostedCard>
                <b>Note: Please put the course you are booking a session for in brackets in addition to your name.</b>
                <p>
                    If you decide to reschedule or cancel a session, please email
                    &nbsp;<a href="mailto:tutoringdirector@sus.ubc.ca">tutoringdirector@sus.ubc.ca</a>&nbsp;
                    at least 24 hours in advance with your name, tutor, and course so that we can let our tutors know.
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
                    <img src="/assets/icons/instagram.svg" alt="Instagram" />
                </a>
            </section>
            <section className={styles.studentFeedbackForm}>
                <h1>Student Feedback Form</h1>
                <p>Do you have any feedback or suggestions to the SUS Tutoring team? Please let us know using this form.</p>
                <BlueButton
                    href="https://docs.google.com/forms/d/e/1FAIpQLScrWKMQdnIMJ-3BHrc0-am6yvtoyZ4LtOmniwqDJGwZsin9vw/viewform"
                    className={styles.button}
                >
                    Tutoring Feedback Form
                </BlueButton>
            </section>
        </div>
    )
}