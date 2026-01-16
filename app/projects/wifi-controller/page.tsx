import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectSkills from "@/components/project-skills";
import { wifiControllerSkillsData } from "@/lib/project-skills";

export default function WiFiControllerPage() {
  return (
    <div className="min-h-screen bg-transparent p-10 max-w-5xl mx-auto space-y-16">

      {/* ===== Description ===== */}
      <section id="description" className="scroll-mt-28">
        <h1 className="text-3xl font-bold mb-4">WiFi Controller (IoT)</h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          The WiFi Controller project is an embedded IoT system designed for secure
          wireless control of multiple devices via a mobile application. The system
          is built around an STM32 microcontroller integrated with an ESP32 WiFi
          module, enabling real-time communication, scheduling, and remote device
          management. A custom PCB and enclosure were designed to ensure reliability,
          electrical safety, and ease of installation, demonstrating a complete
          end-to-end IoT product from firmware to user interface.
        </p>
      </section>

      {/* ===== Images ===== */}
      <section id="photos" className="scroll-mt-28 space-y-8">
        <h2 className="text-2xl font-semibold">System & Hardware</h2>

        {["Wifi1.jpg"].map((img, i) => (
          <Image
            key={i}
            src={`/projects/${img}`}
            alt={`WiFi Controller hardware ${i + 1}`}
            width={1600}
            height={1000}
            quality={100}
            className="w-full rounded-2xl shadow-xl"
          />
        ))}
      </section>

      {/* ===== Skills ===== */}
      <ProjectSkills
        title="WiFi Controller – Skills & Technologies"
        skills={wifiControllerSkillsData}
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
