// Preview page renders the full events-and-initiatives layout with one
// item supplied via query params so staff can see exactly how it will look.
// Not linked in the nav; only used by the internal update tool iframe preview.

import styles from '../../get-involved/events-and-initiatives/susEvents.module.css';
import { FeaturedEventsInitiative } from '@/lib/types';

type Mode = "current" | "upcoming" | "initiative";

function formatDate(dateStr: string): string {
    if (!dateStr) return "";
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function formatTime(timeStr: string): string {
    if (!timeStr) return "";
    const [h, m] = timeStr.split(":").map(Number);
    const suffix = h >= 12 ? "PM" : "AM";
    const hour = h % 12 || 12;
    return `${hour}:${String(m).padStart(2, "0")} ${suffix}`;
}


function FeaturedEventItem({ feature, highlight }: { feature: FeaturedEventsInitiative; highlight?: boolean }) {
    const [firstWord, ...restTitle] = feature.title.split(' ');
    return (
        <div className={styles.monthEvent} style={highlight ? { outline: "3px solid #0173be", borderRadius: 8 } : undefined}>
            {highlight && (
                <div style={{ background: "#0173be", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 4, width: "fit-content", marginBottom: 4 }}>
                    YOUR ITEM
                </div>
            )}
            <h1>
                <span className={styles.firstWord}>{firstWord}</span> {restTitle.join(' ')}
            </h1>
            {feature.dates && <h2>{feature.dates}</h2>}
            <p>{feature.description}</p>
            {feature.pictures.length > 0 && (
                <div className={styles.monthEventPictureContainer}>
                    {feature.pictures.map((pic, idx) => (
                        <div key={idx} className={styles.monthEventPicture}>
                            <img src={pic} alt={`${feature.title} image ${idx + 1}`} />
                        </div>
                    ))}
                </div>
            )}
            {feature.links.length > 0 && (
                <div className={styles.monthEventButtons}>
                    {feature.links.map((link, idx) => (
                        <a href={link.url} target="_blank" className={`${styles.button} ${styles.navyBg}`} key={idx}>
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

function FutureEventItem({ feature, highlight }: { feature: FeaturedEventsInitiative; highlight?: boolean }) {
    return (
        <div className={styles.afterEvent} style={highlight ? { outline: "3px solid #fff", borderRadius: 8, padding: 8 } : undefined}>
            {highlight && (
                <div style={{ background: "#fff", color: "#222755", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 4, width: "fit-content", marginBottom: 4 }}>
                    YOUR ITEM
                </div>
            )}
            <h2>{feature.title}</h2>
            {feature.dates ? <h2>{feature.dates}</h2> : <div className={styles.smallSpacer} />}
            <p>{feature.description}</p>
            {feature.pictures.length > 0 && (
                <div className={styles.monthEventPictureContainer}>
                    {feature.pictures.map((pic, idx) => (
                        <div key={idx} className={styles.monthEventPicture}>
                            <img src={pic} alt="" />
                        </div>
                    ))}
                </div>
            )}
            {feature.links.length > 0 && (
                <div className={styles.monthEventButtons}>
                    {feature.links.map((link, idx) => (
                        <a href={link.url} target="_blank" className={`${styles.button} ${styles.whiteBg}`} key={idx}>
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

export default async function EventsPreviewPage({
    searchParams,
}: {
    searchParams: Promise<Record<string, string>>;
}) {
    const params = await searchParams;
    const mode = (params.mode ?? "current") as Mode;

    const dateStr = params.date ? formatDate(params.date) : "";
    const timeStr = params.time ? formatTime(params.time) : "";
    const dateDisplay = [dateStr, timeStr].filter(Boolean).join(" · ");

    const previewItem: FeaturedEventsInitiative = {
        type: mode === "initiative" ? "initiative" : "event",
        isEvent: mode !== "initiative",
        title: params.title ?? "Your Event Title",
        dates: dateDisplay,
        description: params.description ?? "Your description will appear here.",
        pictures: params.image ? [params.image] : [],
        links: params.link ? [{ label: mode === "initiative" ? "Learn More" : "Event Link", description: "", url: params.link }] : [],
    };

    const currentMonth = new Date().toLocaleString("en-US", { month: "long" });

    const dummyCurrentEvent: FeaturedEventsInitiative = {
        type: "event",
        isEvent: true,
        title: "Sample Current Event",
        dates: `${currentMonth} 20, 2026`,
        description: "This is a placeholder showing how other current month events appear.",
        pictures: [],
        links: [{ label: "Event Link", description: "", url: "#" }],
    };

    const dummyUpcomingEvent: FeaturedEventsInitiative = {
        type: "event",
        isEvent: true,
        title: "Sample Upcoming Event",
        dates: "Next Month 10, 2026",
        description: "This is a placeholder showing how other upcoming events appear.",
        pictures: [],
        links: [],
    };

    const dummyInitiative: FeaturedEventsInitiative = {
        type: "initiative",
        isEvent: false,
        title: "Sample Initiative",
        dates: "",
        description: "This is a placeholder showing how other initiatives appear.",
        pictures: [],
        links: [{ label: "Learn More", description: "", url: "#" }],
    };

    return (
        <div>
            {/* Preview banner */}
            <div style={{ background: "#1e3a5f", color: "#fff", textAlign: "center", padding: "10px", fontSize: 13, fontWeight: 600, position: "sticky", top: 0, zIndex: 100 }}>
                📋 Preview — your item is highlighted in blue · This page is not live
            </div>

            <div style={{ padding: "2rem 10vw 0.5rem" }}>
                <h1 style={{ fontSize: 40, color: "#222755" }}>Events & Initiatives</h1>
            </div>

            {/* Current month section */}
            <div className={styles.monthEventsContainer}>
                <h1>{currentMonth} Events</h1>
            </div>
            {mode === "current"
                ? <FeaturedEventItem feature={previewItem} highlight />
                : <FeaturedEventItem feature={dummyCurrentEvent} />
            }

            {/* Upcoming section */}
            <div className={styles.afterEventsContainer}>
                <h1>Upcoming Events</h1>
                <div>
                    {mode === "upcoming"
                        ? <FutureEventItem feature={previewItem} highlight />
                        : <FutureEventItem feature={dummyUpcomingEvent} />
                    }
                </div>
            </div>

            {/* Initiatives section */}
            <div className={styles.initiativesContainer}>
                <div className={styles.initiativesTitle}>Initiatives</div>
                {mode === "initiative"
                    ? <FeaturedEventItem feature={previewItem} highlight />
                    : <FeaturedEventItem feature={dummyInitiative} />
                }
            </div>
        </div>
    );
}
