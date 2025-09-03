import { FundingOpportunity } from "@/lib/types";
// import { FundingRecipient } from "@/lib/types";
 

export const grants: FundingOpportunity[] = [
  {
    title: "Clubs Operations Grant",
    type: "Grant",
    link: "https://docs.google.com/spreadsheets/d/1l80bQhhRTl8o6Ylz5ihR92qE5iIdrXjYIaurQjo_EYg/edit?usp=drive_link",
    eligibleRecipient: ["SUS Clubs"],
    description:
      "The Club Operations Grant is meant to supplement existing club membership fees and to help facilitate day-to-day operations of the club. The maximum allocation per Club Operations Grant is $1750.00.",
    rubric:
      "https://docs.google.com/document/d/1pNsqp4S9Db460IAVU1dNPCo8V15NP_DJK8KbzX5ftww/edit?usp=drive_link",
  },
  {
    title: "Special Projects Grant",
    type: "Grant",
    link: "https://docs.google.com/spreadsheets/d/1uGe_JO6J9AP8NybmjySjf5scxKWkKvVY_pPGVX38gCk/edit?usp=drive_link",
    eligibleRecipient: ["SUS Clubs"],
    description:
      "The Special Projects Grant is intended to help facilitate any new or special projects undertaken by SUS Clubs. The Special Project Grants can only be used towards new events/projects or new additions to annual or existing activities that benefit a sizable portion of the science student body. The maximum allocation of the Special Projects Grant is 50% of relevant fees to a maximum of $500.",
    rubric:
      "https://docs.google.com/document/d/13cFYPuC1btrfxtV8FvuXfrsj4_asuWnJb-7Nb4v9N-Y/edit?usp=drive_link",
  },
  {
    title: "Professional Development Grant",
    type: "Grant",
    link: "https://docs.google.com/spreadsheets/d/1rfKh6a6ILiMv4v9qcJW-e8PSS6Pe3NTNjlTqzELsSkc/edit?usp=sharing",
    eligibleRecipient: ["Science Students"],
    description:
      "The Professional Development Grant is intended to alleviate financial burdens relating to the attendance of events that further one’s professional careers such as relevant events, conferences, and seminars. The maximum allocation of the Grant is 50% of related fees with a limit of $300.",
    rubric:
      "https://docs.google.com/document/d/1jrXYT4_q_xmgKc2b8e4JoF3n9Im8u8481AQVC1p1l6E/edit?usp=drive_link",
  },
  {
    title: "EDI Grant",
    type: "Grant",
    link: "https://docs.google.com/spreadsheets/d/1MICyCxMJU4cbUFXF0_LsLN-HkXobP0EerCE-oVKfe6c/edit?usp=drive_link",
    eligibleRecipient: ["SUS Clubs", "Science Students"],
    description:
      "The EDI Grant is intended to create initiatives to support and centre communities with folks who identify as Black, Indigenous, and People of Colour, or 2SLGBTQIA+, have disabilities, or have been and continue to be systemically-made marginalized. The grant may also be used for providing services that support communities made marginalized, or for conducting community-led research focused on these groups in ways that are respectful, non-extractive, and non-performative. The maximum allocation of the Grant is 50% of relevant fees with a limit of $500.",
    rubric:
      "https://docs.google.com/document/d/1yJJLi_Tuhm4yVBvsTkHEdWRceNlD3BiwuYvdsgGTTEI/edit?usp=drive_link",
  },
  {
    title: "Student Initiative Grant",
    type: "Grant",
    link: "https://docs.google.com/spreadsheets/d/1pAtWcwi6-aJxlEo22mb3_tbkySHxu1DQsok0hSpyKSw/edit?usp=drive_link",
    eligibleRecipient: ["Science Students", "New SUS Clubs"],
    description:
      "The Student Initiative Grant is intended to provide financial support to encourage and promote the facilitation of projects, activities and events run by science students that are not affiliated with existing SUS Clubs. The grant aims to encourage students to provide demonstrable service for current science students or new SUS Clubs to fulfill unmet needs. The Student Initiative Grant may also be used to support students who require financial assistance for personal research projects. The maximum allocation of the Grant is 50% of relevant fees with a limit of $250.",
    rubric:
      "https://docs.google.com/document/d/1k0Bjzn4QqTfslWozrngnH9lqT_KPfvBebS1Wk-620LA/edit?usp=drive_link",
  },
];

export const subsidies: FundingOpportunity[] = [
  {
    title: "Club Membership Fee Subsidy",
    type: "Subsidy",
    link: "",
    eligibleRecipient: ["Science Students"],
    description:
      "The Club Membership Fee Subsidy hopes to increase participation of students in AMS clubs to encourage participation in the UBC community. This subsidy aims to cover the baseline membership fee to all AMS clubs and can be applied retroactively. The maximum allocation of the subsidy is $5.",
    rubric:
      "https://docs.google.com/document/d/1Tjr9mwroBjir2A2RtOLfj8TQv1P_vTiaia6IPc7gjtU/edit?usp=drive_link",
  },
  {
    title: "SUS Events Subsidy",
    type: "Subsidy",
    link: "",
    eligibleRecipient: ["Science Students"],
    description:
      "The SUS Events Subsidy is intended to alleviate personal financial burdens by providing a subsidy that students can use to attend SUS events. This includes all ticketed events hosted by the Science Undergraduate Society (SUS). The maximum allocation of the subsidy is 75% of paid ticket price with a limit of $60.",
    rubric:
      "https://docs.google.com/document/d/1N8NQM-SAR7O5H3SANldGNDaIl9i4--dOrxXSOEvnZKA/edit?usp=drive_link",
  },
  {
    title: "Course Materials Subsidy",
    type: "Subsidy",
    link: "",
    eligibleRecipient: ["Science Students"],
    description:
      "The Course Materials Subsidy is intended to alleviate financial burdens related to the purchase of course-related materials. The materials purchased using this subsidy can be redeemed for any academic course material required or recommended by courses taken by Faculty of Science students. The maximum allocation of the subsidy is $50.",
    rubric:
      "https://docs.google.com/document/d/1a_p9JaNP0v-2pi7WxCsNHDuzj-DXlZcjXKYiCetBCAc/edit?usp=drive_link",
  },
  {
    title: "UBC Recreation Subsidy",
    type: "Subsidy",
    link: "",
    eligibleRecipient: ["Science Students"],
    description:
      "The UBC Recreation Subsidy is intended to alleviate personal financial burdens by providing a subsidy that students can use to engage in activities that promote physical health and wellness. This includes, but is not limited to, relevant events, competitions and recreational intramural league costs. The maximum allocation of the subsidy is 50% of the cost with a limit of $250.",
    rubric:
      "https://docs.google.com/document/d/1uK4GnXh_zs2jFAZgFtf6BdKkxuSbcKK0Lh_LbUB6BRo/edit?usp=drive_link",
  },
  {
    title: "AMS & Affiliates Event Subsidy",
    type: "Subsidy",
    link: "",
    eligibleRecipient: ["Science Students"],
    description:
      "The AMS & Affiliated clubs (AMS Clubs) Events Subsidy is intended to alleviate personal financial burdens by providing a subsidy that students can use to attend events hosted for UBC students. This includes all ticketed events hosted by clubs with AMS club standing. A list of these clubs can be found on UBC Campus Base. The maximum allocation of the subsidy is 50% of paid ticket price with a limit of $15.",
    rubric:
      "https://docs.google.com/document/d/15s0q0SeeM56yT4bCf6cGKYgR5WpwlKC2qgKM75-nijg/edit?usp=drive_link",
  },
];