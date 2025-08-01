import LandingPage from "enigma/pages/landing/LandingPage";
import {auth} from "enigma/auth";

export default async function Page() {
    // 19% for expanded sidebar, 6% for collapsed sidebar
    const session = await auth();
    return <LandingPage session={session}/>
};