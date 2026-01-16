"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

type ProjectSkillsProps = {
  title?: string;
  skills: readonly string[];
};

export default function ProjectSkills({
  title = "Skills Used",
  skills,
}: ProjectSkillsProps) {
  return (
    <section
      id="skills"
      className="scroll-mt-28 mb-28 max-w-[53rem] mx-auto text-center sm:mb-40"
    >
      <SectionHeading>{title}</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 dark:text-gray-200">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
