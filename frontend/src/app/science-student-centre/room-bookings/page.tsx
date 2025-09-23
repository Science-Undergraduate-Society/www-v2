import Image from "next/image";
import { roomFeatures, MeetingRoomPolicies } from "@/data/roombooking";
import styles from "./roomBookings.module.css"; // <-- import the module mapping

export default function MeetingRoomBookingsPage() {
    return (
        <main className={styles["meeting-page"]}>
            
            <section className={styles.hero}>
                <div className={`${styles.container} ${styles["hero-content"]}`}>
                    <div className={styles["hero-left"]}>
                        <div className={styles["hero-heading"]}>
                            <h1 className={styles["hero-title"]}>Meeting Room Bookings</h1>
                            <div className={styles["location-row"]}>
                                <Image
                                    src="/assets/icons/location.png"
                                    alt=""
                                    width={32}
                                    height={32}
                                    className={styles["location-icon"]}
                                    priority
                                />
                                <span className={styles["location-name"]}>Abdul Ladha Science Student Centre (ALSSC)</span>
                            </div>
                        </div>
                    </div>

                    <p className={styles["hero-blurb"]}>
                        As a Science student, you are entitled to
                        <br />
                        book the meeting rooms of the ALSSC
                        <br />
                        for your own personal use (studying,
                        <br />
                        group work, meetings).
                    </p>
                </div>

                {/* angled white shape */}
                <div className={styles["hero-angle"]} />
            </section>

            {/* Meeting Room Policies */}
            <section className={styles.policies}>
                <div className={`${styles.container} ${styles["policies-container"]}`}>
                    <h2 className={styles["section-title"]}>Meeting Room Policies</h2>
                    <p className={styles["section-subtitle"]}>
                        Please observe the following policies when making a booking:
                    </p>

                    <div>
                        <ul className={styles["policy-list"]}>
                            {MeetingRoomPolicies.map((p) => (
                                <li key={p}>{p}</li>
                            ))}
                        </ul>
                    </div>

                    <p className={styles["contact-line"]} style={{ paddingTop: "1rem", marginBottom: "-2rem" }}>
                        For more information, please contact{" "}
                        <a className={styles["link-primary"]} href="mailto:bmanager.bookings@ubc.ca">
                            bmanager.bookings@ubc.ca
                        </a>
                    </p>
                </div>
            </section>

            {/* Make a Booking */}
            <section>
                {/* light-blue banner */}
                <div className={styles["booking-banner"]}>
                    <div className={`${styles.container} ${styles["booking-banner-inner"]}`}>
                        <h2 className={styles["section-title"]}>Make a Booking</h2>
                        <p className={styles["section-paragraph"]} style={{ paddingTop: "0.5rem" }}>
                            Rooms are typically open from 8 am to 8 pm Monday through Thursday,
                            and from 8 am to 6 pm on Fridays.
                        </p>
                    </div>
                </div>

                {/* cards grid */}
                <div className={`${styles.container} ${styles["booking-cards"]}`}>
                    <div className={styles["card-grid"]}>
                        {roomFeatures.map(({ name, capacity, img, features, roomNumber }) => (
                            <div key={roomNumber} className={styles["room-card"]}>
                                <Image
                                    src={img}
                                    alt={name}
                                    width={600}
                                    height={400}
                                    priority
                                    className={styles["room-card-image"]}
                                />

                                <div className={styles["room-card-body"]}>
                                    <div className={styles["room-card-header"]}>
                                        <h3 className={styles["room-card-title"]}>{name}</h3>
                                        <span className={styles["room-capacity"]}>
                      Capacity: {capacity} people
                    </span>
                                    </div>

                                    <div className={styles["text-sm"]}>
                                        <p className={styles["feature-heading"]}>Features:</p>
                                        <ul className={styles["feature-list"]}>
                                            {features.map((f) => (
                                                <li key={f}>{f}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button className={styles["btn-primary"]}>BOOK ROOM {roomNumber}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className={styles["contact-section"]} aria-labelledby="alssc-contact">
                <div className={`${styles.container} ${styles["contact-container"]}`}>
                    <h2 id="alssc-contact" className={styles["section-title"]}>
                        Contact our ALSSC Team
                    </h2>
                    <address className={styles["contact-address"]}>
                        <p>
                            <span className={styles["font-medium"]}>For booking inquiries:</span>{" "}
                            <a href="mailto:bmanager.bookings@sus.ubc.ca" className={styles["link-primary"]}>
                                bmanager.bookings@sus.ubc.ca
                            </a>
                        </p>

                        <p>
                            <span className={styles["font-medium"]}>For operations &amp; maintenance:</span>{" "}
                            <a href="mailto:bmanager.operations@sus.ubc.ca" className={styles["link-primary"]}>
                                bmanager.operations@sus.ubc.ca
                            </a>
                        </p>
                    </address>
                </div>
            </section>

        </main>
    );
}
