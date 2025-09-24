import styles from './susEvents.module.css'
import Navbar from "@/components/layout/Navbar/Navbar";
import { FeaturedEventsInitiative } from '@/lib/types';
import { featuredEvents } from '@/data/getInvolved';
import BlueButton from '@/components/ui/BlueButton/BlueButton';

export default function SusEvents() {
    const currentMonth = "September";
    const currentEvents = featuredEvents.filter((event, idx)=> event.isEvent && event.dates.includes(currentMonth))
    const futureEvents = featuredEvents.filter((event, idx) => event.isEvent && !event.dates.includes(currentMonth))
    const initiatives = featuredEvents.filter((event, idx) => !event.isEvent)

    function FeaturedEventItem({ feature }: { feature: FeaturedEventsInitiative }) {
        const hasDate = feature.dates.length > 0
        const hasImg = (feature.pictures.length) > 0
        const hasButtons = (feature.links.length) > 0
        const [firstWord, ...restTitle] = feature.title.split(' ');

        return (
                <div className={styles.monthEvent}>
                    <h1>
                        <span className={styles.firstWord}>{firstWord}</span> {restTitle.join(' ')}
                    </h1>
                    {
                        hasDate && <h2>{feature.dates}</h2>
                    }
                    <p>{feature.description}</p>
                    {
                        hasImg &&
                        <div className={styles.monthEventPictureContainer}>
                            {feature.pictures.map((pics, idx) => (
                                <div key={idx} className={styles.monthEventPicture}>
                                    <img src={pics} alt={`${feature.title} image ${idx + 1}`} />
                                </div>
                            ))}
                        </div>
                    }
                    {
                        hasButtons &&
                        <div className={styles.monthEventButtons}> 
                            {feature.links.map((link, idx) => (
                                <a href={link.url} target="_blank" className={`${styles.button} ${styles.navyBg}`} key={idx}>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    }
                </div>
            )
    }

    

    function FutureEvents({ feature }: { feature: FeaturedEventsInitiative }) {
        const hasDate = feature.dates.length > 0
        const hasImg = (feature.pictures.length) > 0
        const hasButtons = (feature.links.length) > 0

        return (
                <div className={styles.afterEvent}>
                    <h1>
                        {feature.title}
                    </h1>
                    {
                        hasDate && <h2>{feature.dates}</h2>
                    }
                    {
                        !hasDate && <div className={styles.smallSpacer}/>
                    }
                    <p>{feature.description}</p>
                    {
                        hasImg &&
                        <div className={styles.monthEventPictureContainer}>
                            {feature.pictures.map((pics, idx) => (
                                <div key={idx} className={styles.monthEventPicture}>
                                    <img src={pics} alt={`${feature.title} image ${idx + 1}`} />
                                </div>
                            ))}
                        </div>
                    }
                    {
                        hasButtons &&
                        <div className={styles.monthEventButtons}> 
                            {feature.links.map((link, idx) => (
                                <a href={link.url} target="_blank" className={`${styles.button} ${styles.whiteBg}`} key={idx}>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    }
                </div>
            )
    }

    

    return (
        <div>
            <Navbar />

            <section className={styles.heroSection}>
                <h1>Events</h1>
            </section>
            
            <div className={styles.spacer}></div> 

            <div className={styles.socialMediaBox}>
                <p>
                    <em>Fall 2026 has arrived, UBC! </em> Check out what's coming up this September.  
                    <br /><br />
                    
                    To keep up to date on all our events, please check out our&nbsp;
                    <a href="https://calendar.google.com/calendar/u/0/r?cid=Y19kNGE1NzA2MDBmZGFhMTEyZjFhYzdiZTgyMjg1MTM1MzY5Y2RlYjg3MGExNmIzMmE0YjY4ZGY2MWZkYWQ3ZGQ1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20">Google Calendar</a>&nbsp;and follow our&nbsp;
                    <a href="https://www.instagram.com/susubc/">Instagram</a>!
                </p>

                <div className={styles.iconButtons}>
                   <a 
                        href="https://calendar.google.com/calendar/u/0/r?cid=Y19kNGE1NzA2MDBmZGFhMTEyZjFhYzdiZTgyMjg1MTM1MzY5Y2RlYjg3MGExNmIzMmE0YjY4ZGY2MWZkYWQ3ZGQ1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img src="/assets/icons/calendar.svg" alt="Google Calendar" />
                    </a>

                    <a 
                        href="https://www.instagram.com/susubc/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img src="/assets/icons/instagram.svg" alt="Instagram" />
                    </a>
                </div>

            </div>


            <div className={styles.monthEventsContainer}>
                <h1>September Events</h1>
            </div>
            {
                currentEvents.map((feature, idx) => (
                    <FeaturedEventItem key={idx} feature={feature} />
                ))
            }
            <div className={styles.afterEventsContainer}>
                <h1>After {currentMonth} Events</h1>
                <div className={styles.afterEvent}>
                    {
                        futureEvents.map((feature, idx) => (
                            <FutureEvents key={idx} feature={feature} />
                        ))
                    }
                </div>
            </div>
            <div className={styles.initiativesContainer}>
                <div className={styles.initiativesTitle}>Initiatives</div>
                {
                initiatives.map((feature, idx) => (
                    <FeaturedEventItem key={idx} feature={feature} />
                ))
            }
            </div>
        </div>
    );
}