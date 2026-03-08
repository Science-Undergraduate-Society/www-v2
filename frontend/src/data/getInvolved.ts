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
    title: "International Women's Day Coffee Chat",
    dates: "March 10, 4:00 – 6:00 PM",
    description: "An International Women's Day Coffee Chat bringing together women from various STEM fields to share experiences, navigate barriers, and build meaningful connections through conversation and networking.",
    pictures: [],
    links: [
      {
        label: "Event RSVP",
        description: "International Women's Day Coffee Chat RSVP",
        url: "https://forms.gle/zypemG1yF4MPfAMe7"
      }
    ]
  },
  {
    isEvent: true,
    title: "SUS Research Exchange",
    dates: "March 14, 10:00 AM – 4:00 PM",
    description: "Last call to sign up for the SUS Research Exchange! Don't miss this chance to develop your research skills through case competitions, presentations and networking. RSVP by February 24th at midnight.",
    pictures: [],
    links: [
      {
        label: "Event RSVP",
        description: "SUS Research Exchange RSVP",
        url: "https://ubc.ca1.qualtrics.com/jfe/form/SV_4MzlnG0bBGaGDhc"
      }
    ]
  },
  {
    isEvent: true,
    title: "EDI Community Survey",
    dates: "March 1 - 31",
    description: "The SUS EDI team has launched a community reflection survey to better understand how our initiatives and events have felt this year. Fill out the survey for a chance to win a $20 Blue Chip gift card!",
    pictures: [],
    links: [
      {
        label: "Survey Link",
        description: "EDI Community Survey Link",
        url: "https://qualtricsxmg7mjmcft5.qualtrics.com/jfe/form/SV_elCJRUAXO1vszS6"
      }
    ]
  },
];
