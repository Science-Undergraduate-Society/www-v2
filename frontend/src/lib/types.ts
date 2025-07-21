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