"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { NavMenus } from "@/data/nav"
import styles from "./NavbarDesktop.module.css"

export const NavbarDesktop = () => {
    const [menuState, setMenuState] = useState<string>('')
    const closeTimeout = useRef<NodeJS.Timeout | null>(null)

    function close() {
        closeTimeout.current = setTimeout(() => {
            setMenuState('')
        }, 0)
    }

    function cancelClose() {
        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current)
            closeTimeout.current = null
        }
    }

    return (
        <nav className={styles.navbarDesktop}>
            <div className={styles.navbar}>
                <Link href="/">
                    <img src="/assets/logos/sus-logo.png" alt="SUS logo" draggable="false" />
                </Link>
            </div>
            <div className={styles.menu}>
                    {NavMenus.map(menuItem => (
                        <div key={menuItem.label}>
                            <div
                                className={`${styles.menuItem} ${menuState === menuItem.label && styles.open}`}
                                onClick={() => setMenuState(menuState ? '' : menuItem.label)}
                                onMouseEnter={() => {
                                    cancelClose()
                                    setMenuState(menuItem.label)
                                }}
                                onMouseLeave={() => close()}
                            >
                                {menuItem.label}
                                <div className={styles.dropdownButton}>
                                    <div className={styles.dropdownButtonBar} />
                                    <div className={styles.dropdownButtonBar} />
                                </div>
                            </div>
                            {menuState === menuItem.label && (
                                <div
                                    className={styles.submenuContainer}
                                    onMouseEnter={() => cancelClose()}
                                    onMouseLeave={() => close()}
                                >
                                    <div className={styles.submenu}>
                                        {menuItem.items.map(submenuItem => (
                                            <Link
                                                key={submenuItem.label}
                                                href={submenuItem.href}
                                                className={styles.submenuItem}
                                                onClick={() => setMenuState('')}
                                            >
                                                <img src={`/assets/navbar-icons/${submenuItem.icon}.svg`} alt={submenuItem.label} />
                                                {submenuItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <Link href="https://shop.susubc.ca/" className={styles.shop}>
                        Shop
                    </Link>
                    <Link href="/get-involved/join-sus" className={styles.joinSus}>
                        Join SUS
                    </Link>
            </div>
        </nav>
    )
}
