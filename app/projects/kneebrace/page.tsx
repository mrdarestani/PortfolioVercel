// 'use client';  // Add this directive to make this a client-side component

// import React from 'react';
// import { useRouter } from 'next/navigation';

// export default function KneebracePage() {
//   const router = useRouter();

//   const handleGoBack = () => {
//     router.push('/'); // Navigate back to the main page
//   };

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-4">Knee Brace</h1>
//       <p>A smart wearable knee brace that monitors joint movement and supports rehabilitation.</p>
//       <button
//         onClick={handleGoBack}
//         className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
//       >
//         Back to Main Page
//       </button>
//     </div>
//   );
// }


// app/projects/kneebrace/page.tsx

"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function KneebracePage() {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => router.push("/")}
        className="mb-6 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        ← Back to main page
      </button>

      <h1 className="text-3xl font-bold mb-4">Knee Brace Project</h1>
      <p className="text-lg">
        This page contains all the details about the Knee Brace project...
      </p>

      {/* Add any new features or content you'd like here */}
    </div>
  );
}
