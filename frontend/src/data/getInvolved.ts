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
        title: "SUS Study Sphere",
        dates: "April 1-31",
        description: "Enroll in our SUS Study Sphere Canvas Course to access notes, anki decks, practice questions and review session slides for common science courses like MATH 101, BIOL 121/112, CHEM 123 and much more!",
        pictures: [],
        links: [
          {
            label: "Link",
            description: "",
            url: "https://canvas.ubc.ca/enroll/GMT8NL"
          }
        ]
      },
  {
    isEvent: true,
    title: "SUS Annual General Meeting",
    dates: "April 9th, 5:00 - 7:00 PM",
    description: "Come join us on April 9th, 5-7PM for our Annual General Meeting! We will be sharing our annual budget summary, portfolio reports and our election winners. Everyone will be entered to win a $25 giftcard of your choice and free pizza and drinks will be available. See you there!",
    pictures: [],
    links: []
  },
  {
    isEvent: true,
    title: "Year-End Game Fair",
    dates: "April 9th, 5:00 - 7:00 PM",
    description: "Join us for a Year-End Games Fair featuring interactive booths, games, and reflection activities. Open to all students. Complete all stations for a guaranteed prize and a chance to win a $50 gift card",
    pictures: [],
    links: [
      {
        label: "RSVP Link",
        description: "",
        url: "https://ubc.ca1.qualtrics.com/jfe/form/SV_3jyXUlbRQ9QIDUG"
      }
    ]
  },
  {
    isEvent: true,
    title: "Final Exam Review Sessions",
    dates: "BIOL 112: April 13, 1-3 PM; CHEM 123: April 13, 4-7 PM, PHYS 131: April 17, 5-6 PM, CHEM 205: April 21, 4-7 PM",
    description: "Hi UBC Science! Want to ace your finals? Come to our free review sessions! BIOL 112: April 13, 1-3 PM; CHEM 123: April 13, 4-7 PM; PHYS 131: April 17, 5-6 PM; CHEM 205: April 21, 4-7 PM; *Locations TBD",
    pictures: [],
    links: [
      {
        label: "RSVP Link",
        description: "",
        url: "https://forms.gle/eRPbMS43rcy2Xr2N7"
      }
    ]
  },
  
];
