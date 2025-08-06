import {auth} from "enigma/auth";
import SaveJobPage from "enigma/pages/profile/saveJobPage/SaveJobPage";

export default async function CvsPage() {
    const session = await auth();
    return (
        <SaveJobPage session={session} />
    );
}

export async function generateMetadata() {
    return {
        title: 'Saved Jobs | Enigma Recruitment',
    };
}