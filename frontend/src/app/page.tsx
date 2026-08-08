import Image from "next/image";
import BannerSection from '@/components/ui/BannerSection/BannerSection'
import SusCalendar from "@/components/features/Calendar/Calendar";
import { ClubsInfo } from "@/data/clubs";
import styles from "./home.module.css";

const getClubHref = (club: (typeof ClubsInfo)[number]) => {
  return (
    club.website ??
    club.instagram ??
    club.facebook ??
    club.linkedin ??
    club.twitter ??
    "/get-involved/sus-clubs"
  );
};

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <Image src="/assets/hero_image.jpg" className={styles.hero_image} alt="SUS UBC Hero Image" draggable="false" width={1920} height={1080} priority />
        <section className={styles.header}>
          <Image src="/assets/home-header.svg" alt="Representing 10,000+ Science Students & 50+ Science Clubs" draggable="false" width={1359} height={471} priority />
        </section>
      </div>
      <BannerSection className={styles.about}>
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
      </BannerSection>
      <section className={styles.events}>
        <h1>Check Out Our Events!</h1>
        <h2>Upcoming Events</h2>
        <p>Hover over the event to view details!</p>
        <SusCalendar></SusCalendar>

        <div className={styles.clubLogosSection}>
          <h3>SUS Affiliated Clubs</h3>
          <div className={styles.clubLogosGrid}>
            {ClubsInfo.map((club) => {
              const href = getClubHref(club);
              const isExternal = href.startsWith("http");

              return (
                <a
                  key={club.name}
                  href={href}
                  className={styles.clubLogoLink}
                  aria-label={`${club.name} website`}
                  title={club.name}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Image
                    src={club.img}
                    alt={`${club.name} logo`}
                    width={96}
                    height={96}
                    draggable="false"
                    className={styles.clubLogoImage}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
