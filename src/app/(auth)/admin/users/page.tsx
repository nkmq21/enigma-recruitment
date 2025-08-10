// src/app/(auth)/admin/users/page.tsx
import { auth } from "enigma/auth";
import AdminUsersPage from "enigma/components/pages/admin/users/AdminUsersPage";
import { getPaginatedUsers } from "enigma/services/userService";
import React from "react";

type Params = Promise<{ page?: string }>;

export default async function Page({ searchParams }: { searchParams: Params }) {
  const session = await auth();
  const { page } = await searchParams;
  const actualPage = Number(page ?? "1");
  const pageSize = 10;

  // Call service layer directly for static site generation
  const result = await getPaginatedUsers(actualPage, pageSize);
  if (result.error || !result.data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold">User Not Found</h1>
          <p className="mt-4 text-gray-600">
            {result.error ?? "User not found"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <AdminUsersPage
      session={session}
      users={result.data.users}
      totalUsers={result.data.total}
      currentPage={actualPage}
      pageSize={pageSize}
    />
  );
}

export async function generateMetadata() {
  return {
    title: "User Management | Enigma Recruitment",
  };
}
