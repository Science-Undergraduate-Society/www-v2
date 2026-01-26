import Link from 'next/link'
import BannerHeader from '@/components/ui/BannerHeader/BannerHeader'
import BannerSection from '@/components/ui/BannerSection/BannerSection'
import FrostedCard from '@/components/ui/FrostedCard/FrostedCard'
import CollapsibleBox from '@/components/ui/CollapsibleBox/CollapsibleBox'
import styles from './info.module.css'

export default function ScienceStudentCentreInfo() {
    return (
        <div className={styles.scienceStudentCentreInfo}>
            <BannerHeader>
                <h1>Abdul Ladha Science Student Centre (ALSSC)</h1>
            </BannerHeader>
            <FrostedCard className={styles.openingHours}>
                <div className={styles.hours}>
                    <h1>Opening Hours</h1>
                    <div>
                        <p>Monday to Thursday:</p>
                        <p>8am to 8pm</p>
                    </div>
                    <div>
                        <p>Friday:</p>
                        <p>8am to 6pm</p>
                    </div>
                    <div>
                        <p>Saturday & Sunday:</p>
                        <p>Closed</p>
                    </div>
                </div>
                <div className={styles.hoursNote}>
                    <p>Note:</p>
                    <div>
                        <p>The ALSSC will be...</p>
                        <ul>
                            <li>open during the first and second terms of the winter session only</li>
                            <li>closed during the summer academic terms</li>
                            <li>closed during all university closures (including, but not limited to reading break, Christmas holidays, and any holidays)</li>
                        </ul>
                    </div>
                </div>
            </FrostedCard>
            <BannerSection className={styles.about}>
                <h1>About the ALSSC</h1>
                <p>
                    Named after Abdul Ladha, the Abdul Ladha Science Student Centre is the home of the Science Undergraduate Society.
                    It exists as a social space to encourage both informal and organized academic, club, and social activities and interactions for those students enrolled in the Faculty of Science at UBC Vancouver.
                </p>
                <div className={styles.bookingButtons}>
                    <Link href={"/science-student-centre/room-bookings"}>
                        <b>Book a Meeting Room</b>
                    </Link>
                    <Link href={"/science-student-centre/event-bookings"}>
                        <b>Request an Event Booking</b>
                    </Link>
                </div>
                <h1>About Abdul Ladha</h1>
                <div className={styles.abdulLadha}>
                    <img src="/assets/student-science-centre-images/abdul-ladha.png" alt="Abdul Ladha" />
                    <p>
                        Abdul Ladha, an Honours graduate in Electrical Engineering from UBC, has made significant contributions across business, philanthropy, and education.
                        As CEO of Ableauctions.com Inc., he pioneered live online auction technology, making it a global leader serving platforms like eBay.
                        He also founded SPARK, a philanthropic foundation supporting youth initiatives and providing care for thousands of children in Africa.
                        Abdul&apos;s achievements have earned him awards such as the Great Trekker and Entrepreneur of the Year.
                        A dedicated supporter of UBC, he holds the distinction of having the Science Student Centre named in his honour.
                        Additionally, he is a key benefactor of Lions Gate Hospice and a founding director of The Canadian Institute for Technological Advancement.
                    </p>
                </div>
                <a href="http://abdulladha.com/" className={styles.learnMore} >
                    <p>Learn More</p>
                    <img src="/assets/student-science-centre-images/link.svg" alt="Link" />
                </a>
            </BannerSection>
            <section className={styles.buildingFeatures}>
                <h1>General Building Features & Information</h1>
                <CollapsibleBox
                    className={styles.collapsibleBox}
                    titleElement={<h2>Building Exterior (Front Porch)</h2>}
                >
                    <ul>
                        <li>Open space for boothing outside the front of the building</li>
                        <li>We provide tables and tents to ensure that you can booth in any weather</li>
                        <li>Microphone and speakers are also available for events in this space</li>
                    </ul>
                </CollapsibleBox>
                <CollapsibleBox
                    className={styles.collapsibleBox}
                    titleElement={<h2>Audio-Visual (AV) System</h2>}
                >
                    <p>The ALSSC is equipped with a state-of-the-art AV system. Specifically, the system has the following features and capabilities:</p>
                    <div>
                        <b>Multimedia Projector:</b>
                        <ul>
                            <li>Wired video and audio connection via HDMI</li>
                            <li>Wireless video and audio connection via AirMedia</li>
                            <li>Retractable screen</li>
                            <li>Single content only (not dual-content capable)</li>
                        </ul>
                    </div>
                    <div>
                        <b>Audio:</b>
                        <ul>
                            <li>4 Speakers (2 front facing, 2 rear facing)</li>
                            <li>Wired audio connection via 3.5mm jack</li>
                            <li>Wireless audio connection via AirMedia</li>
                        </ul>
                    </div>
                    <div>
                        <b>Microphones:</b>
                        <ul>
                            <li>1 Wireless lapel microphone</li>
                            <li>1 Wireless handheld microphone</li>
                        </ul>
                    </div>
                    <div>
                        <b>Touchscreen AV Control System:</b>
                        <ul>
                            <li>Select video and audio connections</li>
                            <li>Independently adjust microphone and audio levels</li>
                            <li>Full system mute and volume adjustment</li>
                        </ul>
                    </div>
                </CollapsibleBox>
                <CollapsibleBox
                    className={styles.collapsibleBox}
                    titleElement={<h2>Accessibility</h2>}
                >
                    <ul>
                        <li>All floors are wheelchair accessible via elevator access</li>
                        <li>Accessible washrooms</li>
                        <li>Automatic door openers on main entrance and side entrance</li>
                    </ul>
                </CollapsibleBox>
            </section>
            <section className={styles.floorFeatures}>
                <h1>Floor-Specific Features, Information & Floor Plans</h1>
                <CollapsibleBox
                    className={styles.collapsibleBox}
                    titleElement={<h2>First Floor (1F)</h2>}
                >
                    <ul>
                        <li>Printer (connected to UBC Pay for Print)</li>
                        <li>3 Meeting rooms for meetings or smaller events</li>
                        <li>Study cubicles for silent study</li>
                        <li>Large tables for silent group study</li>
                    </ul>
                    <a
                        href="/assets/student-science-centre-images/1f-floor-plan.svg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/assets/student-science-centre-images/1f-floor-plan.svg" alt="1F Floor Plan" />
                    </a>
                </CollapsibleBox>
                <CollapsibleBox
                    className={styles.collapsibleBox}
                    titleElement={<h2>Second Floor (2F / Main Floor)</h2>}
                >
                    <ul>
                        <li>Large open area for studying and hosting events</li>
                        <li>Bar-style kitchenette with fridges and microwaves</li>
                        <li>Water dispenser (hot and cold water)</li>
                        <li>Rolling tables (8) and chairs (40+)</li>
                        <li>Audio-Visual (AV) system with projector, speakers, and microphones</li>
                        <li>Mens/Womens/Universal washrooms (all wheelchair accessible)</li>
                    </ul>
                    <a
                        href="/assets/student-science-centre-images/2f-floor-plan.svg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/assets/student-science-centre-images/2f-floor-plan.svg" alt="2F Floor Plan" />
                    </a>
                </CollapsibleBox>
                <CollapsibleBox
                    className={styles.collapsibleBox}
                    titleElement={<h2>Third Floor (3F / Mezzanine)</h2>}
                >
                    <ul>
                        <li>Couches and tables for studying and lounging</li>
                        <li>Space for smaller/relaxed events</li>
                    </ul>
                    <a
                        href="/assets/student-science-centre-images/3f-floor-plan.svg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/assets/student-science-centre-images/3f-floor-plan.svg" alt="3F Floor Plan" />
                    </a>
                </CollapsibleBox>
            </section>
        </div>
    )
}
