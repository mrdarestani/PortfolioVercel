import React from "react";
import Link from "next/link";
import ProjectSkills from "@/components/project-skills";
import { smartGloveSkillsData } from "@/lib/project-skills";

export default function SmartGlovePage() {
  return (
    <div className="min-h-screen bg-transparent p-10 max-w-5xl mx-auto space-y-16">

      {/* Description Section */}
      <section id="description" className="scroll-mt-28">
        <h1 className="text-3xl font-bold mb-4">Smart Glove</h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          The Smart Glove is a wearable sensing platform designed to capture hand and finger movements
          for real-time interaction, monitoring, and data analysis. The system integrates embedded sensors
          and custom firmware to measure motion, pressure, and gesture patterns with high accuracy.
          Data is processed in real time and transmitted wirelessly for visualization and analysis,
          demonstrating applications in rehabilitation, human–machine interaction, and wearable robotics.
        </p>
      </section>

      {/* Demo Video */}
      <section id="video" className="scroll-mt-28">
        <h2 className="text-2xl font-semibold mb-6">Demo</h2>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <video
            src="/projects/Glove1.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/projects/Glove1.jpg"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Image 1 */}
      <section id="photos" className="scroll-mt-28">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/projects/Glove1.jpg"
            alt="Smart Glove wearable prototype"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Image 2 */}
      <section id="image-2" className="scroll-mt-28">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/projects/Glove2.jpg"
            alt="Smart Glove electronics and sensor layout"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Skills Section */}
      <ProjectSkills
        title="Smart Glove – Skills & Technologies"
        skills={smartGloveSkillsData}
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
