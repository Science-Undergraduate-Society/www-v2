import styles from './elections.module.css'
import BannerHeader from "@/components/ui/BannerHeader/BannerHeader";
import BannerSection from "@/components/ui/BannerSection/BannerSection";
import FrostedCard from "@/components/ui/FrostedCard/FrostedCard";
import CandidateCard from './CandidateCard';
import { electionCandidates } from '@/data/electionCandidates2026';

export default function Elections() {
    return (
        <div className={styles.container}>
            <BannerHeader>
                <div className={styles.headerContent}>
                    <h1>Spring Elections 2026</h1>
                    <div className={styles.statusBadge}>
                        Vote from March 16-25
                    </div>
                </div>
            </BannerHeader>

            {/* Intro Section */}
            <section className={styles.access}>
                <FrostedCard className={styles.accessCard}>
                    <p>
                        SUS is made up of <strong>7 portfolios</strong> and over{" "}
                        <strong>200+ volunteers</strong> working together to build an amazing
                        student experience for all science students.
                    </p>
                    <br />
                    <p className={styles.notice}>
                        All information stated here is up to date as of February 12th, 2026.
                        If there are any inconsistencies or you believe you have an old copy,
                        please contact the Elections Team immediately.
                    </p>

                    <br />
                    <p><strong>Elections Documentation</strong></p>
                    <ul className={styles.docList}>
                        <li>
                            <a href="https://docs.google.com/document/d/1imwZP-_LZTZSwtwTGRXgrcM6J3ngryNEoR4yKmYcvYQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Spring 2026 Elections Brochure
                            </a>
                        </li>
                        <li>
                            <a href="https://docs.google.com/document/d/1g2NkYzeiXozFcICgTMnB8d95ula4vNmI2c5i2cTk5ms/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Spring 2026 Elections Guidelines
                            </a>
                        </li>
                        <li>
                            <a href="https://ubc.ca1.qualtrics.com/jfe/form/SV_0DikAIZUfq28z6S" target="_blank" rel="noopener noreferrer">
                                Nomination Submission Form
                            </a>
                        </li>
                        <li>
                            <a href="/assets/elections-2026/campaign-violations.pdf" target="_blank" rel="noopener noreferrer">
                                Campaign Violations Document (PDF)
                            </a>
                        </li>
                        <li>
                            <a href="https://forms.gle/uFUBrd9KRdN3vAAE9" target="_blank" rel="noopener noreferrer">
                                Campaign Violations Form
                            </a>
                        </li>
                    </ul>
                </FrostedCard>
            </section>

            {/* Elections Timeline Section */}
            <BannerSection className={styles.societySection}>
                <h2>Elections Timeline</h2>

                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <span className={styles.timelineDate}>Friday, February 13th, 12:00 AM</span>
                        <span className={styles.timelineDivider}>—</span>
                        <span>Nomination submissions open</span>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.timelineDate}>Sunday, March 1st, 11:59 PM</span>
                        <span className={styles.timelineDivider}>—</span>
                        <span>Deadline for nomination submissions</span>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.timelineDate}>Wednesday, March 4th, 6:00 – 8:00 PM</span>
                        <span className={styles.timelineDivider}>—</span>
                        <span>Mandatory All Candidates Meeting (Abdul Ladha)</span>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.timelineDate}>Saturday, March 7th, 11:59 PM</span>
                        <span className={styles.timelineDivider}>—</span>
                        <span>Deadline for headshots, blurbs, and IG handles</span>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.timelineDate}>Monday, March 9th, 12:00 AM</span>
                        <span className={styles.timelineDivider}>—</span>
                        <span>Campaigning begins</span>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.timelineDate}>Friday, March 13th, 10:00 AM – 8:00 PM</span>
                        <span className={styles.timelineDivider}>—</span>
                        <span>All Candidates Forum</span>
                    </div>
                    <div className={`${styles.timelineItem} ${styles.timelineHighlight}`}>
                        <span className={styles.timelineDate}>Monday, March 16th, 12:00 AM</span>
                        <span className={styles.timelineDivider}>—</span>
                        <span>
                            Voting opens —{" "}
                            <a
                                href="https://ams.simplyvoting.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Click here to vote
                            </a>
                        </span>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.timelineDate}>Wednesday, March 25th, 11:59 PM</span>
                        <span className={styles.timelineDivider}>—</span>
                        <span>Voting closes and campaigning ends</span>
                    </div>
                </div>
            </BannerSection>

            {/* Contact Section */}
            <section className={styles.councilSection}>
                <div className={styles.councilText}>
                    <h2>Contact Information</h2>
                    <p>Elections Chairs: <strong>Katelyn Milan and Kelly Park</strong></p>
                    <br />
                    <p>
                        Email:{" "}
                        <a href="mailto:elections@sus.ubc.ca">elections@sus.ubc.ca</a>
                    </p>
                    <br />
                    <p>All contact with Elections Administrators must be done through email.</p>
                </div>
            </section>

            {/* Candidates Section */}
            <section className={styles.candidatesSection}>
                <h2>Candidates</h2>
                {electionCandidates.map(group => (
                    <div key={group.position} className={styles.positionGroup}>
                        <h3 className={styles.positionGroupTitle}>{group.position}</h3>
                        <div className={styles.candidatesGrid}>
                            {group.candidates.map(candidate => (
                                <CandidateCard key={candidate.name} candidate={candidate} />
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}