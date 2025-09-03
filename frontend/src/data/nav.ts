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