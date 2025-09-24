import { Menu } from "@/lib/types";

export const MENUS: Menu[] = [
    {
        label: "About",
        items: [
            { label: "Council & Procedures", href: "/about/council-and-procedures", icon: "procedures" },
            { label: "Portfolios & committees", href: "/about/portfolios-and-committees", icon: "council" },
            { label: "Meeting Minutes", href: "/about/meeting-minutes", icon: "minutes" },
            { label: "Our Executives", href: "/about/executives", icon: "executives" },
        ],
    },
    {
        label: "Get Involved",
        items: [
            { label: "Join SUS", href: "/get-involved/join-sus", icon: "join" },
            { label: "SUS Clubs", href: "/get-involved/sus-clubs", icon: "clubs" },
            { label: "Events & Initiatives", href: "/get-involved/events-and-initiatives", icon: "events" },
        ],
    },
    {
        label: "Student Services",
        items: [
            { label: "Blue Card Program", href: "/student-services/blue-card", icon: "blue-card" },
            { label: "Drop-in Tutoring", href: "/student-services/drop-in-tutoring", icon: "tutoring" },
            { label: "External Subsidies", href: "/student-services/external-subsidies", icon: "grants" },
            { label: "Grants & Subsidies", href: "/student-services/grants-and-subsidies", icon: "grants" },
            { label: "SUS Pantry", href: "/student-services/sus-pantry", icon: "pantry" },
        ],
    },
    {
        label: "Science Student Centre",
        items: [
            { label: "Info", href: "/science-student-centre/info", icon: "science-centre" },
            { label: "Event Bookings", href: "/science-student-centre/event-bookings", icon: "science-centre" },
            { label: "Meeting Room Bookings", href: "/science-student-centre/room-bookings", icon: "science-centre" },
        ],
    },
    { label: "Shop", items: [{ label: "Merch", href: "https://shop.susubc.ca/", icon: "merch" }] },
];