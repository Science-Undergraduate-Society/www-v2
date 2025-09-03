import { Menu } from "@/lib/types";

export const MENUS: Menu[] = [
    {
        label: "About",
        items: [
            { label: "Council & Procedures", href: "/about/council-and-procedures", icon: "procedures" },
            { label: "Portfolios & committees", href: "/about/portfolios-and-committees", icon: "council" },
            { label: "Meeting Minutes", href: "/about/meetingMinutes", icon: "minutes" },
            { label: "Our Executives", href: "/about/executives", icon: "executives" },
        ],
    },
    {
        label: "Get Involved",
        items: [
<<<<<<< HEAD
            { label: "Join SUS", href: "/getInvolved/joinSus", icon: "join" },
            { label: "SUS Clubs", href: "/getInvolved/susClubs", icon: "clubs" },
            { label: "Events", href: "/getInvolved/susEvents", icon: "events" },
=======
            { label: "Join SUS", href: "/get-involved/join-sus", icon: "join" },
            { label: "SUS Clubs", href: "/get-involved/sus-clubs", icon: "clubs" },
            { label: "Events", href: "/get-involved/events", icon: "events" },
>>>>>>> master
        ],
    },
    {
        label: "Student Services",
        items: [
<<<<<<< HEAD
            { label: "Blue Card Program", href: "/studentServices/blueCard", icon: "blue-card" },
            { label: "Drop-in Tutoring", href: "/studentServices/dropInTutoring", icon: "tutoring" },
            { label: "Grants & Subsidies", href: "/studentServices/grantsAndSubsidies", icon: "grants" },
            { label: "Health & Wellness", href: "/studentServices/healthAndWellness", icon: "health" },
            { label: "SUS Pantry", href: "/studentServices/susPantry", icon: "pantry" },
=======
            { label: "Blue Card Program", href: "/student-services/blue-card", icon: "blue-card" },
            { label: "Drop-in Tutoring", href: "/student-services/drop-in-tutoring", icon: "tutoring" },
            { label: "External Subsidies", href: "/student-services/external-subsidies", icon: "grants" },
            { label: "Grants & Subsidies", href: "/student-services/grants-and-subsidies", icon: "grants" },
            { label: "SUS Pantry", href: "/student-services/sus-pantry", icon: "pantry" },
>>>>>>> master
        ],
    },
    {
        label: "Science Student Centre",
        items: [
<<<<<<< HEAD
            { label: "Science Student Centre", href: "/scienceStudentCenter/studentCenterInfo", icon: "science-centre" },
            { label: "Bookings", href: "scienceStudentCenter/bookings", icon: "bookings" },
        ],
    },
    { label: "Shop", items: [{ label: "Merch", href: "/shop", icon: "merch" }] },
=======
            { label: "Info", href: "/science-student-centre/info", icon: "science-centre" },
            { label: "Event Bookings", href: "/science-student-centre/event-bookings", icon: "science-centre" },
            { label: "Meeting Room Bookings", href: "/science-student-centre/room-bookings", icon: "science-centre" },
        ],
    },
    { label: "Shop", items: [{ label: "Merch", href: "https://shop.susubc.ca/", icon: "merch" }] },
>>>>>>> master
];