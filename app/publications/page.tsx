import Link from "next/link";
import { PublicationList } from "@/components/publications";

export const metadata = {
  title: "Publications | Reza Darestani",
  description:
    "Research papers and conference publications by Reza Darestani.",
};

export default function PublicationsPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 pb-24">
      <Link
        href="/"
        className="mb-8 inline-block text-sm font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
      >
        Back to home
      </Link>
      <header className="mb-10 border-b border-gray-200 pb-8 dark:border-white/15">
        <p className="mb-2 text-sm font-semibold uppercase text-blue-700 dark:text-blue-300">
          Research
        </p>
        <h1 className="text-4xl font-semibold">Publications</h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-gray-700 dark:text-white/75">
          Work spanning wireless biomedical sensing, smart ureteral stents,
          wearable materials, object detection, and embedded systems. The
          publication links below lead to the publisher, proceedings, or
          indexing record.
        </p>
      </header>
      <PublicationList />
    </main>
  );
}