import BannerHeader from '@/components/ui/BannerHeader/BannerHeader'
import FrostedCard from '@/components/ui/FrostedCard/FrostedCard'
import styles from './susPantry.module.css'

export default function SusPantry() {
    return (
        <div className={styles.susPantry}>
            <BannerHeader>
                <h1>SUS Pantry</h1>
            </BannerHeader>
            <section className={styles.about}>
                <FrostedCard className={styles.aboutCard}>
                    In September 2024, the Community Engagement and Student Benefits working groups founded <b>SUStainable Eats and SUStenance Food Pantry. </b>
                    Averaging 90+ attendees at each event in 2024-25, the SUS Community Engagement team hopes to emphasize the importance of nutrition and student wellness while bringing more opportunities to bridge the gap in food resources on-campus.
                </FrostedCard>
                <div className={styles.stats}>
                    <div className={styles.statsCard}>
                        <img src="/assets/pantry-images/ubc-logo.svg" alt="UBC Logo" />
                        <p>30-40% of UBC students face challenges of food insecurity</p>
                    </div>
                    <div className={styles.statsCard}>
                        <img src="/assets/pantry-images/graduation-cap.svg" alt="UBC Logo" />
                        <p>24% of new Greater Vancouver Food Bank registrants in 2022 were post-secondary students, and this number is expected to grow</p>
                    </div>
                    <div className={styles.statsCard}>
                        <img src="/assets/pantry-images/cutlery.svg" alt="UBC Logo" />
                        <p>According to Campus Nutrition, a shocking 40 per cent of UBC students are food insecure</p>
                    </div>
                </div>

                <FrostedCard className={styles.hoursCard}>
                    <div className={styles.hoursContent}>
                        <div>
                            <h2>🕗 Extended Pantry Hours (2026)</h2>
                            <p className={styles.hoursText}>
                                Pantry hours have now been extended to <b>8:00 AM – 8:00 PM, Monday to Friday.</b>
                            </p>
                            <p className={styles.calendarNote}>
                                Save the restock dates from our Google Calendar below, and make sure to check back each month for updated restock and event schedules.
                            </p>
                        </div>
                        <a
                            href="https://docs.google.com/spreadsheets/d/1CY7LgAQdAoL4SF5hAM0WXEXp7YyjSkIVVSw0e7cHjxU/edit?gid=0#gid=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.dbLink}
                        >
                            Educational Database →
                        </a>
                    </div>
                </FrostedCard>

                <div className={styles.photoGrid}>
                    <div className={styles.photoHorizontal}>
                        <img src="/assets/pantry-images/pantry-image-1.jpg" alt="SUS Pantry" />
                    </div>
                    <div className={styles.photoVertical}>
                        <img src="/assets/pantry-images/pantry-image-2.jpg" alt="SUS Pantry event" />
                    </div>
                </div>

                <h1>SUStainable <b>Eats</b></h1>
                <p>
                    A series of Community Dinners hosted at the Abdul Ladha Building where free, nutritious meals are prepared live and handed out to students.
                    Please follow our instagram for more information for our upcoming SUS Eat&apos;s initiative!
                </p>
                <h1>SUStenance <b>Food Pantry</b></h1>
                <p>
                    The Food Pantry is located on the second floor of the Abdul Ladha Building near the stairwell and is restocked on a bi-weekly basis.
                    The Pantry features a diverse range of food items and non-perishables you can select from.
                </p>
            </section>
        </div>
    )
}