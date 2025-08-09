// src/context/SidebarContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode, useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";

interface SidebarContextType {
    // Desktop
    isDesktopCollapsed: boolean;
    toggleDesktopSidebar: () => void;
    setIsDesktopCollapsed: (collapsed: boolean) => void;

    // Mobile
    isMobileMenuOpen: boolean;
    openMobileMenu: () => void;
    closeMobileMenu: () => void;
    toggleMobileMenu: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
    const ctx = useContext(SidebarContext);
    if (!ctx) throw new Error("useSidebar must be used within a SidebarProvider");
    return ctx;
};

const DESKTOP_COLLAPSE_KEY = "sidebar:collapsed";

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    // Desktop collapsed state, persisted
    const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);

    // Restore on mount
    useEffect(() => {
        try {
            const raw = localStorage.getItem(DESKTOP_COLLAPSE_KEY);
            if (raw != null) setIsDesktopCollapsed(raw === "1");
        } catch {}
    }, []);

    // Persist on change
    useEffect(() => {
        try {
            localStorage.setItem(DESKTOP_COLLAPSE_KEY, isDesktopCollapsed ? "1" : "0");
        } catch {}
    }, [isDesktopCollapsed]);

    const toggleDesktopSidebar = useCallback(() => {
        setIsDesktopCollapsed((prev) => !prev);
    }, []);

    // Mobile drawer state
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const openMobileMenu = useCallback(() => setIsMobileMenuOpen(true), []);
    const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
    const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((p) => !p), []);

    // Close on route change
    const pathname = usePathname();
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Close on Esc + lock scroll while open
    useEffect(() => {
        if (!isMobileMenuOpen) {
            document.body.style.overflow = "";
            return;
        }
        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsMobileMenuOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <SidebarContext.Provider
            value={{
                isDesktopCollapsed,
                toggleDesktopSidebar,
                setIsDesktopCollapsed,
                isMobileMenuOpen,
                openMobileMenu,
                closeMobileMenu,
                toggleMobileMenu,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};
