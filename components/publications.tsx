"use client";

import Link from "next/link";
import SectionHeading from "./section-heading";
import {
  publicationYears,
  publicationsData,
} from "@/lib/publications";
import { useSectionInView } from "@/lib/hooks";

export default function Publications() {
  const { ref } = useSectionInView("Research");

  return (
    <section
      id="research"
      ref={ref}
      className="mb-28 w-[min(100%,52rem)] scroll-mt-28 rounded-3xl border border-gray-200/80 bg-white/70 px-6 py-8 shadow-sm shadow-gray-950/[0.04] dark:border-white/15 dark:bg-white/[0.035] dark:shadow-black/10 sm:px-10 sm:py-10"
    >
      <SectionHeading>Research &amp; publications</SectionHeading>
      <p className="text-center leading-relaxed text-gray-700 dark:text-white/75">
        My research spans algorithms and machine learning, wearable devices,
        biomedical engineering, and smart-grid EV charging and energy
        management, including sensor-integrated biomedical systems.
      </p>
      <div className="mt-6 text-center">
        <Link
          href="/publications"
          className="font-medium text-blue-700 underline underline-offset-4 transition hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
        >
          Browse all {publicationsData.length} publications
        </Link>
      </div>
    </section>
  );
}

export function PublicationList() {
  return (
    <div className="space-y-8">
      {publicationYears.map((year) => (
        <section
          key={year}
          id={`year-${year}`}
          className="scroll-mt-32"
          aria-labelledby={`year-heading-${year}`}
        >
          <h2
            id={`year-heading-${year}`}
            className="mb-3 flex items-center gap-3 text-2xl font-semibold"
          >
            <span>{year}</span>
            <span className="h-px flex-1 bg-gray-200 dark:bg-white/15" />
          </h2>
          <ol className="divide-y divide-gray-200 dark:divide-white/15">
            {publicationsData
              .filter((publication) => publication.year === year)
              .map((publication) => (
                <li key={publication.title} className="py-6 first:pt-2">
                  <h3 className="text-lg font-semibold leading-snug">
                    {publication.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/75">
                    {publication.authors}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-white/60">
                    <span className="font-medium">{publication.venue}</span>
                    {publication.details && `, ${publication.details}`}
                  </p>
                  <a
                    href={publication.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
                  >
                    View on {publication.linkLabel}
                  </a>
                </li>
              ))}
          </ol>
        </section>
      ))}
    </div>
  );
}

export function PublicationYearChart() {
  const counts = publicationYears.map(
    (year) =>
      [
        year,
        publicationsData.filter((publication) => publication.year === year)
          .length,
      ] as const
  );
  const maxCount = Math.max(...counts.map(([, count]) => count));

  return (
    <div
      role="group"
      aria-label="Number of publications by year"
      className="rounded-2xl border border-gray-200/80 bg-gray-50/80 p-5 dark:border-white/10 dark:bg-white/[0.025] sm:p-7"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">Publications by year</h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Select a year to jump to its publications.
          </p>
        </div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {publicationsData.length} total
        </p>
      </div>
      <div className="grid h-48 grid-cols-7 items-end gap-2 sm:h-56 sm:gap-4">
        {counts.map(([year, count]) => (
          <a
            key={year}
            href={`#year-${year}`}
            aria-label={`${year}: ${count} ${
              count === 1 ? "publication" : "publications"
            }`}
            className="group flex h-full flex-col items-center justify-end gap-2 rounded-lg px-1 pb-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
              {count}
            </span>
            <span
              className="w-full max-w-12 rounded-t-md bg-blue-500 transition-colors group-hover:bg-blue-700 dark:bg-blue-400 dark:group-hover:bg-blue-300"
              style={{
                height: `${Math.max((count / maxCount) * 100, 8)}%`,
              }}
            />
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
              {year}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
