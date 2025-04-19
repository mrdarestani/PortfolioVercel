// app/projects/layout.tsx
import React from "react";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6">
      {/* You can add any specific layout, header, or style here just for project pages */}
      {children}
    </div>
  );
}
