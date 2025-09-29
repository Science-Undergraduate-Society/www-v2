import { NavMenu } from "@/lib/types"

export const NavMenus: NavMenu[] = [
    {
        label: "About",
        items: [
            { label: "Our Executives", href: "/about/executives", icon: "executives" },
            { label: "Council & Procedures", href: "/about/council-and-procedures", icon: "council" },
            { label: "Portfolios & Committees", href: "/about/portfolios-and-committees", icon: "procedures" },
            { label: "Meeting Minutes", href: "/about/meeting-minutes", icon: "minutes" },
            { label: "Budget", href: "/about/budget", icon: "budget" },
        ],
    },
    {
        label: "Get Involved",
        items: [
            { label: "Clubs", href: "/get-involved/sus-clubs", icon: "clubs" },
            { label: "Events & Initiatives", href: "/get-involved/events-and-initiatives", icon: "events" },
            { label: "Join SUS", href: "/get-involved/join-sus", icon: "join" },
        ],
    },
    {
        label: "Student Services",
        items: [
            { label: "Blue Card Program", href: "/student-services/blue-card", icon: "blue-card" },
            { label: "Drop-In Tutoring", href: "/student-services/drop-in-tutoring", icon: "tutoring" },
            { label: "Grants & Subsidies", href: "/student-services/grants-and-subsidies", icon: "grants" },
            { label: "External Subsidies", href: "/student-services/external-subsidies", icon: "grants" },
            { label: "SUS Pantry", href: "/student-services/sus-pantry", icon: "pantry" },
        ],
    },
    {
        label: "Science Student Centre",
        items: [
            { label: "Abdul Ladha Science Student Centre (ALSSC)", href: "/science-student-centre/info", icon: "science-centre" },
            { label: "Event Bookings", href: "/science-student-centre/event-bookings", icon: "science-centre" },
            { label: "Meeting Room Bookings", href: "/science-student-centre/room-bookings", icon: "science-centre" },
        ],
    },
]
