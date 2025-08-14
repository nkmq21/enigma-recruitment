import {auth} from "enigma/auth";
import SavedJobsPage from "enigma/components/pages/profile/saved-jobs/SavedJobsPage";

export default async function CvsPage() {
    const session = await auth();
    return (
        <SavedJobsPage session={session} />
    );
}

export async function generateMetadata() {
    return {
        title: 'Saved Jobs | Enigma Recruitment',
    };
}