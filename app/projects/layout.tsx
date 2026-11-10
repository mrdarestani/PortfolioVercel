// app/projects/layout.tsx
// import React from "react";

// export default function ProjectsLayout({children,}: {children: React.ReactNode;}) {
//   return (
//     <div className="p-6">
//       {/* You can add any specific layout, header, or style here just for project pages */}
//       {children}
//     </div>
//   );
// }

// export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="min-h-screen">
//       {/* maybe a minimal top bar or nothing */}
//       {children}
//     </div>
//   );
// }

// import React from "react";

// export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-950">
//       {/* Optionally, you can have a minimal top bar or a different header */}
//       {/* <div className="p-4 border-b border-gray-200 dark:border-gray-800">
//         <h2 className="text-lg font-semibold">Projects Section</h2>
//       </div> */}

//       {children}
//     </div>
//   );
// }

"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const links =
    pathname === "/projects/miscellaneous"
      ? [
          { name: "Overview", href: "#overview", hash: "#overview" },
          { name: "Projects", href: "#project-groups", hash: "#project-groups" },
          { name: "Learning", href: "#learning", hash: "#learning" },
          { name: "Back", href: "#back", hash: "#back" },
        ]
      : [
          { name: "Description", href: "#description", hash: "#description" },
          { name: "Photos", href: "#photos", hash: "#photos" },
          { name: "Skills", href: "#skills", hash: "#skills" },
          { name: "Back", href: "#back", hash: "#back" },
        ];

  const [activeSection, setActiveSection] = React.useState(links[0].name);

  React.useEffect(() => {
    setActiveSection(
      pathname === "/projects/miscellaneous" ? "Overview" : "Description"
    );
  }, [pathname]);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
    name: string
  ) => {
    event.preventDefault();
    setActiveSection(name);
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-transparent text-gray-950 dark:text-gray-50 dark:text-opacity-90 overflow-hidden">
      {/* Fixed mini header navigation */}
      <nav
        aria-label="Page sections"
        className="fixed left-1/2 top-4 z-50 flex max-w-[calc(100vw-1rem)] -translate-x-1/2 gap-1 overflow-x-auto rounded-full border border-gray-200/70 bg-white/90 px-2 py-2 shadow-md backdrop-blur dark:border-white/10 dark:bg-gray-950/90 sm:px-3"
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={(event) => handleClick(event, link.hash, link.name)}
            className={clsx(
              "whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:text-sm",
              activeSection === link.name
                ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="pt-20">{children}</div>
    </div>
  );
}
