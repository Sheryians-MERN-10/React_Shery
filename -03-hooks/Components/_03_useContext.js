"use client";
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedButton() {
    // Accessing theme context using useContext hook
    const theme = useContext(ThemeContext);

    return (
        <button style={{ background: theme.background, color: theme.color }}>
            Themed Button
        </button>
    );
}

export default ThemedButton;    