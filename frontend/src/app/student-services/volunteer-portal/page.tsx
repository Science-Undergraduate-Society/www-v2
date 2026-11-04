"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import BannerHeader from "@/components/ui/BannerHeader/BannerHeader";
import FrostedCard from "@/components/ui/FrostedCard/FrostedCard";
import VolunteerCard from "@/components/ui/VolunteerCard";
import { VolunteerJobs } from "@/data/volunteerOpportunity";
import type { Industry, VolunteerOpportunity } from "@/lib/types";
import styles from "./volunteerPortal.module.css";

type Filter = Industry | "All";

type Organization = {
    company: string;
    logo: string;
    opportunities: VolunteerOpportunity[];
};

const matchesSearch = (job: VolunteerOpportunity, term: string) =>
    term.length === 0 ||
    [job.company, job.title, job.description, job.location, ...job.industry]
        .join(" ")
        .toLowerCase()
        .includes(term);

const groupByOrganization = (jobs: VolunteerOpportunity[]): Organization[] => {
    const groups = new Map<string, Organization>();
    for (const job of jobs) {
        const group = groups.get(job.company);
        if (group) {
            group.opportunities.push(job);
        } else {
            groups.set(job.company, { company: job.company, logo: job.logo, opportunities: [job] });
        }
    }
    return [...groups.values()].sort((a, b) => a.company.localeCompare(b.company));
};

const allIndustries = [...new Set(VolunteerJobs.flatMap((job) => job.industry))].sort();

export default function VolunteerPortal() {
    const [filter, setFilter] = useState<Filter>("All");
    const [searchTerm, setSearchTerm] = useState<string>("");

    const organizations = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();
        const jobs = VolunteerJobs.filter(
            (job) =>
                (filter === "All" || job.industry.includes(filter)) && matchesSearch(job, term)
        );
        return groupByOrganization(jobs);
    }, [filter, searchTerm]);

    return (
        <div className={styles.volunteerPortal}>
            <BannerHeader>
                <h1>Community Engagement Volunteer Portal</h1>
            </BannerHeader>

            <section className={styles.about}>
                <FrostedCard className={styles.aboutCard}>
                    The SUS Community Engagement team connects UBC Science students to <b>volunteer opportunities</b> that
                    expand their community outreach and civic engagement. Browse organizations across Metro Vancouver
                    that are looking for volunteers, see what each role involves, and apply directly with the
                    organization.
                </FrostedCard>

                <div className={styles.topContainer}>
                    <div className={styles.tags} role="group" aria-label="Filter by category">
                        {(["All", ...allIndustries] as Filter[]).map((tag) => (
                            <button
                                key={tag}
                                type="button"
                                className={`${styles.tag} ${filter === tag ? styles.tagActive : ""}`}
                                aria-pressed={filter === tag}
                                onClick={() => setFilter(tag)}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    <div className={styles.searchContainer}>
                        <Image
                            src="/assets/icons/search.svg"
                            alt=""
                            className={styles.searchIcon}
                            width={32}
                            height={32}
                        />
                        <input
                            className={styles.searchBar}
                            type="text"
                            placeholder="Search organizations or roles"
                            aria-label="Search volunteer opportunities"
                            maxLength={500}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles.listContainer} role="region" aria-label="Volunteer opportunities">
                    {organizations.length > 0 ? (
                        organizations.map((org) => (
                            <VolunteerCard
                                key={org.company}
                                company={org.company}
                                logo={org.logo}
                                opportunities={org.opportunities}
                            />
                        ))
                    ) : (
                        <p className={styles.empty}>No volunteer opportunities match your search.</p>
                    )}
                </div>
            </section>
        </div>
    );
}
