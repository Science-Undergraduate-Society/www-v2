import styles from './joinSus.module.css'
import BannerHeader from "@/components/ui/BannerHeader/BannerHeader";
import BannerSection from "@/components/ui/BannerSection/BannerSection";
import FrostedCard from "@/components/ui/FrostedCard/FrostedCard";
import Image from 'next/image';
import Link from 'next/link';

export default function JoinSus() {
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
                    <br/>
                    <p className={styles.portfoliosLink}><Link href="/about/portfolios-and-committees">Learn more about our portfolios and committees →</Link></p>
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
                <h2>Join the Staff</h2>
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
                                <li>General Committee Positions</li>
                                <li>Large Committee Members — meet 1–2x a term to provide input and keep executives accountable</li>
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
                                <li>Look out for an Instagram (<a href="https://www.instagram.com/susubc" target="_blank" rel="noopener noreferrer">@ubcsus</a>) post or <a href="https://www.linkedin.com/company/susubc/" target="_blank" rel="noopener noreferrer">LinkedIn</a> event titled &quot;SUS Executive Hiring 20XX [Summer]&quot; for a list of all available positions!</li>
                            </ul>

                            <p><strong>Typical Positions:</strong></p>
                            <ul>
                                <li>Associate Vice-Presidents</li>
                                <li>Committee Chairs (ex. Web Development Chair)</li>
                                <li>General Committee Members (ex. Web Developer)</li>
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
                        <p>If you are interested in representing your major, check out our <a href="https://instagram.com/susubc" target="_blank" rel="noopener noreferrer">instagram</a> to learn more!</p>
                        <br/>
                        <p className={styles.councilLink}><Link href="/about/council-and-procedures">Learn more about what Student Council does →</Link></p>
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
                        <p className={styles.experienceNote}>These are volunteer opportunities on the day of the event only. If you&apos;d like to help plan and run events, apply as staff during Summer or Fall Hiring!</p>
                        <ul>
                            <li>First week Event Volunteer (Late August - Early September)</li>
                            <li>Icebreaker or Event Volunteer (Early September - Late September)</li>
                            <li>Ignite Career Conference Volunteer (October - November)</li>
                            <li>Sciweek Event Volunteer (November - January)</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
        
    )
}