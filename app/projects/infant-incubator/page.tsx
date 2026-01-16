import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectSkills from "@/components/project-skills";
import { incubatorSkillsData } from "@/lib/project-skills";

export default function IncubatorPage() {
  return (
    <div className="min-h-screen bg-transparent p-10 max-w-5xl mx-auto space-y-16">

      {/* ===== Description ===== */}
      <section id="description" className="scroll-mt-28">
        <h1 className="text-3xl font-bold mb-4">Infant Incubator System</h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          This project involves the design and development of an infant incubator
          system with an integrated touch-based user interface. The system features
          a 7-inch TFT display providing access to temperature monitoring, calibration
          settings, lamp control, scheduling, and guided help menus. Embedded sensors
          and control firmware enable accurate temperature regulation, timed operation,
          and user-friendly interaction, demonstrating a complete embedded medical
          device interface from hardware integration to UI design.
        </p>
      </section>

      {/* ===== Images ===== */}
      <section id="photos" className="scroll-mt-28 space-y-8">
        <h2 className="text-2xl font-semibold">Hardware & User Interface</h2>

        {["Incubator1.jpg", "Incubator2.jpg"].map((img, i) => (
          <Image
            key={i}
            src={`/projects/${img}`}
            alt={`Infant incubator system view ${i + 1}`}
            width={1600}
            height={1000}
            quality={100}
            className="w-full rounded-2xl shadow-xl"
          />
        ))}
      </section>

      {/* ===== Video ===== */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">System Demonstration</h2>
        <video
          src="/projects/Incubator.mp4"
          controls
          className="w-full rounded-2xl shadow-xl"
        />
      </section>

      {/* ===== Skills ===== */}
      <ProjectSkills
        title="Infant Incubator – Skills & Technologies"
        skills={incubatorSkillsData}
      />

      {/* ===== Back ===== */}
      <section id="back" className="flex justify-center">
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
