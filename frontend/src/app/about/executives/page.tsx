"use client";
import { useState } from "react";
import styles from "./executives.module.css";
import { executives } from "@/data/executives";
import { Executive } from "@/lib/types";
import BannerHeader from "@/components/ui/BannerHeader/BannerHeader";
import Link from "next/link";

export default function Executives() {
  const [selectedExec, setSelectedExec] = useState<string | null>(null);

  const handleClick = (name: string) => {
    setSelectedExec(selectedExec === name ? null : name);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <BannerHeader>
          <h1>Meet the Executives</h1>
          <h2>
            Here you can find the contact information of each executive to be
            able to contact them. As well, office hours are held for each
            executive, and you can attend them at Abdul Ladha.
          </h2>
        </BannerHeader>
      </div>

      <div className={styles.executiveContainer}>
        {executives.map((e: Executive) => {
          const isSelected = selectedExec === e.name;

          return (
            <div key={e.name} className={styles.execWrapper}>
              <div
                className={`${styles.flipInner} ${
                  isSelected ? styles.flipped : ""
                }`}
              >
                {/* Front */}
                <div
                  className={styles.executiveCard}
                  onClick={() => handleClick(e.name)}
                >
                  {e.imagePath && (
                    <img
                      src={e.imagePath}
                      alt={e.name}
                      className={styles.executiveImage}
                    />
                  )}
                  <div className={styles.executiveText}>
                    <h3>{e.name}</h3>
                    <p>{e.role}</p>
                  </div>
                </div>

                {/* Back */}
                <div className={styles.infoPanel}>
                  <button
                    className={styles.closeButton}
                    onClick={(ev) => {
                      ev.stopPropagation();
                      handleClick(e.name);
                    }}
                    aria-label="Close"
                  >
                    ✕
                  </button>
                  <h2>{e.name}</h2>
                  <h4>{e.role}</h4>
                  <p>{e.description}</p>
                  <p>
                    <strong>Email:</strong> {e.email}
                  </p>
                  <p>
                    <strong>Office Hours:</strong> {e.officeHours}
                  </p>
                  <Link href={e.link} target="blank" className={styles.bookButton}>
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
