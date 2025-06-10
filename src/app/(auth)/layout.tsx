// src/app/(auth)/layout.tsx
import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* Bạn có thể thêm header, sidebar, hoặc các thành phần chung cho (auth) */}
      <main>{children}</main>
    </div>
  );
}