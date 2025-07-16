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