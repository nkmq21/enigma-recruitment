import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {SidebarProvider} from "enigma/context/SidebarContext";
import {RouteProgressProvider} from "enigma/context/RouteProgressContext";
import RouteProgressBar from "enigma/components/common/RouteProgressBar";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Enigma Recruitment",
    description: "Enigma Recruitment - Your gateway to the best jobs opportunities",

};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <RouteProgressProvider>
            <RouteProgressBar/>
            <SidebarProvider>
                {children}
            </SidebarProvider>
        </RouteProgressProvider>
        </body>
        </html>
    );
}