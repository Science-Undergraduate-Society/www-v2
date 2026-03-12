import { NavMenu } from "@/lib/types"

export const NavMenus: NavMenu[] = [
    {
        label: "About",
        items: [
            { label: "Our Executives", href: "/about/executives", icon: "executives" },
            { label: "Council & Procedures", href: "/about/council-and-procedures", icon: "council-and-procedures" },
            { label: "Portfolios & Committees", href: "/about/portfolios-and-committees", icon: "portfolios-and-committees" },
            { label: "Meeting Minutes", href: "/about/meeting-minutes", icon: "meeting-minutes" },
            { label: "Budget", href: "/about/budget", icon: "budget" },
        ],
    },
    {
        label: "Get Involved",
        items: [
            { label: "Elections", href: "/get-involved/elections", icon: "elections" },
            { label: "Clubs", href: "/get-involved/sus-clubs", icon: "sus-clubs" },
            { label: "Events & Initiatives", href: "/get-involved/events-and-initiatives", icon: "events-and-initiatives" },
            { label: "Join SUS", href: "/get-involved/join-sus", icon: "join-sus" },
        ],
    },
    {
        label: "Student Services",
        items: [
            { label: "Blue Card Program", href: "/student-services/blue-card", icon: "blue-card" },
            { label: "SUS Tutoring", href: "/student-services/drop-in-tutoring", icon: "drop-in-tutoring" },
            { label: "Grants & Subsidies", href: "/student-services/grants-and-subsidies", icon: "grants-and-subsidies" },
            { label: "External Subsidies", href: "/student-services/external-subsidies", icon: "external-subsidies" },
            { label: "SUS Pantry", href: "/student-services/sus-pantry", icon: "sus-pantry" },
        ],
    },
    {
        label: "Science Student Centre",
        items: [
            { label: "Abdul Ladha Science Student Centre (ALSSC)", href: "/science-student-centre/info", icon: "alssc" },
            { label: "Event Bookings", href: "/science-student-centre/event-bookings", icon: "event-bookings" },
            { label: "Meeting Room Bookings", href: "/science-student-centre/room-bookings", icon: "room-bookings" },
        ],
    },
]
