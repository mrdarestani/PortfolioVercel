// app/components/client-header-wrapper.tsx
"use client"; // only this file is client component

import { usePathname } from "next/navigation";
import Header from "@/components/header";

export default function ClientHeaderWrapper() {
  const pathname = usePathname();

  // Only show main Header if we are on the home page
  const showMainHeader = pathname === "/";

  return <>{showMainHeader && <Header />}</>;
}
