import {AncillaryFee, BookingFee, FAQ, BookingGroupCategory, DeadlineRule,PolicyTerm} from "@/lib/types";

export const allOrgs = [
    "SUS Clubs",
    "Science Clubs/Organizations",
    "UBC Organizations",
    "External Organizations",
];

export default function Eventbooking() {
    const firstFloorItems = [
        'Printer – connected to UBCPayForPrint',
        'Study cubicles for silent study',
        'Meetings rooms (3) for meetings or smaller events',
        'Large tables for silent group study',
    ];
    const secondFloorItems = [
        'Large open area for studying and hosting events',
        'Bar-style kitchenette with fridges and microwaves',
        'Water dispenser (hot and cold water)',
        'Rolling tables (8) and chairs (40+)',
        'Audio Visual (AV) system with projector, speakers, and microphones',
        'Mens/Womens/Universal washrooms (all wheelchair accessible)',
    ];
    const thirdFloorItems = [
        'Couches and tables for studying and lounging',
        'Space for smaller/relaxed events'
    ];
    const buildingExteriorItems = [
        'Open space for boothing outside the front of the building',
        'We provide tables and tents to ensure that you can booth in any weather',
        'Microphone and speakers also available for events in this space'
    ];
    const accessibilityInformationItems = [
        'All floors are wheelchair accessible via elevator access',
        'Accessible washrooms',
        'Automatic door openers on main entrance and side entrance'
    ];
    const avSystemInfoItems = [
        'Multimedia Projector:',
        'Audio:',
        'Microphones:',
        'Touchscreen AV Control System:'
    ];
    const MultimediaProjectorItems = [
        'Wired Video and Audio Connection via HDMI',
        'Wireless Video and Audio Connection via AirMedia',
        'Retractable Screen',
        'Single Content Only – Not Dual-Content Capable'
    ]
}

export const AncillaryFees: AncillaryFee[] = [
    {
        applicableCategories: ["UBC Organizations", "External Organizations"],
        description: "Hours After 8pm on Weekdays",
        fee: "$25/hr",
    },
    {
        applicableCategories: ["UBC Organizations", "External Organizations"],
        description: "Weekend Hours",
        fee: "$35/hr",
    },
    {
        applicableCategories: ["UBC Organizations", "External Organizations"],
        description: "Overtime Hours (3)",
        fee: "$25/hr",
    },
    {
        applicableCategories: ["UBC Organizations", "External Organizations"],
        description: "Use of Audio-Visual (AV) System",
        fee: "$30/event",
    },
    {
        applicableCategories: allOrgs,
        description: "Cleaning Fee for Dances/Parties/Large Events (4)",
        fee: "$100/event",
    },
    {
        applicableCategories: allOrgs,
        description: "Security Fee for Dances/Parties/Large Events (4)",
        fee: "$100/event",
    },
    {
        applicableCategories: allOrgs,
        description: "Service Fee for Events with Alcohol",
        fee: "$200/event",
    },
];

const freeGroups = ["SUS Internal", "SUS Clubs"]

export const BookingFees: BookingFee[] = [
    ...freeGroups.map(category => ({
        category,
        mainFloor: "Free",
        mezzanine: "Free",
        mainFloorMezzanine: "Free",
        fullBuilding: "Free",
        frontPorch: "Free",
        damageDeposit: "Free (2)",
    })),

    // Science Clubs / Organizations differs only in deposit
    {
        category: "Science Clubs/Organizations",
        mainFloor: "Free",
        mezzanine: "Free",
        mainFloorMezzanine: "Free",
        fullBuilding: "Free",
        frontPorch: "Free",
        damageDeposit: "$100",
    },

    // UBC Organizations rate card
    {
        category: "UBC Organizations",
        mainFloor: "$50/hr",
        mezzanine: "$30/hr",
        mainFloorMezzanine: "$70/hr",
        fullBuilding: "$80/hr",
        frontPorch: "$30/hr",
        damageDeposit: "$100",
    },

    // External Organizations rate card
    {
        category: "External Organizations",
        mainFloor: "$60/hr",
        mezzanine: "$40/hr",
        mainFloorMezzanine: "$90/hr",
        fullBuilding: "$100/hr",
        frontPorch: "$40/hr",
        damageDeposit: "$200",
    },

]

export const FAQs: FAQ[] = [
    {
        question: "What is the maximum capacity for events?",
        answer: "Events can have no more than 133 attendees, including event organizers."
    },
    {
        question: "How do I know if the date I want is available?",
        answer: "Please refer to the Building Availability Calendar above."
    },
    {
        question: "Do you have to be a UBC student to book the building?",
        answer: "The ALSSC is available for booking by anyone. However, the building is financed by all science students at UBC, so science organizations will receive a discount. See the Fees above for details."
    },
    {
        question: "Is food allowed in the building?",
        answer: "Yes, but please make sure to clean up after the event."
    },
    {
        question: "Is external catering allowed?",
        answer: "Yes, but please make sure to clean up after the event. You will need to provide the contact information of your caterer in the booking request form."
    },
    {
        question: "Is alcohol allowed in the building?",
        answer: "Yes, but further approval is required. Events that serve alcohol must submit a booking request by the deadlines indicated above."
    },
    {
        question: "Is security required?",
        answer: "For any Events With Alcohol, SUS will provide 2+ security guards. At the discretion of the Building Manager of Bookings, security may also be required for dances/parties. In such cases, a Security Fee may apply. See the Fees above for more details."
    },
    {
        question: "Will there be someone to help us with setup/takedown?",
        answer: "There will be a Building Supervisor present during the duration of your booking should you have any questions, concerns, or technical issues during your event. They will help set up the AV system, additional seating, and any other equipment provided by SUS. All other setup/takedown (including rearranging furniture, adding decorations, and sweeping up after the event) are the responsibility of the booking group."
    }
];

export const Equipment: string[] = [
    "AV System",
    "Portable Speakers – best used for parties or bookings on the Front Porch. The AV system includes its own speakers.",
    "Additional Tables (4) + Chairs (80+)",
    "Coat Racks",
    "Utility Cart",
    "Canopy Tents",
    "Crowd Control Ropes",
    "Digital Signage – displayed on TV in the ALSSC foyer before/during an event",
    "SUS Photographer present at the event"
];

export const BookingGroupCategories: BookingGroupCategory[] = [
    {
        id: "sus-groups",
        name: "SUS Groups",
        description:
            "Internal groups in SUS, such as the Health & Wellness Working Group or the First Year Council.",
    },
    {
        id: "sus-clubs",
        name: "SUS Clubs",
        description:
            "Departmental and non‑departmental clubs supported by SUS. For a complete list of SUS Clubs, see here.",
    },
    {
        id: "science-orgs",
        name: "Science Organizations and Science Clubs",
        description:
            "Groups which are not supported directly by SUS, but are of interest to students in the Faculty of Science (including, but not limited to SCI Team, Science Peer Academic Coaches, UBC Cancer Association). At least 60% of students contributing to the planning and execution of the event must be in the Faculty of Science in order to qualify for this rate.",
    },
    {
        id: "ubc-orgs",
        name: "UBC Organizations",
        description:
            "Groups who either have an address on the University Endowment Lands, or are affiliated in some way with UBC (including, but not limited to Regent College, UBC VP Students’ Office, groups from other UBC campuses).",
    },
    {
        id: "external-orgs",
        name: "External Organizations",
        description: "Organizations that are unaffiliated with UBC.",
    },
];

export const DeadlineRules: DeadlineRule[] = [
    {
        id: "alcohol-submission",
        title: "Booking Request Submission (Alcohol)",
        description: "Events With Alcohol: submit at least 60 days before the event",
        daysBefore: 60,
        category: "Events With Alcohol",
    },
    {
        id: "general-submission",
        title: "Booking Request Submission (All Other)",
        description: "All other events: submit at least 21 days before the event",
        daysBefore: 21,
    },
    {
        id: "return-forms",
        title: "Return Signed Booking Forms",
        description: "Return signed forms at least 14 days before the event",
        daysBefore: 14,
    },
    {
        id: "pay-damage-deposit",
        title: "Pay Damage Deposit",
        description: "Pay damage deposit at least 14 days before the event",
        daysBefore: 14,
    },
    {
        id: "pay-booking-fees",
        title: "Pay Booking Fees",
        description: "Pay booking fees at least 7 days before the event",
        daysBefore: 7,
    },
    {
        id: "cancellation-full-refund",
        title: "Cancellation — Full Refund",
        description: "Full refund if canceled at least 14 days before the event",
        daysBefore: 14,
    },
    {
        id: "cancellation-partial",
        title: "Cancellation — Fees Returned, Deposit Retained",
        description: "Cancellation 7–13 days before: fees returned, deposit retained",
        daysBefore: 7,
    },
    {
        id: "cancellation-no-refund",
        title: "Cancellation — No Refund",
        description: "No refund if canceled less than 7 days before the event",
        daysBefore: 0,
    },
];

export const PolicyTerms: PolicyTerm[] = [
    {
        id: "setup-takedown",
        title: "Setup/Takedown",
        description:
            "The booked time slot includes setup and takedown time. Setup/takedown are the responsibility of the booking organization.",
    },
    {
        id: "printing-services",
        title: "Printing Services",
        description:
            "SUS does not offer printing services for any events in the ALSSC. If printing is required, booking groups can use the UBC PayForPrint system – the printer in the ALSSC is attached to the system.",
    },
    {
        id: "equipment-rentals",
        title: "Equipment Rentals",
        description:
            "Equipment will not be rented out to events outside of the ALSSC. All building furniture or equipment are to remain within the building unless given permission from the Building Manager.",
    },
    {
        id: "charity-events",
        title: "Charity Events",
        description:
            "Events hosted to fundraise for a charity will have relevant booking fees waived.",
    },
    {
        id: "payments",
        title: "Payments",
        description:
            "Payments can be made in cash, cheque, or via AMS Journal Voucher. SUS does not accept credit/debit card or e-transfer payments.",
    },
    {
        id: "damage-deposit",
        title: "Damage Deposit",
        description:
            "The Balance Due (i.e. booking fees) is exclusive of the Damage Deposit. The Damage Deposit (paid separate) must be received by the Building Manager at least two weeks prior to the event, unless stated otherwise by the Building Manager. This Deposit includes, but is not limited to cancellation, damages, and other penalty charges. The Deposit is refunded only when all conditions are met.",
    },
    {
        id: "payment-due-dates",
        title: "Payment Due Dates",
        description:
            "Payment is due by the deadlines as indicated in the invoice, unless stated otherwise by the Building Manager. In the case that the Balance Due is not paid on time, the Damage Deposit will not be returned and will be considered a portion of the payment of the fees. No additional bookings can be made if fees are still outstanding. The Building Management Commission (BMC) reserves the right to cancel future events if outstanding fees are unpaid.",
    },
];