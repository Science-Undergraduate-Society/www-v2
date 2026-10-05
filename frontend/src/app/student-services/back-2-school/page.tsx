"use client";
import styles from './back2School.module.css'
import { useState, useEffect } from 'react';


export default function Back2School() {
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
        <div className={styles.back2SchoolPage}>
            <section className="page-banner-header">
                <div className={styles.headerContent}>
                    <h1>Back 2 School 2026 Survey</h1>
                    <h2>The Back2School Survey is live—fill it out today for a chance to win massive prizes!</h2>
                    <p>
                        The Science Undergraduate Society (SUS) wants to hear from UBC Science students. Your feedback helps our
                        Executives understand your needs, plan better campus events, launch helpful student initiatives, and
                        advocate for your rights to the university.
                    </p>
                    <p>
                        Complete the survey today to enter our tiered giveaway! The more responses we get, the more raffle prizes
                        are unlocked. You can also refer your friends to earn extra entries!
                    </p>
                    <div className={styles.prizes}>
                        <h3>Prizes include:</h3>
                        <ul>
                            <li>Apple iPad + Apple Pencil</li>
                            <li>Apple Watch SE3</li>
                            <li>Sony WH-CH520 Wireless Headphones</li>
                            <li>Kodak PIXPRO FZ45 Digicam</li>
                            <li>Portable Chargers, SUS Merch, and $15+ Gift Cards</li>
                        </ul>
                    </div>
                    <p>Make your voice heard and enter the raffle by filling out the survey today!</p>
                    <p className={styles.deadline}>Deadline: October 31st 2026 at 11:59 PM</p>
                    <a className={styles.signInButton} href='https://ubc.ca1.qualtrics.com/jfe/form/SV_6JCwgw0oJg04y46' target="_blank" rel="noopener noreferrer">Take Survey Here</a>
                </div>
            </section>            
        </div>
    )
}