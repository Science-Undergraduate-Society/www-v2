import styles from './joinSus.module.css'
import BannerHeader from "@/components/ui/BannerHeader/BannerHeader";
import BannerSection from "@/components/ui/BannerSection/BannerSection";
import FrostedCard from "@/components/ui/FrostedCard/FrostedCard";
import BlueButton from "@/components/ui/BlueButton/BlueButton";
import Image from 'next/image';

export default function JoinSus({

} : {

}) {

    return (
        <div className={styles.container}>
            <BannerHeader>
                <div className={styles.headerContent}>
                    <h1>Join SUS</h1>
                    <div className={styles.statusBadge}>
                        Applications: CLOSED
                    </div>
                </div>
            </BannerHeader>

            <section className={styles.access}>
                <FrostedCard className={styles.accessCard}>
                    <p>Thank you to everyone who applied this summer. If you missed this round, stay tuned; more opportunities will open during Fall Hiring!</p>
                    <br/>
                    <p>In meantime, keep reading to learn more about different ways to become a part of SUS.</p>
                </FrostedCard>
            </section>

            <section className={styles.join_steps}>
                <div className={styles.join_steps_inner}>
                    <p>There are 3 ways to become a part of the team: Join...</p>

                    <div className={styles.steps_container}>
                        <div className={styles.steps_individual_step}>
                            <p className={styles.stepNumber}>01.</p>
                            <h2>The Society</h2>
                        </div>

                        <div className={styles.steps_individual_step}>
                            <p className={styles.stepNumber}>02.</p>
                            <h2>Student Council</h2>
                        </div>

                        <div className={styles.steps_individual_step}>
                            <p className={styles.stepNumber}>03.</p>
                            <h2>One-time-experience Positions</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join the Society Section */}
            <BannerSection className={styles.societySection}>
                <h2>Join the Society</h2>
                <p className={styles.sectionDescription}>
                    The UBC Science Undergraduate Society encourages Science students from all abilities, experiences, and backgrounds to apply. We are committed to fair and equitable hiring processes. No experience in SUS is required! Fresh perspectives are encouraged and highly welcome.
                </p>

                <div className={styles.hiringCards}>
                    <FrostedCard className={styles.hiringCard}>
                        <h3>Fall Hiring (coming soon!)</h3>
                        <p className={styles.hiringTiming}>Opens: Early September</p>
                        
                        <div className={styles.hiringDetails}>
                            <p><strong>Typical Positions:</strong></p>
                            <ul>
                                <li>General Committee positions</li>
                            </ul>

                            <p><strong>Posting/Application Information:</strong></p>
                            <ul>
                                <li>Positions are posted on CareersOnline (resume and cover letter needed)</li>
                                <li>Look out for an Instagram (<a href="https://www.instagram.com/susubc" target="_blank" rel="noopener noreferrer">@susubc</a>) post and check out our <a href="https://linktr.ee/susubc?utm_source=ig&utm_medium=social&utm_content=link_in_bio" target="_blank">linktree</a> for hiring information closer to the dates</li>
                            </ul>
                        </div>
                    </FrostedCard>

                    <FrostedCard className={`${styles.hiringCard} ${styles.summerHiring}`}>
                        <h3>Summer Hiring</h3>
                        <p className={styles.hiringTiming}>Mid to Late May</p>
                        
                        <div className={styles.hiringDetails}>
                            <p><strong>Posting/Application Info:</strong></p>
                            <ul>
                                <li>Positions are posted on CareersOnline (resume and cover letter needed)</li>
                                <li>Look out for an Instagram (<a href="https://www.instagram.com/susubc" target="_blank" rel="noopener noreferrer">@ubcsus</a>) post or <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> event titled "SUS Executive Hiring 20XX [Summer]" for a list of all available positions!</li>
                            </ul>

                            <p><strong>Typical Positions:</strong></p>
                            <ul>
                                <li>Assistant to Vice-presidents</li>
                                <li>Committee chairs</li>
                                <li>General Committee positions</li>
                            </ul>
                        </div>
                    </FrostedCard>
                </div>
            </BannerSection>

            {/* Join the Student Council Section */}
            <section className={styles.councilSection}>
                <div className={styles.councilContent}>
                    <div className={styles.councilText}>
                        <h2>Join the Student Council</h2>
                        <p>The election process is relatively simple: get signatures and become nominated, campaign for votes, and then... get voted in!</p>
                        <br/>
                        <p>If you are interested in representing your major, check out the <a href="https://instagram.com/ubcsus.elections" target="_blank" rel="noopener noreferrer">elections instagram</a> to learn more!</p>
                    </div>
                    <div className={styles.councilImage}>
                        <Image 
                            src="/assets/join-sus/join-sus-1.png" 
                            alt="Student Council" 
                            width={500}
                            height={300}
                            className={styles.imageRounded}
                        />
                    </div>
                </div>
            </section>

            {/* Join One-time-experience Positions Section */}
            <section className={styles.experienceSection}>
                <div className={styles.experienceContent}>
                    <div className={styles.experienceImage}>
                        <Image 
                            src="/assets/join-sus/join-sus-2.png" 
                            alt="Volunteer Positions" 
                            width={500}
                            height={300}
                            className={styles.imageRounded}
                        />
                    </div>
                    <div className={styles.experienceList}>
                        <h2>Join One-time-experience Positions</h2>
                        <ul>
                            <li>First week Event Volunteer (Late August - Early September)</li>
                            <li>Icebreaker or Event Volunteer (Early September - Late September)</li>
                            <li>Sciweek Event Volunteer (November - January)</li>
                            <li>Scigrad Event Volunteer (February - March)</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
        
    )
}