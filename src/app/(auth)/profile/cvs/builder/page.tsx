import { auth } from "enigma/auth";
import CvBuilderPage from "enigma/components/pages/cvs/builder/CvBuilderPage";

export default async function Page() {
    const session = await auth();
    return <CvBuilderPage session={session} />;
}