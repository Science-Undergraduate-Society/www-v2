// Routes
export interface Route {
    title: string,
    href: string,
    content: string,
}

// Executives
export interface Executive {
    name: string,
    role: ExecutiveRole,
    imagePath: string,
    description: string,
    email: string,
}

// Executive (elected) role in SUS
export type ExecutiveRole =
    | 'President'
    | 'VP Finance'
    | 'VP External'
    | 'VP Communications'
    | 'VP Academic'
    | 'VP Student Life'
    | 'VP Administration'
    | 'Science Senator'
    | 'AMS Representative'
    | "Interim VP Academic" // TEMP ROLE: TODO: delete when fall re-election is completed

// Ways to get involved in SUS
export interface GetInvolved {
    id: number,
    title: string,
    description: string,
}

export interface AncillaryFee {
    applicableCategories: string[],
    description: string,
    fee: string,
}

export interface BookingFee {
    category: string
    mainFloor: string
    mezzanine: string
    mainFloorMezzanine: string
    fullBuilding: string
    frontPorch: string
    damageDeposit: string
}

export interface FAQ {
    question: string,
    answer: string
}

export interface BookingGroupCategory {
    id: string;
    name: string;
    description: string;
}

export interface DeadlineRule {
    id: string;
    title: string;
    description: string;
    daysBefore: number;
    category?: string;
}

export interface PolicyTerm {
    id: string;
    title: string;
    description: string;
}

export interface RoomFeatures {
    name: string,
    features: string[],
}

export interface BlueCardPartner {
    name: string, 
    logoSrc: string,
    description: string,
    location: string,
    website: string
}

// Subsidies and Grants
export type FundingType = 'Grant' | 'Subsidy';

export interface FundingOpportunity {
    title: string;
    type: FundingType;
    link: string;
    eligibleRecipient: FundingRecipient[];
    description: string;
    rubric: string;
}

export type FundingRecipient =
    | "SUS Clubs"
    | "Science Students"
    | "New SUS Clubs"

// Tutors
export interface Tutor {
    name: string,
    courses: string, // maybe change to a type later
    image: string,
    description: string
}

// Volunteer Oppertunities + types
export interface VolunteerOpportunity {
    "id": number,
    "title": string,
    "company": string,
    "location": string,
    "type": WorkMode[],
    "logo": string,
    "description": string,
    "website": string,
    "industry": Industry[]
}

export type WorkMode =
    | 'In-Person'
    | 'Virtual'
    | 'Hybrid'

export type Industry =
    | 'Non-profit'
    | 'Education'
    | 'Healthcare'
    | 'Environment'
    | 'Farming'
    | 'Housing'
    | 'Emergency food relief'
    | 'Art & Museum'


// wellness
export type HealthResource = {
    label: string; 
    href: string;  
    type: "phone" | "url";
    description?: string; 
};