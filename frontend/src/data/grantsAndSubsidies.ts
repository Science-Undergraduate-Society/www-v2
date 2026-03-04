import { FundingOpportunity } from "@/lib/types";
// import { FundingRecipient } from "@/lib/types";
 

export const grants: FundingOpportunity[] = [
  {
    title: "Clubs Operations Grant",
    type: "Grant",
    applicationLink: "https://docs.google.com/document/d/1pNsqp4S9Db460IAVU1dNPCo8V15NP_DJK8KbzX5ftww",
    rubricLink: "https://docs.google.com/spreadsheets/d/1MhKecU7KR7MUg2Rm3Gznfr9mKssaAcNB9nwh0KjY5tA",
    eligibleRecipient: ["SUS Clubs"],
    description:
      "The Club Operations Grant is meant to supplement existing club membership fees and to help facilitate day-to-day operations of the club. The maximum allocation per Club Operations Grant is $1750.00.",
  },
  {
    title: "Special Projects Grant",
    type: "Grant",
    applicationLink: "https://docs.google.com/document/d/1DHc12Pe6HAZRI8iVe_fHsIzv2D84BCFALrHRJtH01_s",
    rubricLink: "https://docs.google.com/spreadsheets/d/10fODHdeq-thBic3hN665RkV1_3ih8Soe3KVRa_nmztI",
    eligibleRecipient: ["SUS Clubs"],
    description:
      "The Special Projects Grant is intended to help facilitate any new or special projects undertaken by SUS Clubs. The Special Project Grants can only be used towards new events/projects or new additions to annual or existing activities that benefit a sizable portion of the science student body. The maximum allocation of the Special Projects Grant is 50% of relevant fees to a maximum of $500.",
  },
  {
    title: "Professional Development Grant",
    type: "Grant",
    applicationLink: "https://docs.google.com/document/d/1599wRShfoET_PHkxoGlXg957_Tpas8CS1f0-teI3RLo",
    rubricLink: "https://docs.google.com/spreadsheets/d/14jhbinrysdPb1IP8FQ-8RCPMrADLcb6WzCdng-SN2Fg",
    eligibleRecipient: ["Science Students"],
    description:
      "The Professional Development Grant is intended to alleviate financial burdens relating to the attendance of events that further one’s professional careers such as relevant events, conferences, and seminars. The maximum allocation of the Grant is 50% of related fees with a limit of $300.",
  },
  {
    title: "EDI Grant",
    type: "Grant",
    applicationLink: "https://docs.google.com/document/d/1-9UknGs3hrJkmq1RbIqMdryhk7uKog9ZGUL2dGpjn7c",
    rubricLink: "https://docs.google.com/spreadsheets/d/1W4Zi_-1ApnC7KNHJjqjYvkh2xcPj0x5UbwQnahXVAUg",
    eligibleRecipient: ["SUS Clubs", "Science Students"],
    description:
      "The EDI Grant is intended to create initiatives to support and centre communities with folks who identify as Black, Indigenous, and People of Colour, or 2SLGBTQIA+, have disabilities, or have been and continue to be systemically-made marginalized. The grant may also be used for providing services that support communities made marginalized, or for conducting community-led research focused on these groups in ways that are respectful, non-extractive, and non-performative. The maximum allocation of the Grant is 50% of relevant fees with a limit of $500.",
  },
  {
    title: "Student Initiative Grant",
    type: "Grant",
    applicationLink: "https://docs.google.com/document/d/1ylz3C7z2u2tafAmsP3r1zXTekMFFRVC0qYRlxDP3BRI",
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
    applicationLink: "https://docs.google.com/document/d/1LSIFrd2-x-I2TuiDriF0GWrs9GLNT1cUG17N85bkWcU",
    eligibleRecipient: ["Science Students"],
    description:
      "The Club Membership Fee Subsidy hopes to increase participation of students in AMS clubs to encourage participation in the UBC community. This subsidy aims to cover the baseline membership fee to all AMS clubs and can be applied retroactively. The maximum allocation of the subsidy is $5.",
  },
  {
    title: "SUS Event Subsidy",
    type: "Subsidy",
    applicationLink: "https://docs.google.com/document/d/1qLG6F8AYCfGI0-XJmh5FtZsyGGTKzji-iGsx6950Nu0",
    eligibleRecipient: ["Science Students"],
    description:
      "The SUS Events Subsidy is intended to alleviate personal financial burdens by providing a subsidy that students can use to attend SUS events. This includes all ticketed events hosted by the Science Undergraduate Society (SUS). The maximum allocation of the subsidy is 75% of paid ticket price with a limit of $60.",
  },
  {
    title: "Course Materials Subsidy",
    type: "Subsidy",
    applicationLink: "https://docs.google.com/document/d/1xVvrvBrVI5nc3mmWjC2atFk4Dh0NLZn2kBzocS1ZWXs",
    eligibleRecipient: ["Science Students"],
    description:
      "The Course Materials Subsidy is intended to alleviate financial burdens related to the purchase of course-related materials. The materials purchased using this subsidy can be redeemed for any academic course material required or recommended by courses taken by Faculty of Science students. The maximum allocation of the subsidy is $50.",
  },
  {
    title: "UBC Recreation Subsidy",
    type: "Subsidy",
    applicationLink: "https://docs.google.com/document/d/1ZkimQHAG0A3pRou50WMhYvXVLnn9Tga8z9GT5oGJFJw",
    eligibleRecipient: ["Science Students"],
    description:
      "The UBC Recreation Subsidy is intended to alleviate personal financial burdens by providing a subsidy that students can use to engage in activities that promote physical health and wellness. This includes, but is not limited to, relevant events, competitions and recreational intramural league costs. The maximum allocation of the subsidy is 50% of the cost with a limit of $250.",
  },
  {
    title: "AMS & Affiliate Event Subsidy",
    type: "Subsidy",
    applicationLink: "https://docs.google.com/document/d/1KSE14OHty4GN5pKbYz-YtmooGTZigLWBNttOsb-ZxhM",
    eligibleRecipient: ["Science Students"],
    description:
      "The AMS & Affiliated clubs (AMS Clubs) Events Subsidy is intended to alleviate personal financial burdens by providing a subsidy that students can use to attend events hosted for UBC students. This includes all ticketed events hosted by clubs with AMS club standing. A list of these clubs can be found on UBC Campus Base. The maximum allocation of the subsidy is 50% of paid ticket price with a limit of $15.",
  },
  {
    title: "SUS Merchandise Subsidy",
    type: "Subsidy",
    applicationLink: "https://docs.google.com/document/d/1VxyYbJXULQ27IW2_BU4fu7C48XMhjyMHIc16UV3H7Fs",
    eligibleRecipient: ["Science Students"],
    description:
      "The SUS Merchandise Subsidy is intended to alleviate personal financial burdens and encourage as many students to proudly represent UBC Science! This encompasses all merchandise produced by the SUS Sales Commission exclusively (must be featured on our website).",
  },
];