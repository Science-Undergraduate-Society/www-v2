import {RoomFeatures} from "@/lib/types";

export const roomFeatures: RoomFeatures[] = [
    {
        name: "Room 103",
        roomNumber: 103,
        capacity: 8,
        img: "/assets/room-images/room-103.jpg",
        features: [
            "8 Chairs",
            "Whiteboard",
            "Outlets for Laptop Charging",
            "TV with HDMI Connection",
            "Large Windows & Lots of Natural Light"
        ]
    },
    {
        name: "Room 104",
        roomNumber: 104,
        capacity: 8,
        img: "/assets/room-images/room-103.jpg",
        features: [
            "8 Chairs",
            "Whiteboard",
            "Outlets for Laptop Charging",
            "TV with HDMI Connection",
            "Large Windows & Lots of Natural Light"
        ]
    },
    {
        name: "Room 105",
        roomNumber: 105,
        capacity: 5,
        img: "/assets/room-images/room-105.jpg",
        features: [
            "5 Chairs",
            "Whiteboard",
            "Outlets for Laptop Charging",
            "Quiet, private study space",
            "Cozy atmosphere"
        ]
    }
];


export const MeetingRoomPolicies: string[] = [
    "A group (not each member of a group) may book a room for up to 2 hours per day, 3 times a week, up to 2 weeks in advance.",
    "Rooms are only available during regular Abdul Ladha Science Student Centre hours.",
    "Groups that are more than 10 minutes late forfeit their booking.",
    "Try to reduce noise as much as possible to avoid disturbing users of other meeting rooms.",
    "Booking times are ultimately the property of the Science Undergraduate Society (SUS) and are subject to cancellation or pre-emption without warning."
]