"use client";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";
import { useRouteProgress } from "enigma/context/RouteProgressContext";

type Props = NextLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ResponsiveLink({ onClick, ...rest }: Props) {
    const { start } = useRouteProgress();
    return (
        <NextLink
            {...rest}
            onClick={(e) => {
                // only start for left-clicks without modifier keys
                if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                    start();
                }
                onClick?.(e);
            }}
        />
    );
}
