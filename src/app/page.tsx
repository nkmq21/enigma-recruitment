import LandingPage from "enigma/pages/landing/LandingPage";
import {auth} from "enigma/auth";

export default async function Page() {
    const session = await auth();
    return <LandingPage session={session}/>;
}