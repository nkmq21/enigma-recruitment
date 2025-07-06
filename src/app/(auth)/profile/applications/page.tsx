import {auth} from "enigma/auth";
import HistoryApplicationPage from "enigma/components/profile/historyApllication/saveJobPage";

export default async function CvsPage() {
    const session = await auth();
    return (
        <HistoryApplicationPage session={session} />
    );
}

export async function generateMetadata() {
    return {
        title: 'Job Applications | Enigma Recruitment',
    };
}