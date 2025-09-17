"use client";

import { useState } from "react";
import { workingGroupMeetingMinutes } from '@/data/workingGroupMeetingMinutes'
import GlassButton from "@/components/ui/GlassButton/GlassButton";
import styles from "./WorkingGroupMeetingMinutes.module.css";

export default function WorkingGroupMeetingMinutes() {
    const [selected, setSelected] = useState(Object.keys(workingGroupMeetingMinutes)[0])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return (
        <div className={styles.workingGroupMeetingMinutes}>
            <ul className={styles.meetingMinutesTabs}>
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
            <div className={styles.meetingMinutesDropdown}>
                <button
                    className={styles.meetingMinutesDropdownButton}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    {selected}
                    <div className={`${styles.meetingMinutesDropdownIcon} ${isDropdownOpen ? styles.open : ''}`} />
                </button>
                {isDropdownOpen && (
                    <ul className={styles.meetingMinutesDropdownPanel}>
                        {Object.keys(workingGroupMeetingMinutes)
                            .filter(workingGroup => workingGroup !== selected)
                            .map(workingGroup => (
                            <li
                                key={workingGroup}
                                className={selected === workingGroup ? styles.selected : ''}
                                onClick={() => {
                                    setSelected(workingGroup)
                                    setIsDropdownOpen(false)
                                }}
                            >
                                {workingGroup}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className={styles.meetingMinutesView}>
                {workingGroupMeetingMinutes[selected]?.map(({ title, link }, index) => (
                    <GlassButton
                        key={index}
                        href={link}
                        className={styles.meetingMinutesButton}
                    >
                        {title}
                    </GlassButton>
                ))}
            </div>
        </div>
    )
}
