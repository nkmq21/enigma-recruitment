// src/context/SidebarContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface SidebarContextType {
    isDesktopCollapsed: boolean;
    toggleDesktopSidebar: () => void;
    setIsDesktopCollapsed: (collapsed: boolean) => void;
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
    setIsMobileMenuOpen: (open: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDesktopSidebar = useCallback(() => setIsDesktopCollapsed(prev => !prev), []);
    const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);

    return (
        <SidebarContext.Provider value={{
            isDesktopCollapsed,
            toggleDesktopSidebar,
            setIsDesktopCollapsed,
            isMobileMenuOpen,
            toggleMobileMenu,
            setIsMobileMenuOpen
        }}>
            {children}
        </SidebarContext.Provider>
    );
};