"use client";
import styles from './blueCard.module.css'
import { blueCardPartners } from '@/data/bluecardPartners'
import { useState, useEffect } from 'react';


export default function BlueCard() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check if screen is mobile
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
        };

        // Check on mount
        checkIfMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    return (
        <div className={styles.blueCardPage}>
            <section className="page-banner-header">
                <div className={styles.pageHeaderContainer}>
                    {isMobile ? (
                        <>
                            <div className={styles.headerContent}>
                                <h1>The SUS Blue Card</h1>
                                <h2>Unlock exclusive discounts at restaurants and shops across campus with your Blue Card.</h2>
                                <a className={styles.signInButton} href='https://campus.hellorubric.com/?tab=memberships&s=10357'>Sign In/Up</a>
                            </div>
                            <div className={styles.blueCard}> 
                                <img 
                                    src="/assets/logos/sus-logo.png" 
                                    alt="SUS logo" 
                                    className={styles.logo} 
                                />
                                <div>
                                    <h1>The Blue Card</h1>
                                    <h2>Science Undergraduate Society</h2>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Desktop: blueCard first */}
                            <div className={styles.blueCard}> 
                                <img 
                                    src="/assets/logos/sus-logo.png" 
                                    alt="SUS logo" 
                                    className={styles.logo} 
                                />
                                <div>
                                    <h1>The Blue Card</h1>
                                    <h2>Science Undergraduate Society</h2>
                                </div>
                            </div>
                            <div className={styles.headerContent}>
                                <h1>The SUS Blue Card</h1>
                                <h2>Unlock exclusive discounts at restaurants and shops across campus with your Blue Card.</h2>
                                <a className={styles.signInButton} href='https://campus.hellorubric.com/?tab=memberships&s=10357'>Sign In/Up</a>
                            </div>
                        </>
                    )}
                </div>
            </section>

            <div className={styles.spacer}/>

            <section>
                <h1 className={styles.sectionTitle}>What is the Blue Card?</h1>
                <h2 className={styles.sectionSubtitle}>
                    Welcome to Blue Card -- Your FREE Virtual Discount Program for all UBC Science Students! 
                    Discover exclusive benefits at local restaurants and shops by simply presenting your Blue Card. 
                    To get started, follow the register link at the top of the page.
                </h2>
                <div className={styles.featureCardContainer}>
                    <div className={styles.featureCard}>
                        <img 
                            src="/assets/icons/percent-icon.svg" 
                            alt="percent icon" 
                            className={styles.icon} 
                        />
                        <h1>For all Science Students</h1>
                        <p>All UBC students enrolled in the faculty of science are eligible!</p>
                    </div>
                    <div className={styles.featureCard}>
                        <img 
                            src="/assets/icons/utensil-icon.png" 
                            alt="utensil icon" 
                            className={styles.icon} 
                        />
                        <h1>Wide Selection</h1>
                        <p>
                            Applies to over 20 restaurants and shops, from quick bites to fine dining 
                            experiences around campus.
                        </p>
                    </div>
                    <div className={styles.featureCard}>
                        <img 
                            src="/assets/icons/phone-icon.png" 
                            alt="phone icon" 
                            className={styles.icon} 
                        />
                        <h1>Easy To Use</h1>
                        <p>
                            Simply show your digital card at checkout. No apps to download, 
                            no complicated processes.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.sponsorSection}>
                <h1>Our Partners</h1>
                <div className={styles.sponsorGrid}>
                    {blueCardPartners.map((item, index) => (
                        <div key={index} className={styles.sponsorIconWrapper}>
                            <img
                                src={item.logoSrc}
                                alt={`${item.name} logo`}
                                className={styles.sponsorIcon}
                            />
                            <span className={styles.tooltiptext}>{item.description}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}