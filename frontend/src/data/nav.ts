import { Menu } from "@/lib/types";

export const MENUS: Menu[] = [
    {
        label: "About",
        items: [
            { label: "Our Executives", href: "/about/executive", icon: "executives" },
            { label: "Council", href: "/about/council", icon: "council" },
            { label: "Procedures", href: "/about/procedures", icon: "procedures" },
            { label: "Meeting Minutes", href: "/about/minutes", icon: "minutes" },
        ],
    },
    {
        label: "Get Involved",
        items: [
            { label: "Volunteer Portal", href: "/involved/volunteer", icon: "volunteer" },
            { label: "Join SUS", href: "/join", icon: "join" },
            { label: "SUS Clubs", href: "/involved/clubs", icon: "clubs" },
            { label: "Events", href: "/events", icon: "events" },
        ],
    },
    {
        label: "Student Services",
        items: [
            { label: "Blue Card Program", href: "/services/blue-card", icon: "blue-card" },
            { label: "Drop-in Tutoring", href: "/services/tutoring", icon: "tutoring" },
            { label: "Grants & Bursaries", href: "/services/grants", icon: "grants" },
            { label: "Health & Wellness", href: "/services/health", icon: "health" },
            { label: "SUS Pantry", href: "/services/pantry", icon: "pantry" },
        ],
    },
    {
        label: "Science Student Centre",
        items: [
            { label: "Science Student Centre", href: "/ssc", icon: "science-centre" },
            { label: "Bookings", href: "/ssc/bookings", icon: "bookings" },
        ],
    },
    { label: "Shop", items: [{ label: "Merch", href: "/shop", icon: "merch" }] },
];