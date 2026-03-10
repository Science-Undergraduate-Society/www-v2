import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { FeaturedEventsInitiative } from "./types";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00"); // avoid timezone shift
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export async function getApprovedEvents(): Promise<FeaturedEventsInitiative[]> {
  const snapshot = await getDocs(collection(db, "events"));

  return snapshot.docs
    .map((doc) => {
      const d = doc.data() as Record<string, string>;
      return {
        isEvent: true,
        title: d.title ?? "",
        dates: d.date ? formatDate(d.date) : "",
        description: d.description ?? "",
        pictures: d.poster ? [d.poster] : [],
        links: d.link ? [{ label: "Event Link", description: "", url: d.link }] : [],
        _date: d.date ?? "",
      };
    })
    .sort((a, b) => a._date.localeCompare(b._date))
    .map(({ _date, ...rest }) => rest);
}
