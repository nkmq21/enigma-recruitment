import {auth} from "enigma/auth";
import CvProfilePage from "enigma/components/pages/profile/cvs/CvProfilePage";

export default async function Page() {
    const session = await auth();
    return <CvProfilePage session={session}/>;
}

export async function generateMetadata() {
    return {
        title: "Resumes | Enigma Recruitment",
    };
}
