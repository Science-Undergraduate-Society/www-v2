import { Menu } from "@/lib/types";

export const MENUS: Menu[] = [
    {
        label: "About",
        items: [
            { label: "Our Executives", href: "/aboutSus/executives", icon: "executives" },
            { label: "Council", href: "/aboutSus/council", icon: "council" },
            { label: "Procedures", href: "/aboutSus/procedures", icon: "procedures" },
            { label: "Meeting Minutes", href: "/about/minutes", icon: "minutes" },
        ],
    },
    {
        label: "Get Involved",
        items: [
            { label: "Volunteer Portal", href: "/getInvolved/volunteerPortal", icon: "volunteer" },
            { label: "Join SUS", href: "/getInvolved/joinSus", icon: "join" },
            { label: "SUS Clubs", href: "/getInvolved/susClubs", icon: "clubs" },
            { label: "Events", href: "/getInvolved/susEvents", icon: "events" },
        ],
    },
    {
        label: "Student Services",
        items: [
            { label: "Blue Card Program", href: "/studentServices/blueCard", icon: "blue-card" },
            { label: "Drop-in Tutoring", href: "/studentServices/dropInTutoring", icon: "tutoring" },
            { label: "Grants & Subsidies", href: "/studentServices/grantsAndSubsidies", icon: "grants" },
            { label: "Health & Wellness", href: "/studentServices/healthAndWellness", icon: "health" },
            { label: "SUS Pantry", href: "/studentServices/susPantry", icon: "pantry" },
        ],
    },
    {
        label: "Science Student Centre",
        items: [
            { label: "Science Student Centre", href: "/scienceStudentCenter/studentCenterInfo", icon: "science-centre" },
            { label: "Bookings", href: "scienceStudentCenter/bookings", icon: "bookings" },
        ],
    },
    { label: "Shop", items: [{ label: "Merch", href: "/shop", icon: "merch" }] },
];