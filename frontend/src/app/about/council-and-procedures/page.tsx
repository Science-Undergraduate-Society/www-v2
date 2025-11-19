import { Suspense } from "react";
import styles from "./council.module.css";
import BannerHeader from "@/components/ui/BannerHeader/BannerHeader";
import BannerSection from "@/components/ui/BannerSection/BannerSection";
import FrostedCard from "@/components/ui/FrostedCard/FrostedCard";
import BlueButton from "@/components/ui/BlueButton/BlueButton";

export default function Council() {
  return (
    <div className={styles.councilprocedures}>
      <BannerHeader>
        <h1>Council & Procedures</h1>
      </BannerHeader>
      <section className={styles.access}>
        <FrostedCard className={styles.accessCard}>
          <p>
            The SUS Council is the highest governing body in SUS. The purpose of
            Council is to provide a platform for the science community to engage
            with the Science Undergraduate Society’s initiatives throughout the
            year. It allows students hold executives accountable for their work,
            and ensures that the voices of Science students are represented in
            their government.
          </p>
        </FrostedCard>
      </section>
      <section className={styles.codeProcedures}>
        <h1>Code and Procedures</h1>
        <p>
          The following document outlines how the SUS is organized, how the
          student fees are used, how decisions are made on behalf of Science
          Students and the responsibilities of elected officials. For any
          questions regarding our code or procedures, please contact the VP
          Administration, Alan Wei at vpadministration@sus.ubc.ca!
        </p>
        <span>Last Updated: August 31st, 2025</span>
        <BlueButton
          href="https://docs.google.com/document/d/1LeaQmUL0Gy5AwfrW24eZTjXHoojVE6SHIPk5n-SZ8lM/edit?pli=1&tab=t.0"
          className={styles.button}
        >
          SUS Code of Procedures Document
        </BlueButton>
      </section>
      <BannerSection className={styles.about}>
        <div className={styles.councilMeetings}>
          <h1>Council Meetings</h1>
          <p>
            Council meetings are held monthly. Our next council meeting will be
            October 16th, 2025 and November 20th, 2025 from 5 - 7pm in the
            Micheal Kingsmill Forum.
            <br />
            <br />
            Councilors meet additionally with SUS Executives in 5 council
            committees: Academic Affairs, External Relations, Student Life &
            Events, President’s Advisory, and the Joint Policy and Advocacy.
            <br />
            <br />
            All members of the Undergraduate Science Community are welcome to
            attend these monthly Council Meetings as members at large. Please
            email our AVP Administrations, Gloria and Alyssa, through
            avp.administration@sus.ubc.ca to notify us of your intent to attend.
            For any additional questions, feel free to also contact our AVP
            Administrations!
          </p>
          <div>
            <div className={styles.mailimg}>
              <img
                className={styles.mail}
                alt="mail"
                src="/assets/council/mail.png"
              />
            </div>
          </div>
        </div>
      </BannerSection>
      <section className={styles.codeProcedures}>
        <h1>Who Can Vote?</h1>
        <p>
          Voting members of council include the SUS Executives (President and
          Vice-Presidents), and elected councillors from each
          department/program. Non-voting members include the Speaker of Council,
          AVP Administrations (as Clerks of Council), AMS Representatives, the
          Science Senator, and the representatives from SUS Program Clubs.
        </p>
      </section>
      <section className={styles.codeProcedures}>
        <h1>Councilors</h1>
        <p>
          The Council is comprised of both elected members and appointed roles.
          The councilors provide insight for student advocacy or SUS initiatives
          and receive updates for SUS portfolios. If you have any questions or
          concerns, please feel free to email your respective representative!
        </p>
        <FrostedCard className={styles.card}>
          <p>SUS Representatives</p>
        </FrostedCard>
        <FrostedCard className={styles.card}>
          <p>Departmental Representatives</p>
        </FrostedCard>
        <FrostedCard className={styles.card}>
          <p>Program Club Representatives</p>
        </FrostedCard>
      </section>
    </div>
  );
}
