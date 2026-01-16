import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectSkills from "@/components/project-skills";
import { kneeBraceSkillsData } from "@/lib/project-skills";

export default function KneeBracePage() {
  return (
    <div className="min-h-screen bg-transparent p-10 max-w-5xl mx-auto space-y-16">

      {/* ===== Description ===== */}
      <section id="description" className="scroll-mt-28">
        <h1 className="text-3xl font-bold mb-4">
          Knee Brace Wearable Device
        </h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          This project involves the development of a wearable knee brace system
          designed to measure knee joint angle and muscle activity during movement.
          The device integrates joint angle sensing and electromyography (EMG)
          signal acquisition to provide real-time biomechanical data. Embedded
          firmware processes sensor signals and enables synchronized data capture
          for gait analysis, rehabilitation monitoring, and performance assessment,
          demonstrating the integration of wearable electronics, biomedical sensing,
          and embedded systems.
        </p>
      </section>

      {/* ===== Images ===== */}
      <section id="photos" className="scroll-mt-28 space-y-8">
        <h2 className="text-2xl font-semibold">Hardware & User Interface</h2>

        {["Kneebrace1.jpg", "Kneebrace2.jpg"].map((img, i) => (
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
        <h2 className="text-2xl font-semibold">Measurement Demonstration</h2>
        <video
          src="/projects/Kneebrace1.mp4"
          controls
          className="w-full rounded-2xl shadow-xl"
        />
      </section>

      {/* ===== Skills ===== */}
      <ProjectSkills
        title="Knee Brace Wearable - Skills & Technologies"
        skills={kneeBraceSkillsData}
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
