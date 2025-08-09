import {signOut} from "enigma/auth";
import {IconButton} from "@mui/material";
import Image from "next/image";

export default async function LogoutButton() {
    return (
        <form action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
        }}>
            <IconButton type="submit" style={{ background: "none", border: "none", padding: 0 }}>
                <Image src="/exit.svg" alt="exit" width={24} height={24} />
            </IconButton>
        </form>
    );
}