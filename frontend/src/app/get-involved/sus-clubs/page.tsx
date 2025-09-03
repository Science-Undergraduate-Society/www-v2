"use client";

import { useState } from "react";
import styles from "./events.module.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import { ClubsInfo } from "@/data/clubs";
import ClubCard from "@/components/ui/ClubCard";
import ToggleButton from "@/components/ui/ToggleButton";
import type { ClubInfo } from "@/lib/types";

type Filter = "departmental" | "non-departmental";

const slug = (s: string) => s.toLowerCase().replace(/[\s_]/g, "-");

const getDisplayedClubs = (
    allClubs: ClubInfo[],
    filter: Filter,
    searchTerm: string,
    visibleCount: number
): ClubInfo[] => {
    const term = searchTerm.trim().toLowerCase();

    const filtered = allClubs.filter((club) => {
        const matchesFilter = slug(club.type ?? "") === filter;
        const matchesSearch =
            term.length === 0 ||
            club.name.toLowerCase().includes(term) ||
            club.description.toLowerCase().includes(term);
        return matchesFilter && matchesSearch;
    });

    return filtered.slice(0, visibleCount);
};

export default function SusClubs() {
    const [clubFilter, setClubFilter] = useState<Filter>("departmental");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [visibleCount, setVisibleCount] = useState<number>(8);
    const clubsPerPage = 8;

    const filteredCount = ClubsInfo.filter((club) => {
        const matchesFilter = slug(club.type ?? "") === clubFilter;
        const term = searchTerm.trim().toLowerCase();
        const matchesSearch =
            term.length === 0 ||
            club.name.toLowerCase().includes(term) ||
            club.description.toLowerCase().includes(term);
        return matchesFilter && matchesSearch;
    }).length;

    const displayedClubs = getDisplayedClubs(
        ClubsInfo,
        clubFilter,
        searchTerm,
        visibleCount
    );

    const handleToggle = (selected: string) => {
        const v = (selected as Filter) ?? "departmental";
        setClubFilter(v);
        setVisibleCount(8); // reset
    };

    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchTerm(e.target.value);
        setVisibleCount(8); // reset
    };

    const handleContainerScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
        const el = e.currentTarget;
        if (el.scrollTop + el.clientHeight >= el.scrollHeight - 100) {
            setVisibleCount((prev) => Math.min(prev + clubsPerPage, filteredCount));
        }
    };

    return (
        <div>
            <Navbar />

            <section className={styles.heroSection}>
                <h1>Clubs</h1>
                <p>
                    Science Undergraduate Society is proud to support 26 departmental and
                    26 non-departmental clubs for the 2023/2024 academic year.
                </p>
            </section>

            <section className={styles.content}>
                <div className={styles.topContainer}>
                    <div>
                        <ToggleButton onToggle={handleToggle} />
                    </div>

                    <div className={styles.searchContainer}>
                        <img
                            src={"/assets/icons/search.svg"}
                            alt="Search"
                            className={styles.searchIcon}
                        />
                        <input
                            className={styles.searchBar}
                            type="text"
                            placeholder="Search"
                            maxLength={500}
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>

                <div
                    className={styles.clubsContainer}
                    onScroll={handleContainerScroll}
                    role="region"
                    aria-label="Clubs list"
                >
                    {displayedClubs.map((club: ClubInfo) => (
                        <ClubCard key={club.name} {...club} />
                    ))}
                </div>
            </section>
        </div>
    );
}
