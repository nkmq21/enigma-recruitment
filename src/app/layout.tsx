import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {SidebarProvider} from "enigma/context/SidebarContext";
import React from "react";
import {ToastContainer} from "enigma/components/ui/ToastContainer";
import {ToastProvider} from "enigma/context/ToastContext";

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
        <SidebarProvider>
            {/*<ToastProvider>*/}
                {children}
            {/*    <ToastContainer />*/}
            {/*</ToastProvider>*/}
        </SidebarProvider>
        </body>
        </html>
    );
}