import { auth } from "enigma/auth";
import CVProfilePage from "enigma/components/pages/profile/cvs/CVProfilePage";

export default async function CvsPage() {
  const session = await auth();
  return <CVProfilePage session={session} />;
}

export async function generateMetadata() {
  return {
    title: "Resumes | Enigma Recruitment",
  };
}
