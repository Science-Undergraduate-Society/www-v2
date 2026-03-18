'use client'

import { Fragment, useState } from 'react'
import type { ReactNode } from 'react'
import Image from 'next/image'
import styles from './elections.module.css'
import { ElectionCandidate } from '@/data/electionCandidates2026'

const BLURB_LINK_REGEX = /(https?:\/\/[^\s]+|(?:[a-z0-9-]+\.)+[a-z]{2,}(?:\/[^\s]*)?|@[a-z0-9._]+)/gi

function normalizeBlurbLink(match: string): string {
    if (match.startsWith('@')) {
        return `https://instagram.com/${match.slice(1)}`
    }
    if (/^https?:\/\//i.test(match)) {
        return match
    }
    return `https://${match}`
}

function renderBlurb(blurb: string) {
    return blurb.split('\n').map((line, lineIndex, allLines) => {
        const lineParts: ReactNode[] = []
        let lastIndex = 0
        const matches = line.matchAll(new RegExp(BLURB_LINK_REGEX))

        for (const match of matches) {
            const start = match.index ?? 0
            const raw = match[0]
            const end = start + raw.length
            const prevChar = start > 0 ? line[start - 1] : ''

            lineParts.push(line.slice(lastIndex, start))

            let core = raw
            let trailing = ''
            while (core.length > 0 && /[.,!?;:)]/.test(core[core.length - 1])) {
                trailing = `${core[core.length - 1]}${trailing}`
                core = core.slice(0, -1)
            }

            const isEmailPart =
                (core.startsWith('@') && /[a-z0-9._%+-]/i.test(prevChar)) ||
                (!core.startsWith('@') && prevChar === '@')

            if (core.length > 0 && !isEmailPart) {
                lineParts.push(
                    <a
                        key={`blurb-link-${lineIndex}-${start}`}
                        href={normalizeBlurbLink(core)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.candidateBlurbLink}
                    >
                        {core}
                    </a>
                )
            } else {
                lineParts.push(raw)
            }

            if (trailing) {
                lineParts.push(trailing)
            }

            lastIndex = end
        }

        lineParts.push(line.slice(lastIndex))

        return (
            <Fragment key={`blurb-line-${lineIndex}`}>
                {lineParts}
                {lineIndex < allLines.length - 1 && <br />}
            </Fragment>
        )
    })
}

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
                            {renderBlurb(candidate.blurb)}
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
