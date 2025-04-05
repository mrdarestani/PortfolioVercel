import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Sc, Electrical Engineering",
    location: "Tehran, Iran",
    description:
      "Completed a 4-year undergraduate program with a strong foundation in electronics, circuit design, and project development. Gained hands-on experience with fundamental measurement tools and instrumentation, and developed the ability to design and implement engineering solutions from concept to prototype.",
    icon: React.createElement(LuGraduationCap),
    date: "2010 - 2013",
  },
  {
    title: "M.Sc, Electrical Engineering",
    location: "Tehran, Iran",
    description:
      "Face recognition using machine learning and countourlet algorithms.",
    icon: React.createElement(LuGraduationCap),
    date: "2010 - 2013",
  },
  {
    title: "Electronic Engineer & Project Manager",
    location: "Tehran, Iran",
    description:
      "I worked as an electronics engineer and project manager for 5+ years across several companies. I specialized in embedded systems with ARM-based microcontrollers, designed PCBs, and worked with TFT displays, sensors, and RTOS environments. I also gained hands-on experience in debugging firmware/hardware, system testing, and IoT product development.",
    icon: React.createElement(CgWorkAlt),
    date: "2013 - 2018",
  },
  {
    title: "PhD Biomedical Engineering",
    location: "Vancouver, Canada",
    description:
      "As a PhD researcher at UBC, I developed a wireless smart ureteral stent using microfabrication. I managed lab operations, maintained equipment, and published research on biomedical sensing technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2024",
  },
  {
    title: "Hardware Lead – Hardware/Firmware Developer @ Texavie",
    location: "Vancouver, Canada",
    description:
      "At Texavie, I led the hardware and firmware development of smart wearables, including a glove and knee brace. I designed PCBs, wrote embedded firmware for Bluetooth-enabled microcontrollers, and ensured regulatory compliance.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "System Engineer – Hardware/Firmware Developer @ Fluttercare",
    location: "Vancouver, Canada",
    description:
      "At Fluttercare, I lead the design of a smart wearable for infant health monitoring. I develop embedded firmware and custom PCBs, manage the hardware team, and ensure product compliance and performance.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Now",
  },
  {
    title: "Faculty Lecturer @ BCIT",
    location: "Vancouver, Canada",
    description:
      "I teach electronics and digital circuit courses to Biomedical Engineering Technology students at BCIT. My role includes guiding students through hands-on labs, ensuring lab safety, and contributing to course development.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Now",
  },
  {
    title: "Hardware/Firmware Engineer",
    location: "Vancouver, Canada",
    description:
      "I'm currently working as a hardware/firmware engineer focused on embedded systems, smart wearables, and wireless medical devices. I design PCBs, write embedded firmware (C/C++), and lead product development across multiple stages. I'm open to impactful opportunities in health tech and embedded innovation.",
    icon: React.createElement(FaReact),
    date: "2025",
  },
] as const;

export const projectsData = [
  {
    title: "BellyBand Kick Counter",
    description:
      "Developed a non-invasive wearable for monitoring fetal movements, offering objective, real-time insights for prenatal care. Uses abdominal sensors to track frequency and intensity of fetal kicks, enhancing maternal bonding and clinical decision-making.",
    tags: ["Embedded Systems", "Wearables", "Sensors", "Healthcare", "STM32"],
    imageUrl: corpcommentImg,
  },
  {
    title: "KneeBrace",
    description:
      "Designed a wearable knee brace integrating IMU and strain sensors for lower body pose estimation. Leveraged machine learning with motion capture data for 3D human modeling, enabling advanced motion tracking for healthcare and fitness applications.",
    tags: ["Machine Learning", "Wearables", "IMU", "Human Pose Estimation"],
    imageUrl: rmtdevImg,
  },
  {
    title: "SmartGlove",
    description:
      "Engineered a stretchable, washable glove with helical sensor yarns and IMUs for precise hand tracking. Enabled real-time, wireless monitoring for applications in HCI, VR/AR, robotics, and rehabilitation.",
    tags: ["Wearables", "Sensors", "Embedded Systems", "IMU", "Healthcare"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Smart Ureteral Stent",
    description:
      "Developed a wireless pressure-sensing ureteral stent with an RF antenna and micro pressure sensor. Enabled early detection of hydronephrosis through resonance frequency shifts, validated in in-vitro and ex-vivo models.",
    tags: ["Biomedical", "RF Sensing", "Wireless", "Microfabrication", "Medical Device"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Smart Ureteral Stent",
    description:
      "Developed a wireless pressure-sensing ureteral stent with an RF antenna and micro pressure sensor. Enabled early detection of hydronephrosis through resonance frequency shifts, validated in in-vitro and ex-vivo models.",
    tags: ["Biomedical", "RF Sensing", "Wireless", "Microfabrication", "Medical Device"],
    imageUrl: rmtdevImg,
  },
  {
    title: "LipLoft",
    description:
      "Created an assistive device enabling quadriplegic individuals to control drones using head motion and breath. Designed for 6 DOF drone control via Bluetooth using LipSync technology.",
    tags: ["Assistive Tech", "Embedded Systems", "Bluetooth", "Accessibility"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Infant Incubator",
    description:
      "Built a smart infant incubator with STM32F103 and LPC1788 for monitoring and regulating skin temperature and humidity. Featured alarms for faults and environmental anomalies, enhancing neonatal care.",
    tags: ["STM32", "Embedded Systems", "Medical Devices", "Sensors"],
    imageUrl: rmtdevImg,
  },
  {
    title: "MP3 Player",
    description:
      "Designed a standalone MP3 player using STM32F103. Handled decompression and stereo DAC output without external ICs, enabling low-cost audio playback from MMC via SPI.",
    tags: ["STM32", "Audio", "SPI", "Embedded Systems", "MP3"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Ad-HOC Network",
    description:
      "Built a decentralized wireless ad hoc network with 10 nodes using TDMA and FDMA for secure, full-duplex data/voice transmission. Implemented dynamic routing, CODEC compression, and fast frequency hopping.",
    tags: ["Wireless", "TDMA", "FDMA", "Network Security", "Embedded Systems"],
    imageUrl: rmtdevImg,
  },
  {
    title: "WiFi Controller (IoT)",
    description:
      "Developed a secure WiFi-based controller for home automation. Enabled multi-node device control via Android app with timer, learning, and scheduling features.",
    tags: ["IoT", "WiFi", "Android App", "Home Automation"],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  "C/C++",
  "Python",
  "MATLAB",
  "C#",
  "ARM Cortex-M",
  "VHDL",
  "Assembly",
  "KiCad",
  "Altium",
  "SolidWorks",
  "Onshape",
  "MS Office",
  "Git",
  "Jira",
  "Trello",
  "RTOS",
  "Real-time Data Processing",
  "Firmware Optimization",
  "PCB Designing",
  "Analog Circuit Design",
  "Internet of Things (IoT)",
  "Sensors",
  "Wireless Communication",
  "Wi-Fi",
  "BLE",
  "Zigbee",
] as const;
