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

export interface Councilor {
    name: string;
    role: string;
    email?: string;
    image?: string;
}

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
    img: string,
    capacity: number,
    roomNumber: number,
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

export type ExternalGranter =
    | "AMS"
    | "UBC"

export type ExternalGrantKeyword =
    | "#Sustainability"
    | "#Initiatives"
    | "#WomenInSTEM"
    | "#2SLGBTQIA+"
    | "#Community"
    | "#Research"
    | "#BIPOC"
    | "#Indigenous"

type BlurbItem = string | { bullets: string[] };

export type ExternalGrant = {
  title: string;
  granter: string;
  deadline: string;
  keywords: string[];
  contact?: string;
  link?: string;
  eligiblityBlurb: BlurbItem[];
  amount: BlurbItem[];
  responseDate?: string;
  opendate?: string;
};

// Tutors
export interface Tutor {
    name: string,
    courses: string[],
    image: string,
    link: string,
    bio: string
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

export type ClubInfo = {
    name: string;
    type: "departmental" | "non-departmental";
    description: string;
    img: string;
    website?: string;
    email?: string;
    linkedin?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
};

export interface WorkingGroupMeetingMinute {
    title: string;
    link: string;
}

export type WorkingGroupMeetingMinutes = Record<string, WorkingGroupMeetingMinute[]>

//Navbar
export type NavMenu = {
    label: string;
    items: NavMenuItem[];
}

export type NavMenuItem = {
    label: string;
    href: string;
    icon?: string;
}


// for events on the Events page, not on calendar
// if isEvent is false the type is initiative
export type FeaturedEventsInitiative = {
    isEvent: boolean;
    title: string;
    dates: string;
    description: string;
    pictures: string[];
    links: EventLink[];
}

export type EventLink = {
    label: string;
    description: string; // documentation purposes
    url: string;
}

// events
export type Event = {
    title: string;
    location: string;
    time: string;
    date: Date;
    description: EventDescription;
}

export type EventDescription = {
    demographic: string;
    workingGroup: string;
    collaborator: string;
    link: string;
}

export type EventLocation = {
    fullName: string;
    shortName: string;
    link: string;
}