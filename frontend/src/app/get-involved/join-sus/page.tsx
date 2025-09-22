"use client";

import FrostedCard from "@/components/ui/FrostedCard/FrostedCard";
import styles from "./joinSus.module.css";

export default function JoinSUSPage() {
    return (
        <main className={styles.joinSus}>
            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <h1 className={styles.title}>Join SUS</h1>
                    <span className={styles.statusText}>Applications: CLOSED</span>
                </div>

                <FrostedCard className={styles.heroNotice}>
                    <p>
                        Thank you to everyone who applied this summer. If you missed this round, stay tuned; more
                        opportunities will open during Fall Hiring!
                    </p>
                    <p className={styles.heroNoticeSub}>
                        In meantime, keep reading to learn more about different ways to become a part of SUS.
                    </p>
                </FrostedCard>
            </section>

            {/* THREE WAYS */}
            <section className={styles.waysSection}>
                <p className={styles.waysIntro}>There are 3 ways to become a part of the team: Join…</p>
                <div className={styles.waysGrid}>
                    <div className={styles.wayItem}>
                        <div className={styles.wayNumber}>01.</div>
                        <h3 className={styles.wayTitle}>The Society</h3>
                    </div>
                    <div className={styles.wayItem}>
                        <div className={styles.wayNumber}>02.</div>
                        <h3 className={styles.wayTitle}>Student Council</h3>
                    </div>
                    <div className={styles.wayItem}>
                        <div className={styles.wayNumber}>03.</div>
                        <h3 className={styles.wayTitle}>One-time-experience Positions</h3>
                    </div>
                </div>
            </section>

            {/* JOIN THE SOCIETY (angled image background) */}
            <section className={styles.societySection}>
                <div className={styles.sectionInner}>
                    <h2 className={styles.sectionTitle}>Join the Society</h2>
                    <p className={styles.sectionLead}>
                        The UBC Science Undergraduate Society encourages Science students from all abilities,
                        experiences, and backgrounds to apply. We are committed to fair and equitable hiring
                        processes. No experience in SUS is required! Fresh perspectives are encouraged and highly
                        welcome.
                    </p>

                    <div className={styles.cardGrid}>
                        <FrostedCard className={styles.infoCard}>
                            <div className={styles.cardHeader}>
                                <h3>Fall Hiring (coming soon!)</h3>
                                <p className={styles.cardSub}>Opens: Early September</p>
                            </div>
                            <div className={styles.cardBody}>
                                <p className={styles.cardLabel}>Typical Positions:</p>
                                <ul>
                                    <li>General Committee positions</li>
                                </ul>

                                <p className={styles.cardLabel}>Posting/Application Info:</p>
                                <ul>
                                    <li>Positions are posted on CareersOnline (resume and cover letter needed)</li>
                                    <li>
                                        Look out for an Instagram post (<a href="#">@susubc</a>) post and check our
                                        <a href="#"> linktree</a> for hiring information closer to the dates
                                    </li>
                                </ul>
                            </div>
                        </FrostedCard>

                        <FrostedCard className={styles.infoCard}>
                            <div className={styles.cardHeader}>
                                <h3>Summer Hiring</h3>
                                <p className={styles.cardSub}>Mid to Late May</p>
                            </div>
                            <div className={styles.cardBody}>
                                <p className={styles.cardLabel}>Posting/Application Info:</p>
                                <ul>
                                    <li>Positions are posted on CareersOnline (resume and cover letter needed)</li>
                                    <li>
                                        Look out for an Instagram (<a href="#">@susubc</a>) post or Facebook event titled
                                        “SUS Executive Hiring 20XX [Summer]” for a list of available positions!
                                    </li>
                                </ul>

                                <p className={styles.cardLabel}>Typical Positions:</p>
                                <ul>
                                    <li>Assistant to Vice-presidents</li>
                                    <li>Committee chairs</li>
                                    <li>General Committee positions</li>
                                </ul>
                            </div>
                        </FrostedCard>
                    </div>
                </div>
            </section>

            {/* STUDENT COUNCIL */}
            <section className={styles.councilSection}>
                <div className={styles.mediaRow}>
                    <div className={styles.textCol}>
                        <h2 className={styles.sectionTitle}>Join the Student Council</h2>
                        <p>
                            The election process is relatively simple: get signatures and become nominated, campaign for
                            votes, and then… get voted in!
                        </p>
                        <p>
                            If you are interested in representing your major, check out the
                            <a href="#"> elections instagram</a> to learn more!
                        </p>
                    </div>
                    <div className={styles.mediaCol}>
                        <div className={styles.imagePlaceholder} aria-hidden />
                    </div>
                </div>
            </section>

            {/* ONE-TIME EXPERIENCE POSITIONS */}
            <section className={styles.oneTimeSection}>
                <div className={styles.mediaRow}>
                    <div className={styles.textCol}>
                        <h2 className={styles.sectionTitle}>Join One-time-experience Positions</h2>
                        <ul className={styles.simpleList}>
                            <li>First week Event Volunteer (Late August - Early September)</li>
                            <li>RXN Leader or Event Volunteer (Early September - Late September)</li>
                            <li>Sciweek Event Volunteer (November - January)</li>
                            <li>Scigrad Event Volunteer (February - March)</li>
                        </ul>
                    </div>
                    <div className={styles.mediaCol}>
                        <div className={styles.imagePlaceholder} aria-hidden />
                    </div>
                </div>
            </section>
        </main>
    );
}