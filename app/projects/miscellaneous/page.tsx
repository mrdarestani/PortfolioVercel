import Image from "next/image";
import Link from "next/link";
import { miscellaneousProjects } from "@/lib/miscellaneous-projects";

const categories = Array.from(
  new Set(miscellaneousProjects.map((project) => project.category))
);

export default function MiscellaneousProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-5 pb-20">
      <section
        id="overview"
        className="scroll-mt-28 overflow-hidden rounded-3xl border border-gray-200/80 bg-gradient-to-br from-blue-50 via-white to-gray-50 shadow-sm dark:border-white/10 dark:from-blue-950/30 dark:via-gray-950 dark:to-gray-900"
      >
        <div className="grid items-center gap-8 px-7 py-9 sm:grid-cols-[1fr_18rem] sm:px-12 sm:py-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
              Hands-on learning &amp; teaching
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-950 dark:text-gray-50 sm:text-4xl">
              A workshop of practical projects
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-gray-700 dark:text-gray-300">
              Embedded systems, electronics, sensing, and interface projects
              collected in one place. Browse by topic; each project brings its
              photos, design overview, and learning outcomes together.
            </p>
            <a
              href="#project-groups"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800 dark:bg-white dark:text-gray-900 dark:hover:bg-blue-200"
            >
              Browse {miscellaneousProjects.length} projects
              <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="relative mx-auto flex aspect-[4/3] w-full max-w-[18rem] items-center justify-center overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-3 dark:border-white/10 dark:bg-white/[0.04]">
            <Image
              src="/projects/miscellaneous/TotalProjectsWatermark.jpg"
              alt="A collection of electronics and embedded project prototypes"
              fill
              priority
              sizes="(max-width: 640px) 85vw, 18rem"
              className="object-contain p-2 opacity-60 mix-blend-multiply dark:opacity-70 dark:mix-blend-screen"
            />
          </div>
        </div>
      </section>

      <section id="project-groups" className="scroll-mt-28 space-y-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
            Project collection
          </p>
          <h2 className="mt-2 text-3xl font-bold">Builds &amp; prototypes</h2>
        </div>

        {categories.map((category) => {
          const categoryId = `category-${category
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")}`;

          return (
          <section key={category} aria-labelledby={categoryId}>
            <h3
              id={categoryId}
              className="mb-5 border-b border-gray-200 pb-3 text-xl font-semibold dark:border-white/10"
            >
              {category}
            </h3>
            <div className="space-y-6">
              {miscellaneousProjects
                .filter((project) => project.category === category)
                .map((project) => {
                  const photos = [
                    { src: project.image, alt: project.imageAlt },
                    ...(project.gallery ?? []),
                  ];

                  return (
                    <article
                      key={project.number}
                      className="overflow-hidden rounded-3xl border border-gray-200/80 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/[0.035]"
                    >
                      <div className="border-b border-gray-200/80 px-6 py-5 dark:border-white/10 sm:px-8">
                        <div className="flex items-start gap-4">
                          <span className="pt-0.5 text-2xl font-bold tabular-nums text-blue-700 dark:text-blue-300">
                            {project.number}
                          </span>
                          <div>
                            <h4 className="text-xl font-semibold leading-snug">
                              {project.title}
                            </h4>
                            <p className="mt-2 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-300">
                              {project.summary}
                            </p>
                            <ul className="mt-3 flex flex-wrap gap-2">
                              {project.topics.map((topic) => (
                                <li
                                  key={topic}
                                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-300/10 dark:text-blue-200"
                                >
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-6 p-5 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:p-7">
                        <div
                          className={
                            photos.length > 1
                              ? "grid content-start gap-3 sm:grid-cols-2"
                              : "grid content-start"
                          }
                        >
                          {photos.map((photo) => (
                            <figure
                              key={photo.src}
                              className="overflow-hidden rounded-xl border border-gray-200/70 bg-gray-50 dark:border-white/10 dark:bg-black/20"
                            >
                              <div className="relative aspect-[4/3]">
                                <Image
                                  src={photo.src}
                                  alt={photo.alt}
                                  fill
                                  sizes="(max-width: 640px) 90vw, 28rem"
                                  className="object-contain p-2"
                                />
                              </div>
                              <figcaption className="border-t border-gray-200/70 px-3 py-2 text-xs leading-relaxed text-gray-600 dark:border-white/10 dark:text-gray-400">
                                {photo.alt}
                              </figcaption>
                            </figure>
                          ))}
                        </div>

                        <div className="space-y-5">
                          <div>
                            <h5 className="font-semibold">Design &amp; operation</h5>
                            <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                              {project.design}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold">
                              What this project practices
                            </h5>
                            <ul className="mt-2 space-y-2">
                              {project.learning.map((outcome) => (
                                <li
                                  key={outcome}
                                  className="flex gap-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300"
                                >
                                  <span className="text-blue-700 dark:text-blue-300">
                                    •
                                  </span>
                                  <span>{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {project.notes ? (
                            <p className="rounded-xl bg-amber-50/80 px-4 py-3 text-sm leading-relaxed text-gray-700 dark:bg-amber-200/[0.05] dark:text-gray-300">
                              <span className="font-semibold">Note: </span>
                              {project.notes}
                            </p>
                          ) : null}
                          {project.citations?.length ? (
                            <div
                              id="research"
                              className="scroll-mt-28 border-t border-gray-200 pt-4 dark:border-white/10"
                            >
                              <h5 className="font-semibold">
                                Related saffron research
                              </h5>
                              <ol className="mt-3 space-y-4">
                                {project.citations.map((citation) => (
                                  <li key={citation.href}>
                                    <a
                                      href={citation.href}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="text-sm font-medium leading-relaxed text-blue-800 underline decoration-blue-300 underline-offset-4 hover:text-blue-950 dark:text-blue-200 dark:hover:text-blue-100"
                                    >
                                      {citation.title}
                                    </a>
                                    <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                                      {citation.citation}
                                    </p>
                                  </li>
                                ))}
                              </ol>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </article>
                  );
                })}
            </div>
          </section>
          );
        })}
      </section>

      <section
        id="learning"
        className="scroll-mt-28 rounded-3xl border border-gray-200/80 bg-gray-50/80 p-6 dark:border-white/10 dark:bg-white/[0.025] sm:p-8"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
          Learning outcomes
        </p>
        <h2 className="mt-2 text-2xl font-bold">
          Engineering skills through hands-on practice
        </h2>
        <p className="mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-300">
          Across these projects, the practical work connects circuit and PCB
          design with embedded firmware, sensor integration, communication
          protocols, timing, data handling, interface design, and systematic
          testing. Individual project notes above highlight the skills practiced
          in each build.
        </p>
      </section>

      <section
        id="back"
        className="scroll-mt-28 border-t border-gray-200 pt-7 text-center dark:border-white/10"
      >
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          Explore more work from the main portfolio.
        </p>
        <Link
          href="/#projects"
          className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium transition hover:bg-gray-100 dark:border-white/20 dark:hover:bg-white/10"
        >
          ← Back to the main project gallery
        </Link>
      </section>
    </main>
  );
}
