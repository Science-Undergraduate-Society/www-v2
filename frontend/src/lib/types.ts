// Executives
export interface Donut {
    name: string,
    role: Executive,
    imagePath: string,
    desription: string
}

// Executive (elected) role in SUS
export type Executive =
    | 'President'
    | 'VP Finance'
    | 'VP External'
    | 'VP Communications'
    | 'VP Academic'
    | 'VP Student Life'
    | 'VP Administration'
    | 'Science Senator'
    | 'AMS Representative'