import { FundingOpportunity } from "@/lib/types";
import { FundingRecipient } from "@/lib/types";
 

export const grants: FundingOpportunity[] = [
  {
    title: "Clubs Operations Grant",
    type: "Grant",
    link: "https://docs.google.com/spreadsheets/d/1l80bQhhRTl8o6Ylz5ihR92qE5iIdrXjYIaurQjo_EYg/edit?usp=drive_link",
    eligibleRecipient: ["SUS Clubs"],
    description:
      "The Club Operations Grant supplements existing club membership fees and facilitates day-to-day operations of the club.",
    rubric:
      "https://docs.google.com/document/d/1pNsqp4S9Db460IAVU1dNPCo8V15NP_DJK8KbzX5ftww/edit?usp=drive_link",
  },
  {
    title: "Special Projects Grant",
    type: "Grant",
    link: "https://docs.google.com/spreadsheets/d/1uGe_JO6J9AP8NybmjySjf5scxKWkKvVY_pPGVX38gCk/edit?usp=drive_link",
    eligibleRecipient: ["SUS Clubs"],
    description:
      "Helps SUS Clubs fund new or special projects benefiting science students. Up to 50% of fees covered, max $500.",
    rubric:
      "https://docs.google.com/document/d/13cFYPuC1btrfxtV8FvuXfrsj4_asuWnJb-7Nb4v9N-Y/edit?usp=drive_link",
  },
  {
    title: "EDI Grant",
    type: "Grant",
    link: "https://docs.google.com/spreadsheets/d/1MICyCxMJU4cbUFXF0_LsLN-HkXobP0EerCE-oVKfe6c/edit?usp=drive_link",
    eligibleRecipient: ["SUS Clubs", "Science Students"],
    description:
      "Supports initiatives for marginalized communities including BIPOC, 2SLGBTQIA+, and students with disabilities.",
    rubric:
      "https://docs.google.com/document/d/1yJJLi_Tuhm4yVBvsTkHEdWRceNlD3BiwuYvdsgGTTEI/edit?usp=drive_link",
  },
  {
    title: "Student Initiative Grant",
    type: "Grant",
    link: "https://docs.google.com/spreadsheets/d/1pAtWcwi6-aJxlEo22mb3_tbkySHxu1DQsok0hSpyKSw/edit?usp=drive_link",
    eligibleRecipient: ["Science Students", "New SUS Clubs"],
    description:
      "Funds projects by science students not affiliated with clubs. Covers up to 50% of costs, max $250.",
    rubric:
      "https://docs.google.com/document/d/1k0Bjzn4QqTfslWozrngnH9lqT_KPfvBebS1Wk-620LA/edit?usp=drive_link",
  },
  {
    title: "Professional Development Grant",
    type: "Grant",
    link: "https://docs.google.com/spreadsheets/d/1rfKh6a6ILiMv4v9qcJW-e8PSS6Pe3NTNjlTqzELsSkc/edit?usp=sharing",
    eligibleRecipient: ["Science Students"],
    description:
      "Supports attendance of professional events like conferences and seminars. Covers up to 50% of fees, max $300.",
    rubric:
      "https://docs.google.com/document/d/1jrXYT4_q_xmgKc2b8e4JoF3n9Im8u8481AQVC1p1l6E/edit?usp=drive_link",
  },
];

export const subsidies: FundingOpportunity[] = [
  {
    title: "AMS & Affiliates Event Subsidy",
    type: "Subsidy",
    link: "",
    eligibleRecipient: ["Science Students"],
    description:
      "Helps students attend AMS club events. Covers 50% of ticket price, up to $15.",
    rubric:
      "https://docs.google.com/document/d/15s0q0SeeM56yT4bCf6cGKYgR5WpwlKC2qgKM75-nijg/edit?usp=drive_link",
  },
  {
    title: "SUS Events Subsidy",
    type: "Subsidy",
    link: "",
    eligibleRecipient: ["Science Students"],
    description:
      "Helps students attend SUS events. Covers 75% of ticket cost, max $60.",
    rubric:
      "https://docs.google.com/document/d/1N8NQM-SAR7O5H3SANldGNDaIl9i4--dOrxXSOEvnZKA/edit?usp=drive_link",
  },
  {
    title: "Club Membership Fee Subsidy",
    type: "Subsidy",
    link: "",
    eligibleRecipient: ["Science Students"],
    description:
      "Covers baseline AMS club membership fees. Max reimbursement: $5.",
    rubric:
      "https://docs.google.com/document/d/1Tjr9mwroBjir2A2RtOLfj8TQv1P_vTiaia6IPc7gjtU/edit?usp=drive_link",
  },
  {
    title: "Course Materials Subsidy",
    type: "Subsidy",
    link: "",
    eligibleRecipient: ["Science Students"],
    description:
      "Helps cover costs of required or recommended academic materials. Max $50.",
    rubric:
      "https://docs.google.com/document/d/1a_p9JaNP0v-2pi7WxCsNHDuzj-DXlZcjXKYiCetBCAc/edit?usp=drive_link",
  },
  {
    title: "UBC Recreation Subsidy",
    type: "Subsidy",
    link: "",
    eligibleRecipient: ["Science Students"],
    description:
      "Supports participation in recreation and wellness activities. Covers 50% of fees, up to $250.",
    rubric:
      "https://docs.google.com/document/d/1uK4GnXh_zs2jFAZgFtf6BdKkxuSbcKK0Lh_LbUB6BRo/edit?usp=drive_link",
  },
];