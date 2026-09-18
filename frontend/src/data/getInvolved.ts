import { FeaturedEventsInitiative, GetInvolved, EventLink } from "@/lib/types";

export const getInvolved: GetInvolved[] = [
  {
    id: 1,
    title: 'Elected executive',
    description: 'Once a year in spring, all science students have the opportunity to vote for the next years President and VP\'s!'
  },
  {
    id: 2,
    title: 'Year-round executive',
    description: 'In June and September every year, there are multiple positions that are released on [UBC Careers Online](https://ubc-csm.symplicity.com/) for those wishing to get involved for the entire school year!'
  },
  {
    id: 3,
    title: 'One-time volunteering',
    description: 'Throughout the year, large events will require the help of external volunteers. If you want to be involved with SUS but don’t want to commit long-term, this is perfect for you! Make sure to follow our [Instagram](https://instagram.com/susubc) to be made aware of any volunteering opportunities!'
  },
  {
    id: 4,
    title: 'Sponsored clubs',
    description: 'SUS supports over 50 science-related clubs at UBC. Make sure to consider getting involved with them too!'
  }
];

const featuredEventLinks: EventLink[] = [
  {
    label: "Website",
    description: "Hack the coast website link",
    url: "https://hackathon.susubc.ca/"
  },
  {
    label:"Take the Survey",
    description: "Back2School survey link",
    url:"https://ubc.ca1.qualtrics.com/jfe/form/SV_4JwuVlyeHp1BMdo"
  },
  {
    label:"Mentee Sign Up",
    description: "SUS mentorship",
    url:"https://ubc.ca1.qualtrics.com/jfe/form/SV_51rDLgpIDVTciTY"
  },
  {
    label:"Mentor Sign Up",
    description: "SUS mentorship",
    url:"https://ubc.ca1.qualtrics.com/jfe/form/SV_6XqYDjMPrFCHsZE"
  },
]

export const featuredEvents: FeaturedEventsInitiative[] = [
  {
    isEvent: true,
    title: "Faculty of Science x SUS Research Exchange",
    dates: "September 22nd, 5:30 - 8:00 PM",
    description: "Hi Science Students! Do you have summer research that you would like to present? Come join us at our research exchange to practice your research presentations skills and showcase your hard work! You will have the opportunity to get feedback from science professors and students, build your resume and presentation experience, and potentially win prizes for winners based on adjudication!",
    pictures: [],
    links: [
      {
        label: "RSVP Link",
        description: "",
        url: "https://ubc.ca1.qualtrics.com/jfe/form/SV_8p2NF3QX2utXMI6"
      }
    ]
  },
];
