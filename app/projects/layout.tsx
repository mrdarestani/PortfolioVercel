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
import { motion } from "framer-motion"; 
import clsx from "clsx";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { name: "Description", hash: "#description" },
    { name: "Photos", hash: "#photos" },
  ];

  const [activeSection, setActiveSection] = React.useState("Description");

  const handleClick = (name: string) => {
    setActiveSection(name);
    const el = document.querySelector(name === "Description" ? "#description" : "#photos");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    //<div className="min-h-screen bg-white dark:bg-gray-950">
    //  <div className="relative min-h-screen bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 overflow-hidden">
    //   {/* Background gradient blobs (same as main layout) */}
    //   <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[30rem] w-[30rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />
    //   <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[30rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" />
    //   {/* Mini header navigation */}
    //   <nav className="fixed top-4 left-1/2 z-50 flex -translate-x-1/2 rounded-full bg-white bg-opacity-80 px-4 py-2 shadow-md dark:bg-gray-950 dark:bg-opacity-90">
      // ✅ transparent background — allows gradient from main layout to show through
    <div className="relative min-h-screen bg-transparent text-gray-950 dark:text-gray-50 dark:text-opacity-90 overflow-hidden">
      {/* Fixed mini header navigation */}
      <nav className="fixed top-4 left-1/2 z-50 flex -translate-x-1/2 rounded-full bg-white/80 px-4 py-2 shadow-md dark:bg-gray-950/90 backdrop-blur">
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => handleClick(link.name)}
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
