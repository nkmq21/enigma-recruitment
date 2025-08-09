"use client";
import {createContext, useContext, useEffect, useRef, useState, useCallback, ReactNode} from "react";
import {usePathname} from "next/navigation";

type Context = {
    start: () => void;
    stop: () => void;
    isActive: boolean;
};

const RouteProgressContext = createContext<Context | null>(null);

export function useRouteProgress() {
    const context = useContext(RouteProgressContext);
    if (!context) throw new Error("useRouteProgress must be used within RouteProgressProvider");
    return context;
}

export function RouteProgressProvider({children}: { children: ReactNode }) {
    const [isActive, setIsActive] = useState(false);
    const startTimeRef = useRef<number | null>(null);
    const pathname = usePathname();
    const MIN_MS = 300; // show at least 300ms to avoid flash

    const start = useCallback(() => {
        if (isActive) return;
        startTimeRef.current = Date.now();
        setIsActive(true);
    }, [isActive]);

    const stopNow = useCallback(() => {
        startTimeRef.current = null;
        setIsActive(false);
    }, []);

    const stop = useCallback(() => {
        const startedAt = startTimeRef.current;
        if (!startedAt) return stopNow();
        const elapsed = Date.now() - startedAt;
        if (elapsed >= MIN_MS) stopNow();
        else setTimeout(stopNow, MIN_MS - elapsed);
    }, [stopNow]);

    // When the URL changes, consider the nav "done" (App Router updates pathname at the right time)
    useEffect(() => {
        if (isActive) stop();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <RouteProgressContext.Provider value={{start, stop, isActive}}>
            {children}
        </RouteProgressContext.Provider>
    );
}
