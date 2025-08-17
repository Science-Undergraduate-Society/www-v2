"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MENUS } from "@/data/nav";
import styles from "./Navbar.module.css";

const PANEL_W = 761;
const PANEL_TOP_OFFSET = 40;
const POINTER_W = 80;
const POINTER_H = 35;
const POINTER_EDGE_GUTTER = 24;

export default function Navbar() {
    const [open, setOpen] = useState<string | null>(null);
    const [x, setX] = useState(0);
    const [anchorY, setAnchorY] = useState(0);
    const [panelLeft, setPanelLeft] = useState(0);
    const [pointerLeft, setPointerLeft] = useState(0);
    const navRef = useRef<HTMLDivElement | null>(null);

    const handleEnter = (label: string, e: React.MouseEvent) => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [x]);

    useEffect(() => {
        const onKey = (ev: KeyboardEvent) => ev.key === "Escape" && setOpen(null);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const computePositions = (cx: number) => {
        if (!navRef.current) return;
        const r = navRef.current.getBoundingClientRect();

        // clamp panel so left/right align with nav bounds
        const left = Math.min(Math.max(cx - PANEL_W / 2, r.left), r.right - PANEL_W);
        setPanelLeft(left);

        // pointer position inside panel, kept away from rounded corners
        const pointerX = Math.min(
            Math.max(cx - left, POINTER_W / 2 + POINTER_EDGE_GUTTER),
            PANEL_W - POINTER_W / 2 - POINTER_EDGE_GUTTER
        );
        setPointerLeft(pointerX);
    };

    return (
        <div className="relative z-[9999] overflow-visible pt-[8px]">
            {/* Top bar */}
            <nav
                ref={navRef}
                className="bg-[#222755] rounded-xl shadow-lg overflow-visible select-none max-w-[1512px] w-full mx-auto"
            >
                <div className="h-[95px] flex items-center text-white overflow-visible px-8">
                    {/* Logo */}
                    <Link href="/" className="shrink-0 mr-16">
                        <img src="/assets/logos/logo-blue.png" alt="SUS logo" className="h-[75px] w-[75px]" />
                    </Link>

                    {/* Primary links */}
                    <div className="flex-1 flex justify-center">
                        <ul className="flex items-center gap-8 overflow-visible">
                            {MENUS.map((m) => (
                                <li key={m.label} className="relative overflow-visible">
                                    {m.items.length === 1 ? (
                                        <Link
                                            href={m.items[0].href}
                                            className={`flex items-center justify-center gap-2 px-[30px] h-[58px] rounded-[16px] font-semibold text-[20px] leading-[30px] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 hover:bg-white/10 hover:text-[#8db5ff] ${styles.noWrap}`}
                                        >
                                            {m.label}
                                        </Link>
                                    ) : (
                                        <button
                                            onMouseEnter={(e) => handleEnter(m.label, e)}
                                            onFocus={(e) => handleEnter(m.label, e as any)}
                                            className={[
                                                "flex items-center justify-center gap-2 px-[30px] h-[58px] rounded-[16px] font-semibold text-[20px] leading-[30px] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
                                                styles.noWrap,
                                                open === m.label
                                                    ? [
                                                        "bg-[#0173BE]/40 text-white",
                                                        styles.tabActive, // inside stroke + blur via CSS module
                                                    ].join(" ")
                                                    : "hover:bg-white/10 hover:text-[#8db5ff]",
                                            ].join(" ")}
                                        >
                                            {m.label}
                                            <svg
                                                className={`h-[17px] w-[17px] transition-transform duration-150 ${
                                                    open === m.label ? "rotate-180" : ""
                                                }`}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
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
                    <Link
                        href="/join"
                        className="w-[150px] h-[58px] rounded-[16px] bg-white text-[#0E1A4B] text-[20px] leading-[30px] font-semibold flex items-center justify-center hover:bg-[#d7e9f9] transition-colors ml-8 shrink-0"
                    >
                        Join SUS
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
                            className="fixed inset-0 z-[9998] pointer-events-none"
                            onMouseLeave={() => setOpen(null)}
                            onClick={() => setOpen(null)}
                        >
                            {/* panel */}
                            <div className="absolute pointer-events-auto" style={{ left: panelLeft, top: anchorY + PANEL_TOP_OFFSET }}>
                                <div className="w-[761px] rounded-[16px] bg-[rgba(143,210,254,0.25)] shadow-[0_12px_24px_rgba(0,0,0,0.12)] p-6 pb-[30px] relative">
                                    {/* pointer */}
                                    <div
                                        className="absolute -translate-x-1/2"
                                        style={{ left: `${pointerLeft}px`, top: "-34.5px" }}
                                        aria-hidden="true"
                                    >
                                        <svg
                                            width={POINTER_W}
                                            height={POINTER_H}
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
                                                fill="rgba(143,210,254,0.25)"
                                            />
                                        </svg>
                                    </div>

                                    {/* cards */}
                                    <ul className="grid grid-cols-2 gap-4">
                                        {menu.items.map((item) => (
                                            <li key={item.href}>
                                                <Link
                                                    href={item.href}
                                                    className={[
                                                        "group flex items-center gap-[19px] w-[303px] h-[125px] rounded-[16px] px-[30px] py-[21px] transition-[background,border,box-shadow,transform] duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#222755]/40",
                                                        styles.card, // enables gradient ring targeting
                                                    ].join(" ")}
                                                >
                                                    {/* gradient ring */}
                                                    <span className={styles.ringGradient} />

                                                    {item.icon && (
                                                        <span className="inline-flex items-center justify-center h-12 w-12 shrink-0">
                              <img
                                  src={`/assets/nav-bar-icons/${item.icon}.png`}
                                  alt=""
                                  className="h-12 w-12"
                                  onError={(e) => {
                                      (e.currentTarget as HTMLImageElement).style.display = "none";
                                  }}
                              />
                            </span>
                                                    )}
                                                    <span className="font-semibold text-[20px] leading-[30px] text-[#222755]">
                            {item.label}
                          </span>

                                                    {/* subtle hover fill */}
                                                    <span className="absolute inset-0 rounded-[16px] bg-[rgba(143,210,254,0.25)] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-150" />
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
