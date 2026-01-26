import React, { useState } from "react";
import styles from "./ClubCard.module.css";
import { ClubInfo } from "@/lib/types";

const normalizeUrl = (url: string) =>
    /^(mailto:|https?:\/\/)/i.test(url) ? url : `https://${url}`;

type LinkItem = { name: string; href: string; src: string };

const buildLinks = (club: ClubInfo): LinkItem[] => {
    const links: (LinkItem | false)[] = [
        club.website ? { name: "Website", href: normalizeUrl(club.website), src: "/assets/icons/globe.svg" } : false,
        club.email ? { name: "Email", href: `mailto:${club.email}`, src: "/assets/footer-icons/email.svg" } : false,
        club.linkedin ? { name: "LinkedIn", href: normalizeUrl(club.linkedin), src: "/assets/footer-icons/linkedin.svg" } : false,
        club.facebook ? { name: "Facebook", href: normalizeUrl(club.facebook), src: "/assets/footer-icons/facebook.svg" } : false,
        club.twitter ? { name: "Twitter", href: normalizeUrl(club.twitter), src: "/assets/icons/twitter.svg" } : false,
        club.instagram ? { name: "Instagram", href: normalizeUrl(club.instagram), src: "/assets/footer-icons/instagram.svg" } : false,
    ];
    return links.filter(Boolean) as LinkItem[];
};

const ClubCard = (club: ClubInfo) => {
    const [isExpanded, setIsExpanded] = useState(false); // Start expanded
    const links = buildLinks(club);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.container}>
            <div className={styles.topbar} onClick={toggleExpanded}>
                <h2 className={styles.title}>{club.name}</h2>

                <span
                    className={`${styles.arrow} ${isExpanded ? styles.arrowExpanded : ''}`}
                    aria-hidden
                    style={{
                        WebkitMaskImage: "url(/assets/icons/down-arrow.svg)",
                        maskImage: "url(/assets/icons/down-arrow.svg)",
                    }}
                />
            </div>

            {isExpanded && (
                <div className={styles.content}>
                    <img src={club.img} alt={club.name} className={styles.image} />
                    <div>
                        <p className={styles.desc}>{club.description}</p>
                        {links.length > 0 && (
                            <div className={styles.links} aria-label="Club links">
                                {links.map(({ name, href, src }) => {
                                    const isMail = href.startsWith("mailto:");
                                    return (
                                        <a
                                            key={name}
                                            href={href}
                                            target={isMail ? "_self" : "_blank"}
                                            rel={isMail ? undefined : "noopener noreferrer"}
                                            aria-label={name}
                                            title={name}
                                            className={styles.iconLink}
                                        >
                                            <span
                                                className={styles.iconMask}
                                                aria-hidden
                                                style={{ WebkitMaskImage: `url(${src})`, maskImage: `url(${src})` }}
                                            />
                                        </a>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClubCard;