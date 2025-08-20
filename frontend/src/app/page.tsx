import styles from "./home.module.css";
import Navbar from "@/components/layout/Navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <section className={styles.header}>
        <img src="/assets/home-header.svg" alt="Representing 9,900+ Science Students & 50+ Science Clubs" draggable="false" />
        <div className={styles.headerGradient1} />
        <div className={styles.headerGradient2} />
      </section>
      <section className={styles.about}>
        <div className={styles.whoWeAre}>
          <h1>Who We Are</h1>
          <p>
            Founded in 1961, the Science Undergraduate Society (or SUS) aims to promote the academic, physical, & social well-being of Science Students.
            Supporting over 9700+ Science Students and over 50 Science clubs, every science student is a member of SUS.
          </p>
        </div>
        <div className={styles.whatWeDo}>
          <h1>What We Do</h1>
          <p>
            Through SUS, we aim to create and foster a sense of science community and continually promote good relations with other communities on campus.
            Throughout the year, dozens of <a href="/events">events</a> are run to in an effort to support our peers here at UBC.
          </p>
        </div>
      </section>
      <section className={styles.events}>
        <h1>Check Out Our Events!</h1>
        <h2>Upcoming Events</h2>
        <p>Hover over the event to view details!</p>
        <h2>Past Events</h2>
      </section>
    </div>
  );
}
