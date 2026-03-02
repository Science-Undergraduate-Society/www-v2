import { ExternalGrant } from "@/lib/types";

export const externalGrants: ExternalGrant[] = [
  {
    title: "Students Initiative Fund",
    granter: "AMS",
    deadline: "at least 3 weeks prior to project start date",
    keywords: ["#Initiatives"],
    contact: "fundsandgrants@ams.ubc.ca",
    link: "https://www.ams.ubc.ca/opportunities/funds-grants/funds-grants/student-initiatives-fund-application/",
    eligiblityBlurb: [
      "For UBC Students. Projects MUST NOT be affiliated with any UBC club or subsidiary (ex: SUS). For initiatives that benefit UBC students, and/or AMS/UBC as a whole.",],
    amount: [
      "Maximum $1000/project OR < 75% of the project cost",
    ],
  },
  {
    title: "Sustainability Projects Fund",
    granter: "AMS",
    deadline: "applications are accepted on a rolling basis",
    responseDate: "within 3 weeks of application",
    keywords: ["#Sustainability"],
    contact: "sustainability@ams.ubc.ca",
    link: "https://www.ams.ubc.ca/what-we-stand-for/sustainability/sustainability-project-funds/",
    eligiblityBlurb: [
      "Primary applicants must be registered UBC students, submitted with a secondary (faculty, staff, or community member). Initiatives must be related to Student empowerment, education and awareness, community organizing, operations, advocacy and/or info-sharing and partnerships. Priority given to on-campus projects.",
    ],
    amount: [
        {
            bullets: [
                "Up to $20,000",
                "Small Projects: < $5000",
                "Large Projects: > $5000",
            ]
        }
    ],
  },
  {
    title: "StEAR Enhancement Fund",
    granter: "UBC",
    deadline: "September 1st, 2025 at 11:59 PM (PDT)",
    keywords: ["#Initiatives", "#Community"],
    link:"https://equity.ubc.ca/resources/funding-opportunities/strategic-equity-anti-racism-enhancement-fund-faculty-staff-stream/",
    eligiblityBlurb: [
      "Supports community-led initiatives that advance broad campus equity and anti-racism priorities aligned with UBC’s StEAR Framework and Roadmap for Change.",
      "Applicants can apply for funds from $500 up to $10,000 per project.",
    ],
    amount: [
      "Small grants (< $2000)",
      {
        bullets: ["For those who are looking for start-up funding to support their project/idea."]
      },
      "Large grants (up to $1500)",
      {
        bullets: ["To support a project with larger impact and reach."]
      }
    ],
  },
  {
    title: "Women in Part Time Studies",
    granter: "UBC",
    deadline: "September 15th, 2025",
    keywords: ["#WomenInSTEM"],
    link: "https://students.ubc.ca/finances/awards-scholarships-bursaries/awards-women-part-time-studies/",
    eligiblityBlurb: ["Women paying part time tuition."],
    amount: [      
        {
            bullets: ["$500 - $2000"]
        }
    ],
  },
  {
    title: "International Undergraduate Community Achievement",
    granter: "UBC",
    deadline: "October 3rd, 2025",
    keywords: ["#Community"],
    link: "https://students.ubc.ca/finances/awards-scholarships-bursaries/awards-international/#international-community-achievement-awards",
    eligiblityBlurb: [
      "Available to continuing international undergraduate students who have demonstrated leadership in areas like:",
      {
        bullets: [
          "Community service",
          "International engagement",
          "Intercultural understanding",
          "Promotion of diversity",
          "Intellectual, artistic, or athletic pursuits",
          "Other campus activities",
        ],
      },
    ],
    amount: [      
        "Up to a $10,000 each"
    ],
  },
  {
    title: "Move UBC Grant",
    granter: "UBC",
    opendate: "August 15th, 2025",
    deadline: "January 30th, 2026",
    keywords: ["#Initiatives"],
    contact: "physical.activity@ubc.ca",
    link: "https://wellbeing.ubc.ca/moveubcgrants",
    eligiblityBlurb: [
      "Funding for anyone within the UBC Community (Students, Faculty, Staff). Aims to support initiatives promoting movement and wellbeing.",
      "Projects can target the entire UBC community or specific audience within UBC. Preference given to low-barrier/accessible initiatives with larger reach.",
    ],
    amount: [
      "Small grants (< $2000)",
      {
        bullets: ["For those who are looking for start-up funding to support their project/idea."]
      },
      "Large grants (up to $1500)",
      {
        bullets: ["To support a project with larger impact and reach."]
      }
    ],
  },
];
