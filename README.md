# www-v2

## Tech Overview
### Frameworks
- React / Next.js
- Node

### Libraries / APIs
- None 

## Routing & Directory Structure
This project uses Next.js' **Next Router**. The routes are managed as folders and files in `src/pages`:
- Routes are files: `src/pages/aboutSus/council/page.tsx` will be accessible at the `/aboutSus/council` URL 

```
src/
├── app/                  <- Router (search NextJS App Router for more details)
│   ├── api/              <- Serverless API functions
│   │   └── calendar/
│   │       └── route.ts
│   │   
│   ├── globals.css
│   ├── home.module.css   <- CSS for root page (below)
│   ├── page.tsx          <- Root page
│   ├── layout.tsx        <- Root layout
│   ├── favicon
│   │ 
│   ├── about/
│   │   ├── council-and-procedures/
│   │   ├── executives/
│   │   ├── meeting-minutes/
│   │   └── portfolios-and-committees/
│   │
│   ├── get-involved/
│   │   ├── events/
│   │   ├── join-sus/
│   │   └── sus-clubs/
│   │
│   ├── science-student-centre/
│   │   ├── event-bookings/
│   │   ├── info/
│   │   └── room-bookings/
│   │
│   └── student-services/
│       ├── blue-card/
│       ├── drop-in-tutoring/
│       ├── external-subsidies/
│       ├── grants-and-subsidies/
│       └── sus-pantry/
│
├── components/
│   │
│   ├── features/       <- Components related to invidual actions (e.g. Calendar)
│   ├── layout/         <- Components related to screen layouts (e.g. navbar)
│   └── ui/             <- Reuasble ui components
│
├── data/               <- Data required for individual pages / components
│
└── lib/                
     └── types.ts       <- Type definitions
```
