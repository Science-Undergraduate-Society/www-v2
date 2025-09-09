"use client";

import { useState } from "react";
import { workingGroupMeetingMinutes } from '@/data/workingGroupMeetingMinutes'
import GlassButton from "@/components/ui/GlassButton/GlassButton";
import styles from "./WorkingGroupMeetingMinutes.module.css";

export default function WorkingGroupMeetingMinutes() {
    const [selected, setSelected] = useState(Object.keys(workingGroupMeetingMinutes)[0])

    return (
        <div className={styles.workingGroupMeetingMinutes}>
            <ul>
                {Object.keys(workingGroupMeetingMinutes).map(workingGroup => (
                    <li
                        key={workingGroup}
                        className={selected === workingGroup ? styles.selected : ''}
                        onClick={() => setSelected(workingGroup)}
                    >
                        {workingGroup}
                    </li>
                ))}
            </ul>
            <div className={styles.meetingMinutesView}>
                {workingGroupMeetingMinutes[selected]?.map(({ title, link }, index) => (
                    <GlassButton
                        key={index}
                        href={link}
                        className={styles.button}
                    >
                        {title}
                    </GlassButton>
                ))}
            </div>
        </div>
    )
}
