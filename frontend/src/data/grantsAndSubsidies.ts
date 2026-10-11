import { FundingOpportunity } from "@/lib/types";
// import { FundingRecipient } from "@/lib/types";


export const grants: FundingOpportunity[] = [
  {
    title: "Clubs Operations Grant",
    type: "Grant",
    packageLink: "https://docs.google.com/document/d/1pNsqp4S9Db460IAVU1dNPCo8V15NP_DJK8KbzX5ftww",
    rubricLink: "https://docs.google.com/spreadsheets/d/1MhKecU7KR7MUg2Rm3Gznfr9mKssaAcNB9nwh0KjY5tA",
    eligibleRecipient: ["SUS Clubs"],
    description:
      "The Club Operations Grant is meant to supplement existing club membership fees and to help facilitate day-to-day operations of the club. The maximum allocation per Club Operations Grant is $1750.00.",
  },
  {
    title: "Special Projects Grant",
    type: "Grant",
    packageLink: "https://docs.google.com/document/d/1DHc12Pe6HAZRI8iVe_fHsIzv2D84BCFALrHRJtH01_s",
    rubricLink: "https://docs.google.com/spreadsheets/d/10fODHdeq-thBic3hN665RkV1_3ih8Soe3KVRa_nmztI",
    eligibleRecipient: ["SUS Clubs"],
    description:
      "The Special Projects Grant is intended to provide financial support for new or special projects undertaken by SUS-affiliated clubs. The grant may be used to support new events, projects, or significant additions to existing or annual activities that benefit a substantial portion of the UBC Science student community. The maximum allocation of the Special Projects Grant is 50% of eligible expenses, up to a maximum of $500 per club.",
  },
  {
    title: "Professional Development Grant - Stream A",
    type: "Grant",
    packageLink: "https://docs.google.com/document/d/1599wRShfoET_PHkxoGlXg957_Tpas8CS1f0-teI3RLo",
    rubricLink: "https://docs.google.com/spreadsheets/d/14jhbinrysdPb1IP8FQ-8RCPMrADLcb6WzCdng-SN2Fg",
    eligibleRecipient: ["Science Students"],
    description:
      "The Professional Development Grant – Stream A is intended to alleviate financial barriers associated with attending opportunities that support students' academic and professional development. These opportunities include, but are not limited to, relevant conferences, seminars, workshops, and other career-related events. The maximum allocation of the grant is 50% of eligible expenses, up to a maximum of $300 per individual.",
  },
  {
    title: "(Pilot Project) Professional Development Grant - Stream B",
    type: "Grant",
    packageLink: "https://docs.google.com/document/d/15Bvjc2h-cGuabaIKfrnSSGFMpFGAWeDsyV0LOInictU/edit?usp=sharing",
    rubricLink: "https://docs.google.com/spreadsheets/d/19VJ-OJ5QEX8flczFTjiVOmsaBduqvbAFfyeJMURQGBc/edit?usp=sharing",
    eligibleRecipient: ["Science Students"],
    description:
      "The Professional Development Grant – Stream B is a new pilot initiative introduced by the 2026/27 SUS VP Finance to improve financial accessibility to professional education. The grant provides partial financial assistance to UBC Science students registering for professional entrance examinations, including the MCAT, DAT, and LSAT. The maximum allocation is 50% of eligible registration fees, up to $150.00 per individual.",
  },
  {
    title: "EDI Grant",
    type: "Grant",
    packageLink: "https://docs.google.com/document/d/1-9UknGs3hrJkmq1RbIqMdryhk7uKog9ZGUL2dGpjn7c",
    rubricLink: "https://docs.google.com/spreadsheets/d/1W4Zi_-1ApnC7KNHJjqjYvkh2xcPj0x5UbwQnahXVAUg",
    eligibleRecipient: ["SUS Clubs", "Science Students"],
    description:
      "The EDI Grant is intended to create initiatives to support and centre communities with folks who identify as Black, Indigenous, and People of Colour, or 2SLGBTQIA+, have disabilities, or have been and continue to be systemically-made marginalized. The grant may also be used for providing services that support communities made marginalized, or for conducting community-led research focused on these groups in ways that are respectful, non-extractive, and non-performative. The maximum allocation of the Grant is 50% of relevant fees with a limit of $500.",
  },
  {
    title: "Student Initiative Grant",
    type: "Grant",
    packageLink: "https://docs.google.com/document/d/1ylz3C7z2u2tafAmsP3r1zXTekMFFRVC0qYRlxDP3BRI",
    rubricLink: "https://docs.google.com/spreadsheets/d/1DxN16yQNulmoypCd7lDS-QlWPhk1vhP2wWQai82B2cc",
    eligibleRecipient: ["Science Students", "New SUS Clubs"],
    description:
      "The Student Initiative Grant is intended to provide financial support to encourage and promote the facilitation of projects, activities and events run by science students that are not affiliated with existing SUS Clubs. The grant aims to encourage students to provide demonstrable service for current science students or new SUS Clubs to fulfill unmet needs. The Student Initiative Grant may also be used to support students who require financial assistance for personal research projects. The maximum allocation of the Grant is 50% of relevant fees with a limit of $250.",
  },
];

export const subsidies: FundingOpportunity[] = [
  {
    title: "Club Membership Fee Subsidy",
    type: "Subsidy",
    packageLink: "https://docs.google.com/document/d/1LSIFrd2-x-I2TuiDriF0GWrs9GLNT1cUG17N85bkWcU",
    eligibleRecipient: ["Science Students"],
    description:
      "The Club Membership Fee Subsidy hopes to increase participation of students in AMS clubs to encourage participation in the UBC community. This subsidy aims to cover the baseline membership fee to all AMS clubs and can be applied retroactively. The maximum allocation of the subsidy is $5.",
  },
  {
    title: "SUS Event Subsidy",
    type: "Subsidy",
    packageLink: "https://docs.google.com/document/d/1qLG6F8AYCfGI0-XJmh5FtZsyGGTKzji-iGsx6950Nu0",
    eligibleRecipient: ["Science Students"],
    description:
      "The SUS Events Subsidy is intended to alleviate personal financial burdens by providing a subsidy that students can use to attend SUS events. This includes all ticketed events hosted by the Science Undergraduate Society (SUS). The maximum allocation of the subsidy is 75% of paid ticket price with a limit of $60.",
  },
  {
    title: "Course Materials Subsidy",
    type: "Subsidy",
    packageLink: "https://docs.google.com/document/d/1xVvrvBrVI5nc3mmWjC2atFk4Dh0NLZn2kBzocS1ZWXs",
    eligibleRecipient: ["Science Students"],
    description:
      "The Course Materials Subsidy is intended to alleviate financial burdens related to the purchase of course-related materials. The materials purchased using this subsidy can be redeemed for any academic course material required or recommended by courses taken by Faculty of Science students. The maximum allocation of the subsidy is $50.",
  },
  {
    title: "UBC Recreation Subsidy",
    type: "Subsidy",
    packageLink: "https://docs.google.com/document/d/1ZkimQHAG0A3pRou50WMhYvXVLnn9Tga8z9GT5oGJFJw",
    eligibleRecipient: ["Science Students"],
    description:
      "The UBC Recreation Subsidy is intended to alleviate personal financial burdens by providing a subsidy that students can use to engage in activities that promote physical health and wellness. This includes, but is not limited to, relevant events, competitions and recreational intramural league costs. The maximum allocation of the subsidy is 50% of the cost with a limit of $250.",
  },
  {
    title: "(New Pilot Project) Commuter Hostel Subsidy",
    type: "Subsidy",
    packageLink: "https://docs.google.com/document/d/1wRh86v7RcSEfM2z2XOZopkciMRfhaWwrRz9hMftQZ4Y/edit?usp=sharing",
    eligibleRecipient: ["Science Students"],
    description:
      "Introduced by the SUS VP Finance for the 2026/27 academic year, the Commuter Hostel Subsidy aims to alleviate financial barriers for Science students with long commutes by providing up to $30 in financial assistance toward stays at the UBC Student Commuter Hostel.",
  },
  {
    title: "SUS Merchandise Subsidy",
    type: "Subsidy",
    packageLink: "https://docs.google.com/document/d/1VxyYbJXULQ27IW2_BU4fu7C48XMhjyMHIc16UV3H7Fs",
    eligibleRecipient: ["Science Students"],
    description:
      "The SUS Merchandise Subsidy is intended to alleviate personal financial burdens and encourage as many students to proudly represent UBC Science! This encompasses all merchandise produced by the SUS Sales Commission exclusively (must be featured on our website). The maximum allocation of the subsidy is $50.",
  },
];