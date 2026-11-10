"use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";

const sections = [
  { name: "Overview", href: "#overview", id: "overview" },
  { name: "By year", href: "#year-chart", id: "year-chart" },
  { name: "Publications", href: "#publications", id: "publications" },
];

export default function PublicationPageNav() {
  const [activeSection, setActiveSection] = React.useState("overview");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const visibleSection = visibleSections[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Publications page sections"
      className="fixed left-1/2 top-4 z-50 flex max-w-[calc(100vw-1rem)] -translate-x-1/2 gap-1 overflow-x-auto rounded-full border border-gray-200/70 bg-white/90 px-2 py-2 shadow-md backdrop-blur dark:border-white/10 dark:bg-gray-950/90 sm:px-3"
    >
      {sections.map((section) => (
        <Link
          key={section.id}
          href={section.href}
          className={clsx(
            "whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:text-sm",
            activeSection === section.id
              ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
              : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800"
          )}
        >
          {section.name}
        </Link>
      ))}
      <Link
        href="/#home"
        className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-50 dark:text-blue-300 dark:hover:bg-blue-300/10 sm:px-4 sm:text-sm"
      >
        Home
      </Link>
    </nav>
  );
}
