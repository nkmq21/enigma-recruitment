"use client";
import React, { createContext, useContext, useState, ReactNode, useCallback, useEffect } from "react";

interface SidebarContextType {
    isDesktopCollapsed: boolean;
    toggleDesktopSidebar: () => void;
    setIsDesktopCollapsed: (collapsed: boolean) => void;

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

export const SidebarProvider = ({
                                    children,
                                    route,
                                }: {
    children: ReactNode;
    route?: string;
}) => {
    const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // restore/persist desktop state
    useEffect(() => {
        try {
            const raw = localStorage.getItem(DESKTOP_COLLAPSE_KEY);
            if (raw != null) setIsDesktopCollapsed(raw === "1");
        } catch {}
    }, []);
    useEffect(() => {
        try {
            localStorage.setItem(DESKTOP_COLLAPSE_KEY, isDesktopCollapsed ? "1" : "0");
        } catch {}
    }, [isDesktopCollapsed]);

    const toggleDesktopSidebar = useCallback(() => setIsDesktopCollapsed(p => !p), []);
    const openMobileMenu = useCallback(() => setIsMobileMenuOpen(true), []);
    const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
    const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(p => !p), []);

    // Close mobile on route change
    useEffect(() => {
        if (route !== undefined) setIsMobileMenuOpen(false);
    }, [route]);

    // Esc + scroll lock
    useEffect(() => {
        if (!isMobileMenuOpen) {
            document.body.style.overflow = "";
            return;
        }
        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMobileMenuOpen(false);
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
