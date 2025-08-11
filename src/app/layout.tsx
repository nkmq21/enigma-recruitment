import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import React from "react";
import Providers from "enigma/app/Providers";
import {SpeedInsights} from "@vercel/speed-insights/next";

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
        <Providers>
            <SpeedInsights/>
            {children}
        </Providers>
        </body>
        </html>
    );
}