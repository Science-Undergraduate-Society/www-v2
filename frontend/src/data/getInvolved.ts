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
    title: "SUS First Week",
    dates: "September 2-5, 2025",
    description: "Get ready for an unforgettable start to the school year with the Science Undergraduate Society (SUS) First Week! Join us for four days of fun, September 2-5. Kick things off at Imagine Day & Faculty Fair on September 2nd to grab some free merch. On September 3rd, unwind at Sips and Swirls at Abdul Ladha from 6-8 p.m., where you can enjoy mocktails and paint while getting a hand or scalp massage from Lush Spa or even creating your own custom bubble bar! Show off your competitive side at Squidlympics on the Macinnes Field from 5:30-7:30 p.m. on September 4th, with a chance to win prizes. We'll end the week with our Welcome Back BBQ on September 5th outside Abdul Ladha from 5-8 p.m., featuring free food, a dunk tank, and a raffle full of exciting prizes. We can't wait to see you there!",
    pictures: [
      "/assets/event-images/sus_first_week_1.png",
      "/assets/event-images/sus_first_week_2.png",
      "/assets/event-images/sus_first_week_3.png"
    ],
    links: []
  },
  {
    isEvent: true,
    title: "Science RXN",
    dates: "September 13-14, 2025",
    description: "Science RXN is the ultimate kickoff flagship event for first-year science students at UBC! Happening September 13-14, this two-day experience is designed to help you make lasting friendships and dive into campus life. Day one is packed with fun indoor and outdoor activities where you’ll bond with peers through games, challenges, and team-building. On day two, dress up in blue for our signature dinner and dance, a chance to celebrate the start of your university journey with new friends and unforgettable memories. Don’t miss this exciting opportunity to connect, celebrate, and start your UBC Science adventure on the right foot!",
    pictures: [
      "/assets/event-images/science_RXN_1.png",
      "/assets/event-images/science_RXN_2.png",
      "/assets/event-images/science_RXN_3.png"
    ],
    links: []
  },
  {
    isEvent: true,
    title: "Hack the Coast",
    dates: "",
    description: "Hack the Coast is SUS’ first interdisciplinary hackathon, open to everyone! Spend a weekend collaborating across fields, learning new skills, and building impactful projects; no experience required.",
    pictures: [],
    links: [featuredEventLinks[0]]
  },
  {
    isEvent: false,
    title: "Back2School Survey",
    dates: "",
    description: "The SUS Back2School Survey is an annual initiative led by the Academic Portfolio to gather meaningful feedback from UBC Science students. Open to students across all years and majors, it provides critical insights that guide advocacy efforts and help enhance the student experience. This year, our goal is to collect more than 1,750 responses, ensuring the broadest representation of the science student body. By sharing their perspectives, students help shape programs, resources, and support systems tailored to their needs. To encourage participation, everyone who completes the survey will be entered into a raffle for a variety of exciting prizes.",
    pictures: [],
    links: [featuredEventLinks[1]]
  },
  {
    isEvent: false,
    title: "SUS Mentorship Program",
    dates: "",
    description: "The SUS Mentorship Program helps build a connected and supportive community within UBC Science by bringing together students across different years and disciplines. Mentors are upper-year undergraduates and graduate students who volunteer their time to support newer students. Through one-on-one or small-group pairings, mentors share their experiences while mentees gain guidance and encouragement as they navigate their academic and personal journeys. The program also hosts events and workshops designed to build meaningful connections, professional development, and community building. At the end of the year, both mentors and mentees are celebrated with awards recognizing their growth and contributions.",
    pictures: [],
    links: [featuredEventLinks[2], featuredEventLinks[3]]
  },
  
];
