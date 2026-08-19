"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

interface ThemeContextValue {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const STORAGE_KEY = "sus-theme"

export const themeInitScript = `
(function () {
    try {
        var stored = localStorage.getItem("${STORAGE_KEY}");
        var theme = stored === "dark" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
    } catch (e) {
        console.warn("Failed to read theme preference:", e);
    }
})();
`

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light")

    useEffect(() => {
        const current = document.documentElement.getAttribute("data-theme")
        if (current === "dark" || current === "light") {
            setTheme(current)
        }
    }, [])

    const toggleTheme = () => {
        setTheme(prev => {
            const next = prev === "dark" ? "light" : "dark"
            document.documentElement.setAttribute("data-theme", next)
            try {
                localStorage.setItem(STORAGE_KEY, next)
            } catch (e) {
                console.warn("Failed to save theme preference:", e)
            }
            return next
        })
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}
