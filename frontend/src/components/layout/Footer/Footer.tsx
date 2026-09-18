import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

export const Footer = () => {
    const socialLinks = [
        {
            name: "Email",
            src: "/assets/footer-icons/email.png",
            extra: styles.iconEmail,
            link: "mailto:info@sus.ubc.ca",
        },
        {
            name: "Facebook",
            src: "/assets/footer-icons/facebook.png",
            link: "https://www.facebook.com/susubc/",
        },
        {
            name: "Instagram",
            src: "/assets/footer-icons/instagram.png",
            link: "https://www.instagram.com/susubc",
        },
        {
            name: "Linkedin",
            src: "/assets/footer-icons/linkedin.png",
            link: "https://www.linkedin.com/company/susubc/posts/?feedView=all",
        },
        {
            name: "Spotify",
            src: "/assets/footer-icons/spotify.png",
            link: "https://open.spotify.com/show/6LvV59dTsORiXSn4z28Zon?si=0708d6d527c145ce"
        },
        {
            name: "Tik tok",
            src: "/assets/footer-icons/tik-tok.png",
            link: "https://www.tiktok.com/@sus_ubc"
        },
        {
            name: "YouTube",
            src: "/assets/footer-icons/youtube.png",
            extra: styles.iconYoutube,
            link: "https://www.youtube.com/@ubcsus"
        },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <Image
                    className={styles.logo}
                    alt="SUS Logo"
                    src="/assets/footer-icons/sus-logo.png"
                    width={165}
                    height={165}
                />

                <div className={styles.socialContainer}>
                    {socialLinks.map(({ name, src, extra, link }, idx) => (
                        <a
                            key={idx}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className={`${styles.icon} ${extra || ""}`}
                                alt={name}
                                src={src}
                                width={56}
                                height={56}
                            />
                        </a>
                    ))}
                </div>

                <p className={styles.copyright}>
                    Copyright © 2026 UBC Science Undergraduate Society
                </p>
            </div>
        </footer>
    );
};
