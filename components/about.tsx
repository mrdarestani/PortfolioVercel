"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      {/* <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
      {/* <p className="mb-3">
        As an <span className="font-medium">Electrical and Biomedical Engineer</span> 
        with over 10 years of experience, I specialize in hardware and firmware design,
        embedded systems, and digital signal processing. My work spans academia and industry,
        with a strong focus on developing life-improving technologies and wearable bioelectronics. 
        I am passionate about designing user-centric products, integrating innovative hardware solutions with real-time embedded systems.
        Throughout my career, I've led product development teams, designed PCBs, and navigated technological risks, ensuring that products are both functional and reliable.
      </p>
      
      <p className="mb-3">
        I graduated from the <span className="font-medium">University of British Columbia (UBC)</span> in 2024 with a <span className="font-medium">Ph.D. in 
        Biomedical Engineering</span>, where I designed and tested a smart ureteral stent for monitoring kidney health. 
        This project involved developing an <span className="font-medium">RF-MEMS antenna</span> on the stent to prevent hydronephrosis and enable wireless pressure 
        measurement inside the kidney. My academic journey was driven by a desire to create impactful medical devices that improve patient care and monitoring.
      </p>

      <p className="mb-3">
        I’ve had the privilege of working on several impactful projects, 
        including a <span className="font-medium">smart glove</span> and <span className="font-medium">knee brace</span> with integrated 
        sensors for health monitoring, as well as a wearable device for pregnant individuals to track baby kicks. 
        My work with the <span className="font-medium">Wearable Bioelectronics Research Group</span> allowed me to explore 
        cutting-edge applications of <span className="font-medium">body area networks</span> in improving health outcomes.
      </p>

      <p className="mb-3">
        Alongside my technical expertise, I am deeply committed to education and mentoring. 
        I have spent significant time teaching and guiding future engineers, instilling in them a passion for innovation and interdisciplinary collaboration. 
        I believe in experiential learning and fostering a practical understanding of complex systems.
      </p>

      <p>
        I am always looking for new opportunities to apply my skills to real-world challenges and 
        continue to grow as both an engineer and educator. When I’m not working on projects, 
        I enjoy exploring new technologies, reading about the latest advancements in biomedical engineering, 
        and spending time outdoors.
      </p> */}
      <p className="mb-3">
        As an <span className="font-medium">Electrical and Biomedical Engineer</span> with over 10 years of hands-on experience, 
        I specialize in <span className="font-medium">hardware and firmware development</span>, 
        <span className="font-medium">embedded systems</span>, and <span className="font-medium">digital signal processing</span>. 
        I’ve led product development teams from concept to launch—designing PCBs, integrating real-time systems, 
        and managing technical risks to deliver reliable, user-focused solutions. My passion lies in creating 
        <span className="font-medium">life-improving technologies</span>, particularly in wearable bioelectronics that 
        bridge innovation with practical healthcare applications.
      </p>

      <p className="mb-3">
        I earned my <span className="font-medium">Ph.D. in Biomedical Engineering</span> from the 
        <span className="font-medium"> University of British Columbia (UBC)</span>, where I developed a 
        <span className="font-medium">wireless smart ureteral stent</span> using RF-MEMS technology for early detection 
        of kidney obstruction. My research reflects a commitment to impactful medical innovation and opened doors 
        to broader applications in <span className="font-medium">body area networks</span> and wearable health systems— 
        including smart gloves, knee braces, and prenatal monitors. I'm equally passionate about 
        <span className="font-medium">mentoring future engineers</span>, emphasizing experiential learning and 
        interdisciplinary collaboration in education.
      </p>
    </motion.section>
  );
}
