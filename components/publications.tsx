"use client";

import Link from "next/link";
import SectionHeading from "./section-heading";
import { publicationsData } from "@/lib/publications";
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
    <ol className="divide-y divide-gray-200 dark:divide-white/15">
      {publicationsData.map((publication) => (
        <li key={publication.title} className="py-6 first:pt-0">
          <p className="mb-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
            {publication.year}
          </p>
          <h2 className="text-lg font-semibold leading-snug">
            {publication.title}
          </h2>
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
  );
}
