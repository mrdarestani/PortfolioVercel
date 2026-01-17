import React from "react";
import Link from "next/link";
import ProjectSkills from "@/components/project-skills";
import { lipLoftSkillsData } from "@/lib/project-skills";

export default function LipLoftPage() {
  return (
    <div className="min-h-screen bg-transparent p-10 max-w-5xl mx-auto space-y-16">

      {/* Description Section */}
      <section id="description" className="scroll-mt-28">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">LipLoft</h1>

          {/* Hackathon Badge */}
          <span className="rounded-full bg-cPink/10 px-4 py-1 text-sm font-medium text-cPink border border-cPink/30">
            🏅 2019 Health & Regenerative Medicine Hackathon
          </span>
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          LipLoft is an assistive technology project developed during the 2019 Health and Regenerative
          Medicine Hackathon. The system enables hands-free drone control using puff-and-sip (PIF &amp; PUFF)
          input through the LipSync interface. The team developed open-source software that translates
          breath-based commands into real-time drone control, allowing users with severe mobility
          limitations to fly a drone independently.
        </p>
      </section>

      {/* Demo Video */}
      <section id="video" className="scroll-mt-28">
        <h2 className="text-2xl font-semibold mb-6">Demo</h2>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <video
            src="/projects/Liploft.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="scroll-mt-28">
        <h2 className="text-2xl font-semibold mb-4">Impact</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          The LipLoft system was shared with individuals living with quadriplegia in British Columbia who
          expressed a strong desire to experience drone flight independently. By removing the need for
          hand-based controls, the project demonstrated how accessible interfaces can restore agency,
          creativity, and engagement through technology.
        </p>
      </section>

      {/* Image 1 */}
      <section id="photos" className="scroll-mt-28">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/projects/Liploft1.jpg"
            alt="LipLoft drone control system demonstration"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Image 2 */}
      <section id="image-2" className="scroll-mt-28">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/projects/Liploft2.jpg"
            alt="LipLoft team at the 2019 Health Hackathon"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Image 3 */}
      <section id="image-3" className="scroll-mt-28">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/projects/Liploft3.jpeg"
            alt="Assistive drone control using puff-and-sip interface"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Why It Matters */}
      <section
        id="why-it-matters"
        className="scroll-mt-28 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-900/40"
      >
        <h2 className="text-2xl font-semibold mb-4">Why It Matters</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          LipLoft highlights the importance of inclusive design in engineering. By combining robotics,
          real-time control systems, and human-machine interfaces, the project demonstrates how emerging
          technologies can be adapted to meet the needs of underrepresented users. It serves as a strong
          example of how rapid prototyping and interdisciplinary collaboration can translate empathy
          into impactful, real-world solutions.
        </p>
      </section>

      {/* References Section */}
      <section id="references" className="scroll-mt-28">
        <h2 className="text-2xl font-semibold mb-4">References</h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li>
            <a
              href="https://bcregmed.ca/event/2019-health-and-regenerative-medicine-hackathon/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-cPink transition"
            >
              2019 Health & Regenerative Medicine Hackathon - Event Page
            </a>
          </li>
          <li>
            <a
              href="https://bcregmed.ca/wp-content/uploads/2020/05/2019-BCREGMED-Health-Hackathon-Recap-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-cPink transition"
            >
              Hackathon Recap PDF - Team LipLoft
            </a>
          </li>
        </ul>
      </section>

      {/* Skills Section */}
      <ProjectSkills
        title="LipLoft - Skills & Technologies"
        skills={lipLoftSkillsData}
      />

      {/* Back button */}
      <section id="back" className="scroll-mt-28 flex justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-2 text-sm font-medium
                    text-gray-800 transition hover:bg-gray-100
                    dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          ← Back to main page
        </Link>
      </section>

    </div>
  );
}
