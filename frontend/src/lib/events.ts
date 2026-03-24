import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { EventType, FeaturedEventsInitiative } from "./types";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00"); // avoid timezone shift
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function formatTime(timeStr: string): string {
  const [h, m] = timeStr.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${m.toString().padStart(2, "0")} ${period}`;
}

function isValidEventType(value: unknown): value is EventType {
  return value === "event" || value === "initiative";
}

export async function getApprovedEvents(): Promise<FeaturedEventsInitiative[]> {
  const snapshot = await getDocs(collection(db, "events"));

  return snapshot.docs
    .map((doc) => {
      const d = doc.data() as Record<string, unknown>;
      if (!isValidEventType(d.type)) return null;
      return {
        type: d.type,
        isEvent: d.type === "event",
        isFeatured: d.isFeatured === true,
        title: (d.title as string) ?? "",
        dates: d.date ? formatDate(d.date as string) : "",
        time: d.time ? formatTime(d.time as string) : undefined,
        location: (d.location as string) ?? undefined,
        description: (d.description as string) ?? "",
        pictures: Array.isArray(d.images) ? d.images.filter(Boolean) as string[] : d.image ? [d.image as string] : [],
        links: Array.isArray(d.links)
          ? (d.links.filter(Boolean) as string[]).map((url) => ({ label: "Event Link", description: "", url }))
          : d.link ? [{ label: "Event Link", description: "", url: d.link as string }] : [],
        _date: (d.date as string) ?? "",
      };
    })
    .filter((e): e is NonNullable<typeof e> => e !== null)
    .sort((a, b) => a._date.localeCompare(b._date))
    .map(({ _date, ...rest }) => rest);
}

export async function getApprovedInitiatives(): Promise<FeaturedEventsInitiative[]> {
  const snapshot = await getDocs(collection(db, "initiatives"));

  return snapshot.docs
    .map((doc) => {
      const d = doc.data() as Record<string, unknown>;
      if (!isValidEventType(d.type)) return null;
      return {
        type: d.type,
        isEvent: d.type === "event",
        isFeatured: d.isFeatured === true,
        title: (d.title as string) ?? "",
        dates: "",
        description: (d.description as string) ?? "",
        pictures: Array.isArray(d.images) ? d.images.filter(Boolean) as string[] : d.image ? [d.image as string] : [],
        links: Array.isArray(d.links)
          ? (d.links.filter(Boolean) as string[]).map((url) => ({ label: "Learn More", description: "", url }))
          : d.link ? [{ label: "Learn More", description: "", url: d.link as string }] : [],
      };
    })
    .filter((e): e is NonNullable<typeof e> => e !== null);
}

export async function getAllFeaturedItems(): Promise<FeaturedEventsInitiative[]> {
  const [events, initiatives] = await Promise.all([
    getApprovedEvents(),
    getApprovedInitiatives(),
  ]);
  return [...events, ...initiatives];
}
