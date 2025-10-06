"use client"

import { useState } from "react"
import Link from "next/link"
import { NavMenus } from "@/data/nav"
import styles from "./NavbarMobile.module.css"

export const NavbarMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [menuState, setMenuState] = useState<string>('')

    function clickMenu() {
        setIsMenuOpen(state => !state)
        setMenuState('')
    }

    function clickDropdown(menu: string) {
        if (menuState === menu) {
            setMenuState('')
        } else {
            setMenuState(menu)
        }
    }

    return (
        <nav className={styles.navbarMobile}>
            <div className={styles.navbar}>
                <Link href="/">
                    <img src="/assets/logos/sus-logo.png" alt="SUS logo" draggable="false" />
                </Link>
                <h1>Science Undergraduate Society</h1>
                <div
                    className={`${styles.menuButton} ${isMenuOpen && styles.open}`}
                    onClick={clickMenu}
                >
                    <div className={styles.menuButtonBar} />
                    <div className={styles.menuButtonBar} />
                    <div className={styles.menuButtonBar} />
                </div>
            </div>
            {isMenuOpen &&
                <div className={styles.menu}>
                    {NavMenus.map(menuItem => (
                        <div key={menuItem.label}>
                            <div
                                className={`${styles.menuItem} ${menuState === menuItem.label && styles.open}`}
                                onClick={() => clickDropdown(menuItem.label)}
                            >
                                {menuItem.label}
                                <div className={styles.dropdownButton}>
                                    <div className={styles.dropdownButtonBar} />
                                    <div className={styles.dropdownButtonBar} />
                                </div>
                            </div>
                            {menuState === menuItem.label && (
                                <div className={styles.submenu}>
                                    {menuItem.items.map(submenuItem => (
                                        <Link
                                            key={submenuItem.label}
                                            href={submenuItem.href}
                                            className={styles.submenuItem}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {submenuItem.label}
                                        </Link>
                                    ))}
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
            }
        </nav>
    )
}