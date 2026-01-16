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

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { name: "Description", hash: "#description" },
    { name: "Photos", hash: "#photos" },
    { name: "Skills", hash: "#skills" },
    { name: "Back", hash: "#back" },
  ];

  const [activeSection, setActiveSection] = React.useState("Description");

  const handleClick = (hash: string, name: string) => {
    setActiveSection(name);
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-transparent text-gray-950 dark:text-gray-50 dark:text-opacity-90 overflow-hidden">
      {/* Fixed mini header navigation */}
      <nav className="fixed top-4 left-1/2 z-50 flex -translate-x-1/2 rounded-full
                      bg-white/80 px-4 py-2 shadow-md backdrop-blur
                      dark:bg-gray-950/90">
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => handleClick(link.hash, link.name)}
            className={clsx(
              "px-3 py-1 rounded-full font-medium transition-colors",
              activeSection === link.name
                ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
            )}
          >
            {link.name}
          </button>
        ))}
      </nav>

      <div className="pt-20">{children}</div>
    </div>
  );
}
