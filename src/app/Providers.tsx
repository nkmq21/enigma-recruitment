// src/app/Providers.tsx
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { SidebarProvider } from "enigma/context/SidebarContext";
import { RouteProgressProvider } from "enigma/context/RouteProgressContext";
import RouteProgressBar from "enigma/components/common/RouteProgressBar";

export default function Providers({ children }: { children: React.ReactNode }) {
    // Optional: pass pathname to close the mobile drawer on route change
    const pathname = usePathname()!;
    return (
        <RouteProgressProvider>
            <RouteProgressBar />
            <SidebarProvider route={pathname}>{children}</SidebarProvider>
        </RouteProgressProvider>
    );
}