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
-

```
src/
├── components/
|   |
│   ├── layout/         <- Components related to screen layouts (e.g. navbar)
│   └── ui/             <- UI components (mainly shadcn)
├── hooks/              <- Custom react hooks
├── lib/                <- Re-usable helper functions
│   ├── firebase/
│   └── utils.ts
├── providers/          <- React context providers
├── routes/             <- Tanstack routing
│   ├── _auth/
│   │   ├── hackathons/
│   │   │   └── $hackathonId/
│   │   │       ├── application.tsx
│   │   │       ├── index.tsx
│   │   │       ├── schedule.tsx
│   │   │       └── sponsors.tsx
│   │   ├── evaluator.tsx
│   │   ├── factotum.tsx
│   │   ├── faq.tsx
│   │   ├── index.tsx
│   │   ├── query.tsx
│   │   └── route.tsx
│   ├── __root.tsx
│   └── signin.tsx
├── services/           <- Contained business logic, typically for calling external services
├── main.tsx
├── routeTree.gen.ts
└── styles.css
```