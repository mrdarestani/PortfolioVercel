import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectSkills from "@/components/project-skills";
import { mp3PlayerSkillsData } from "@/lib/project-skills";

export default function MP3PlayerPage() {
  return (
    <div className="min-h-screen bg-transparent p-10 max-w-5xl mx-auto space-y-16">

      {/* ===== Description ===== */}
      <section id="description" className="scroll-mt-28">
        <h1 className="text-3xl font-bold mb-4">Embedded MP3 Player System</h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          This project is an embedded MP3 player system built around an STM32
          microcontroller. Audio files are stored on an MMC/SD card and streamed
          by the firmware for real-time playback using the STM32’s on-chip DAC.
          The decoded audio signal is output through an analog audio interface
          and can be connected directly to an external amplifier for higher power
          sound output. The system demonstrates embedded file system handling,
          digital-to-analog audio processing, and real-time audio playback on
          resource-constrained hardware.
        </p>
      </section>

      {/* ===== Image ===== */}
      <section id="photos" className="scroll-mt-28 space-y-8">
        <h2 className="text-2xl font-semibold">Hardware Overview</h2>
        <Image
          src="/projects/mp3Player1.jpg"
          alt="Embedded MP3 player hardware"
          width={1600}
          height={1000}
          quality={100}
          className="w-full rounded-2xl shadow-xl"
        />
      </section>

      {/* ===== Video ===== */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Audio Playback Demonstration</h2>
        <video
          src="/projects/Waveplayer.mp4"
          controls
          className="w-full rounded-2xl shadow-xl"
        />
      </section>

      {/* ===== Skills ===== */}
      <ProjectSkills
        title="MP3 Player System – Skills & Technologies"
        skills={mp3PlayerSkillsData}
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
