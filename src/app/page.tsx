import AboutUsPage from "enigma/pages/aboutUs/aboutUsPage";
import {auth} from "enigma/auth";

export default async function Page() {
    const session = await auth();
    return <AboutUsPage session={session} />;
}