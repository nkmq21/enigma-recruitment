import React from "react";
import Link from "next/link";
import ResponsiveLink from "enigma/components/common/ResponsiveLink";
import Image from "next/image";
import {Box} from "@mui/material";

const BigHeaderLogo = () => {
    const href = "/";
    return (
        <ResponsiveLink href={href}>
            <Box
                sx={{
                    "@media (max-width: 991px)": {
                        display: "flex",
                        justifyContent: "space-between",
                    },
                }}
            >
                <Box
                    sx={{
                        margin: 3,
                        width: "100%",
                        maxWidth: "100%",
                        overflow: "hidden",
                        "@media (max-width: 991px)": {
                            margin: 2,
                            ml: 2,
                        },
                    }}
                >
                    <Image
                        src="/Logo2.svg"
                        alt="Career Logo"
                        width={135 * 1.5}
                        height={28 * 1.5}
                        style={{
                            height: "auto",
                            maxWidth: "100%",
                            objectFit: "contain",
                        }}
                    />
                </Box>
            </Box>
        </ResponsiveLink>
    );
};

export const SmallHeaderLogo = () => {
    const href = "/";
    return (
        <Link href={href}>
            <Box>
                <Box
                    sx={{
                        width: "100%",
                        overflow: "hidden",
                    }}
                >
                    <Image src="/logoPic.svg" alt="Career Logo" width={60} height={28}/>
                </Box>
            </Box>
        </Link>
    );
};

export default BigHeaderLogo;
