import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectSkills from "@/components/project-skills";
import { smartGridSkillsData } from "@/lib/project-skills";

// Import your project images here
import smartGridImg1 from "@/public/projects/smart-grid-1.JPG";
import smartGridImg2 from "@/public/projects/smart-grid-2.JPG";

export default function SmartGridEVPage() {
  return (
    <div className="min-h-screen bg-transparent p-10 max-w-5xl mx-auto space-y-16">
      
      {/* Description Section */}
      <section id="description" className="scroll-mt-28">
        <h1 className="text-3xl font-bold mb-4">Smart Grid & EV Charging</h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          This project involves developing firmware and simulation tools for smart grid and EV charging systems.
          It enables secure and efficient communication between EV chargers and central servers using Broadband Power Line (BPL), 
          Power Line Communication (PLC), Modbus, and 7E protocols. I designed JSON-based data models for OCPP messaging, implemented 
          PV inverter connectivity, and built a web-based simulation environment to validate interoperability and energy management.
          The project demonstrates scalable smart city energy solutions with reliable device communication and renewable energy integration.
        </p>
      </section>

      {/* Photos Section */}
      <section id="photos" className="scroll-mt-28">
        <h2 className="text-2xl font-semibold mb-6">Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={smartGridImg1}
              alt="Smart Grid & EV Charger diagram 1"
              quality={95}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={smartGridImg2}
              alt="Smart Grid & EV Charger diagram 2"
              quality={95}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <ProjectSkills
        title="Smart Grid & EV Charging – Skills & Technologies"
        skills={smartGridSkillsData}
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