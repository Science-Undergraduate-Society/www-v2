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
                    <h1>Fall Elections 2026</h1>
                    <div className={styles.statusBadge}>
                        Vote from October 12-19
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
                            <a href="https://docs.google.com/document/d/1KnpGQ1j4SuVSANlj7AROzJMKjAeQl1U4soB_zbRCLLg/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
                                Fall 2026 Elections Brochure
                            </a>
                        </li>
                        <li>
                            <a href="https://docs.google.com/document/d/11UTCrnUyFXL6_GpH-o4_pEW2jaE-n7sOidP9Bw2Drjg/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
                                Fall 2026 Elections Guidelines
                            </a>
                        </li>
                        <li>
                            <a href="https://ubc.ca1.qualtrics.com/jfe/form/SV_eIFkMtx6TUIJFZA" target="_blank" rel="noopener noreferrer">
                                Nomination Submission Form
                            </a>
                        </li>
                        <li>
                            <a href="https://docs.google.com/document/d/1nZQO15ZUPUvvWgaWa9kcIuwDhDc8G-4dtZTcKDbTNzs/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
                                Campaign Violations Document
                            </a>
                        </li>
                        <li>
                            <a href="https://docs.google.com/document/d/1fIZw5lGG1rNB7u1S9JXVb5dNRg5RdpthIRN0zYUVKgU/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
                                Fall Elections FAQs
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
                        <span className={styles.timelineDate}>Friday, September 11th, 12:00 AM</span>
                        <span className={styles.timelineDivider}>—</span>
                        <span>Nomination submissions open</span>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.timelineDate}>Friday, Sept 25th, 11:59 PM (Extended to Sunday, Sept 27 at 12pm)</span>
                        <span className={styles.timelineDivider}>—</span>
                        <span>Deadline for nomination submissions</span>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.timelineDate}>Wednesday,  Sept 30th,  6:00 PM</span>
                        <span className={styles.timelineDivider}>—</span>
                        <span>MANDATORY All Candidates Meeting (online), time will depend on availability of candidates</span>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.timelineDate}>Friday,  Oct 2nd,  11:59 PM</span>
                        <span className={styles.timelineDivider}>—</span>
                        <span>Deadline for sending in headshots & blurbs for voting platform to elections@sus.ubc.ca</span>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.timelineDate}>Monday,  Oct 5th, 12:00 AM</span>
                        <span className={styles.timelineDivider}>—</span>
                        <span>Campaigning Begins (paperless campaigning)</span>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.timelineDate}>Monday, October 12, 12:00 AM</span>
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
                        <span className={styles.timelineDate}>Wednesday, October 14th 6:00 PM</span>
                        <span className={styles.timelineDivider}>—</span>
                        <span>All Candidates Forum for VP External and First Year Reps</span>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.timelineDate}>Monday, October 19th, 11:59 PM</span>
                        <span className={styles.timelineDivider}>—</span>
                        <span>Voting closes and campaigning ends</span>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.timelineDate}>Thursday, October 22nd, 5:00 PM </span>
                        <span className={styles.timelineDivider}>—</span>
                        <span>Councillor Orientation (in-person) -  5-7PM</span>
                    </div>
                </div>
            </BannerSection>

            {/* Contact Section */}
            <section className={styles.councilSection}>
                <div className={styles.councilText}>
                    <h2>Contact Information</h2>
                    <p>Elections Chairs: <strong>Megan Chao and Vicky Nguyen</strong></p>
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
                <p className={styles.candidatesDisclosure}>
                    The SUS Elections Committee would like to publicly acknowledge the Conflict of Interest that is present between the current President and one of the presidential candidates during this election to help voters make an informed decision. This Conflict of Interest may have potentially benefited the campaign of one candidate, Katherine, while potentially negatively impacting the campaign of the other candidate, Jenevieve.
                </p>
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