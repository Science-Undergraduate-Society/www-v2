"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MENUS } from "@/data/nav";
import styles from "./Navbar.module.css";

const PANEL_WIDTH_VW = 47.5625;
const PANEL_TOP_OFFSET_REM = 2.5;
const POINTER_WIDTH_REM = 5;
const POINTER_HEIGHT_REM = 2.1875;
const POINTER_EDGE_GUTTER_REM = 1.5;

export default function Navbar() {
    const [open, setOpen] = useState<string | null>(null);
    const [x, setX] = useState(0);
    const [anchorY, setAnchorY] = useState(0);
    const [panelLeft, setPanelLeft] = useState(0);
    const [pointerLeft, setPointerLeft] = useState(0);

    const navRef = useRef<HTMLDivElement | null>(null);

    const handleEnter = (label: string, e: React.MouseEvent | React.FocusEvent) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        setX(cx);
        setOpen(label);
        computePositions(cx);
    };

    useEffect(() => {
        const recompute = () => {
            if (!navRef.current) return;
            const r = navRef.current.getBoundingClientRect();
            setAnchorY(r.bottom);
            if (x) computePositions(x);
        };
        recompute();
        window.addEventListener("resize", recompute);
        window.addEventListener("scroll", recompute, { passive: true });
        return () => {
            window.removeEventListener("resize", recompute);
            window.removeEventListener("scroll", recompute);
        };
    }, [x]);

    useEffect(() => {
        const onKey = (ev: KeyboardEvent) => ev.key === "Escape" && setOpen(null);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const computePositions = (cx: number) => {
        if (!navRef.current) return;
        const r = navRef.current.getBoundingClientRect();

        // Calculate panel width based on viewport width and rem
        const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const panelWidthPx = Math.min(
            window.innerWidth * (PANEL_WIDTH_VW / 100), // Use percentage of viewport
            47.5625 * remInPx // Maximum size in pixels (converted from rem)
        );

        // Calculate pointer dimensions in pixels
        const pointerWidthPx = POINTER_WIDTH_REM * remInPx;
        const pointerEdgeGutterPx = POINTER_EDGE_GUTTER_REM * remInPx;

        // clamp panel so left/right align with nav bounds
        const left = Math.min(
            Math.max(cx - panelWidthPx / 2, r.left),
            r.right - panelWidthPx
        );
        setPanelLeft(left);

        // pointer position inside panel, kept away from rounded corners
        const pointerX = Math.min(
            Math.max(cx - left, pointerWidthPx / 2 + pointerEdgeGutterPx),
            panelWidthPx - pointerWidthPx / 2 - pointerEdgeGutterPx
        );
        setPointerLeft(pointerX);
    };

    // Calculate responsive panel width
    const getPanelWidth = () => {
        const remInPx = typeof window !== 'undefined'
            ? parseFloat(getComputedStyle(document.documentElement).fontSize)
            : 16;

        return Math.min(
            typeof window !== 'undefined' ? window.innerWidth * (PANEL_WIDTH_VW / 100) : 761,
            47.5625 * remInPx
        );
    };

    // Calculate responsive offset
    const getPanelTopOffset = () => {
        const remInPx = typeof window !== 'undefined'
            ? parseFloat(getComputedStyle(document.documentElement).fontSize)
            : 16;

        return PANEL_TOP_OFFSET_REM * remInPx;
    };

    return (
        <div className={styles.navbarRoot}>
            {/* Top bar */}
            <nav ref={navRef} className={styles.navbar}>
                <div className={styles.navbarBar}>
                    {/* Logo */}
                    <Link href="/" className={styles.navbarLogo}>
                        <img src="/assets/logos/logo-blue.png" alt="SUS logo" className={styles.navbarLogoImg} />
                    </Link>

                    {/* Primary links */}
                    <div className={styles.navbarCenter}>
                        <ul className={styles.navbarList}>
                            {MENUS.map((m) => (
                                <li key={m.label} className={styles.navbarItem}>
                                    {m.items.length === 1 ? (
                                        <Link href={m.items[0].href} className={styles.navPill}>
                                            {m.label}
                                        </Link>
                                    ) : (
                                        <button
                                            onMouseEnter={(e) => handleEnter(m.label, e)}
                                            onFocus={(e: React.FocusEvent<HTMLButtonElement>) => handleEnter(m.label, e)}
                                            className={`${styles.navPill} ${open === m.label ? styles.isActive : ""}`}
                                        >
                                            {m.label}
                                            <svg
                                                className={`${styles.navCaret} ${open === m.label ? styles.rotated : ""}`}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path d="M19 9l-7 7-7-7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Join SUS */}
                    <Link href="/get-involved/events" className={styles.eventsBtn}>
                        Events
                    </Link>
                </div>
            </nav>

            {/* Dropdown layer */}
            {MENUS.map(
                (menu) =>
                    menu.items.length > 1 &&
                    open === menu.label && (
                        <div
                            key={menu.label}
                            className={styles.dropdownOverlay}
                            onMouseLeave={() => setOpen(null)}
                            onClick={() => setOpen(null)}
                        >
                            {/* panel */}
                            <div
                                className={styles.dropdownPanelWrap}
                                style={{
                                    left: panelLeft,
                                    top: anchorY + getPanelTopOffset()
                                }}
                            >
                                <div
                                    className={styles.dropdownPanel}
                                    style={{ width: getPanelWidth() }}
                                >
                                    {/* pointer */}
                                    <div
                                        className={styles.dropdownPointer}
                                        style={{ left: pointerLeft }}
                                        aria-hidden="true"
                                    >
                                        <svg
                                            width={`${POINTER_WIDTH_REM}rem`}
                                            height={`${POINTER_HEIGHT_REM}rem`}
                                            viewBox="0 0 80 35"
                                            className={styles.pointerSvg}
                                        >
                                            <path
                                                d="
                                                    M12,35
                                                    Q0,35 7.5,28.2
                                                    L32,7.8
                                                    Q40,0 48,7.8
                                                    L72.5,28.2
                                                    Q80,35 68,35
                                                    Z
                                                "
                                                fill="#E7F2FF"
                                            />
                                        </svg>
                                    </div>

                                    {/* cards */}
                                    <ul className={styles.menuGrid}>
                                        {menu.items.map((item) => (
                                            <li key={item.href} className={styles.menuGridItem}>
                                                <Link href={item.href} className={styles.navCard}>
                                                    <span className={styles.ringGradient} aria-hidden="true" />
                                                    {item.icon && (
                                                        <span className={styles.iconWrap}>
                                                            <img
                                                                src={`/assets/nav-bar-icons/${item.icon}.png`}
                                                                alt=""
                                                                className={styles.iconImg}
                                                                onError={(e) => {
                                                                    (e.currentTarget as HTMLImageElement).style.display = "none";
                                                                }}
                                                            />
                                                        </span>
                                                    )}
                                                    <span className={styles.label}>{item.label}</span>
                                                    <span className={styles.hoverFill} aria-hidden="true" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
            )}
        </div>
    );
}