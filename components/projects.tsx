"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";  // Import Link from Next.js

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import { projectsData } from "@/lib/data";
// import Project from "./project";
// import { useSectionInView } from "@/lib/hooks";
// import Link from "next/link";

// export default function Projects() {
//   const { ref } = useSectionInView("Projects", 0.5);

//   return (
//     <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
//       <SectionHeading>My projects</SectionHeading>
//       <div>
//         {projectsData.map((project, index) => (
//           <React.Fragment key={index}>
//             <Link href={`/projects/${project.slug}`} className="block mb-6">
//               <Project {...project} index={index} />
//             </Link>
//           </React.Fragment>
//         ))}
//       </div>
//     </section>
//   );
// }

