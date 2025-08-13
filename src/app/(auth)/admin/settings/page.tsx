// src/app/(auth)/admin/media/page.tsx
import { auth } from "enigma/auth";
import SettingPage from "enigma/components/pages/admin/setting/SettingPage";

export default async function Page() {
  const session = await auth();
  return <SettingPage session={session} />;
}

export async function generateMetadata() {
  return {
    title: "Admin Dashboard | Enigma Recruitment",
  };
}
