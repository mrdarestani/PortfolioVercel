import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectSkills from "@/components/project-skills";
import { bellybandSkillsData } from "@/lib/project-skills";

// Import your project images here
import bellybandImg1 from "@/public/projects/Flutter1.jpg";
import bellybandImg2 from "@/public/projects/Flutter2.jpg";

export default function BellybandKickCounterPage() {
  return (
    <div className="min-h-screen bg-transparent p-10 max-w-5xl mx-auto space-y-16">
      
      {/* Description Section */}
      <section id="description" className="scroll-mt-28">
        <h1 className="text-3xl font-bold mb-4">Bellyband Kick Counter</h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          The Bellyband Kick Counter is a wearable medical device designed to monitor fetal movements during pregnancy.
          The system uses embedded sensors and signal processing algorithms to detect, classify, and count fetal kicks
          while filtering out maternal motion and environmental noise. Firmware was developed for real-time data acquisition,
          power-efficient operation, and reliable wireless data transmission to a companion application. This project
          demonstrates the integration of wearable electronics, embedded firmware, and biomedical signal analysis
          for maternal and fetal health monitoring.
        </p>
      </section>

      {/* Photos Section */}
      <section id="photos" className="scroll-mt-28">
        <h2 className="text-2xl font-semibold mb-6">Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={bellybandImg1}
              alt="Ad-Hoc Network diagram 1"
              quality={95}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={bellybandImg2}
              alt="Ad-Hoc Network diagram 2"
              quality={95}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="Demo" className="scroll-mt-28">
        <h2 className="text-2xl font-semibold mb-6">Demo</h2>

        {/* Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">

          <div className="rounded-lg overflow-hidden shadow-lg">
            <video
              src="/projects/FlutterVideo1.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/projects/Flutter1.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <video
              src="/projects/FlutterVideo2.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/projects/Flutter2.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <ProjectSkills
        title="Bellyband Kick Counter - Skills & Technologies"
        skills={bellybandSkillsData}
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
