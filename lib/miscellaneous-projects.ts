export type MiscellaneousProject = {
  number: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  imageAlt: string;
  gallery?: { src: string; alt: string }[];
  design: string;
  learning: string[];
  notes?: string;
  topics: string[];
  citations?: { title: string; citation: string; href: string }[];
};

export const miscellaneousProjects: readonly MiscellaneousProject[] = [
  {
    number: "01",
    category: "Embedded learning hardware",
    title: "STM32 breadboard and USB-to-serial kit",
    summary:
      "A practical starter kit pairing a breadboard-friendly STM32 header board with an FT232 USB-to-UART adapter for programming, experiments, and debugging.",
    image: "/projects/miscellaneous/Stm32Header.jpg",
    imageAlt: "STM32 header board designed for breadboard experiments",
    gallery: [
      {
        src: "/projects/miscellaneous/USBSerial.jpg",
        alt: "FT232 USB-to-serial interface board",
      },
    ],
    design:
      "The STM32 board exposes the microcontroller pins in a breadboard-friendly layout, while the FT232 board connects a computer's USB port to a target's TTL/CMOS UART. Together, they provide an accessible platform for firmware lessons, sensor experiments, serial commands, and debugging.",
    learning: [
      "Planning header spacing, pin mapping, power, reset, and programming access on a microcontroller board.",
      "Bridging USB to UART and checking signal direction, logic levels, and connector pinout.",
      "Using serial logs and breadboard circuits to support firmware bring-up.",
    ],
    notes:
      "TTL/CMOS UART signaling is not the same as RS-232 voltage levels. Confirm the target's voltage and pin assignments before connecting boards.",
    topics: ["STM32", "FT232", "PCB design", "Breadboard prototyping", "UART"],
  },
  {
    number: "02",
    category: "Access and monitoring",
    title: "RFID + fingerprint access control",
    summary:
      "An access-control teaching prototype that combines an RFID tag and fingerprint reader to decide whether to release a door or relay output.",
    image: "/projects/miscellaneous/Fingerprint.jpg",
    imageAlt: "Fingerprint reader used in the access-control project",
    design:
      "The prototype brings two identification methods together: a presented RFID tag and a fingerprint match. A controller checks enrolled records before changing the relay state. A companion computer-management concept supports enrolling, finding, and removing tags or fingerprints, with administrative access to the records.",
    learning: [
      "Connecting and testing biometric and RFID reader modules with a microcontroller.",
      "Designing enrollment, lookup, deletion, and access-decision flows for stored identifiers.",
      "Separating user-facing access decisions from administrative record management.",
    ],
    notes:
      "A production door controller would need protected credential storage, authenticated administration, and a fail-safe relay design.",
    topics: ["RFID", "Fingerprint sensing", "Embedded systems", "Data management"],
  },
  {
    number: "03",
    category: "Access and monitoring",
    title: "SIM900 + PIR alarm system",
    summary:
      "A GSM-enabled alarm concept that detects movement with a PIR sensor, activates a local alarm, and reports events by SMS.",
    image: "/projects/miscellaneous/BurgularAlarmSystem.jpg",
    imageAlt: "GSM and PIR burglar alarm prototype",
    gallery: [
      {
        src: "/projects/miscellaneous/SMSGPRSController.jpg",
        alt: "SMS/GPRS controller used with the alarm project",
      },
    ],
    design:
      "A PIR event is evaluated by the controller, which can activate a local alarm and send an alert through a SIM900 cellular module. SMS commands provide a simple way to configure the system remotely, with command handling kept separate from sensor monitoring.",
    learning: [
      "Integrating a PIR sensor, cellular modem, and local alarm output.",
      "Managing modem startup, network availability, and asynchronous SMS events.",
      "Designing remote settings and considering command authentication and reliability.",
    ],
    notes:
      "Cellular delivery depends on modem coverage, service availability, and power stability. Remote commands should be authenticated and tested against unexpected messages.",
    topics: ["SIM900", "PIR sensing", "SMS", "Alarm systems"],
  },
  {
    number: "04",
    category: "Control and interfaces",
    title: "Digital TRIAC dimmer",
    summary:
      "A digital dimmer study using AC zero-cross timing and a user-selected brightness percentage to control the firing delay.",
    image: "/projects/miscellaneous/DimmerDigital.jpg",
    imageAlt: "Digital dimmer prototype",
    design:
      "The controller detects each AC zero crossing, then uses a timer to schedule the TRIAC trigger after a selected delay. A percentage setting is translated into a phase-control timing request, demonstrating how a digital control value can influence the output of an AC load.",
    learning: [
      "Detecting zero-cross events and synchronizing a timer to the AC waveform.",
      "Mapping a user percentage to a firing-delay range and updating it smoothly.",
      "Considering timing jitter, isolation, switching noise, and load behavior.",
    ],
    notes:
      "This is an industrial-electronics learning project, not a mains wiring guide. Practical testing requires appropriately isolated instrumentation, rated components, enclosure, and supervision.",
    topics: ["TRIAC", "Zero-cross detection", "Timer peripherals", "Power electronics"],
  },
  {
    number: "05",
    category: "Control and interfaces",
    title: "Wireless PS/2 keyboard link",
    summary:
      "A wireless link for a PS/2 keyboard that carries keystrokes to a receiver and handles return-direction data.",
    image: "/projects/miscellaneous/wirelessKeyboard.jpg",
    imageAlt: "Wireless keyboard prototype",
    design:
      "The system reads the keyboard's PS/2 serial traffic, transports typed data over a wireless link, and handles return-direction traffic at the same time. It demonstrates how to preserve a legacy peripheral protocol across a separate communications channel.",
    learning: [
      "Interfacing with PS/2 clock and data signaling and interpreting keyboard traffic.",
      "Designing bidirectional communication, buffering, and synchronization.",
      "Testing protocol timing and recovery when the link is interrupted.",
    ],
    topics: ["PS/2", "Serial protocols", "Wireless communication", "Embedded firmware"],
  },
  {
    number: "06",
    category: "Control and interfaces",
    title: "Touch LCD menu system",
    summary:
      "A graphical interface project for 4.3-inch and 7-inch touch displays, with menu layouts designed for multilingual use.",
    image: "/projects/miscellaneous/GraphicalLCD.jpg",
    imageAlt: "Graphical LCD display project",
    gallery: [
      {
        src: "/projects/miscellaneous/GraphicalTouchApp.jpg",
        alt: "Touch-enabled graphical application screen",
      },
    ],
    design:
      "The project focuses on building a touch-driven menu system for larger graphical LCD panels. Screen layouts, interaction states, and text presentation are organized to support different languages and display sizes.",
    learning: [
      "Building menu navigation and touch interaction for embedded displays.",
      "Managing screen layout, redraw behavior, and readable text at different resolutions.",
      "Planning for localization, including text length and language-specific presentation.",
    ],
    notes:
      "Comparing the two display sizes highlights interface scaling, touch-target sizing, and information density on embedded HMIs.",
    topics: ["Touch interface", "Graphical LCD", "HMI design", "Localization"],
  },
  {
    number: "07",
    category: "Research instrumentation",
    title: "Electronic nose for saffron research",
    summary:
      "A sensor-system project designed for Dr. Sajad Kiani to study gases in a chamber using gas, temperature, and humidity measurements.",
    image: "/projects/miscellaneous/ElectronicNose.jpg",
    imageAlt: "Electronic nose prototype for gas-sensing research",
    design:
      "The system brings gas-sensor measurements together with temperature and humidity monitoring to characterize the chamber environment. It provides a hardware platform for collecting sensor responses for aroma-based research and analysis.",
    learning: [
      "Combining a sensor array with environmental measurements and repeatable sampling.",
      "Considering chamber conditions, sensor stabilization, and measurement consistency.",
      "Connecting embedded data acquisition with computer-vision and classification research.",
    ],
    notes:
      "The publications below provide research context; they do not imply that this prototype alone produced every reported result.",
    topics: ["Gas sensors", "Temperature and humidity", "Data acquisition", "Research instrumentation"],
    citations: [
      {
        title:
          "Integration of computer vision and electronic nose as non-destructive systems for saffron adulteration detection",
        citation:
          "S. Kiani, S. Minaei, and M. Ghasemi-Varnamkhasti, Computers and Electronics in Agriculture, vol. 141, pp. 46–53, 2017.",
        href: "https://doi.org/10.1016/j.compag.2017.06.018",
      },
      {
        title:
          "A portable electronic nose as an expert system for aroma-based classification of saffron",
        citation:
          "S. Kiani, S. Minaei, and M. Ghasemi-Varnamkhasti, Chemometrics and Intelligent Laboratory Systems, vol. 156, pp. 148–156, 2016.",
        href: "https://doi.org/10.1016/j.chemolab.2016.05.013",
      },
    ],
  },
];
