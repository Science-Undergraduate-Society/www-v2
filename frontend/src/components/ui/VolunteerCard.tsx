import React, { useState } from "react";
import Image from "next/image";
import styles from "./VolunteerCard.module.css";
import { VolunteerOpportunity } from "@/lib/types";

type VolunteerCardProps = {
    company: string;
    logo?: string;
    opportunities: VolunteerOpportunity[];
};

const VolunteerCard = ({ company, logo, opportunities }: VolunteerCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [logoFailed, setLogoFailed] = useState(false);

    return (
        <div className={styles.container}>
            <button
                type="button"
                className={styles.topbar}
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
            >
                <h2 className={styles.title}>{company}</h2>
                <span className={styles.topbarRight}>
                    <span className={styles.count}>
                        {opportunities.length} {opportunities.length === 1 ? "role" : "roles"}
                    </span>
                    <span
                        className={`${styles.arrow} ${isExpanded ? styles.arrowExpanded : ""}`}
                        aria-hidden
                        style={{
                            WebkitMaskImage: "url(/assets/icons/down-arrow.svg)",
                            maskImage: "url(/assets/icons/down-arrow.svg)",
                        }}
                    />
                </span>
            </button>

            {isExpanded && (
                <div className={styles.content}>
                    <div className={styles.logoBox}>
                        {logo && !logoFailed ? (
                            <Image
                                src={logo}
                                alt={`${company} logo`}
                                className={styles.logo}
                                width={200}
                                height={200}
                                unoptimized
                                onError={() => setLogoFailed(true)}
                            />
                        ) : (
                            <span className={styles.logoFallback} aria-hidden>
                                {company.charAt(0)}
                            </span>
                        )}
                    </div>

                    <div className={styles.roles}>
                        {opportunities.map((role) => (
                            <article key={role.id} className={styles.role}>
                                <h3 className={styles.roleTitle}>{role.title}</h3>

                                <div className={styles.meta}>
                                    <span className={styles.location}>{role.location}</span>
                                    {role.type.map((mode) => (
                                        <span key={mode} className={styles.modeTag}>{mode}</span>
                                    ))}
                                    {role.industry.map((tag) => (
                                        <span key={tag} className={styles.industryTag}>{tag}</span>
                                    ))}
                                </div>

                                <p className={styles.desc}>{role.description.trim()}</p>

                                {role.commitment && (
                                    <p className={styles.detail}>
                                        <b>Hours / commitment:</b> {role.commitment}
                                    </p>
                                )}
                                {role.howToApply && (
                                    <p className={styles.detail}>
                                        <b>How to apply:</b> {role.howToApply}
                                    </p>
                                )}

                                <a
                                    href={role.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.applyLink}
                                >
                                    Apply / Learn more →
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default VolunteerCard;
