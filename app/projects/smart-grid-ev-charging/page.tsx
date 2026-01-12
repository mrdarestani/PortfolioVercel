// import React from 'react';

// export default function AdHocNetworkPage() {
//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-4">Ad-Hoc Network</h1>
//       <p>A system enabling peer-to-peer communication using low-power wireless modules.</p>
//     </div>
//   );
// }
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectSkills from "@/components/project-skills";
import { adHocSkillsData } from "@/lib/project-skills";

// Import your project images here
import adHocImg1 from "@/public/projects/ad-hoc-1.JPG";
import adHocImg2 from "@/public/projects/ad-hoc-2.JPG";


export default function AdHocNetworkPage() {
  return (
    //<div className="p-10 max-w-5xl mx-auto space-y-16">
    <div className="min-h-screen bg-transparent p-10 max-w-5xl mx-auto space-y-16">
      {/* Description Section */}
      <section id="description" className="scroll-mt-28">
        <h1 className="text-3xl font-bold mb-4">Ad-Hoc Network</h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          The Ad-Hoc Network project involves creating a decentralized peer-to-peer communication system
          using low-power wireless modules. It integrates TDMA and FDMA for full-duplex voice and data
          transmission, featuring dynamic routing, secure data transfer, and resilience against hacking
          attempts. Handover capabilities allow data to relay through multiple nodes, extending the
          wireless range. This project demonstrates a robust approach to secure, distributed networking.
        </p>
      </section>

      {/* Photos Section */}
      <section id="photos" className="scroll-mt-28">
        <h2 className="text-2xl font-semibold mb-6">Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={adHocImg1}
              alt="Ad-Hoc Network diagram 1"
              quality={95}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={adHocImg2}
              alt="Ad-Hoc Network diagram 2"
              quality={95}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <ProjectSkills
        title="Ad-Hoc Network – Skills & Technologies"
        skills={adHocSkillsData}
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