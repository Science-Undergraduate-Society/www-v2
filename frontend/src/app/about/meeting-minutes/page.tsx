import BannerHeader from '@/components/ui/BannerHeader/BannerHeader'
import FrostedCard from "@/components/ui/FrostedCard/FrostedCard";
import BlueButton from "@/components/ui/BlueButton/BlueButton";
import WorkingGroupMeetingMinutes from "@/components/features/WorkingGroupMeetingMinutes/WorkingGroupMeetingMinutes";
import styles from './meetingMinutes.module.css'

export default function MeetingMinutes() {
    return (
        <div className={styles.meetingMinutes}>
            <BannerHeader>
                <h1>Meeting Minutes</h1>
            </BannerHeader>
            <section className={styles.access}>
                <FrostedCard className={styles.accessCard}>
                    <p>
                        All SUS meetings are open to Science students to attend unless otherwise stated.
                        All meeting minutes on the present website are updated for the 2023/2024 academic year.
                    </p>
                    <br />
                    <div className={styles.requestAccess}>
                        <p>
                            If you wish to access the meeting minutes of previous years, please email our VP Admin:
                        </p>
                        <BlueButton
                            href="mailto:vpadministration@sus.ubc.ca"
                            className={styles.email}
                        >
                            <img src="/assets/footer-icons/email.png" />
                            <p>Email</p>
                        </BlueButton>
                    </div>
                </FrostedCard>
            </section>
            <section className={styles.meetingMinutesType}>
                <h1>Council Meeting Minutes</h1>
                <p>
                    Council normally runs every Tuesday on a bi-weekly schedule beginning from 6:30 PM at the Micheal Kingsmill Forum located at the 4th floor of the AMS Nest.
                    (With the exception of the summer, where they run monthly and the month of September, where no council meetings are held due to elections).
                    <br /><br />
                    The meeting minutes are being updated periodically.
                </p>
                <BlueButton
                    href="https://drive.google.com/drive/folders/1-PVBSWfZlZPP7NPNQT3oZn8dIP7jsXa1"
                    className={styles.button}
                >
                    View Council Meeting Minutes
                </BlueButton>
            </section>
            <section className={styles.meetingMinutesType}>
                <h1>Executive Meeting Minutes</h1>
                <p>
                    Executive Meetings normally run every Tuesday on a bi-weekly schedule beginning from 5:00 pm in the Abdul Lahda Science Student Building, Meeting Room 103.
                    <br /><br />
                    The meeting minutes are being updated periodically.
                </p>
                <BlueButton
                    href="https://drive.google.com/drive/folders/1lJJ4gWDYDzz1B4FDpwPFL5Jo10TjwFKR"
                    className={styles.button}
                >
                    View Executive Meeting Minutes
                </BlueButton>
            </section>
            <section className={styles.meetingMinutesType}>
                <h1>Working Group Meeting Minutes</h1>
                <p>
                    All working groups have different meeting schedules based on team members’ availability.
                    The meeting time and location can be found on the meeting minutes.
                </p>
                <WorkingGroupMeetingMinutes />
            </section>
        </div>
    )
}