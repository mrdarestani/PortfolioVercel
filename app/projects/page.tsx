import React from "react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
        My Projects
      </h1>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-center">
        Here you can explore a collection of projects I’ve worked on — spanning
        embedded systems, IoT, and wearable technologies.
      </p>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Example project cards */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Smart Wearable Device</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Designed a baby wellbeing monitor with real-time sensing and
            Bluetooth connectivity.
          </p>
          <Link
            href="/projects/wearable"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Learn more →
          </Link>
        </div>

        <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">IoT Greenhouse Monitor</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            A complete IoT-based environmental data logger for temperature and
            humidity monitoring.
          </p>
          <Link
            href="/projects/greenhouse"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Learn more →
          </Link>
        </div>
      </section>

      <Link
        href="/"
        className="mt-10 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
