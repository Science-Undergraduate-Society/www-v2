import React, { useState } from 'react';
import styles from './ToggleButton.module.css';

interface ToggleButtonProps {
    onToggle?: (option: string) => void;
}

const ToggleButton = ({ onToggle }: ToggleButtonProps) => {
    const [activeOption, setActiveOption] = useState('departmental');

    const handleToggle = (option: string) => {
        setActiveOption(option);
        if (onToggle) {
            onToggle(option);
        }
    };

    return (
        <div className={styles.toggleContainer}>
            <button
                className={`${styles.toggleButton} ${
                    activeOption === 'departmental' ? styles.active : styles.inactive
                }`}
                onClick={() => handleToggle('departmental')}
            >
                Departmental
            </button>
            <button
                className={`${styles.toggleButton} ${
                    activeOption === 'non-departmental' ? styles.active : styles.inactive
                }`}
                onClick={() => handleToggle('non-departmental')}
            >
                Non-Departmental
            </button>
        </div>
    );
};

export default ToggleButton;