'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './elections.module.css'
import { ElectionCandidate } from '@/data/electionCandidates2026'

export default function CandidateCard({ candidate }: { candidate: ElectionCandidate }) {
    const [expanded, setExpanded] = useState(false)
    const [imgError, setImgError] = useState(false)

    const showPlaceholder = !candidate.imagePath || imgError

    return (
        <div className={styles.candidateCard}>
            <div className={styles.candidateImageWrapper}>
                {!showPlaceholder ? (
                    <Image
                        src={candidate.imagePath!}
                        alt={candidate.name}
                        width={400}
                        height={400}
                        className={styles.candidatePhoto}
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className={styles.candidatePlaceholder}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#94a3b8" width="72" height="72">
                            <path d="M12 12c2.67 0 4.8-2.13 4.8-4.8S14.67 2.4 12 2.4 7.2 4.53 7.2 7.2 9.33 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                        </svg>
                    </div>
                )}
            </div>

            <div className={styles.candidateBody}>
                <h3 className={styles.candidateName}>{candidate.name}</h3>

                <div className={styles.candidateLinks}>
                    {candidate.instagram && (
                        <a
                            href={`https://instagram.com/${candidate.instagram.replace('@', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.candidateSocialLink}
                        >
                            {candidate.instagram}
                        </a>
                    )}
                    {candidate.website && (
                        <a
                            href={candidate.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.candidateSocialLink}
                        >
                            Website →
                        </a>
                    )}
                    {candidate.email && (
                        <a
                            href={`mailto:${candidate.email}`}
                            className={styles.candidateSocialLink}
                        >
                            {candidate.email}
                        </a>
                    )}
                </div>

                {candidate.blurb ? (
                    <>
                        <p className={`${styles.candidateBlurb} ${expanded ? '' : styles.blurbClamped}`}>
                            {candidate.blurb}
                        </p>
                        <button
                            onClick={() => setExpanded(e => !e)}
                            className={styles.readMoreBtn}
                        >
                            {expanded ? 'Show less ↑' : 'Read more ↓'}
                        </button>
                    </>
                ) : (
                    <p className={styles.noBlurb}>No profile available.</p>
                )}
            </div>
        </div>
    )
}
