import { Route } from "@/lib/types";

// All pages / links used for Navbar
export const routes: Route[] = [
    {
        title: "Home",
        href: "/",
        content: "Mission + History, Calendar"
    },

    // About SUS
    {
        title: "The Executives",
        href: "/aboutSus/executives",
        content: "SUS VP's + President, SUS Feedback Form"
    },
    {
        title: "Council",
        href: "/aboutSus/council",
        content: "What it is, goals, who attends."
    },
    {
        title: "Procedures",
        href: "/aboutSus/procedures",
        content: "Budget, code + procedures, by-laws"
    },

    // Science Student Center
    {
        title: "Science Student Center",
        href: "/scienceStudentCenter/studentCenterInfo",
        content: "About Abdul Ladha (ALSSC) information"
    },
    {
        title: "Science Student Center",
        href: "/scienceStudentCenter/bookings",
        content: "Booking (Meeting Room/Event)"
    },

    // Student Services
    {
        title: "Blue Card",
        href: "/studentServices/blueCard",
        content: "Blue Card Program"
    },
    {
        title:  "Drop In Tutoring",
        href: "/studentServices/dropInTutoring",
        content: "Study Sphere"
    },
    {
        title:  "External Subsidies",
        href: "/studentServices/externalSubsidies",
        content: "External Subsidies"
    },
    {
        title:  "Grants and Subsidies",
        href: "/studentServices/grantsAndSubsidies",
        content: "Grants and Subsidies"
    },
    {
        title: "SUS Pantry",
        href: "/studentServices/susPantry",
        content: "Food bank access and hours"
    },
    {
        title: "Health & Wellness",
        href: "/studentServices/healthAndWellness",
        content: "Health And Wellness"
    },


    // Get Involved
    {
        title: "Volunteer Portal",
        href: "/getInvolved/volunteerPortal",
        content: "View & sign up for volunteer opportunities"
    },
    {
        title: "Join SUS",
        href: "/getInvolved/joinSus",
        content: "How to apply or join the SUS team"
    },
    {
        title: "SUS Clubs",
        href: "/getInvolved/susClubs",
        content: "List of SUS clubs, how to start a club"
    },
    {
        title: "Events",
        href: "/getInvolved/susEvents",
        content: "Hackathon, Calendar View (Upcoming), List View (Past), Flagship Events, Event Feedback Form"
    },

    // Shop
    {
        title: "Shop",
        href: "shop.susubc.ca",
        content: "SUS Merch"
    }
];

export default routes;