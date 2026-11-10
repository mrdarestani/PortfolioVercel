import Link from "next/link";
import PublicationPageNav from "@/components/publication-page-nav";
import {
  PublicationList,
  PublicationYearChart,
} from "@/components/publications";
import { publicationsData } from "@/lib/publications";

export const metadata = {
  title: "Publications | Reza Darestani",
  description:
    "Research papers and conference publications by Reza Darestani, grouped and charted by year.",
};

function HomeLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/#home"
      className={`inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-5 py-2.5 text-sm font-medium text-gray-800 transition hover:border-blue-400 hover:bg-blue-50 dark:border-white/20 dark:bg-white/[0.04] dark:text-gray-100 dark:hover:bg-blue-400/10 ${className}`}
    >
      <span aria-hidden="true">←</span> Back to home
    </Link>
  );
}

export default function PublicationsPage() {
  return (
    <>
      <PublicationPageNav />
      <main className="mx-auto max-w-5xl space-y-10 px-5 pb-24">
        <div className="flex justify-start">
          <HomeLink />
        </div>

        <header
          id="overview"
          className="scroll-mt-32 rounded-3xl border border-gray-200/80 bg-white/70 px-7 py-9 shadow-sm dark:border-white/10 dark:bg-white/[0.035] sm:px-10 sm:py-11"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
            Research
          </p>
          <h1 className="text-4xl font-semibold">Publications</h1>
          <p className="mt-4 max-w-3xl leading-relaxed text-gray-700 dark:text-white/75">
            Work spanning wireless biomedical sensing, smart ureteral stents,
            wearable materials, object detection, and embedded systems. Explore
            the publication timeline or browse the full list grouped by year.
          </p>
          <p className="mt-5 text-sm font-medium text-gray-600 dark:text-gray-400">
            {publicationsData.length} publications across{" "}
            {new Set(publicationsData.map((publication) => publication.year))
              .size}{" "}
            publication years
          </p>
        </header>

        <section id="year-chart" className="scroll-mt-32">
          <PublicationYearChart />
        </section>

        <section
          id="publications"
          className="scroll-mt-32 rounded-3xl border border-gray-200/80 bg-white/70 px-6 py-7 shadow-sm dark:border-white/10 dark:bg-white/[0.035] sm:px-10 sm:py-9"
        >
          <div className="mb-2 border-b border-gray-200 pb-5 dark:border-white/10">
            <h2 className="text-2xl font-semibold">Complete publication list</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Select a year in the chart to jump to that group.
            </p>
          </div>
          <PublicationList />
        </section>

        <div className="border-t border-gray-200 pt-7 dark:border-white/10">
          <HomeLink />
        </div>
      </main>
    </>
  );
}
