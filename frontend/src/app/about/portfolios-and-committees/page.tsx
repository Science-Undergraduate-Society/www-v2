'use client'

import { useState } from 'react'
import styles from './portfoliosAndCommittees.module.css'
import { committees, Committee } from '@/data/committees'
import BannerHeader from '@/components/ui/BannerHeader/BannerHeader'

const portfolioDescriptions: Record<string, string> = {
    'Academic': 'The Academic Portfolio is committed to addressing the needs of science students and supporting their academic journeys through SUS events, initiatives and advocacy efforts on faculty-level discussions.',
    'Administration': 'The Administration Portfolio ensures the operations of the Science Undergraduate Society run smoothly and efficiently into the future, including management of society documentation and behind-the-scenes support.',
    'Communications': 'The Communications Portfolio is dedicated to keeping science students connected, engaged, and informed– we hope you are inspired to get involved in the science community!',
    'External': 'The External team is dedicated to uplifting the Science student body by targeting a wide spectrum of student needs ranging from career exploration, community support, student discount to on-campus recognition.',
    'Finance': 'The Finance portfolio is responsible for overseeing all financial matters pertaining to SUS, including the allocation of $300,000 in SUS budget, distributing SUS grants and subsidies, ensuring SUS members are making ethical use of the budget and much more!',
    'Presidential': 'The Presidential portfolio is responsible for ensuring all UBC Science students are represented in our events and advocacy. They are also responsible for organizing all elections within SUS.',
    'Student Life': 'The Student Life Portfolio aims to maximize student engagement by planning and delivering a wide range of events, from annual flagship gatherings to sports and social activities.',
    'Council': 'In addition to monthly Council meetings, Council Committees serve as a platform for elected council representatives to interact and advise the SUS portfolios and elected SUS Executives.'
}

export default function PortfoliosAndCommittees() {
    const [hoveredCommittee, setHoveredCommittee] = useState<string | null>(null)

    const getCommitteesByCategory = (category: Committee['category']) => {
        return committees.filter(c => c.category === category)
    }

    const CommitteeButton = ({ committee }: { committee: Committee }) => (
        <div className={styles.committeeButtonWrapper}>
            <button
                className={styles.committeeButton}
                onMouseEnter={() => setHoveredCommittee(committee.id)}
                onMouseLeave={() => setHoveredCommittee(null)}
            >
                {committee.name}
            </button>
            {hoveredCommittee === committee.id && (
                <div className={styles.hoverCard}>
                    <h3>{committee.name}</h3>
                    <p>{committee.description}</p>
                </div>
            )}
        </div>
    )

    const PortfolioTitle = ({ title }: { title: string }) => (
        <div className={styles.portfolioButtonWrapper}>
            <button
                className={styles.portfolioButton}
                onMouseEnter={() => setHoveredCommittee(title)}
                onMouseLeave={() => setHoveredCommittee(null)}
            >
                {title}
            </button>
            {hoveredCommittee === title && (
                <div className={styles.hoverCard}>
                    <h3>{title}</h3>
                    <p>{portfolioDescriptions[title]}</p>
                </div>
            )}
        </div>
    )

    return (
        <div className={styles.pageContainer}>
            <BannerHeader>
                <h1>Portfolios & Committees</h1>
            </BannerHeader>

            {/* Main Content */}
            <div className={styles.mainContent}>
                {/* Ad-hoc Note */}
                <p className={styles.adHocNote}>*Indicate an ad-hoc committee</p>

                <h2 className={styles.organizationTitle}>The Science Undergraduate Society</h2>

                {/* Organizational Chart */}
                <div className={styles.chartContainer}>
                    {/* Presidential & Council Section */}
                    <div className={styles.topSection}>
                        <div className={styles.categoryCard}>
                            <PortfolioTitle title="Presidential" />
                            <div className={styles.committeeGrid}>
                                {getCommitteesByCategory('Presidential').map(committee => (
                                    <CommitteeButton key={committee.id} committee={committee} />
                                ))}
                            </div>
                        </div>

                        <div className={styles.categoryCard}>
                            <PortfolioTitle title="Council" />
                            <div className={styles.committeeGrid}>
                                {getCommitteesByCategory('Council').map(committee => (
                                    <CommitteeButton key={committee.id} committee={committee} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Other Portfolios */}
                    <div className={styles.bottomSection}>
                        {/* Academic */}
                        <div className={styles.portfolioSection}>
                            <div className={styles.categoryCard}>
                                <PortfolioTitle title="Academic" />
                                <div className={styles.committeeGrid}>
                                    {getCommitteesByCategory('Academic').map(committee => (
                                        <CommitteeButton key={committee.id} committee={committee} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Administration */}
                        <div className={styles.portfolioSection}>
                            <div className={styles.categoryCard}>
                                <PortfolioTitle title="Administration" />
                                <div className={styles.committeeGrid}>
                                    {getCommitteesByCategory('Administration').map(committee => (
                                        <CommitteeButton key={committee.id} committee={committee} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Communications */}
                        <div className={styles.portfolioSection}>
                            <div className={styles.categoryCard}>
                                <PortfolioTitle title="Communications" />
                                <div className={styles.committeeGrid}>
                                    {getCommitteesByCategory('Communications').map(committee => (
                                        <CommitteeButton key={committee.id} committee={committee} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* External */}
                        <div className={styles.portfolioSection}>
                            <div className={styles.categoryCard}>
                                <PortfolioTitle title="External" />
                                <div className={styles.committeeGrid}>
                                    {getCommitteesByCategory('External').map(committee => (
                                        <CommitteeButton key={committee.id} committee={committee} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Finance */}
                        <div className={styles.portfolioSection}>
                            <div className={styles.categoryCard}>
                                <PortfolioTitle title="Finance" />
                                <div className={styles.committeeGrid}>
                                    {getCommitteesByCategory('Finance').map(committee => (
                                        <CommitteeButton key={committee.id} committee={committee} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Student Life */}
                        <div className={styles.portfolioSection}>
                            <div className={styles.categoryCard}>
                                <PortfolioTitle title="Student Life" />
                                <div className={styles.committeeGrid}>
                                    {getCommitteesByCategory('Student Life').map(committee => (
                                        <CommitteeButton key={committee.id} committee={committee} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}