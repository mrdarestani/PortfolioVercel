import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectSkills from "@/components/project-skills";
import Publications from "@/components/publications";
import { smartUreteralStentSkillsData } from "@/lib/project-skills";

export default function SmartUreteralStentPage() {
  return (
    <div className="min-h-screen bg-transparent p-10 max-w-5xl mx-auto space-y-20">

      {/* ===== Overview ===== */}
      <section id="description" className="scroll-mt-28">
        <h1 className="text-3xl font-bold">
          Intelligent Ureteral Stent for Wireless Hydronephrosis Monitoring
        </h1>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          This project represents a six-year PhD research program (2018-2024) conducted
          in the Department of Biomedical Engineering at the University of British Columbia
          under the supervision of <strong>Prof. Kenichi Takahata</strong>.
          The research focuses on the design, fabrication, and validation of the
          world's first intelligent ureteral stents integrating RF antennas and
          micro-pressure sensors for real-time kidney pressure monitoring.
        </p>
      </section>

      {/* ===== Research Timeline ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Research Timeline (2018 → 2024)</h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-6">
          <li><strong>2018-2020:</strong> Concept development, MEMS pressure sensor integration, RF antenna design</li>
          <li><strong>2021:</strong> First intelligent stent prototype, in-vitro wireless validation</li>
          <li><strong>2022-2023:</strong> Sensitivity optimization, bending characterization, RF performance analysis</li>
          <li><strong>2024:</strong> Low-profile ex-vivo prototype, thesis completion, IEEE Sensors oral presentation</li>
        </ul>
      </section>

      {/* ===== Key Contributions ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Key Contributions</h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-6">
          <li>First intelligent ureteral stent integrating RF antenna and micro-pressure sensor</li>
          <li>Wireless real-time pressure telemetry validated in vitro and ex vivo</li>
          <li>Novel low-profile stent designs compatible with standard clinical insertion</li>
          <li>Advanced MEMS fabrication and antenna optimization for implantable devices</li>
          <li>Six peer-reviewed publications (3 journals, 3 conferences)</li>
        </ul>
      </section>

      {/* ===== Prototypes & Fabrication ===== */}
      <section id="photos" className="space-y-10">
        <h2 className="text-2xl font-semibold">Smart Stent Prototypes</h2>

        {["SmartStent0.jpg", "SmartStent1.jpg", "SmartStent2.jpg"].map((img, i) => (
          <Image
            key={i}
            src={`/projects/${img}`}
            alt={`Smart Ureteral Stent Prototype ${i + 1}`}
            width={1600}
            height={900}
            quality={100}
            className="w-full rounded-2xl shadow-xl"
          />
        ))}
      </section>

      {/* ===== Publications ===== */}
      <Publications />

      {/* ===== Awards ===== */}
      <section id="photos" className="space-y-12">
        <h2 className="text-2xl font-semibold">Awards & Recognition</h2>

        <div className="space-y-4">
          <h3 className="font-semibold">
            Best Trainee Poster Award — SBME Symposium (2021) - Vancouver, Canada
          </h3>
          <Image
            src="/projects/Paper1-Award.jpg"
            alt="SBME Best Trainee Poster Award"
            width={1200}
            height={800}
            quality={100}
            className="rounded-xl shadow-lg"
          />
          <a
            href="https://bme.ubc.ca/sbmesymposium3-connecting-the-bme-community/"
            target="_blank"
            className="text-sm text-blue-600 underline"
          >
            
          </a>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">
            Outstanding Young Researcher Award — Transducers (2023) - Kyoto, Japan
          </h3>
          <Image
            src="/projects/Paper2-Award.jpg"
            alt="Outstanding Young Researcher Award"
            width={1200}
            height={800}
            quality={100}
            className="rounded-xl shadow-lg"
          />
          <a
            href="https://www.transducersconferences.org/archive/transducers2023/"
            target="_blank"
            className="text-sm text-blue-600 underline"
          >
            
          </a>
        </div>

        <video
          src="/projects/TransducerWinner.mp4"
          controls
          className="w-full rounded-2xl shadow-xl"
        />
        <p className="text-sb text-center text-gray-500">
          Winner Award Ceremony — Kyoto, Japan (JUNE,2023)
        </p>

      </section>

      {/* ===== Graduation ===== */}
      <section id="Graduation" className="space-y-10">
        <h2 className="text-2xl font-semibold">PhD Graduation — UBC</h2>

        {["DoctoralCeremony1.jpg", "DoctoralCeremony2.jpg", "DoctoralCeremony3.jpg"].map(
          (img, i) => (
            <Image
              key={i}
              src={`/projects/${img}`}
              alt="UBC PhD Graduation Ceremony"
              width={1600}
              height={1067}
              quality={100}
              className="rounded-2xl shadow-xl"
            />
          )
        )}

        <video
          src="/projects/Graduation1.mp4"
          controls
          className="w-full rounded-2xl shadow-xl"
        />

        <p className="text-sm text-center text-gray-500">
          PhD Graduation Ceremony — University of British Columbia
        </p>
      </section>

      {/* ===== Thesis ===== */}
      <section id="Thesis" className="text-center">
        <a
          href="https://open.library.ubc.ca/soa/cIRcle/collections/ubctheses/24/items/1.0445305"
          target="_blank"
          className="inline-block rounded-full bg-black px-8 py-3 text-white text-sm font-medium hover:opacity-80"
        >
          View PhD Thesis
        </a>
      </section>

      {/* ===== Skills ===== */}

      <ProjectSkills
        title="Smart Ureteral Stent – Skills & Technologies"
        skills={smartUreteralStentSkillsData}
      />
      
      {/* ===== Back ===== */}
      <section id="back" className="flex justify-center">
        <Link href="/" className="text-sm underline">
          ← Back to main page
        </Link>
      </section>

    </div>
  );
}