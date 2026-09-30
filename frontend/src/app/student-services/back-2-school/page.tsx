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
                    <h2>Your responses to this survey will assist the Science Undergraduate Society Executives in planning events 
                        and initiatives tailored to your needs this year. Additionally, the data will support the VP Academic 
                        (vpacademic@sus.ubc.ca) in advocating for science students during faculty-level conversations.</h2>
                    <a className={styles.signInButton} href='https://ubc.ca1.qualtrics.com/jfe/form/SV_6JCwgw0oJg04y46'>Take Survey Here</a>
                </div>
            </section>            
        </div>
    )
}